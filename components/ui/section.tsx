import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  children: ReactNode
  className?: string
  containerClassName?: string
  muted?: boolean
  soft?: boolean
  id?: string
}

export function Section({ children, className, containerClassName, muted, soft, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "site-section",
        muted && "site-section-muted",
        soft && "site-section-soft",
        className,
      )}
    >
      <div className={cn("site-container", containerClassName)}>{children}</div>
    </section>
  )
}
