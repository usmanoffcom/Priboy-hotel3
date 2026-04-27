import type React from "react"
import type { Metadata } from "next"
import { Onest } from "next/font/google"
import Script from "next/script"
import { Toaster } from "@/components/ui/sonner"
import { PromoModal } from "@/components/promo-modal"
import { getHotelJsonLd } from "@/lib/hotel-schema"
import { serializeJsonLd } from "@/lib/json-ld"
import "./globals.css"

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  // Только используемые начертания — меньше CSS/woff2, лучше PageSpeed
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://priboy1.ru'),
  title: "Гостиница Прибой в Лазаревском — бассейн, парк аттракционов | priboy1.ru",
  description:
    "Гостиница Прибой в Лазаревском, Сочи. Комфортабельные номера, открытый бассейн, собственный пляж у самого моря, парк аттракционов с колесом обозрения, рестораны, тренажерный зал. Бронирование номеров от 4500₽ за ночь.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  // canonical только на уровне страниц/секций — не дублировать главную на весь сайт (SEO / GSC)
  openGraph: {
    title: "Гостиница Прибой в Лазаревском — бассейн, парк аттракционов",
    description: "Гостиница Прибой в Лазаревском, Сочи. Комфортабельные номера, открытый бассейн, пляж у самого моря, парк аттракционов, рестораны. Бронирование от 4500₽.",
    url: "https://priboy1.ru",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://framerusercontent.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${onest.variable} font-sans antialiased`}>
        {/* JSON-LD: нативный <script> — в исходном HTML для краулеров; данные в lib/hotel-schema.ts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(getHotelJsonLd()),
          }}
        />
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
              ym(105681293, 'init', {webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/105681293"
              className="sr-only-pixel"
              alt="Яндекс.Метрика"
            />
          </div>
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2ETJXWMCSY"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2ETJXWMCSY');
            `,
          }}
        />
        {children}
        <Toaster />
        <PromoModal />
      </body>
    </html>
  )
}
