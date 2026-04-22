import { rooms } from "@/lib/rooms-data"
import { minPrices2026, type PriceCategoryKey } from "@/lib/prices-data"

const SITE_URL = "https://priboy1.ru"

const roomPriceKey: Record<string, PriceCategoryKey> = {
  standard: "standard",
  "standard-plus": "standardPlus",
  studia: "studia",
  poluluks: "poluluks",
  luks: "luxe",
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function ymlCatalogDateMoscow(): string {
  const d = new Date()
  const s = d.toLocaleString("sv-SE", { timeZone: "Europe/Moscow" })
  const [datePart, timePart] = s.split(" ")
  return `${datePart}T${timePart}+03:00`
}

/** YML для Яндекс Бизнес: типы номеров, цена «от» = минимум по прайсу 2026. */
export function buildRoomsYml(): string {
  const mins = minPrices2026()
  const stamp = ymlCatalogDateMoscow()

  const offerBlocks = rooms
    .filter((r) => roomPriceKey[r.id])
    .map((room) => {
      const key = roomPriceKey[room.id]
      const price = mins[key]
      const url = `${SITE_URL}/rooms/${room.slug}`
      const picture = room.images[0] ?? ""
      const desc = [
        room.description,
        "",
        `Площадь ${room.size}, размещение до ${room.capacity} гостей.`,
        `Цена от ${price.toLocaleString("ru-RU")} ₽ за номер в сутки (два взрослых) — минимум по сезонной таблице 2026.`,
        "Дополнительные места и точная стоимость на даты уточняйте при бронировании.",
      ].join("\n")

      return `
    <offer id="${escapeXml(room.slug)}" available="true">
      <url>${escapeXml(url)}</url>
      <price>${price}</price>
      <currencyId>RUR</currencyId>
      <categoryId>1</categoryId>
      <picture>${escapeXml(picture)}</picture>
      <name>${escapeXml(room.name)}</name>
      <description>${escapeXml(desc)}</description>
      <param name="Площадь">${escapeXml(room.size)}</param>
      <param name="Вместимость">${escapeXml(room.capacity)}</param>
    </offer>`
    })
    .join("")

  return `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="${escapeXml(stamp)}">
  <shop>
    <name>Гостиница «Прибой»</name>
    <company>Гостиница «Прибой», Лазаревское</company>
    <url>${SITE_URL}</url>
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    <categories>
      <category id="1">Проживание, номера</category>
    </categories>
    <offers>${offerBlocks}
    </offers>
  </shop>
</yml_catalog>
`
}
