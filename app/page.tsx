import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RoomsPreview } from "@/components/rooms-preview"
import { RestaurantPreview } from "@/components/restaurant-preview"
import { AquaComplexPreview } from "@/components/aqua-complex-preview"
import { HotelPreview } from "@/components/hotel-preview"
import { TelegramNewsSection } from "@/components/telegram-news-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { PromoBanner } from "@/components/promo-banner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Гостиница Прибой в Лазаревском — бассейн, парк аттракционов | priboy1.ru",
  description: "Гостиница Прибой в Лазаревском, Сочи. Комфортабельные номера с видом на море и горы, открытый бассейн, собственный пляж у самого моря, парк аттракционов с колесом обозрения, рестораны, тренажерный зал. Цены от 4500₽ за ночь. Бронирование онлайн.",
  alternates: {
    canonical: "https://priboy1.ru",
  },
  openGraph: {
    title: "Гостиница Прибой в Лазаревском — бассейн, парк аттракционов",
    description: "Гостиница Прибой в Лазаревском, Сочи. Комфортабельные номера, открытый бассейн, пляж у самого моря, парк аттракционов, рестораны. Бронирование от 4500₽ за ночь.",
    url: "https://priboy1.ru",
    images: [
      {
        url: "https://priboy1.ru/header.jpg",
        width: 1200,
        height: 630,
        alt: "Гостиница Прибой — Лазаревское, Сочи",
      },
    ],
    type: "website",
    locale: "ru_RU",
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <RoomsPreview />
        <RestaurantPreview />
        <AquaComplexPreview />
        <HotelPreview />
        <TelegramNewsSection />
        <PromoBanner />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
