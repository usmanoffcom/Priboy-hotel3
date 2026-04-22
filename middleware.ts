import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/** Дублирует next.config rewrites: путь с `.yml` стабильно отдаёт тот же ответ, что `/feeds/rooms`. */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  url.pathname = "/feeds/rooms"
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: "/feeds/rooms.yml",
}
