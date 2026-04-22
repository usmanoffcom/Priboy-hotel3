import { notFound } from "next/navigation"

// Маршрут /404 специально показывает страницу «Не найдено» (для SEO-аудита и ссылки в футере).
export default function NotFoundPage() {
  notFound()
}
