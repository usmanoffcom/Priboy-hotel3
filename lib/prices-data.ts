/** Сезонная таблица цен 2026 (₽/сутки за номер, 2 взрослых) — источник: /prices */

export type PriceData = {
  month: string
  monthNum: string
  period?: string
  standard: number | { sea: number; park: number; pool: number }
  standardPlus: number
  studia: number
  poluluks: number
  luxe: number
}

export const prices2026: PriceData[] = [
  {
    month: "Январь",
    monthNum: "01",
    standard: 4500,
    standardPlus: 4800,
    studia: 5100,
    poluluks: 5200,
    luxe: 6700,
  },
  {
    month: "Февраль",
    monthNum: "02",
    standard: 4500,
    standardPlus: 4800,
    studia: 5100,
    poluluks: 5200,
    luxe: 6700,
  },
  {
    month: "Март",
    monthNum: "03",
    standard: 4500,
    standardPlus: 4800,
    studia: 5100,
    poluluks: 5200,
    luxe: 6700,
  },
  {
    month: "Апрель",
    monthNum: "04",
    standard: 4500,
    standardPlus: 4800,
    studia: 5100,
    poluluks: 5200,
    luxe: 6700,
  },
  {
    month: "Май",
    monthNum: "05",
    standard: { sea: 6300, park: 5700, pool: 5700 },
    standardPlus: 6600,
    studia: 7200,
    poluluks: 7400,
    luxe: 7800,
  },
  {
    month: "Июнь",
    monthNum: "06",
    period: "1-15",
    standard: { sea: 7300, park: 6500, pool: 6500 },
    standardPlus: 8200,
    studia: 8700,
    poluluks: 9000,
    luxe: 11800,
  },
  {
    month: "Июнь",
    monthNum: "06",
    period: "16-30",
    standard: { sea: 8800, park: 7800, pool: 7800 },
    standardPlus: 9400,
    studia: 10300,
    poluluks: 10600,
    luxe: 12200,
  },
  {
    month: "Июль",
    monthNum: "07",
    standard: { sea: 11000, park: 10200, pool: 10700 },
    standardPlus: 11600,
    studia: 12200,
    poluluks: 12400,
    luxe: 14400,
  },
  {
    month: "Август",
    monthNum: "08",
    period: "1-20",
    standard: { sea: 11500, park: 10600, pool: 11300 },
    standardPlus: 12200,
    studia: 12800,
    poluluks: 13100,
    luxe: 15500,
  },
  {
    month: "Август",
    monthNum: "08",
    period: "21-31",
    standard: { sea: 11100, park: 10100, pool: 10900 },
    standardPlus: 11600,
    studia: 12100,
    poluluks: 12800,
    luxe: 14800,
  },
  {
    month: "Сентябрь",
    monthNum: "09",
    period: "1-15",
    standard: { sea: 9300, park: 8700, pool: 8700 },
    standardPlus: 9700,
    studia: 10100,
    poluluks: 10400,
    luxe: 13000,
  },
  {
    month: "Сентябрь",
    monthNum: "09",
    period: "16-30",
    standard: { sea: 8700, park: 7800, pool: 7800 },
    standardPlus: 9100,
    studia: 9300,
    poluluks: 10400,
    luxe: 11500,
  },
  {
    month: "Октябрь",
    monthNum: "10",
    standard: 4500,
    standardPlus: 4800,
    studia: 5100,
    poluluks: 5200,
    luxe: 6700,
  },
  {
    month: "Ноябрь",
    monthNum: "11",
    standard: 4500,
    standardPlus: 4800,
    studia: 5100,
    poluluks: 5200,
    luxe: 6700,
  },
  {
    month: "Декабрь",
    monthNum: "12",
    standard: 4500,
    standardPlus: 4800,
    studia: 5100,
    poluluks: 5200,
    luxe: 6700,
  },
]

function standardNightMin(standard: PriceData["standard"]): number {
  if (typeof standard === "number") return standard
  return Math.min(standard.sea, standard.park, standard.pool)
}

export type PriceCategoryKey = "standard" | "standardPlus" | "studia" | "poluluks" | "luxe"

/** Минимальные цены по категориям номеров за 2026 (для YML и подсказок «от …»). */
export function minPrices2026(): Record<PriceCategoryKey, number> {
  let minStandard = Infinity
  let minStandardPlus = Infinity
  let minStudia = Infinity
  let minPoluluks = Infinity
  let minLuxe = Infinity

  for (const row of prices2026) {
    minStandard = Math.min(minStandard, standardNightMin(row.standard))
    minStandardPlus = Math.min(minStandardPlus, row.standardPlus)
    minStudia = Math.min(minStudia, row.studia)
    minPoluluks = Math.min(minPoluluks, row.poluluks)
    minLuxe = Math.min(minLuxe, row.luxe)
  }

  return {
    standard: minStandard,
    standardPlus: minStandardPlus,
    studia: minStudia,
    poluluks: minPoluluks,
    luxe: minLuxe,
  }
}
