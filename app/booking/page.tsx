import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingBenefits } from "@/components/booking-benefits"
import { BookingForm } from "@/components/booking-form"
import { PageHero } from "@/components/ui/page-hero"
import { SectionHeader } from "@/components/ui/section-header"
import { Phone, Mail, MessageCircle } from "lucide-react"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Онлайн бронирование номеров в гостинице Прибой — лучшие цены | Лазаревское",
  description: "Забронируйте номер в гостинице Прибой в Лазаревском онлайн. Гарантия лучшей цены при прямом бронировании. Выберите даты заезда и категорию номера. Мгновенное подтверждение.",
  alternates: {
    canonical: "https://priboy1.ru/booking",
  },
  openGraph: {
    title: "Онлайн бронирование номеров в гостинице Прибой — лучшие цены",
    description: "Бронирование номеров в гостинице Прибой онлайн. Гарантия лучшей цены, мгновенное подтверждение. Выберите даты и категорию номера.",
    url: "https://priboy1.ru/booking",
    images: [
      {
        url: "https://framerusercontent.com/assets/ceDSpBRr2WbyBSiyEEqwbqHzVc.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн бронирование номеров в гостинице Прибой",
      },
    ],
    type: "website",
  },
}

export default function BookingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Онлайн бронирование"
          title="Забронировать номер"
          description="Выберите даты, тип номера и количество гостей. Гарантия лучшей цены при бронировании напрямую."
        />

        {/* Booking Form */}
        <section className="site-section bg-cream">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="site-card bg-white p-8 md:p-12">
              <Suspense fallback={<div>Загрузка формы...</div>}>
                <BookingForm />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <BookingBenefits />

        {/* Contact Options */}
        <section className="site-section bg-white">
          <div className="site-container">
            <SectionHeader
              title="Нужна помощь с бронированием?"
              description="Свяжитесь с нами любым удобным способом"
              centered
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <a
                href="tel:+78622704507"
                className="site-card flex flex-col items-center p-8 bg-cream text-center group"
              >
                <div className="w-14 h-14 bg-terracotta/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-terracotta/20 transition-colors">
                  <Phone className="h-6 w-6 text-terracotta" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">Позвонить</h3>
                <p className="text-terracotta font-semibold">+7 (862) 270-45-07</p>
                <p className="text-sm text-muted-foreground mt-1">Круглосуточно</p>
              </a>

              <a
                href="mailto:priboy.sochi@mail.ru"
                className="site-card flex flex-col items-center p-8 bg-cream text-center group"
              >
                <div className="w-14 h-14 bg-terracotta/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-terracotta/20 transition-colors">
                  <Mail className="h-6 w-6 text-terracotta" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">Email</h3>
                <p className="text-terracotta font-semibold">priboy.sochi@mail.ru</p>
                <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
              </a>

              <a
                href="tel:88002500034"
                className="site-card flex flex-col items-center p-8 bg-cream text-center group"
              >
                <div className="w-14 h-14 bg-terracotta/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-terracotta/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-terracotta" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">Горячая линия</h3>
                <p className="text-terracotta font-semibold">8 800 250 00 34</p>
                <p className="text-sm text-muted-foreground mt-1">Бесплатно по России</p>
              </a>
            </div>
          </div>
        </section>

        {/* Booking Terms */}
        <section className="site-section site-section-soft">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Условия бронирования" centered className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="site-card bg-white p-6">
                <h3 className="font-medium text-foreground mb-4">Заезд и выезд</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Заезд с 14:00</li>
                  <li>• Выезд до 12:00</li>
                  <li>• Ранний заезд / поздний выезд — по запросу</li>
                </ul>
              </div>
              <div className="site-card bg-white p-6">
                <h3 className="font-medium text-foreground mb-4">Оплата</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Предоплата 30% при бронировании</li>
                  <li>• Полная оплата при заезде</li>
                  <li>• Принимаем карты и наличные</li>
                </ul>
              </div>
              <div className="site-card bg-white p-6">
                <h3 className="font-medium text-foreground mb-4">Отмена бронирования</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Менее 10 дней — залог невозвратный</li>
                  <li>• Более 10 дней — возврат 50% от суммы</li>
                  <li>• Ранний выезд — компенсация сутки</li>
                </ul>
              </div>
              <div className="site-card bg-white p-6">
                <h3 className="font-medium text-foreground mb-4">Дополнительно</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Дети до 3 лет — бесплатно</li>
                  <li>• Доп. место — от 1 300 ₽/ночь</li>
                  <li>• Трансфер из аэропорта — по запросу</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
