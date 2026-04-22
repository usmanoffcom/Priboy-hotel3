import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SiteCardProps = {
  children: ReactNode
  className?: string
}

export function SiteCard({ children, className }: SiteCardProps) {
  return <div className={cn("site-card overflow-hidden bg-white", className)}>{children}</div>
}
