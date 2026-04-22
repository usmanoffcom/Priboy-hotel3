import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Рестораны в гостинице Прибой — 6 заведений, банкетные залы, меню | Лазаревское",
  description: "Рестораны и питание в гостинице Прибой в Лазаревском: Ресторан Летний с террасой и видом на море, Ресторан Зимний с банкетным залом, Столовая, арт-проект MESTO, мангальная зона «Ротонда», пуфы на море. Меню, цены, бронирование столиков.",
  alternates: {
    canonical: "https://priboy1.ru/restaurant",
  },
  openGraph: {
    title: "Рестораны в гостинице Прибой — 6 заведений, банкетные залы",
    description: "6 ресторанов и кафе в гостинице Прибой: Летний и Зимний рестораны, Столовая, MESTO, Ротонда, пуфы на море. Банкетные залы, меню, бронирование.",
    url: "https://priboy1.ru/restaurant",
    images: [
      {
        url: "https://framerusercontent.com/images/avenue.jpg",
        width: 1200,
        height: 630,
        alt: "Рестораны и питание в гостинице Прибой",
      },
    ],
    type: "website",
  },
}

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

