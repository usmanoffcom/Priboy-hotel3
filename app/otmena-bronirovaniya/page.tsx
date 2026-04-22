import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Heading } from "@/components/ui/heading"
import { Text, Lead, Small } from "@/components/ui/text"
import { TelLink, EmailLink } from "@/components/ui/app-link"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Условия отмены бронирования в гостинице Прибой — возврат средств, изменение дат | Лазаревское",
  description: "Условия отмены бронирования в гостинице Прибой в Лазаревском: при отмене менее чем за 10 дней залог невозвратный, более 10 дней — возврат 50%. Ранний выезд — компенсация сутки. Контакты для отмены.",
  alternates: {
    canonical: "https://priboy1.ru/otmena-bronirovaniya",
  },
  openGraph: {
    title: "Условия отмены бронирования в гостинице Прибой — возврат средств",
    description: "Условия отмены бронирования в гостинице Прибой: менее 10 дней — залог невозвратный, более 10 дней — возврат 50%. Ранний выезд — компенсация сутки.",
    url: "https://priboy1.ru/otmena-bronirovaniya",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Условия отмены бронирования в гостинице Прибой",
      },
    ],
    type: "website",
  },
}

export default function CancellationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Small tone="accent" className="tracking-[0.2em] uppercase text-gold mb-4">Информация</Small>
            <Heading level="h1" size="hero" tone="inverse" className="mb-6">
              Отмена бронирования
            </Heading>
            <Lead tone="inverse" className="opacity-80 mx-auto">
              Условия отмены и изменения бронирования в гостинице Прибой
            </Lead>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <Heading level="h2" size="section" weight="bold" className="mb-8">Условия отмены бронирования</Heading>

              <div className="space-y-6">
                <div className="bg-cream p-6 sm:p-8 border border-border">
                  <Heading level="h3" size="small" weight="bold" className="mb-4">Условия отмены бронирования</Heading>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>В случае отмены бронирования <strong className="text-foreground">менее чем за 10 дней</strong> до даты заезда залог за номер <strong className="text-foreground">невозвратный</strong>.</li>
                    <li>При отмене <strong className="text-foreground">более чем за 10 дней</strong> от суммы возвращается <strong className="text-foreground">50%</strong>.</li>
                    <li>При <strong className="text-foreground">раннем выезде</strong> компенсация отелю составит сутки проживания.</li>
                  </ul>
                </div>

                <div className="bg-cream-dark p-6 sm:p-8 border border-border">
                  <Heading level="h3" size="small" weight="bold" className="mb-4">Оплата и счёт</Heading>
                  <Text tone="muted" className="mb-4">
                    Минимальный платёж по счёту составляет сумму за первые <strong className="text-foreground">1 день</strong> проживания. По вашему желанию вы можете осуществить предоплату в размере <strong className="text-foreground">100%</strong>. Обе суммы отражены в счёте.
                  </Text>
                  <Text tone="muted">
                    Оплата данного счёта означает согласие с условиями бронирования, проживания и аннуляции. Просим вас уведомить о факте произведённой оплаты.
                  </Text>
                </div>

                <div className="space-y-4">
                  <Heading level="h3" size="small" weight="bold">Как отменить бронирование</Heading>
                  <Text tone="muted">
                    Для отмены или изменения бронирования свяжитесь с нами:
                  </Text>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>По телефону: <TelLink phone="+78622704507" tone="accent">+7 (862) 270-45-07</TelLink></li>
                    <li>По email: <EmailLink email="priboy.sochi@mail.ru" tone="accent" /></li>
                    <li>Через форму обратной связи на сайте</li>
                  </ul>
                </div>

                <div className="bg-terracotta/10 p-6 border-l-4 border-terracotta">
                  <Text weight="medium">
                    <strong>Важно:</strong> При отмене бронирования обязательно укажите номер бронирования и ваши контактные данные для быстрой обработки запроса.
                  </Text>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/booking">Забронировать номер</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
