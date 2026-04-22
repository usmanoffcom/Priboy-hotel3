import { NextResponse } from "next/server"
import { buildRoomsYml } from "@/lib/yml-rooms"

export function roomsFeedResponse() {
  return new NextResponse(buildRoomsYml(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
