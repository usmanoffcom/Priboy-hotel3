import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Lead, Small } from "@/components/ui/text"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/pirs.jpg"
          alt="Пирс у гостиницы «Прибой» в Лазаревском"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-pill inline-flex items-center mb-8 sm:mb-10">
          <Small tone="inverse" weight="medium" className="tracking-[0.2em] uppercase text-xs sm:text-sm md:text-base">
            Черноморское побережье • Лазаревское
          </Small>
        </div>
        <Heading level="h1" size="hero" tone="inverse" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 sm:mb-10 leading-[1.1]">
          Гостиница Прибой
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">в Лазаревском</span>
        </Heading>
        <Lead tone="inverse" className="opacity-95 mb-10 sm:mb-12 max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl px-4">
          Лучшая гостиница на черноморском побережье с собственным бассейном у самого пляжа. Комфортабельные номера, ресторан, развлечения и незабываемый отдых у самого моря.
        </Lead>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4">
          <Button asChild size="xl" variant="brand">
            <Link href="/booking">Забронировать номер</Link>
          </Button>
          <Button asChild size="xl" variant="inverse">
            <Link href="/rooms">Смотреть номера</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>
    </section>
  )
}
