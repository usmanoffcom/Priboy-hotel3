import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, Mail, Home } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Заявка принята — Гостиница Прибой | Лазаревское",
  description: "Ваша заявка на бронирование успешно принята. Мы свяжемся с вами в ближайшее время.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://priboy1.ru/booking/thank-you",
  },
  openGraph: {
    title: "Заявка принята | Гостиница Прибой",
    description: "Ваша заявка на бронирование успешно принята. Мы свяжемся с вами в ближайшее время.",
    url: "https://priboy1.ru/booking/thank-you",
    images: [
      {
        url: "https://priboy1.ru/header.jpg",
        width: 1200,
        height: 630,
        alt: "Гостиница Прибой",
      },
    ],
    type: "website",
  },
}

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-cream">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-green-100 p-4">
                <CheckCircle2 className="h-16 w-16 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
              Спасибо за вашу заявку!
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ваша заявка на бронирование успешно получена и находится на рассмотрении.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="site-card bg-cream p-8 mb-8">
              <h2 className="text-xl font-medium text-foreground mb-4">
                Что дальше?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Наш администратор свяжется с вами в ближайшее время для уточнения деталей и подтверждения бронирования.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                  <p className="text-sm text-yellow-800">
                    <strong>⚠️ Важно:</strong> Это еще не гарантированная бронь. Подтверждение бронирования происходит после звонка администратора и уточнения всех деталей.
                  </p>
                </div>
                <p>
                  Если вы не получите звонок в течение 2-3 часов, пожалуйста, свяжитесь с нами самостоятельно.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a
                href="tel:+78622704507"
                className="site-card flex items-center gap-4 p-6 bg-cream hover:bg-cream-dark transition-colors group"
              >
                <div className="w-12 h-12 glass-light rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Позвонить нам</h3>
                  <p className="text-terracotta font-semibold">+7 (862) 270-45-07</p>
                  <p className="text-sm text-muted-foreground">Круглосуточно</p>
                </div>
              </a>

              <a
                href="mailto:booking@priboy1.ru"
                className="site-card flex items-center gap-4 p-6 bg-cream hover:bg-cream-dark transition-colors group"
              >
                <div className="w-12 h-12 glass-light rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Написать нам</h3>
                  <p className="text-terracotta font-semibold">booking@priboy1.ru</p>
                  <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                </div>
              </a>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="brand"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Вернуться на главную
                </Link>
              </Button>
              <Button
                asChild
                variant="brand-outline"
                size="lg"
              >
                <Link href="/booking">
                  Отправить еще одну заявку
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

