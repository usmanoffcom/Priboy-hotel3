import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Text, Lead, Muted, Small } from "@/components/ui/text"
import { PageHero } from "@/components/ui/page-hero"
import { SectionHeader } from "@/components/ui/section-header"
import { TelLink, EmailLink, AppLink } from "@/components/ui/app-link"
import { Phone, Mail, MapPin, Clock, Car, Plane, Train } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Контакты гостиницы Прибой — адрес, телефон, как добраться | Лазаревское",
  description: "Контакты гостиницы Прибой в Лазаревском, Сочи. Адрес: ул. Павлова, 2. Телефон: +7(862) 270-45-07, горячая линия: 8 800 250 00 34. Email: priboy.sochi@mail.ru. Карта проезда, как добраться из аэропорта, на поезде, на машине.",
  alternates: {
    canonical: "https://priboy1.ru/contacts",
  },
  openGraph: {
    title: "Контакты гостиницы Прибой — адрес, телефон, карта",
    description: "Контакты гостиницы Прибой: ул. Павлова, 2, Лазаревское. Телефон +7(862) 270-45-07, горячая линия 8 800 250 00 34. Карта проезда, как добраться.",
    url: "https://priboy1.ru/contacts",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Контакты Гостиница Прибой",
      },
    ],
    type: "website",
  },
}

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Связь с нами"
          title="Контакты"
          description="Мы всегда рады помочь вам с бронированием, ответить на вопросы или организовать трансфер"
        />

        {/* Contact Info */}
        <section className="site-section bg-cream">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Details */}
              <div>
                <Heading level="h2" size="section" className="mb-8">Свяжитесь с нами</Heading>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-terracotta" />
                    </div>
                    <div>
                      <Heading level="h3" size="small" weight="medium" className="mb-1">Телефон</Heading>
                      <TelLink phone="+7 (862) 270-45-07" tone="accent" className="text-lg block" />
                      <Small tone="muted" className="mt-1">Круглосуточно</Small>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-terracotta" />
                    </div>
                    <div>
                      <Heading level="h3" size="small" weight="medium" className="mb-1">Горячая линия</Heading>
                      <TelLink phone="8 800 250 00 34" tone="accent" className="text-lg block" />
                      <Small tone="muted" className="mt-1">Бесплатно по России</Small>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-terracotta" />
                    </div>
                    <div>
                      <Heading level="h3" size="small" weight="medium" className="mb-1">Email</Heading>
                      <EmailLink email="priboy.sochi@mail.ru" tone="accent" className="text-lg block" />
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-terracotta" />
                    </div>
                    <div>
                      <Heading level="h3" size="small" weight="medium" className="mb-1">Адрес</Heading>
                      <Text>г. Сочи, п. Лазаревское</Text>
                      <Text weight="medium">ул. Павлова, 2</Text>
                      <Text>Россия</Text>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-terracotta" />
                    </div>
                    <div>
                      <Heading level="h3" size="small" weight="medium" className="mb-1">Режим работы</Heading>
                      <Text>Ресепшн: круглосуточно</Text>
                      <Muted>Заезд с 14:00, выезд до 12:00</Muted>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                <Button asChild size="lg" variant="brand">
                  <Link href="/booking">Забронировать номер</Link>
                </Button>
                </div>
              </div>

              {/* Map */}
              <div className="site-card overflow-hidden bg-white">
                <div className="relative w-full aspect-[4/3]">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=39.323300%2C43.906100&z=16&pt=39.323300%2C43.906100&l=map"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    title="Расположение гостиницы Прибой, ул. Павлова, 2 (у моря)"
                  />
                </div>
                <div className="p-3 sm:p-4 bg-white border-t border-border">
                  <AppLink
                    href="https://yandex.ru/maps/org/priboy/150446179571/?ll=39.323300%2C43.906100&utm_source=share&z=17"
                    tone="accent"
                    variant="standalone"
                    className="inline-flex items-center gap-2 text-sm"
                  >
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>Открыть в Яндекс.Картах и построить маршрут</span>
                  </AppLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Get */}
        <section className="site-section bg-white">
          <div className="site-container">
            <SectionHeader eyebrow="Расположение" title="Как добраться" centered className="mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="site-card p-8 bg-cream">
                <div className="w-14 h-14 glass-light rounded-full flex items-center justify-center mb-6">
                  <Plane className="h-6 w-6 text-terracotta" />
                </div>
                <Heading level="h3" size="card" className="mb-4">Самолётом</Heading>
                <Muted className="mb-4">
                  Ближайший аэропорт — Сочи (Адлер). Расстояние до отеля около 90 км.
                </Muted>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Время в пути на авто: ~1,5 часа</li>
                  <li>• Электричка до Лазаревского: ~2 часа</li>
                  <li>• Трансфер от отеля: по запросу</li>
                </ul>
              </div>

              <div className="site-card p-8 bg-cream">
                <div className="w-14 h-14 glass-light rounded-full flex items-center justify-center mb-6">
                  <Train className="h-6 w-6 text-terracotta" />
                </div>
                <Heading level="h3" size="card" className="mb-4">Поездом</Heading>
                <Muted className="mb-4">
                  Ж/д станция Лазаревская находится в 10 минутах езды от отеля.
                </Muted>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Прямые поезда из Москвы</li>
                  <li>• Электрички из Сочи и Туапсе</li>
                  <li>• Бесплатный трансфер от вокзала</li>
                </ul>
              </div>

              <div className="site-card p-8 bg-cream">
                <div className="w-14 h-14 glass-light rounded-full flex items-center justify-center mb-6">
                  <Car className="h-6 w-6 text-terracotta" />
                </div>
                <Heading level="h3" size="card" className="mb-4">На автомобиле</Heading>
                <Muted className="mb-4">
                  Гостиница расположена в центре Лазаревского, на ул. Павлова, 2. Удобный подъезд с главной дороги.
                </Muted>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Удобный подъезд</li>
                  <li>• Парковка рядом с отелем</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Transfer */}
        <section className="site-section site-section-soft">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Heading level="h2" size="section" className="mb-6">Трансфер от отеля</Heading>
            <Muted className="mb-8 max-w-2xl mx-auto">
              Мы организуем комфортный трансфер из аэропорта Сочи или ж/д станции. Забронируйте заранее для вашего
              удобства.
            </Muted>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="tel:+78622704507">Заказать трансфер</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:88002500034">Горячая линия: 8 800 250 00 34</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
