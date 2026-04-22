export type RoomCapacityInfo =
  | { kind: "unknown"; display: string }
  | { kind: "fixed"; base: number; maxGuests: number; display: string }
  | { kind: "range"; min: number; max: number; maxGuests: number; display: string }
  | { kind: "extra"; base: number; extra: number; maxGuests: number; display: string }

/**
 * Приводит строковую вместимость к нормальному виду для UI/SEO.
 *
 * Поддерживаемые форматы:
 * - "2" -> fixed
 * - "2-4" / "2 - 4" -> range
 * - "2 + (доп.)" / "2 + (доп.цена)" -> extra (+1)
 */
export function parseRoomCapacity(input: string): RoomCapacityInfo {
  const raw = (input || "").trim()
  if (!raw) return { kind: "unknown", display: "" }

  // 2-4
  const range = raw.match(/^(\d+)\s*-\s*(\d+)$/)
  if (range) {
    const min = Number(range[1])
    const max = Number(range[2])
    if (Number.isFinite(min) && Number.isFinite(max) && min > 0 && max >= min) {
      return { kind: "range", min, max, maxGuests: max, display: `${min}–${max}` }
    }
  }

  // 2 + (доп.*)
  const plus = raw.match(/^(\d+)\s*\+\s*(.+)$/)
  if (plus) {
    const base = Number(plus[1])
    const rest = (plus[2] || "").toLowerCase()
    if (Number.isFinite(base) && base > 0 && (rest.includes("доп") || rest.includes("extra"))) {
      const extra = 1
      return { kind: "extra", base, extra, maxGuests: base + extra, display: `${base} + ${extra}` }
    }
    // fallback: если это "2 + 1" уже в данных
    const maybeExtra = rest.match(/^\s*(\d+)\s*$/)
    if (Number.isFinite(base) && base > 0 && maybeExtra) {
      const extra = Number(maybeExtra[1])
      if (Number.isFinite(extra) && extra > 0) {
        return { kind: "extra", base, extra, maxGuests: base + extra, display: `${base} + ${extra}` }
      }
    }
  }

  // "2"
  const fixed = raw.match(/^(\d+)$/)
  if (fixed) {
    const base = Number(fixed[1])
    if (Number.isFinite(base) && base > 0) {
      return { kind: "fixed", base, maxGuests: base, display: `${base}` }
    }
  }

  return { kind: "unknown", display: raw }
}

export const EXTRA_BED_TOOLTIP = {
  title: "Доп. место",
  description: "+1 гость. Оплачивается отдельно.",
  price: "1 300–1 900 ₽/сутки",
}


