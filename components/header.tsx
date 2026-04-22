"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppLink } from "@/components/ui/app-link"

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Номера", href: "/rooms" },
  { name: "Цены", href: "/prices" },
  { name: "Развлечения", href: "/entertainment" },
  { name: "Ресторан", href: "/restaurant" },
  { name: "Об отеле", href: "/o-komplekse" },
  { name: "Блог", href: "/blog" },
  { name: "Контакты", href: "/contacts" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  // Определяем, находимся ли мы на странице номера
  const isRoomPage = pathname?.startsWith("/rooms/") && pathname !== "/rooms"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // На страницах номеров всегда используем светлую тему хедера
  const shouldUseLightTheme = isRoomPage || isScrolled
  const headerBg = shouldUseLightTheme
    ? "bg-cream/80 backdrop-blur-xl shadow-lg border-b border-white/30"
    : "bg-white/5 backdrop-blur-sm"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between">
          {/* Logo: белый на прозрачном хедере; при скролле — инвертируем в тёмный */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo_white.svg"
              alt="Гостиница Прибой"
              width={114}
              height={69}
              className={`h-10 sm:h-12 w-auto transition-all duration-300 ${
                shouldUseLightTheme ? "invert" : ""
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <AppLink
                key={item.name}
                href={item.href}
                variant="nav"
                tone={shouldUseLightTheme ? "default" : "inverse"}
                className={`text-sm ${
                  shouldUseLightTheme ? "text-foreground" : "text-white"
                }`}
              >
                {item.name}
              </AppLink>
            ))}
          </div>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <a
              href="tel:+78622704507"
              className={`flex items-center gap-2 text-sm font-medium ${shouldUseLightTheme ? "text-foreground" : "text-white"}`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">+7 (862) 270-45-07</span>
              <span className="xl:hidden">+7 (862) 270-45-07</span>
            </a>
            <Button asChild size="sm" variant="brand" className="text-sm">
              <Link href="/booking">Забронировать</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${shouldUseLightTheme ? "text-foreground" : "text-white"}`}
            aria-label="Меню"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-cream/85 backdrop-blur-2xl absolute top-20 sm:top-24 left-0 right-0 border-t border-white/20 shadow-xl">
            <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-foreground hover:text-terracotta transition-colors py-1"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-5 border-t border-border space-y-5">
                <a href="tel:+78622704507" className="flex items-center gap-3 text-foreground font-medium">
                  <Phone className="h-5 w-5" />
                  +7 (862) 270-45-07
                </a>
                <a href="tel:88002500034" className="flex items-center gap-3 text-foreground font-medium text-sm">
                  <Phone className="h-5 w-5" />
                  8 800 250 00 34
                </a>
                <Button asChild className="w-full">
                  <Link href="/booking">Забронировать</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
