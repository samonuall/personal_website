import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  /** Draws a hairline rule above the section to separate it from the previous one. */
  divided?: boolean
}

/**
 * Vertical rhythm wrapper. Every page section should use this so spacing and
 * dividers stay identical across the site instead of being re-tuned per page.
 */
export function Section({ children, className, id, divided = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20",
        divided && "border-t border-border/70",
        className,
      )}
    >
      {children}
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  /** Optional trailing content (a link or button) aligned to the right on wide screens. */
  action?: ReactNode
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl space-y-3">
        {eyebrow && (
          <p className="eyebrow flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-highlight" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl leading-tight text-foreground sm:text-3xl">{title}</h2>
        {description && (
          <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
