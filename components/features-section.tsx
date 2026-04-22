import Image from "next/image"
import { SectionHeader } from "@/components/ui/section-header"

const features = [
  {
    image: "https://framerusercontent.com/images/wA595WQZy49R4jVrwtKt5s7v8.jpg",
    title: "Открытый бассейн",
    description: "Собственный открытый бассейн с подогревом на территории отеля (работает с 01.05 по 01.10). Идеальное место для плавания и отдыха с видом на море.",
  },
  {
    image: "https://framerusercontent.com/images/FBUIyhkFnLigbRS73zaKAdpw8Tk.jpg",
    title: "Пляж",
    description: "Комфортабельный муниципальный пляж у самого моря. Шезлонги, зонтики, удобный вход в воду.",
  },
  {
    image: "https://framerusercontent.com/images/V5O9Yw5nMB28Rg6lSNHoTIAxA3w.jpeg",
    title: "Рестораны и кафе",
    description: "Разнообразие баров, ресторанов и кафе на территории. Летняя терраса с видом на море, зимний ресторан с банкетным залом.",
  },
  {
    image: "https://framerusercontent.com/images/JyOTvxnMLRCGqddAnvwv48MKEw.jpg",
    title: "Тренажерный зал",
    description: "Современные тренажеры для всех групп мышц, кардио тренировки, спортивный инвентарь. Раздевалка и душ с горячей водой.",
  },
  {
    image: "https://framerusercontent.com/images/4pJlSWrNIWzSMhy14A6yDHfGFo.jpg",
    title: "Парк аттракционов",
    description: "Парк с аттракционами, пингвинарием, дельфинарием и колесом обозрения прямо при отеле.",
  },
]

export function FeaturesSection() {
  return (
    <section className="site-section site-section-muted">
      <div className="site-container">
        <SectionHeader
          eyebrow="Удобства"
          title="Всё для вашего комфорта"
          centered
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="site-card overflow-hidden bg-white group"
            >
              <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
