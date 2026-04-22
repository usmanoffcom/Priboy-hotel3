"use client"

import { Bed } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { EXTRA_BED_TOOLTIP } from "@/lib/capacity"

export function ExtraBedIndicator({
  className,
  priceLabel = EXTRA_BED_TOOLTIP.price,
}: {
  className?: string
  priceLabel?: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={[
            "inline-flex items-center gap-0.5 align-middle text-muted-foreground cursor-help",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          aria-label={EXTRA_BED_TOOLTIP.title}
        >
          <Bed className="h-3.5 w-3.5" />
        </span>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={6}>
        <div className="space-y-0.5">
          <div className="font-medium">{EXTRA_BED_TOOLTIP.title}</div>
          <div className="opacity-90">{EXTRA_BED_TOOLTIP.description}</div>
          <div className="opacity-90">{priceLabel}</div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}


