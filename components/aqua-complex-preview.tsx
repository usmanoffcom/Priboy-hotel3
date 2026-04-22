import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"

export function AquaComplexPreview() {
  return (
    <section className="site-section bg-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12 order-2 lg:order-1">
            <SectionHeader
              eyebrow="Развлечения"
              title="Отдых и развлечения"
              description="При нашем отеле расположен замечательный, уютный зеленый парк со множеством головокружительных аттракционов, пингвинарием, дельфинарием, и колесом обозрения, с которого открывается фантастический вид на горы и побережье."
              className="mb-8"
            />

            <ul className="space-y-3 mb-10">
              {[
                "Открытый бассейн с подогревом (работает с 01.05 по 01.10)",
                "Парк аттракционов при отеле",
                "Пляж у самого моря",
                "Пирс с видом на море",
                "Тренажерный зал",
                "Массаж",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
                  <span className="text-foreground text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="brand" size="lg">
              <Link href="/entertainment">Подробнее о развлечениях</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://framerusercontent.com/images/wA595WQZy49R4jVrwtKt5s7v8.jpg"
                  alt="Бассейн"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://framerusercontent.com/images/CT09PzqQWShBjZnFmRx2P7dlY.jpg"
                  alt="Парк аттракционов"
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
                  src="https://framerusercontent.com/images/4pJlSWrNIWzSMhy14A6yDHfGFo.jpg"
                  alt="Пирс"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl shadow-md">
                <Image
                  src="https://framerusercontent.com/images/JyOTvxnMLRCGqddAnvwv48MKEw.jpg"
                  alt="Тренажерный зал"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
