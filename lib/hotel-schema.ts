const SITE = "https://priboy1.ru"

/**
 * Единая JSON-LD микроразметка: @graph с WebSite + Hotel (без дубля LocalBusiness).
 * @see https://schema.org/Hotel
 */
export function getHotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Гостиница Прибой",
        description:
          "Гостиница Прибой в Лазаревском, Сочи. Номера, бассейн, пляж, ресторан, бронирование на сайте.",
        inLanguage: "ru-RU",
        publisher: { "@id": `${SITE}/#hotel` },
      },
      {
        "@type": "Hotel",
        "@id": `${SITE}/#hotel`,
        name: "Гостиница Прибой",
        alternateName: ["Отель Прибой Лазаревское", "Прибой 3★"],
        description:
          "Гостиница Прибой в Лазаревском, Сочи. Комфортабельные номера, открытый бассейн, собственный пляж у самого моря, парк аттракционов с колесом обозрения, рестораны, тренажерный зал. Бронирование номеров от 4500₽ за ночь.",
        url: SITE,
        sameAs: "https://yandex.ru/maps/org/priboy/150446179571/",
        telephone: "+7-862-270-45-07",
        email: "priboy.sochi@mail.ru",
        image: [`${SITE}/header.jpg`, `${SITE}/pirs.jpg`],
        logo: `${SITE}/Logo_dark.svg`,
        priceRange: "₽₽",
        currenciesAccepted: "RUB",
        checkinTime: "14:00",
        checkoutTime: "12:00",
        starRating: {
          "@type": "Rating",
          ratingValue: "3",
          bestRating: "5",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "ул. Павлова, 2",
          addressLocality: "Лазаревское",
          addressRegion: "Краснодарский край",
          postalCode: "354200",
          addressCountry: "RU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.9061,
          longitude: 39.3233,
        },
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Бассейн", value: true },
          { "@type": "LocationFeatureSpecification", name: "Ресторан", value: true },
          { "@type": "LocationFeatureSpecification", name: "Парковка", value: true },
          { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
          { "@type": "LocationFeatureSpecification", name: "Кондиционер", value: true },
          { "@type": "LocationFeatureSpecification", name: "Собственный пляж", value: true },
          { "@type": "LocationFeatureSpecification", name: "Парк аттракционов", value: true },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE}/booking`,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "LodgingReservation",
            name: "Бронирование номера",
          },
        },
      },
    ],
  }
}
