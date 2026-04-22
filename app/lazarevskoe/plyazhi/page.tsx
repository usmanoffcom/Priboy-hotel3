import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Check, Baby } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { beaches } from "@/lib/lazarevskoe-data"

export const metadata: Metadata = {
  title: "Пляжи Лазаревского — галечные и песчаные пляжи | Гостиница Прибой",
  description: "Лучшие пляжи Лазаревского для отдыха с детьми. Галечные и смешанные пляжи, инфраструктура, расстояние от отеля Прибой.",
  keywords: "пляжи Лазаревского, галечный пляж, отдых с детьми, пляжи для детей, пляж Дельфин",
  alternates: {
    canonical: "https://priboy1.ru/lazarevskoe/plyazhi",
  },
  openGraph: {
    title: "Пляжи Лазаревского — где купаться с детьми",
    description: "Обзор пляжей Лазаревского для семейного отдыха. Галечные пляжи с пологим входом.",
    url: "https://priboy1.ru/lazarevskoe/plyazhi",
    images: [
      {
        url: "https://priboy1.ru/header.jpg",
        width: 1200,
        height: 630,
        alt: "Пляжи Лазаревского",
      },
    ],
    type: "website",
  },
}

export default function BeachesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/blog-lazarevskoe-beach.jpg"
              alt="Пляжи Лазаревского"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 gradient-hero-overlay" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li><Link href="/" className="hover:text-white">Главная</Link></li>
                <li>/</li>
                <li><Link href="/lazarevskoe" className="hover:text-white">Лазаревское</Link></li>
                <li>/</li>
                <li className="text-white">Пляжи</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 max-w-3xl">
              Пляжи Лазаревского
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Галечные пляжи с чистой водой и пологим входом — 
              идеальный выбор для безопасного купания с детьми
            </p>
          </div>
        </section>

        {/* Beach Info */}
        <section className="py-12 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 border border-border text-center">
                <div className="text-3xl font-light text-terracotta mb-2">7 км</div>
                <div className="text-sm text-muted-foreground">Протяжённость пляжей</div>
              </div>
              <div className="bg-white p-6 border border-border text-center">
                <div className="text-3xl font-light text-terracotta mb-2">+24-28°C</div>
                <div className="text-sm text-muted-foreground">Температура воды летом</div>
              </div>
              <div className="bg-white p-6 border border-border text-center">
                <div className="text-3xl font-light text-terracotta mb-2">Май-Октябрь</div>
                <div className="text-sm text-muted-foreground">Купальный сезон</div>
              </div>
              <div className="bg-white p-6 border border-border text-center">
                <div className="text-3xl font-light text-terracotta mb-2">Галька</div>
                <div className="text-sm text-muted-foreground">Тип покрытия</div>
              </div>
            </div>
          </div>
        </section>

        {/* Beaches List */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {beaches.map((beach, index) => (
                <div
                  key={beach.slug}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative h-80 lg:h-96">
                      <Image
                        src={beach.image}
                        alt={beach.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {beach.forKids && (
                        <div className="absolute top-4 left-4 bg-terracotta text-white text-sm px-3 py-1 flex items-center gap-1">
                          <Baby className="h-4 w-4" />
                          Подходит для детей
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm text-terracotta uppercase tracking-wider">
                        {beach.type} пляж
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                      {beach.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {beach.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Особенности:</h4>
                        <ul className="space-y-2">
                          {beach.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-terracotta flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Инфраструктура:</h4>
                        <ul className="space-y-2">
                          {beach.infrastructure.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-terracotta flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-terracotta" />
                      <span>{beach.distance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                Советы для отдыха на пляже
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Как сделать пляжный отдых в Лазаревском комфортным и безопасным для всей семьи
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Обувь для пляжа",
                  description: "Возьмите аквашузы или специальные тапочки — галька может быть неудобной для ходьбы."
                },
                {
                  title: "Защита от солнца",
                  description: "Используйте крем SPF 30-50, особенно для детей. Солнце на море очень активное."
                },
                {
                  title: "Лучшее время для купания",
                  description: "Утром до 11:00 и вечером после 16:00 — море спокойнее, а солнце мягче."
                },
                {
                  title: "Питьевая вода",
                  description: "Берите с собой достаточно воды, особенно в жаркие дни. На пляжах есть кафе."
                },
                {
                  title: "Для детей",
                  description: "Выбирайте пляжи с пологим входом и спасательными станциями. Надувные круги — по желанию."
                },
                {
                  title: "Ценные вещи",
                  description: "Не берите на пляж много ценностей. Используйте сейф в отеле."
                }
              ].map((tip, index) => (
                <div key={index} className="bg-white p-6 border border-border">
                  <h3 className="text-lg font-medium text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Пляж у самого моря
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Гостиница Прибой расположена у моря — до пляжа рукой подать. 
              Бассейн с подогревом, парк аттракционов и комфортные номера для всей семьи.
            </p>
            <Button asChild size="lg" variant="brand">
              <Link href="/booking">Забронировать номер</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
