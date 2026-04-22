import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Развлечения в гостинице Прибой — бассейн, пляж, парк аттракционов, тренажерный зал | Лазаревское",
  description: "Развлечения при гостинице Прибой в Лазаревском: открытый бассейн с подогревом (работает с 01.05 по 01.10), собственный пляж у самого моря, пирс с видом на море, парк аттракционов с колесом обозрения, тренажерный зал, массаж. Дельфинарий и пингвинарий рядом.",
  alternates: {
    canonical: "https://priboy1.ru/entertainment",
  },
  openGraph: {
    title: "Развлечения в гостинице Прибой — бассейн, пляж, парк аттракционов",
    description: "Развлечения при гостинице Прибой: бассейн с подогревом (работает с 01.05 по 01.10), пляж у самого моря, парк аттракционов с колесом обозрения, тренажерный зал, массаж.",
    url: "https://priboy1.ru/entertainment",
    images: [
      {
        url: "https://priboy1.ru/pool.jpg",
        width: 1200,
        height: 630,
        alt: "Отдых и развлечения в гостинице Прибой",
      },
    ],
    type: "website",
  },
}

export default function EntertainmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

