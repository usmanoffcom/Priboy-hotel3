import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Lead } from "@/components/ui/text"
import "./cta-section.css"

export function CtaSection() {
  return (
    <section className="relative py-32 bg-cover bg-center bg-fixed cta-section-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-foreground/75" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass rounded-2xl border border-white/10 p-8 sm:p-12">
          <Heading level="h2" size="hero" tone="inverse" className="mb-6">
            Забронируйте ваш
            <br />
            <span className="font-semibold">идеальный отдых</span>
          </Heading>
          <Lead tone="inverse" className="opacity-80 mb-10 max-w-2xl mx-auto">
            Откройте для себя новый уровень комфорта на побережье Черного моря в гостинице Прибой. Специальные предложения для раннего бронирования. Лучшая гостиница в Лазаревском с собственным бассейном у самого пляжа.
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" variant="brand">
              <Link href="/booking">Забронировать</Link>
            </Button>
            <Button asChild size="xl" variant="inverse">
              <a href="tel:+78622704507">+7 (862) 270-45-07</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
