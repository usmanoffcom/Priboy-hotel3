import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Настройка SMTP для mail.ru
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.mail.ru",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true, // true для 465, false для других портов
  auth: {
    user: process.env.SMTP_USER || "no_reply@priboy1.ru",
    pass: process.env.SMTP_PASS ?? "",
  },
})

// Генерация уникального ID заявки
function generateBookingId(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let result = ""
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

// Функция для отправки уведомления в Telegram
async function sendTelegramNotification(
  message: string,
  bookingId: string,
  phone: string,
  email: string
) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN ?? ""
  const chatId = process.env.TELEGRAM_CHAT_ID

  console.log("🔔 Попытка отправить уведомление в Telegram...")
  console.log("Chat ID:", chatId ? "установлен" : "НЕ УСТАНОВЛЕН")
  console.log("Bot Token:", botToken ? "установлен" : "НЕ УСТАНОВЛЕН")

  if (!chatId) {
    console.error("❌ TELEGRAM_CHAT_ID не установлен. Пропускаем отправку в Telegram.")
    throw new Error("TELEGRAM_CHAT_ID не установлен")
  }

  if (!botToken) {
    console.error("❌ TELEGRAM_BOT_TOKEN не установлен. Пропускаем отправку в Telegram.")
    throw new Error("TELEGRAM_BOT_TOKEN не установлен")
  }

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`
    const payload = {
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "✅ Подтвердить",
              callback_data: `confirm_${bookingId}`,
            },
            {
              text: "❌ Отклонить",
              callback_data: `reject_${bookingId}`,
            },
          ],
          [
            {
              text: "✏️ Добавить комментарий",
              callback_data: `comment_${bookingId}`,
            },
          ],
        ],
      },
    }

    console.log("📤 Отправка запроса в Telegram API...")
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const responseData = await response.json()

    if (!response.ok) {
      console.error("❌ Ошибка отправки в Telegram:", {
        status: response.status,
        statusText: response.statusText,
        error: responseData,
      })
      throw new Error(`Telegram API error: ${responseData.description || response.statusText}`)
    }

    console.log("✅ Уведомление успешно отправлено в Telegram:", responseData)
    return responseData
  } catch (error) {
    console.error("❌ Ошибка при отправке в Telegram:", error)
    throw error // Пробрасываем ошибку дальше, чтобы она была видна
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      checkIn,
      checkOut,
      roomType,
      guests,
      adults,
      children,
      name,
      phone,
      email,
      comment,
    } = body

    // Валидация обязательных полей
    if (!checkIn || !checkOut || !roomType || !name || !phone || !email) {
      return NextResponse.json(
        { error: "Заполните все обязательные поля" },
        { status: 400 }
      )
    }

    if (!process.env.SMTP_PASS) {
      console.error("SMTP_PASS не задан в переменных окружения")
      return NextResponse.json(
        { error: "Сервер временно не может принять заявку. Позвоните в отель." },
        { status: 503 }
      )
    }

    // Форматирование дат
    const checkInDate = new Date(checkIn).toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    const checkOutDate = new Date(checkOut).toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })

    // Подсчет ночей
    const checkInTime = new Date(checkIn).getTime()
    const checkOutTime = new Date(checkOut).getTime()
    const nights = Math.ceil((checkOutTime - checkInTime) / (1000 * 60 * 60 * 24))

    // Генерация уникального ID заявки
    const bookingId = generateBookingId()

    // Письмо администратору
    const adminMailOptions = {
      from: `"Гостиница Прибой" <${process.env.SMTP_USER || "no_reply@priboy1.ru"}>`,
      to: process.env.BOOKING_EMAIL || "booking@priboy1.ru",
      subject: `Новая заявка на бронирование - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #8B4513; padding-bottom: 10px;">
            Новая заявка на бронирование
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Данные гостя:</h3>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Телефон:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Детали бронирования:</h3>
            <p><strong>Дата заезда:</strong> ${checkInDate}</p>
            <p><strong>Дата выезда:</strong> ${checkOutDate}</p>
            <p><strong>Количество ночей:</strong> ${nights}</p>
            <p><strong>Тип номера:</strong> ${roomType}</p>
            <p><strong>Количество гостей:</strong> ${guests || adults + (children || 0)}</p>
            ${adults ? `<p><strong>Взрослых:</strong> ${adults}</p>` : ""}
            ${children ? `<p><strong>Детей:</strong> ${children}</p>` : ""}
          </div>

          ${comment ? `
          <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Комментарий:</h3>
            <p style="white-space: pre-wrap;">${comment}</p>
          </div>
          ` : ""}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Заявка получена: ${new Date().toLocaleString("ru-RU")}</p>
            <p>Пожалуйста, свяжитесь с гостем для подтверждения бронирования.</p>
          </div>
        </div>
      `,
    }

    // Письмо подтверждения гостю
    const guestMailOptions = {
      from: `"Гостиница Прибой" <${process.env.SMTP_USER || "no_reply@priboy1.ru"}>`,
      to: email,
      subject: "Ваша заявка на бронирование получена",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; border-bottom: 2px solid #8B4513; padding-bottom: 10px;">
            Спасибо за вашу заявку!
          </h2>
          
          <p>Уважаемый(ая) <strong>${name}</strong>,</p>
          
          <p>Ваша заявка на бронирование номера в гостинице Прибой успешно получена нашим администратором.</p>

          <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Детали вашей заявки:</h3>
            <p><strong>Дата заезда:</strong> ${checkInDate}</p>
            <p><strong>Дата выезда:</strong> ${checkOutDate}</p>
            <p><strong>Количество ночей:</strong> ${nights}</p>
            <p><strong>Тип номера:</strong> ${roomType}</p>
            <p><strong>Количество гостей:</strong> ${guests || adults + (children || 0)}</p>
          </div>

          <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #856404;">
              <strong>⚠️ Важно:</strong> Это еще не гарантированная бронь. Наш администратор свяжется с вами в ближайшее время для уточнения деталей и подтверждения бронирования.
            </p>
          </div>

          <div style="background-color: #d1ecf1; border-left: 4px solid #0c5460; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #0c5460;">
              <strong>💡 Обратите внимание:</strong> Если вам долго не отвечают или вы не получили звонок в течение 2-3 часов, пожалуйста, перезвоните нам по телефону <a href="tel:+78622704507" style="color: #0c5460; font-weight: bold;">+7 (862) 270-45-07</a> или <a href="tel:88002500034" style="color: #0c5460; font-weight: bold;">8 800 250 00 34</a> (горячая линия).
            </p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Контакты гостиницы Прибой:</h3>
            <p><strong>Телефон:</strong> <a href="tel:+78622704507">+7 (862) 270-45-07</a></p>
            <p><strong>Горячая линия:</strong> <a href="tel:88002500034">8 800 250 00 34</a></p>
            <p><strong>Email:</strong> <a href="mailto:priboy.sochi@mail.ru">priboy.sochi@mail.ru</a></p>
            <p><strong>Адрес:</strong> г. Сочи, п. Лазаревское, ул. Павлова, 2</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; text-align: center;">
            <p>С уважением,<br>Команда гостиницы Прибой</p>
            <p><a href="https://priboy1.ru" style="color: #8B4513;">priboy1.ru</a></p>
          </div>
        </div>
      `,
    }

    // Формирование сообщения для Telegram в нужном формате
    const requestTime = new Date().toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })

    const adultsCount = adults || 0
    const childrenCount = children || 0
    const guestsText = `${adultsCount} взрослых${childrenCount > 0 ? `, ${childrenCount} детей` : ""}`

    const telegramMessage = `
Гостиница Прибой

🛏️ <b>НОВАЯ ЗАЯВКА #${bookingId}</b>
🏨 <b>НОВАЯ ЗАЯВКА НА БРОНИРОВАНИЕ</b>

<b>Номер:</b> ${roomType}
<b>Гости:</b> ${guestsText}
<b>Заезд:</b> ${checkInDate}
<b>Выезд:</b> ${checkOutDate}
<b>Ночей:</b> ${nights}

👤 <b>Контактная информация:</b>
<b>ФИО:</b> ${name}
<b>Телефон:</b> ${phone}
<b>Email:</b> ${email}

${comment ? `<b>Комментарий:</b> ${comment}` : ""}

🕐 <b>Время заявки:</b> ${requestTime}
    `.trim()

    // Отправляем уведомления с таймаутом, чтобы не блокировать слишком долго
    console.log("📧 Начинаем отправку уведомлений...")
    
    const notificationPromises = [
      transporter.sendMail(adminMailOptions).catch((err) => {
        console.error("❌ Ошибка отправки email администратору:", err)
        return { status: "rejected", reason: err }
      }),
      transporter.sendMail(guestMailOptions).catch((err) => {
        console.error("❌ Ошибка отправки email гостю:", err)
        return { status: "rejected", reason: err }
      }),
      sendTelegramNotification(telegramMessage, bookingId, phone, email).catch((err) => {
        console.error("❌ Ошибка отправки в Telegram:", err)
        return { status: "rejected", reason: err }
      }),
    ]

    // Ждем отправки уведомлений с таймаутом 15 секунд
    const timeoutPromise = new Promise((resolve) => setTimeout(() => {
      console.warn("⏱️ Таймаут при отправке уведомлений (15 секунд)")
      resolve({ timeout: true })
    }, 15000))
    
    try {
      const results = await Promise.race([
        Promise.allSettled(notificationPromises),
        timeoutPromise,
      ])
      
      if (Array.isArray(results)) {
        results.forEach((result, index) => {
          const serviceNames = ["Email администратору", "Email гостю", "Telegram"]
          if (result.status === "fulfilled") {
            console.log(`✅ ${serviceNames[index]} отправлен успешно`)
          } else {
            console.error(`❌ ${serviceNames[index]} не отправлен:`, result.reason)
          }
        })
      }
    } catch (error) {
      console.error("❌ Критическая ошибка при отправке уведомлений:", error)
      // Продолжаем выполнение даже если уведомления не отправились
    }

    return NextResponse.json(
      { message: "Заявка успешно отправлена", bookingId },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону." },
      { status: 500 }
    )
  }
}

