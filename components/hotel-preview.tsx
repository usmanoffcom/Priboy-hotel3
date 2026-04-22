import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"

export function HotelPreview() {
  return (
    <section className="site-section site-section-soft">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://framerusercontent.com/images/wA595WQZy49R4jVrwtKt5s7v8.jpg"
                  alt="Бассейн отеля Прибой"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://framerusercontent.com/images/V5O9Yw5nMB28Rg6lSNHoTIAxA3w.jpeg"
                  alt="Ресторан отеля Прибой"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://framerusercontent.com/images/FBUIyhkFnLigbRS73zaKAdpw8Tk.jpg"
                  alt="Пляж и отель Прибой"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://framerusercontent.com/images/4pJlSWrNIWzSMhy14A6yDHfGFo.jpg"
                  alt="Парк аттракционов и колесо обозрения"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <SectionHeader
              eyebrow="О комплексе"
              title="Гостиница Прибой"
              description="Гостиница «Прибой», которая расположилась в курортном поселке Лазаревское части большого Сочи, у самого моря. Комфортабельные номера имеют современную отделку и удобную мебель, вид из которых открывается на море и горы."
              className="mb-8"
            />

            <ul className="space-y-3 mb-10">
              {[
                "Комфортабельные номера различных категорий",
                "Открытый бассейн с подогревом на территории",
                "Рестораны и кафе с разнообразной кухней",
                "Парк аттракционов с колесом обозрения при отеле",
                "Пляж у самого моря",
                "Тренажерный зал, массаж",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
                  <span className="text-foreground text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="brand" size="lg">
              <Link href="/o-komplekse">Подробнее об отеле</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
