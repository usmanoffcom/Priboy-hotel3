import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium tracking-tight duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: 'bg-terracotta text-white shadow-sm hover:bg-terracotta-light hover:shadow-md active:scale-[0.98]',
        brand:
          'bg-gradient-to-b from-terracotta-light to-terracotta text-white shadow-md hover:shadow-lg hover:brightness-110 active:scale-[0.98]',
        'brand-outline':
          'border border-terracotta/70 text-terracotta bg-transparent hover:bg-terracotta/8 hover:border-terracotta hover:shadow-sm active:scale-[0.98]',
        'brand-ghost':
          'text-terracotta bg-transparent hover:bg-terracotta/8 active:scale-[0.98]',
        inverse:
          'border border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 hover:shadow-lg active:scale-[0.98]',
        destructive:
          'bg-destructive text-white shadow-sm hover:bg-destructive/90 hover:shadow-md focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 active:scale-[0.98]',
        outline:
          'border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-white hover:shadow-sm active:scale-[0.98]',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md active:scale-[0.98]',
        ghost:
          'hover:bg-cream-dark hover:text-foreground active:scale-[0.98]',
        'ghost-inverse':
          'text-white hover:bg-white/10 active:scale-[0.98]',
        link: 'text-terracotta underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-5 py-2.5 has-[>svg]:px-4',
        sm: 'h-9 rounded-md gap-1.5 px-4 has-[>svg]:px-3',
        lg: 'h-12 rounded-lg px-7 text-base has-[>svg]:px-5',
        xl: 'h-14 rounded-lg px-10 py-4 text-base has-[>svg]:px-6',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
