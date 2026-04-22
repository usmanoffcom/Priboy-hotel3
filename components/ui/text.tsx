import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

import { cn } from "@/lib/utils"

type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "lead"
type TextTone = "default" | "inverse" | "muted" | "accent"
type TextWeight = "normal" | "medium" | "semibold"

const sizeClasses: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  lead: "text-lg md:text-xl leading-relaxed",
}

const toneClasses: Record<TextTone, string> = {
  default: "text-foreground",
  inverse: "text-white",
  muted: "text-muted-foreground",
  accent: "text-terracotta",
}

const weightClasses: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
}

interface TextProps extends Omit<ComponentPropsWithoutRef<"p">, "children"> {
  as?: ElementType
  size?: TextSize
  tone?: TextTone
  weight?: TextWeight
  balance?: boolean
  children: ReactNode
}

export function Text({
  as: Comp = "p",
  size = "base",
  tone = "default",
  weight = "normal",
  balance = false,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Comp
      className={cn(
        "leading-relaxed",
        sizeClasses[size],
        toneClasses[tone],
        weightClasses[weight],
        balance && "text-balance",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export function Lead({ children, className, ...props }: Omit<TextProps, "size">) {
  return (
    <Text size="lead" className={cn("max-w-3xl", className)} {...props}>
      {children}
    </Text>
  )
}

export function Muted({ children, className, ...props }: Omit<TextProps, "tone">) {
  return (
    <Text tone="muted" className={className} {...props}>
      {children}
    </Text>
  )
}

export function Small({ children, className, ...props }: Omit<TextProps, "size">) {
  return (
    <Text size="sm" className={className} {...props}>
      {children}
    </Text>
  )
}
