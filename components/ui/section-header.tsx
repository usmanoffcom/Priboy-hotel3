import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  centered?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", centered && "text-center", className)}>
      {eyebrow ? (
        <div className={cn("flex items-center gap-3", centered && "justify-center")}>
          <span className="inline-block w-10 h-0.5 bg-terracotta rounded-full" />
          <p className="site-eyebrow">{eyebrow}</p>
        </div>
      ) : null}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">{title}</h2>
      {description ? <p className="site-lead max-w-3xl leading-[1.85]">{description}</p> : null}
    </div>
  )
}
