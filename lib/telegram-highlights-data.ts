/** Слайды «Новости»: видео в public/news/ (MP4, MOV). Квадрат — mediaAspect: square */

export type TelegramHighlightSlide = {
  id: string
  kind: "video" | "image"
  /** путь в public */
  mediaSrc: string
  /** Квадратный медиаблок: без полей, видео object-cover под квадрат */
  mediaAspect?: "square" | "9/16"
  posterSrc?: string
  imageAlt?: string
  title: string
  intro: string[]
  bullets?: { label: string; href?: string }[]
  ctaLabel?: string
  ctaHref?: string
}

export const telegramHighlightSlides: TelegramHighlightSlide[] = [
  {
    id: "aerarium",
    kind: "video",
    mediaAspect: "square",
    mediaSrc: "/news/IMG_9828.MP4",
    title: "Новая услуга: аэрарий в номере",
    intro: [
      "Уважаемые гости!",
      "Как и обещали, рассказываем о новой услуге для вас: теперь пользование аэрарием входит в стоимость проживания в категориях номеров:",
    ],
    bullets: [
      { label: "Стандарт улучшенный", href: "/rooms/standart-plus" },
      { label: "Студия", href: "/rooms/studia" },
      { label: "Полу-люкс", href: "/rooms/poluluks" },
      { label: "Люкс", href: "/rooms/luks" },
    ],
    ctaLabel: "Читать в Telegram",
    ctaHref: "https://t.me/priboynamore/326",
  },
  {
    id: "gastro-zone",
    kind: "video",
    mediaAspect: "square",
    mediaSrc: "/news/IMG_9829.MOV",
    title: "Обновлённая гастрозона у моря",
    intro: [
      "Мы обновили пространство для отдыха и еды — чтобы ваш отдых был ещё комфортнее, а впечатления от вечера у моря — ярче.",
      "Уютные столики на берегу, меню на любой вкус и закаты, которые лучше всего смотреть именно здесь.",
    ],
    bullets: [
      { label: "Кафе — кофе, десерты и лёгкое меню с видом на воду", href: "/restaurant" },
      { label: "Бар — напитки и закуски в расслабленной атмосфере", href: "/restaurant" },
      { label: "Столовая — сытная кухня по честным ценам для всей семьи", href: "/restaurant" },
    ],
    ctaLabel: "Рестораны и меню",
    ctaHref: "/restaurant",
  },
  {
    id: "channel",
    kind: "image",
    mediaSrc: "/header.jpg",
    imageAlt: "Гостиница Прибой",
    title: "Больше новостей в Telegram",
    intro: [
      "Подпишитесь на канал @priboynamore — там мы публикуем акции, новости комплекса и полезные советы для отдыха в Лазаревском.",
    ],
    ctaLabel: "Перейти в канал",
    ctaHref: "https://t.me/priboynamore",
  },
]
