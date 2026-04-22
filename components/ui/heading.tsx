import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

import { cn } from "@/lib/utils"

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type HeadingTone = "default" | "inverse" | "accent" | "muted"
type HeadingSize = "hero" | "page" | "section" | "card" | "small"
type HeadingWeight = "light" | "normal" | "medium" | "semibold" | "bold"

const sizeClasses: Record<HeadingSize, string> = {
  hero: "text-4xl md:text-5xl lg:text-6xl",
  page: "text-3xl md:text-4xl lg:text-5xl",
  section: "text-2xl md:text-3xl",
  card: "text-xl md:text-2xl",
  small: "text-lg md:text-xl",
}

const toneClasses: Record<HeadingTone, string> = {
  default: "text-foreground",
  inverse: "text-white",
  accent: "text-terracotta",
  muted: "text-muted-foreground",
}

const weightClasses: Record<HeadingWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
}

const defaultWeights: Record<HeadingSize, HeadingWeight> = {
  hero: "light",
  page: "light",
  section: "light",
  card: "medium",
  small: "medium",
}

interface HeadingProps extends Omit<ComponentPropsWithoutRef<"h1">, "children"> {
  as?: ElementType
  level?: HeadingLevel
  size?: HeadingSize
  tone?: HeadingTone
  weight?: HeadingWeight
  children: ReactNode
}

export function Heading({
  as,
  level = "h2",
  size,
  tone = "default",
  weight,
  className,
  children,
  ...props
}: HeadingProps) {
  const Comp = (as ?? level) as ElementType
  
  const effectiveSize = size ?? (level === "h1" ? "page" : level === "h2" ? "section" : level === "h3" ? "card" : "small")
  const effectiveWeight = weight ?? defaultWeights[effectiveSize]
  
  return (
    <Comp 
      className={cn(
        "tracking-tight leading-tight",
        sizeClasses[effectiveSize], 
        toneClasses[tone],
        weightClasses[effectiveWeight],
        className
      )} 
      {...props}
    >
      {children}
    </Comp>
  )
}
