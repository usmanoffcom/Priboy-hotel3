import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function PromoBanner() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <Image
          src="/action.jpg"
          alt="Скидка от 10% по раннему бронированию"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Контент */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex justify-center mb-4">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-gold text-2xl">★</span>
            ))}
          </div>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
          СКИДКА ОТ 10%
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-light tracking-widest uppercase mb-6">
          по раннему бронированию
        </p>
        
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Предложение действует на отдельные категории номеров и определённые даты, при наличии доступности.
          <br className="hidden sm:block" />
          Подробности — у администратора: <a href="tel:+78622704507" className="underline hover:text-gold transition-colors">+7 (862) 270-45-07</a>
        </p>
        
        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="xl"
            variant="brand"
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
            size="xl"
            variant="inverse"
          >
            <a href="tel:+78622704507">
              <Phone className="w-5 h-5 mr-2" />
              Позвонить
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
