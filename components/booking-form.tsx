"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Loader2 } from "lucide-react"
import { format } from "date-fns"
import { ru } from "date-fns/locale/ru"
import { cn } from "@/lib/utils"
import { rooms } from "@/lib/rooms-data"
import { toast } from "sonner"

const bookingSchema = z.object({
  checkIn: z.date({
    required_error: "Выберите дату заезда",
  }),
  checkOut: z.date({
    required_error: "Выберите дату выезда",
  }),
  roomType: z.string().min(1, "Выберите тип номера"),
  guests: z.number().min(1, "Укажите количество гостей"),
  adults: z.number().min(1, "Укажите количество взрослых"),
  children: z.number().optional(),
  name: z.string().min(2, "Введите ваше имя"),
  phone: z.string().refine((val) => {
    // Удаляем все нецифровые символы и проверяем, что номер начинается с 7 и имеет 11 цифр
    const digits = val.replace(/\D/g, "")
    return digits.startsWith("7") && digits.length === 11
  }, {
    message: "Введите корректный номер телефона (+7 XXX XXX-XX-XX)",
  }),
  email: z.string().email("Введите корректный email"),
  comment: z.string().optional(),
}).refine((data) => {
  return data.checkOut > data.checkIn
}, {
  message: "Дата выезда должна быть позже даты заезда",
  path: ["checkOut"],
})

type BookingFormData = z.infer<typeof bookingSchema>

export function BookingForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const roomSlug = searchParams.get("room")
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()

  // Находим номер по slug из query параметра
  const selectedRoom = roomSlug ? rooms.find((r) => r.slug === roomSlug) : null

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      roomType: selectedRoom?.name || "",
      adults: 2,
      children: 0,
      guests: 2,
      phone: "+7 ",
    },
  })

  // Устанавливаем тип номера при загрузке, если передан через query
  useEffect(() => {
    if (selectedRoom) {
      setValue("roomType", selectedRoom.name)
    }
  }, [selectedRoom, setValue])

  // Минимальная дата - сегодня
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Минимальная дата выезда - день после заезда
  const minCheckOutDate = checkInDate
    ? new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000)
    : today

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          checkIn: data.checkIn.toISOString(),
          checkOut: data.checkOut.toISOString(),
          roomType: data.roomType,
          guests: data.guests,
          adults: data.adults,
          children: data.children || 0,
          name: data.name,
          phone: data.phone,
          email: data.email,
          comment: data.comment || "",
        }),
      })

      // Проверяем, что ответ успешный перед парсингом JSON
      if (!response.ok) {
        let errorMessage = "Ошибка при отправке заявки"
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } catch {
          // Если не удалось распарсить JSON, используем статус
          errorMessage = `Ошибка ${response.status}: ${response.statusText}`
        }
        throw new Error(errorMessage)
      }

      const result = await response.json()

      if (result.error) {
        throw new Error(result.error)
      }

      // Редирект на страницу благодарности
      router.push("/booking/thank-you")
    } catch (error: any) {
      console.error("Booking form error:", error)
      const errorMessage = error?.message || "Ошибка при отправке заявки. Пожалуйста, попробуйте позже."
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const adults = watch("adults") || 0
  const children = watch("children") || 0

  // Автоматически обновляем общее количество гостей
  useEffect(() => {
    setValue("guests", adults + children)
  }, [adults, children, setValue])

  // Функция для форматирования телефона
  const formatPhoneNumber = (value: string): string => {
    // Если поле пустое, возвращаем +7
    if (!value || value.trim() === "") {
      return "+7 "
    }
    
    // Удаляем все нецифровые символы, кроме +
    let digits = value.replace(/\D/g, "")
    
    // Если начинается с 8, заменяем на 7
    if (digits.startsWith("8")) {
      digits = "7" + digits.slice(1)
    }
    
    // Если начинается с 7, добавляем +
    if (digits.startsWith("7")) {
      digits = "+7" + digits.slice(1)
    } else if (!digits.startsWith("+") && digits.length > 0) {
      // Если не начинается с +7, добавляем +7
      digits = "+7" + digits
    } else if (digits.length === 0) {
      return "+7 "
    }
    
    // Ограничиваем длину (максимум 12 символов: +7XXXXXXXXXX)
    if (digits.length > 12) {
      digits = digits.slice(0, 12)
    }
    
    // Форматируем: +7 (XXX) XXX-XX-XX
    if (digits.length > 2) {
      const code = digits.slice(2, 5)
      const part1 = digits.slice(5, 8)
      const part2 = digits.slice(8, 10)
      const part3 = digits.slice(10, 12)
      
      let formatted = "+7"
      if (code) formatted += ` (${code}`
      if (part1) formatted += `) ${part1}`
      if (part2) formatted += `-${part2}`
      if (part3) formatted += `-${part3}`
      
      return formatted
    }
    
    return digits.length > 0 ? digits : "+7 "
  }

  // Обработчик изменения телефона
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setValue("phone", formatted, { shouldValidate: true })
  }

  // Обработчик фокуса на поле телефона
  const handlePhoneFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!value || value.trim() === "" || value === "+7") {
      setValue("phone", "+7 ", { shouldValidate: false })
      // Устанавливаем курсор после +7
      setTimeout(() => {
        e.target.setSelectionRange(3, 3)
      }, 0)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Даты */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Дата заезда <span className="text-red-500">*</span>
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkInDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkInDate ? (
                  format(checkInDate, "PPP", { locale: ru })
                ) : (
                  <span>Выберите дату</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={(date) => {
                  setCheckInDate(date)
                  setValue("checkIn", date as Date)
                  if (date && checkOutDate && date >= checkOutDate) {
                    setCheckOutDate(undefined)
                    setValue("checkOut", undefined as any)
                  }
                }}
                disabled={(date) => date < today}
                initialFocus
                locale={ru}
              />
            </PopoverContent>
          </Popover>
          {errors.checkIn && (
            <p className="text-sm text-red-500">{errors.checkIn.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Дата выезда <span className="text-red-500">*</span>
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkOutDate && "text-muted-foreground"
                )}
                disabled={!checkInDate}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOutDate ? (
                  format(checkOutDate, "PPP", { locale: ru })
                ) : (
                  <span>Выберите дату</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={(date) => {
                  setCheckOutDate(date)
                  setValue("checkOut", date as Date)
                }}
                disabled={(date) => date < minCheckOutDate}
                initialFocus
                locale={ru}
              />
            </PopoverContent>
          </Popover>
          {errors.checkOut && (
            <p className="text-sm text-red-500">{errors.checkOut.message}</p>
          )}
        </div>
      </div>

      {/* Тип номера */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Тип номера <span className="text-red-500">*</span>
        </label>
        <Select
          value={watch("roomType")}
          onValueChange={(value) => setValue("roomType", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Выберите тип номера" />
          </SelectTrigger>
          <SelectContent>
            {rooms.map((room) => (
              <SelectItem key={room.id} value={room.name}>
                {room.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.roomType && (
          <p className="text-sm text-red-500">{errors.roomType.message}</p>
        )}
      </div>

      {/* Количество гостей */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Взрослых <span className="text-red-500">*</span>
          </label>
          <Input
            type="number"
            min="1"
            max="10"
            {...register("adults", { valueAsNumber: true })}
          />
          {errors.adults && (
            <p className="text-sm text-red-500">{errors.adults.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Детей</label>
          <Input
            type="number"
            min="0"
            max="10"
            {...register("children", { valueAsNumber: true })}
          />
          {errors.children && (
            <p className="text-sm text-red-500">{errors.children.message}</p>
          )}
        </div>
      </div>

      {/* Контактная информация */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Ваше имя <span className="text-red-500">*</span>
        </label>
        <Input
          placeholder="Иван Иванов"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Телефон <span className="text-red-500">*</span>
        </label>
        <Input
          type="tel"
          placeholder="+7 (999) 123-45-67"
          {...register("phone")}
          onChange={handlePhoneChange}
          onFocus={handlePhoneFocus}
          maxLength={18}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Email <span className="text-red-500">*</span>
        </label>
        <Input
          type="email"
          placeholder="example@mail.ru"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Комментарий */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Комментарий</label>
        <Textarea
          className="min-h-[100px]"
          placeholder="Дополнительные пожелания или вопросы..."
          {...register("comment")}
        />
      </div>

      {/* Скрытое поле для guests */}
      <input type="hidden" {...register("guests", { valueAsNumber: true })} />

      {/* Кнопка отправки */}
      <Button
        type="submit"
        size="lg"
        variant="brand"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Отправка...
          </>
        ) : (
          "Отправить заявку на бронирование"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="/privacy" className="text-terracotta hover:underline">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  )
}

