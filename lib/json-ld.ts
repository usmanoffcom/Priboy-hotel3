/** Безопасная строка для <script type="application/ld+json"> (Next.js / XSS). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
