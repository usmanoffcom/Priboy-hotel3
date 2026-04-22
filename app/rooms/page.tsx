import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RoomCard } from "@/components/room-card"
import { RoomAmenities } from "@/components/room-amenities"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import Link from "next/link"
import { rooms } from "@/lib/rooms-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Номера в гостинице Прибой — 5 категорий, цены от 4500₽ | Лазаревское",
  description: "Номера в гостинице Прибой в Лазаревском: Стандарт, Стандарт+, Студия, Полулюкс, Люкс. Все номера с видом на море или горы, балконами, кондиционерами. Цены от 4500₽ за ночь. Бронирование онлайн.",
  alternates: {
    canonical: "https://priboy1.ru/rooms",
  },
  openGraph: {
    title: "Номера в гостинице Прибой — 5 категорий, цены от 4500₽",
    description: "5 категорий номеров в гостинице Прибой: Стандарт, Стандарт+, Студия, Полулюкс, Люкс. Все с видом на море, балконами, кондиционерами. Цены от 4500₽.",
    url: "https://priboy1.ru/rooms",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Номера в гостинице Прибой",
      },
    ],
    type: "website",
  },
}

export default function RoomsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Размещение"
          title="Номера и цены"
          description="Выберите идеальный номер для вашего отдыха. Все номера оснащены современными удобствами и индивидуальным климат-контролем."
        />

        {/* Price Info */}
        <section className="py-6 bg-cream-dark border-b border-border">
          <div className="site-container">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-terracotta rounded-full" />
                <span className="text-foreground">
                  <strong>Завтраки включены</strong> в стоимость с 02.05.2026 по 01.10.2026
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gold rounded-full" />
                <span className="text-foreground">
                  <strong>Дети до 3 лет</strong> — бесплатно! С предоставлением места!
                </span>
              </div>
              <Button asChild variant="brand-outline" size="sm" className="text-sm">
                <Link href="/prices">Подробный прайс</Link>
              </Button>
            </div>
          </div>
        </section>

        <Section className="bg-cream">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </Section>

        <RoomAmenities />

        {/* CTA */}
        <section className="site-section bg-foreground text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-2xl border border-white/10 p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Готовы забронировать?</h2>
              <p className="text-white/80 mb-6 text-sm leading-relaxed">
                Выберите даты и забронируйте номер онлайн с гарантией лучшей цены
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="brand">
                  <Link href="/booking">Забронировать</Link>
                </Button>
                <Button asChild size="lg" variant="inverse">
                  <Link href="/prices">Смотреть цены</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
