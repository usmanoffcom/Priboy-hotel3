export interface Room {
  id: string
  slug: string
  name: string
  shortName: string
  description: string
  fullDescription: string
  priceBreakfast: string
  priceFull: string
  size: string
  capacity: string
  beds: string
  view: string
  images: string[]
  amenities: string[]
  includedInPrice?: string[]
}

export const rooms: Room[] = [
  {
    id: "standard",
    slug: "standart",
    name: "Стандартный номер",
    shortName: "Стандарт",
    description: "Номер с двумя односпальными кроватями или с одной просторной кроватью, оформленный в кремовых, бежевых и красных тонах.",
    fullDescription: "Номер с двумя односпальными кроватями или с одной просторной кроватью, оформленный в кремовых, бежевых и красных тонах. С собственного балкона можно полюбоваться живописной панорамой центральной набережной. В номере: Балкон, Мини-холодильник, 2 односпальные кровати или 1 двуспальная кровать, Кондиционер, Плазменная панель, Индивидуальный сейф. Туалетная комната: душевая кабина, набор полотенец, косметический набор. Живописной панорамой набережной, так же вид во внутренний дворик на бассейн либо с видом на парк аттракционов из панорамных окон без балкона. Дополнительные места оплачиваются по тарифам: – Дети до 3 лет — проживание с завтраком бесплатно; – От 4 до 6 лет — 1300 руб; – Старше 6 лет — 1900 руб; – Завтраки включены в стоимость с 02.05.2025 по 01.10.2025",
    priceBreakfast: "от 4 500 ₽",
    priceFull: "от 4 500 ₽",
    size: "25 м²",
    capacity: "2 + 1",
    beds: "1 большая кровать или 2 односпальные кровати",
    view: "Набережная / Бассейн / Парк аттракционов",
    images: [
      "https://framerusercontent.com/images/z7Wevu8cmDpoCtivodXslrNWdA.jpg",
      "https://framerusercontent.com/images/TV1DnVIclqdSE7CEJK3DDK77g.jpg",
      "https://framerusercontent.com/images/Z8pTFIp0NRM55Xwahh6K0y1GUeI.jpeg",
      "https://framerusercontent.com/images/z82y7fvKJgcoqDbgJICArEVO8.jpeg",
      "https://framerusercontent.com/images/ViZOpK2UgvI3H28CkibhEBtqgQ.jpg",
    ],
    amenities: [
      "Балкон",
      "Мини-холодильник",
      "Кондиционер",
      "Плазменная панель",
      "Индивидуальный сейф",
      "Душевая кабина",
      "Набор полотенец",
      "Косметический набор",
      "Ежедневная уборка",
    ],
    includedInPrice: [
      "Завтраки включены в стоимость с 02.05.2025 по 01.10.2025",
      "Доступ к бассейну неограничен",
      "Лежаки и полотенца у бассейна бесплатно",
      "Ежедневная уборка",
      "Полотенца, тапочки, косметический набор",
    ],
  },
  {
    id: "standard-plus",
    slug: "standart-plus",
    name: "Стандартный номер +",
    shortName: "Стандарт +",
    description: "Номер повышенной комфортности с двумя односпальными кроватями или с одной просторной кроватью, оформленный в кремовых, бежевых и красных тонах.",
    fullDescription: "Номер повышенной комфортности с двумя односпальными кроватями или с одной просторной кроватью, оформленный в кремовых, бежевых и красных тонах. С собственного балкона можно полюбоваться живописной панорамой центральной набережной. Имеется боковой вид на море и центральную набережную, а так же вид на внутренний дворик с бассейном. В номере: Балкон, Мини-холодильник, 2 односпальные кровати или 1 двуспальная кровать, Кондиционер, Плазменная панель, Индивидуальный сейф. Туалетная комната: душевая кабина, набор полотенец, косметический набор. Дополнительные места оплачиваются по тарифам: – Дети до 3 лет — проживание с завтраком бесплатно; – От 4 до 6 лет — 1300 руб; – Старше 6 лет — 1900 руб; – Завтраки включены в стоимость с 02.05.2025 по 01.10.2025",
    priceBreakfast: "от 4 800 ₽",
    priceFull: "от 4 800 ₽",
    size: "35 м²",
    capacity: "2 + 2",
    beds: "1 большая кровать или 2 односпальные кровати + 2 спальный диван",
    view: "Море / Набережная / Бассейн",
    images: [
      "https://framerusercontent.com/images/YWEBZ7D5bcdu6fSv5ch2qW6aSN8.jpeg",
      "https://framerusercontent.com/images/CHUluAPRNRdUMmWvUB1LwMl71zE.jpeg",
      "https://framerusercontent.com/images/ZO2I7QthkHtwDkWGkwjE41u5wj8.jpeg",
      "https://framerusercontent.com/images/zObMYfruYxXbrvFNf4MBQ6GIZgE.jpeg",
      "https://framerusercontent.com/images/ViZOpK2UgvI3H28CkibhEBtqgQ.jpg",
    ],
    amenities: [
      "Балкон",
      "Мини-холодильник",
      "Кондиционер",
      "Плазменная панель",
      "Индивидуальный сейф",
      "Душевая кабина",
      "Набор полотенец",
      "Косметический набор",
      "Ежедневная уборка",
    ],
    includedInPrice: [
      "Завтраки включены в стоимость с 02.05.2025 по 01.10.2025",
      "Доступ к бассейну неограничен",
      "Лежаки и полотенца у бассейна бесплатно",
      "Ежедневная уборка",
      "Полотенца, тапочки, косметический набор",
    ],
  },
  {
    id: "studia",
    slug: "studia",
    name: "Студия",
    shortName: "Студия",
    description: "Просторные однокомнатные апартаменты с панорамными окнами с видом на море и элегантным интерьером для приятного отдыха.",
    fullDescription: "Студия, с панорамными окнами с боковым видом на море и центральную набережную и элегантным интерьером для приятного отдыха. Тут можно полюбоваться живописной панорамой первой береговой. В номере: Мини-холодильник, 1 двуспальная кровать, Кондиционер, Плазменная панель, Индивидуальный сейф. Туалетная комната: душевая кабина, набор полотенец, косметический набор. Дополнительные места оплачиваются по тарифам: – Дети до 3 лет — проживание с завтраком бесплатно; – От 4 до 6 лет — 1300 руб; – Старше 6 лет — 1900 руб; – Завтраки включены в стоимость с 02.05.2025 по 01.10.2025",
    priceBreakfast: "от 5 100 ₽",
    priceFull: "от 5 100 ₽",
    size: "50 м²",
    capacity: "2 + 2",
    beds: "1 большая кровать + 2 спальный диван",
    view: "Море / Набережная",
    images: [
      "https://framerusercontent.com/images/SwKYhh9GZAHQF1TGHesZEb0qzQ.jpeg",
      "https://framerusercontent.com/images/vDfMBRMURcuFGAyKfL9YFEc0sI.jpeg",
      "https://framerusercontent.com/images/5UalCNWJChndRjeVLXe5nV2RdY.jpeg",
      "https://framerusercontent.com/images/mgUfBvH01cNy3gjfPoH8hRgSd4.jpeg",
      "https://framerusercontent.com/images/YjZ3FheJzggqxVdWgIvzjPzCYrA.jpeg",
      "https://framerusercontent.com/images/xRkhbaYd1QLWCvDJjIxNt5FMg0E.jpeg",
    ],
    amenities: [
      "Кондиционер",
      "Телевизор",
      "Холодильник",
      "Санузел",
      "Ежедневная уборка",
      "Панорамные окна",
      "Мини-холодильник",
      "Плазменная панель",
      "Индивидуальный сейф",
      "Душевая кабина",
      "Набор полотенец",
      "Косметический набор",
    ],
    includedInPrice: [
      "Завтраки включены в стоимость с 02.05.2025 по 01.10.2025",
      "Доступ к бассейну неограничен",
      "Лежаки и полотенца у бассейна бесплатно",
      "Ежедневная уборка",
      "Полотенца, тапочки, косметический набор",
    ],
  },
  {
    id: "poluluks",
    slug: "poluluks",
    name: "Полулюкс",
    shortName: "Полулюкс",
    description: "Еще больше комфорта подарит полулюкс с просторным балконом и видом на побережье Черного моря. Наслаждайтесь очаровательными южными пейзажами и свежим морским бризом.",
    fullDescription: "Еще больше комфорта подарит полулюкс с просторным балконом и видом на побережье Черного моря. Наслаждайтесь очаровательными южными пейзажами и свежим морским бризом. В номере предусмотрены все удобства для комфортного проживания.",
    priceBreakfast: "от 5 200 ₽",
    priceFull: "от 5 200 ₽",
    size: "45 м²",
    capacity: "2 + 2",
    beds: "1 большая кровать + 2 спальный диван",
    view: "Море",
    images: [
      "https://framerusercontent.com/images/sjlIWlUaIDkLlL88niSFWvMo8.jpeg",
      "https://framerusercontent.com/images/iUXjAlLHzMK9GCZzz1cAc9WoGGk.jpeg",
      "https://framerusercontent.com/images/jF1hMLgeklBEeOyXFoqUGUN7c.jpeg",
      "https://framerusercontent.com/images/z3U2mV8puWzJ113hCcH10MqDC8.jpeg",
    ],
    amenities: [
      "Кондиционер",
      "Телевизор",
      "Холодильник",
      "Санузел",
      "Ежедневная уборка",
      "Балкон",
    ],
    includedInPrice: [
      "Завтраки включены в стоимость с 02.05.2025 по 01.10.2025",
      "Доступ к бассейну неограничен",
      "Лежаки и полотенца у бассейна бесплатно",
      "Ежедневная уборка",
      "Полотенца, тапочки, косметический набор",
    ],
  },
  {
    id: "luks",
    slug: "luks",
    name: "Люкс",
    shortName: "Люкс",
    description: "К Вашим услугам чудесный двухкомнатный номер с гостевой зоной и уютной спальной. Идеальный выбор для семейного отдыха на море.",
    fullDescription: "К Вашим услугам чудесный двухкомнатный номер с гостевой зоной и уютной спальной. Идеальный выбор для семейного отдыха на море. В номере предусмотрены все удобства для комфортного проживания.",
    priceBreakfast: "от 6 700 ₽",
    priceFull: "от 6 700 ₽",
    size: "60 м²",
    capacity: "3 + 2",
    beds: "1 большая кровать + диван",
    view: "Море",
    images: [
      "https://framerusercontent.com/images/r8Fm0r4jywBAWwGVEwpT6EyEQc.jpg",
      "https://framerusercontent.com/images/M2qGgEl5XWHL8RWhDRpvhbIe43I.jpg",
      "https://framerusercontent.com/images/XidklTM8ZeGpUDP79RqEhySGr7c.jpg",
      "https://framerusercontent.com/images/aMuHrqmVSSrIkz1RnwLv1gGmnM.jpg",
    ],
    amenities: [
      "Кондиционер",
      "Телевизор",
      "Холодильник",
      "Санузел",
      "Ежедневная уборка",
      "Гостевая зона",
      "Две комнаты",
    ],
    includedInPrice: [
      "Завтраки включены в стоимость с 02.05.2025 по 01.10.2025",
      "Доступ к бассейну неограничен",
      "Лежаки и полотенца у бассейна бесплатно",
      "Ежедневная уборка",
      "Полотенца, тапочки, косметический набор",
    ],
  },
]

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug)
}
