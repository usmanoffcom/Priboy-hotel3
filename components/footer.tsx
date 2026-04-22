import Image from "next/image"
import { Phone, Mail, MapPin, ChevronRight, Clock3 } from "lucide-react"
import { Heading } from "@/components/ui/heading"
import { Text, Small } from "@/components/ui/text"
import { AppLink, TelLink, EmailLink } from "@/components/ui/app-link"

export function Footer() {
  return (
    <footer className="bg-foreground text-cream">
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-5 sm:space-y-6">
            <AppLink href="/">
              <Image
                src="/white_logo.png"
                alt="Гостиница Прибой"
                width={114}
                height={69}
                className="h-12 sm:h-14 w-auto mb-5"
              />
            </AppLink>
            <Small tone="inverse" weight="medium" className="tracking-[0.15em] uppercase opacity-70">Гостиница Прибой</Small>
            <Text tone="inverse" size="sm" className="opacity-90">Комфортный отдых на побережье Черного моря в Лазаревском</Text>
          </div>

          {/* Navigation */}
          <div>
            <Heading level="h4" size="small" tone="inverse" weight="semibold" className="text-xs sm:text-sm tracking-[0.15em] uppercase mb-6 sm:mb-8 opacity-70">Навигация</Heading>
            <ul className="pl-0 space-y-3 sm:space-y-4">
              {[
                { name: "Номера", href: "/rooms" },
                { name: "Развлечения", href: "/entertainment" },
                { name: "Ресторан", href: "/restaurant" },
                { name: "Об отеле", href: "/o-komplekse" },
                { name: "Реквизиты", href: "/rekvizity" },
                { name: "Контакты", href: "/contacts" },
              ].map((item) => (
                <li key={item.name}>
                  <AppLink
                    href={item.href}
                    variant="footer"
                    tone="inverse"
                    className="group inline-flex items-center gap-2 text-sm sm:text-base opacity-90 hover:opacity-100"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-gold/70 group-hover:text-gold transition-colors" />
                    {item.name}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <Heading level="h4" size="small" tone="inverse" weight="semibold" className="text-xs sm:text-sm tracking-[0.15em] uppercase mb-6 sm:mb-8 opacity-70">Контакты</Heading>
            <ul className="pl-0 space-y-4 sm:space-y-5">
              <li className="flex items-start gap-3 sm:gap-4">
                <Phone className="h-5 w-5 mt-0.5 text-gold flex-shrink-0" />
                <TelLink phone="+7 (862) 270-45-07" tone="inverse" className="text-sm sm:text-base opacity-90 hover:opacity-100" />
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <Mail className="h-5 w-5 mt-0.5 text-gold flex-shrink-0" />
                <EmailLink email="priboy.sochi@mail.ru" tone="inverse" className="text-sm sm:text-base opacity-90 hover:opacity-100 break-all" />
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <MapPin className="h-5 w-5 mt-0.5 text-gold flex-shrink-0" />
                <Text tone="inverse" size="sm" className="opacity-90">
                  г. Сочи, п. Лазаревское,
                  <br />
                  ул. Павлова, 2
                </Text>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <Heading level="h4" size="small" tone="inverse" weight="semibold" className="text-xs sm:text-sm tracking-[0.15em] uppercase mb-6 sm:mb-8 opacity-70">Режим работы</Heading>
            <ul className="pl-0 space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2.5">
                <Clock3 className="h-4 w-4 mt-0.5 text-gold/70 flex-shrink-0" />
                <Text tone="inverse" size="sm" weight="medium" className="opacity-90">Ресепшн: <span className="font-normal">круглосуточно</span></Text>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock3 className="h-4 w-4 mt-0.5 text-gold/70 flex-shrink-0" />
                <Text tone="inverse" size="sm" weight="medium" className="opacity-90">Ресторан: <span className="font-normal">08:00 – 23:00</span></Text>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock3 className="h-4 w-4 mt-0.5 text-gold/70 flex-shrink-0" />
                <Text tone="inverse" size="sm" weight="medium" className="opacity-90">Бассейн: <span className="font-normal">09:00 – 19:00 (с 01.05 по 01.10)</span></Text>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 sm:pt-10 border-t border-cream/20 flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
          <Small tone="inverse" className="opacity-60 text-center sm:text-left">
            © {new Date().getFullYear()} Гостиница Прибой. Все права защищены.{" "}
            <AppLink href="https://yappix.ru/" tone="inverse" variant="inline" className="opacity-100 hover:opacity-80">
              Разработка сайтов
            </AppLink>
          </Small>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end w-full h-fit">
            <AppLink href="/privacy" variant="footer" tone="inverse" className="text-xs sm:text-sm opacity-60 hover:opacity-100">
              Политика конфиденциальности
            </AppLink>
            <AppLink href="/pravila-prozhivaniya" variant="footer" tone="inverse" className="text-xs sm:text-sm opacity-60 hover:opacity-100">
              Условия бронирования
            </AppLink>
            <AppLink href="/otmena-bronirovaniya" variant="footer" tone="inverse" className="text-xs sm:text-sm opacity-60 hover:opacity-100">
              Отмена бронирования
            </AppLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
