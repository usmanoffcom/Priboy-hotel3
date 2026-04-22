import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Text, Lead, Muted, Small } from "@/components/ui/text"
import { PageHero } from "@/components/ui/page-hero"
import { Info } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { prices2026 } from "@/lib/prices-data"

export const metadata: Metadata = {
  title: "Цены на номера в гостинице Прибой на 2026 год — от 4500₽ за ночь | Лазаревское",
  description: "Актуальные цены на номера в гостинице Прибой в Лазаревском на 2026 год. Стоимость по месяцам: Стандарт от 4500₽, Стандарт+ от 4800₽, Студия от 5100₽, Полулюкс от 5200₽, Люкс от 6700₽. Сезонные скидки, цены на дополнительные места.",
  alternates: {
    canonical: "https://priboy1.ru/prices",
  },
  openGraph: {
    title: "Цены на номера в гостинице Прибой на 2026 год — от 4500₽",
    description: "Цены на номера в гостинице Прибой: Стандарт от 4500₽, Стандарт+ от 4800₽, Студия от 5100₽, Полулюкс от 5200₽, Люкс от 6700₽. Сезонные скидки.",
    url: "https://priboy1.ru/prices",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Цены на номера в гостинице Прибой",
      },
    ],
    type: "website",
  },
}

function formatPrice(price: number | { sea: number; park: number; pool: number }): string {
  if (typeof price === "number") {
    return price.toLocaleString("ru-RU") + " ₽"
  }
  return `${price.sea.toLocaleString("ru-RU")} / ${price.park.toLocaleString("ru-RU")} / ${price.pool.toLocaleString("ru-RU")} ₽`
}

function PriceCell({ price }: { price: number | { sea: number; park: number; pool: number } }) {
  if (typeof price === "number") {
    return <span className="font-semibold text-terracotta">{price.toLocaleString("ru-RU")} ₽</span>
  }
  return (
    <div className="space-y-1">
      <div className="font-semibold text-terracotta">{price.sea.toLocaleString("ru-RU")} ₽</div>
      <div className="text-xs text-muted-foreground">{price.park.toLocaleString("ru-RU")} / {price.pool.toLocaleString("ru-RU")} ₽</div>
      <div className="text-[10px] text-muted-foreground">Море / Парк / Бассейн</div>
    </div>
  )
}

export default function PricesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Тарифы 2026"
          title="Стоимость размещения"
          description="Актуальные цены на 2026 год. Стоимость указана за номер в сутки для двух взрослых."
        />

        {/* Tax Notice */}
        <section className="py-4 bg-amber-50 border-b border-amber-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3 text-sm text-amber-800">
              <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p>
                С 1 января 2025 года на территории РФ действует туристический налог в соответствии с изменениями в
                Налоговом кодексе РФ (глава 33.1 «Туристический налог»), внесенными Федеральным законом от 12.07.2024
                №176-ФЗ – Входит в стоимость проживания
              </p>
            </div>
          </div>
        </section>

        {/* Prices Table */}
        <section className="py-16 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <div className="bg-white border border-border overflow-hidden min-w-[800px]">
              {/* Header */}
              <div className="grid grid-cols-6 bg-foreground text-white text-sm">
                <div className="p-4 font-medium">Месяц</div>
                <div className="p-4 font-medium text-center">
                  Стандарт
                  <br />
                  <span className="text-xs opacity-70">за 2-х</span>
                </div>
                <div className="p-4 font-medium text-center">
                  Стандарт +
                  <br />
                  <span className="text-xs opacity-70">за 2-х</span>
                </div>
                <div className="p-4 font-medium text-center">
                  Студия
                  <br />
                  <span className="text-xs opacity-70">за 2-х</span>
                </div>
                <div className="p-4 font-medium text-center">
                  Полулюкс
                  <br />
                  <span className="text-xs opacity-70">за 2-х</span>
                </div>
                <div className="p-4 font-medium text-center">
                  Luxe
                  <br />
                  <span className="text-xs opacity-70">2 комн. за 3-х</span>
                </div>
              </div>

              {/* Rows */}
              {prices2026.map((row, index) => (
                <div key={index} className={`grid grid-cols-6 ${index % 2 === 0 ? "bg-cream" : "bg-white"} border-t border-border/50`}>
                  <div className="p-4 text-sm text-foreground font-medium">
                    <div className="font-semibold">{row.month}</div>
                    {row.period && <div className="text-xs text-muted-foreground mt-1">{row.period}</div>}
                  </div>
                  <div className="p-4 text-center text-sm">
                    <PriceCell price={row.standard} />
                  </div>
                  <div className="p-4 text-center text-sm">
                    <span className="font-semibold text-terracotta">{row.standardPlus.toLocaleString("ru-RU")} ₽</span>
                  </div>
                  <div className="p-4 text-center text-sm">
                    <span className="font-semibold text-terracotta">{row.studia.toLocaleString("ru-RU")} ₽</span>
                  </div>
                  <div className="p-4 text-center text-sm">
                    <span className="font-semibold text-terracotta">{row.poluluks.toLocaleString("ru-RU")} ₽</span>
                  </div>
                  <div className="p-4 text-center text-sm">
                    <span className="font-semibold text-terracotta">{row.luxe.toLocaleString("ru-RU")} ₽</span>
                  </div>
                </div>
              ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-white border border-border p-6">
              <Heading level="h3" size="small" weight="medium" className="mb-4">Дополнительные места</Heading>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">– Дети до 3 лет</strong> — проживание с завтраком бесплатно;
                </p>
                <p>
                  <strong className="text-foreground">– От 4 до 6 лет</strong> (1 доп.место) = 1 300,00 ₽ (с 01.05 – 30.09)
                </p>
                <p>
                  <strong className="text-foreground">– Старше 6 лет</strong> (1 доп.место) = 1 900,00 ₽ (с 01.05 – 30.09)
                </p>
                <p>
                  <strong className="text-foreground">– Завтраки</strong> включены в стоимость с 02.05.2026 по 01.10.2026
                </p>
                <p>
                  – Стоимость дополнительного места для детей старше 6 лет (включительно) вне сезон = 800,00 ₽
                </p>
              </div>
              <Small tone="muted" className="mt-4 block">
                <strong className="text-foreground">Максимальная вместимость:</strong> Стандарт — 2+1, Стандарт+ — 2+2, Студия — 2+2, Полулюкс — 2+2, Luxe — 3+2
              </Small>
              <Small tone="muted" className="mt-2 block">
                Дополнительные места оплачиваются по специальному тарифу
              </Small>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-foreground text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Heading level="h2" size="section" tone="inverse" className="mb-6">Готовы забронировать?</Heading>
            <Lead tone="inverse" className="opacity-80 mb-8">Забронируйте номер онлайн с гарантией лучшей цены</Lead>
            <Button asChild size="lg">
              <Link href="/booking">Забронировать номер</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
