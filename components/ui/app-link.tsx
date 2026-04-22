import Link, { type LinkProps } from "next/link"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

type LinkTone = "default" | "inverse" | "muted" | "accent"
type LinkVariant = "inline" | "nav" | "footer" | "standalone"

interface AppLinkProps extends Partial<LinkProps>, Omit<ComponentPropsWithoutRef<"a">, "href"> {
  children: ReactNode
  href: string
  tone?: LinkTone
  variant?: LinkVariant
  external?: boolean
}

const toneClasses: Record<LinkTone, string> = {
  default: "text-foreground hover:text-terracotta",
  inverse: "text-white hover:text-white/80",
  muted: "text-muted-foreground hover:text-foreground",
  accent: "text-terracotta hover:text-terracotta-light",
}

const variantClasses: Record<LinkVariant, string> = {
  inline: "underline-offset-4 hover:underline",
  nav: "font-medium tracking-tight transition-colors",
  footer: "font-medium transition-colors",
  standalone: "font-medium tracking-tight",
}

function isExternalHref(href: string): boolean {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")
}

export function AppLink({
  children,
  className,
  href,
  tone = "default",
  variant = "inline",
  external,
  ...props
}: AppLinkProps) {
  const isExternal = external ?? isExternalHref(href)
  const classes = cn("transition-colors duration-200", toneClasses[tone], variantClasses[variant], className)
  
  if (isExternal) {
    const externalProps = href.startsWith("http") 
      ? { target: "_blank", rel: "noopener noreferrer" } 
      : {}
    
    return (
      <a href={href} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  )
}

export function TelLink({ 
  phone, 
  children, 
  className,
  tone = "default",
  ...props 
}: { 
  phone: string
  children?: ReactNode
  className?: string
  tone?: LinkTone
} & Omit<ComponentPropsWithoutRef<"a">, "href">) {
  const cleanPhone = phone.replace(/[^\d+]/g, "")
  return (
    <AppLink 
      href={`tel:${cleanPhone}`} 
      tone={tone}
      variant="standalone"
      className={className}
      {...props}
    >
      {children ?? phone}
    </AppLink>
  )
}

export function EmailLink({ 
  email, 
  children, 
  className,
  tone = "default",
  ...props 
}: { 
  email: string
  children?: ReactNode
  className?: string
  tone?: LinkTone
} & Omit<ComponentPropsWithoutRef<"a">, "href">) {
  return (
    <AppLink 
      href={`mailto:${email}`} 
      tone={tone}
      variant="standalone"
      className={className}
      {...props}
    >
      {children ?? email}
    </AppLink>
  )
}
