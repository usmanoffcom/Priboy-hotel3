import Link from "next/link"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { TelegramHighlightsCarousel } from "@/components/telegram-highlights-carousel"

export function TelegramNewsSection() {
  return (
    <section className="site-section bg-white border-y border-border/40">
      <div className="site-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-10 lg:mb-12">
          <SectionHeader
            eyebrow="Новости"
            title="Для наших гостей"
            description="Свежие объявления и акции с официального Telegram-канала гостиницы «Прибой» — @priboynamore."
            className="max-w-2xl"
          />
          <Button asChild variant="brand-outline" size="lg" className="shrink-0">
            <Link
              href="https://t.me/priboynamore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть канал
            </Link>
          </Button>
        </div>
        <TelegramHighlightsCarousel />
      </div>
    </section>
  )
}
