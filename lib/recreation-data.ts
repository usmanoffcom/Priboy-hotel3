export interface Recreation {
  id: string
  slug: string
  name: string
  shortName: string
  description: string
  fullDescription: string
  image: string
  images: string[]
  category: string
}

export const recreations: Recreation[] = [
  {
    id: "bassein",
    slug: "bassein",
    name: "Бассейн",
    shortName: "Бассейн",
    description: "Гостиничный комплекс «Прибой» располагает на территории открытый бассейн. Насладитесь возможностью непринужденно поплавать в открытом подогреваемом бассейне. Расслабьтесь лежа на шезлонге и закажите освежающий коктейль из бара.",
    fullDescription: "Гостиничный комплекс «Прибой» располагает на территории открытый бассейн. Насладитесь возможностью непринужденно поплавать в открытом подогреваемом бассейне. Расслабьтесь лежа на шезлонге и закажите освежающий коктейль из бара.\n\nВажно! Бассейн работает с 01.05 по 01.10.\n\nОбратите внимание! На территории бассейна проводится анимационная программа для детей. Каждую среду в 16:30 команда аниматоров ждет детей и их родителей у бассейна. Веселые конкурсы, соревнования, выступления популярных мультипликационных героев, любимые песни – все это ждет юных гостей отеля «Прибой»!",
    image: "https://framerusercontent.com/images/wA595WQZy49R4jVrwtKt5s7v8.jpg",
    images: [
      "https://framerusercontent.com/images/wA595WQZy49R4jVrwtKt5s7v8.jpg",
      "https://framerusercontent.com/images/KJD3UWIAu61fO5uBAH9AJSaDKkc.jpg",
      "https://framerusercontent.com/images/ViZOpK2UgvI3H28CkibhEBtqgQ.jpg",
    ],
    category: "Активный отдых",
  },
  {
    id: "plyazh",
    slug: "plyazh",
    name: "Пляж",
    shortName: "Пляж",
    description: "Гостиничный комплекс «Прибой» приглашает гостей отдохнуть на комфортном и качественно оборудованном пляже. Удобное расположение сразу же возле отеля. К вашим услугам – вся инфраструктура. И самое главное – Черное море, солнце и свежий воздух.",
    fullDescription: "Гостиничный комплекс «Прибой» удачно расположен у комфортабельного и качественно оборудованного муниципального пляжа. Данный пляж не является нашей собственностью и поэтому вход туда свободный.\n\nОсобенности этого пляжа:\n– пляж бесплатный;\n– большое количество пластиковых шезлонгов (цены устанавливает арендатор пляжа);\n– зонтики от солнца (цены устанавливает арендатор пляжа);\n– просторный тент, создающий тень и уютную атмосферу;\n– удобный вход в воду;",
    image: "https://framerusercontent.com/images/FBUIyhkFnLigbRS73zaKAdpw8Tk.jpg",
    images: [
      "https://framerusercontent.com/images/FBUIyhkFnLigbRS73zaKAdpw8Tk.jpg",
      "https://framerusercontent.com/images/CT09PzqQWShBjZnFmRx2P7dlY.jpg",
      "https://framerusercontent.com/images/ZiPKL5qqHdBcOQOUyp5JLkAiSg8.jpg",
      "https://framerusercontent.com/images/ViZOpK2UgvI3H28CkibhEBtqgQ.jpg",
    ],
    category: "Пляжный отдых",
  },
  {
    id: "pirs",
    slug: "pirs",
    name: "Пирс",
    shortName: "Пирс",
    description: "Гостиничный комплекс «Прибой» приглашает всех желающих отдохнуть на потрясающем пирсе. Это место, с которого открывается потрясающий вид на Черное море, горы, небосвод. Зона активного и одновременно спокойного отдыха.",
    fullDescription: "Гостиничный комплекс «Прибой» приглашает всех желающих отдохнуть на потрясающем пирсе. Это место, с которого открывается потрясающий вид на Черное море, горы, небосвод. Зона активного и одновременно спокойного отдыха.",
    image: "https://framerusercontent.com/images/4pJlSWrNIWzSMhy14A6yDHfGFo.jpg",
    images: [
      "https://framerusercontent.com/images/4pJlSWrNIWzSMhy14A6yDHfGFo.jpg",
      "https://framerusercontent.com/images/6BE2TpARapgFMeunvMMr2CPne8.jpeg",
      "https://framerusercontent.com/images/GAsPLTnsP23I5wBg4B9bu6bAz4.jpeg",
      "https://framerusercontent.com/images/ViZOpK2UgvI3H28CkibhEBtqgQ.jpg",
    ],
    category: "Отдых",
  },
  {
    id: "massaj",
    slug: "massaj",
    name: "Массажист",
    shortName: "Массажист",
    description: "При отеле работает кабинет профессионального массажа. Здесь работают опытные специалисты, которые помогут расслабиться, ощутить настоящий релакс и получить массу положительных эмоций. Услуга платная.",
    fullDescription: "При отеле «Прибой» работает кабинет профессионального массажа. Здесь работают опытные специалисты, которые помогут расслабиться, ощутить настоящий релакс и получить массу положительных эмоций. С профессиональным массажем ваш отдых будет лучшим!\n\nК услугам клиентов:\n– Расслабляющий массаж;\n– Антицеллюлитный;\n– Детский;\n– Все виды лечебно-оздоровительного массажа.\n\n* Услуга платная. Стоимость уточняйте на ресепшене.",
    image: "https://framerusercontent.com/images/3mLym31N78a9QTp8fTwRSMdS0.webp",
    images: [
      "https://framerusercontent.com/images/3mLym31N78a9QTp8fTwRSMdS0.webp",
      "https://framerusercontent.com/images/O47YqasRktOC0FUcXURoLIxi40.jpg",
      "https://framerusercontent.com/images/ViZOpK2UgvI3H28CkibhEBtqgQ.jpg",
    ],
    category: "SPA и здоровье",
  },
  {
    id: "trenajorni-zal",
    slug: "trenajorni-zal",
    name: "Тренажерный зал",
    shortName: "Тренажерный зал",
    description: "Не хотите делать перерыв между тренировками на отдыхе? Желаете поддерживать свою физическую форму? Тренажерный зал при отеле «Прибой» ждет вас! Время пребывания в зале – не ограничено.",
    fullDescription: "Не хотите делать перерыв между тренировками на отдыхе? Желаете поддерживать свою физическую форму? Тренажерный зал при отеле «Прибой» ждет вас! Время пребывания в зале – не ограничено.\n\nК услугам гостей тренажерного зала:\n– Современные тренажеры для прокачивания всех групп мышц и кардио тренировок;\n– Спортивный инвентарь (гантели, блины и т.п.);\n– Стол, ракетки, шары для настольного тенниса;\n– Чистая и просторная раздевалка;\n– Душ с горячей водой;\n– Зона отдыха;\n– Приятная атмосфера без очередей к тренажерам и позитивная спортивная аура.",
    image: "https://framerusercontent.com/images/JyOTvxnMLRCGqddAnvwv48MKEw.jpg",
    images: [
      "https://framerusercontent.com/images/JyOTvxnMLRCGqddAnvwv48MKEw.jpg",
      "https://framerusercontent.com/images/amX2gHPgWKn6EWc0zIFW8ky4rE.jpg",
      "https://framerusercontent.com/images/AgaUNJULEylwQNuEgDqZroe3w8.jpg",
      "https://framerusercontent.com/images/ViZOpK2UgvI3H28CkibhEBtqgQ.jpg",
    ],
    category: "Спорт",
  },
]

export function getRecreationBySlug(slug: string): Recreation | undefined {
  return recreations.find((recreation) => recreation.slug === slug)
}

