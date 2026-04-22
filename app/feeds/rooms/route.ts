import { roomsFeedResponse } from "@/lib/rooms-feed-response"

export const revalidate = 3600

export function GET() {
  return roomsFeedResponse()
}
