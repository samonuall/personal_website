import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface EntryCardProps {
  title: ReactNode
  /** Secondary line — authors, degree, role. */
  subtitle?: ReactNode
  /** Tertiary line — venue, dates, location. */
  meta?: ReactNode
  /** Turns the whole card into a link with a trailing arrow affordance. */
  href?: string
  children?: ReactNode
  className?: string
}

/**
 * The site's one card shape: white surface, hairline border, soft shadow.
 * Shared by publications, education, and anything else that is a short
 * title/subtitle/meta record, so those sections never re-declare styling.
 */
export function EntryCard({
  title,
  subtitle,
  meta,
  href,
  children,
  className,
}: EntryCardProps) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>
        {href && (
          <ArrowUpRight
            className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            aria-hidden="true"
          />
        )}
      </div>
      {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
      {meta && <p className="mt-1 text-xs text-muted-foreground/80">{meta}</p>}
      {children && <div className="mt-3">{children}</div>}
    </>
  )

  const classes = cn(
    "group block rounded-xl border border-border bg-card p-5 shadow-card transition-all",
    href && "hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-lift",
    className,
  )

  if (href) {
    const external = href.startsWith("http")
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {body}
      </Link>
    )
  }

  return <div className={classes}>{body}</div>
}
