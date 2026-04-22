"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const STORAGE_KEY = "promo_modal_last_shown"
const DELAY_MS = 30000 // 30 секунд
const COOLDOWN_MS = 24 * 60 * 60 * 1000 // 24 часа

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Проверяем, когда последний раз показывали модалку
    const lastShown = localStorage.getItem(STORAGE_KEY)
    const now = Date.now()

    if (lastShown) {
      const timeSinceLastShown = now - parseInt(lastShown, 10)
      if (timeSinceLastShown < COOLDOWN_MS) {
        // Ещё не прошло 24 часа
        return
      }
    }

    // Показываем через 30 секунд
    const timer = setTimeout(() => {
      setIsOpen(true)
      localStorage.setItem(STORAGE_KEY, now.toString())
    }, DELAY_MS)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-md sm:max-w-lg md:max-w-xl overflow-hidden rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Фоновое изображение */}
        <div className="relative aspect-[4/5] sm:aspect-[4/4]">
          <Image
            src="/banner.jpg"
            alt="Скидка от 10% по раннему бронированию"
            fill
            className="object-cover"
            priority
          />
          
          {/* Градиент для лучшей читаемости текста */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Контент поверх изображения */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm tracking-widest uppercase mb-2 text-white/80">
                Специальное предложение
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                СКИДКА ОТ 10%
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-light tracking-wide">
                по раннему бронированию
              </p>
            </div>
            
            <p className="text-xs sm:text-sm text-white/90 text-center mb-4 sm:mb-6 leading-relaxed">
              Предложение действует на отдельные категории номеров и определённые даты, при наличии доступности.
              <br />
              Подробности — у администратора: <a href="tel:+78622704507" className="underline hover:text-white">+7 (862) 270-45-07</a>
            </p>
            
            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                variant="brand"
                className="flex-1 h-12 sm:h-14 text-sm sm:text-base"
              >
                <a 
                  href="https://t.me/priboynamore/324" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Условия акции
                </a>
              </Button>
              <Button
                asChild
                variant="inverse"
                className="flex-1 h-12 sm:h-14 text-sm sm:text-base"
              >
                <a href="tel:+78622704507">
                  Позвонить
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
