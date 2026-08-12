import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface TagProps {
  children: ReactNode
  className?: string
  /** `solid` reads as a status badge; `outline` (default) is the quieter tech chip. */
  variant?: "outline" | "solid"
}

/** Small pill used for technologies, venues, and dates. */
export function Tag({ children, className, variant = "outline" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium leading-none",
        variant === "outline" && "border border-border bg-background text-muted-foreground",
        variant === "solid" && "bg-primary/10 text-primary",
        className,
      )}
    >
      {children}
    </span>
  )
}

interface TagListProps {
  items: string[]
  className?: string
  variant?: TagProps["variant"]
  /** Truncate to the first N items — useful in collapsed summaries. */
  limit?: number
}

export function TagList({ items, className, variant, limit }: TagListProps) {
  const visible = typeof limit === "number" ? items.slice(0, limit) : items
  const overflow = items.length - visible.length

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {visible.map((item) => (
        <Tag key={item} variant={variant}>
          {item}
        </Tag>
      ))}
      {overflow > 0 && <Tag variant={variant}>+{overflow}</Tag>}
    </div>
  )
}
