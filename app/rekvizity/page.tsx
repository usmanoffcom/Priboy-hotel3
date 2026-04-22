import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building2, CreditCard, FileText } from "lucide-react"
import type { Metadata } from "next"
import { Heading } from "@/components/ui/heading"
import { Text, Lead, Small } from "@/components/ui/text"
import { TelLink, EmailLink } from "@/components/ui/app-link"

export const metadata: Metadata = {
  title: "Реквизиты гостиницы Прибой — ИНН, ОГРН, расчетный счет, контакты | Лазаревское",
  description: "Банковские реквизиты и юридическая информация гостиницы Прибой в Лазаревском: ИНН 231802674402, ОГРН 304231836500380, расчетный счет, БИК, банк. Контакты для получения актуальных реквизитов, адрес, телефон.",
  alternates: {
    canonical: "https://priboy1.ru/rekvizity",
  },
  openGraph: {
    title: "Реквизиты гостиницы Прибой — ИНН, ОГРН, расчетный счет",
    description: "Банковские реквизиты гостиницы Прибой: ИНН 231802674402, ОГРН 304231836500380, расчетный счет, БИК. Контакты для получения реквизитов.",
    url: "https://priboy1.ru/rekvizity",
    images: [
      {
        url: "https://priboy1.ru/header.jpg",
        width: 1200,
        height: 630,
        alt: "Реквизиты гостиницы Прибой",
      },
    ],
    type: "website",
  },
}

export default function RequisitesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Small tone="accent" className="tracking-[0.2em] uppercase text-gold mb-4">Информация</Small>
            <Heading level="h1" size="hero" tone="inverse" className="mb-6">
              Реквизиты
            </Heading>
            <Lead tone="inverse" className="opacity-80 mx-auto">
              Банковские реквизиты и юридическая информация гостиницы Прибой
            </Lead>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="bg-cream p-6 sm:p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <Building2 className="h-6 w-6 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <Heading level="h2" size="card" weight="bold" className="mb-4">Юридическая информация</Heading>
                    <div className="space-y-3">
                      <Text tone="muted"><strong className="text-foreground">Индивидуальный предприниматель:</strong> Тавадов Эдик Арташович</Text>
                      <Text tone="muted"><strong className="text-foreground">Юридический адрес:</strong> 354200, г. Сочи, п. Лазаревское, ул. Новая, 26</Text>
                      <Text tone="muted"><strong className="text-foreground">Почтовый адрес:</strong> 354200, г. Сочи, п. Лазаревское, ул. Павлова, 2</Text>
                      <Text tone="muted"><strong className="text-foreground">ИНН:</strong> 231802674402</Text>
                      <Text tone="muted"><strong className="text-foreground">ОГРН:</strong> 304231836500380</Text>
                      <Small tone="muted" className="mt-4 block">
                        <strong className="text-foreground">Свидетельство о внесении в Единый государственный реестр индивидуальных предпринимателей:</strong><br />
                        записи об индивидуальном предпринимателе, зарегистрированном до 01 января 2004г. серии 23 № 003334651, выдано 30.12.2004г. Инспекцией МНС России по г. Сочи территориальный участок 2318 по Лазаревскому району.
                      </Small>
                      <Text tone="muted" className="mt-4"><strong className="text-foreground">ОКОПФ:</strong> 50102</Text>
                      <Text tone="muted"><strong className="text-foreground">ОКВЭД:</strong> 56.10</Text>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cream-dark p-6 sm:p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <CreditCard className="h-6 w-6 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <Heading level="h2" size="card" weight="bold" className="mb-4">Банковские реквизиты</Heading>
                    <div className="space-y-3">
                      <Text tone="muted"><strong className="text-foreground">Расчетный счет:</strong> 40802810047860004917</Text>
                      <Text tone="muted"><strong className="text-foreground">Банк:</strong> «ЮЖНЫЙ» ПАО «БАНК УРАЛСИБ»</Text>
                      <Text tone="muted"><strong className="text-foreground">Корреспондентский счет:</strong> 30101810400000000700</Text>
                      <Text tone="muted"><strong className="text-foreground">БИК:</strong> 040349700</Text>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="h-6 w-6 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <Heading level="h2" size="card" weight="bold" className="mb-4">Дополнительная информация</Heading>
                    <div className="space-y-3">
                      <Text tone="muted"><strong className="text-foreground">Рег. № ФСС:</strong> 2316527082 Филиал 16 ГУ – Краснодарского регионального отделения ФСС РФ</Text>
                      <Text tone="muted"><strong className="text-foreground">Рег. № ПФР:</strong> 033-022-016113 УФК по Краснодарскому краю (ГУ — Отделение Пенсионного фонда Российской Федерации по Краснодарскому краю)</Text>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cream p-6 sm:p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="h-6 w-6 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <Heading level="h2" size="card" weight="bold" className="mb-4">Контактная информация</Heading>
                    <div className="space-y-3">
                      <Text tone="muted"><strong className="text-foreground">Телефон:</strong> <TelLink phone="+78622704507" tone="accent">(862) 270-45-07</TelLink></Text>
                      <Text tone="muted"><strong className="text-foreground">Email бухгалтерии:</strong> <EmailLink email="priboy.buh00@mail.ru" tone="accent" /></Text>
                      <Text tone="muted"><strong className="text-foreground">Email для бронирования:</strong> <EmailLink email="priboy.sochi@mail.ru" tone="accent" /></Text>
                      <Text tone="muted"><strong className="text-foreground">Горячая линия:</strong> <TelLink phone="88002500034" tone="accent">8 800 250-00-34</TelLink> <Small tone="muted">(бесплатно по России)</Small></Text>
                      <Text tone="muted"><strong className="text-foreground">Адрес отеля:</strong> ул. Павлова, 2, п. Лазаревское, г. Сочи, 354200</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
