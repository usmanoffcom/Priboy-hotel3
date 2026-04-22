import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"

export function RestaurantPreview() {
  return (
    <section className="site-section site-section-soft">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://framerusercontent.com/images/V5O9Yw5nMB28Rg6lSNHoTIAxA3w.jpeg"
                  alt="Ресторан Летний"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://framerusercontent.com/images/o3b6vm8jf3n0BReESSYcb9XiN8w.jpg"
                  alt="Ресторан Зимний"
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
                  src="https://framerusercontent.com/images/Nu8fsuTsOUjCDrCvuSypJn7DWkM.jpg"
                  alt="Столовая"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://framerusercontent.com/images/ceDSpBRr2WbyBSiyEEqwbqHzVc.jpg"
                  alt="Мангальная зона Ротонда"
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
              eyebrow="Гастрономия"
              title="Рестораны и питание"
              description="Гостиница Прибой в Лазаревское богата разнообразием баров, ресторанов, кафе. На территории расположен ресторан с летней террасой с видом на черное море. Для зимнего периода есть ресторан с шикарным интерьером и наличием мест для проведения различных праздников."
              className="mb-8"
            />

            <ul className="space-y-3 mb-10">
              {[
                "Ресторан Летний с банкетным залом",
                "Ресторан Зимний с банкетным залом",
                "Столовая у берега моря",
                "Арт проект MESTO",
                "Мангальная зона «Ротонда»",
                "Пуфы на море",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
                  <span className="text-foreground text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="brand" size="lg">
              <Link href="/restaurant">Подробнее о ресторанах</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
