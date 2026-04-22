import { NextRequest, NextResponse } from "next/server"

/**
 * Вспомогательный endpoint для получения chat_id группы Telegram
 * Использование: GET /api/telegram/get-chat-id
 * 
 * Инструкция:
 * 1. Убедитесь, что бот @priboy3_booking_bot добавлен в группу
 * 2. В группе отправьте любое сообщение (например, /start или просто текст)
 * 3. Вызовите этот endpoint - он вернет список всех чатов, где бот получал сообщения
 * 4. Найдите нужную группу в списке и скопируйте chat_id (будет отрицательное число для групп)
 */
export async function GET(request: NextRequest) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  if (!botToken) {
    return NextResponse.json(
      { error: "TELEGRAM_BOT_TOKEN не настроен на сервере" },
      { status: 503 }
    )
  }

  try {
    const url = `https://api.telegram.org/bot${botToken}/getUpdates`
    const response = await fetch(url, {
      method: "GET",
    })

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(
        { error: "Ошибка при получении обновлений", details: errorData },
        { status: response.status }
      )
    }

    const data = await response.json()

    if (!data.ok) {
      return NextResponse.json(
        { error: "Telegram API вернул ошибку", details: data },
        { status: 500 }
      )
    }

    // Извлекаем уникальные chat_id из обновлений
    const chats = new Map<number, { id: number; type: string; title?: string; username?: string }>()

    if (data.result && Array.isArray(data.result)) {
      for (const update of data.result) {
        if (update.message) {
          const chat = update.message.chat
          if (chat && chat.id) {
            chats.set(chat.id, {
              id: chat.id,
              type: chat.type,
              title: chat.title,
              username: chat.username,
            })
          }
        }
      }
    }

    const chatList = Array.from(chats.values())

    return NextResponse.json({
      success: true,
      message: "Список чатов, где бот получал сообщения:",
      chats: chatList,
      instructions: {
        step1: "Убедитесь, что бот @priboy3_booking_bot добавлен в нужную группу",
        step2: "Отправьте любое сообщение в группу (например, /start или просто текст)",
        step3: "Обновите эту страницу - группа появится в списке",
        step4: "Скопируйте chat_id группы (будет отрицательное число, например -1001234567890)",
        step5: "Добавьте TELEGRAM_CHAT_ID в переменные окружения на сервере",
      },
    })
  } catch (error) {
    console.error("Ошибка при получении chat_id:", error)
    return NextResponse.json(
      { error: "Ошибка при получении chat_id", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

