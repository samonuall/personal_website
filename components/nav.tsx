import Link from "next/link"

import { cn } from "@/lib/utils"
import { SocialLinks } from "./social-links"
import ThemeToggle from "./theme-toggle"

// `alwaysVisible` links survive the narrowest viewports; the rest hide below `sm`
// so the header never overflows on small phones.
const links = [
  { href: "/#work", label: "Work" },
  { href: "/projects", label: "Projects", alwaysVisible: true },
  { href: "/#research", label: "Research" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-heading text-lg tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Sam O&apos;Nuallain
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-center gap-4 text-sm text-muted-foreground sm:gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground",
                  !link.alwaysVisible && "hidden sm:inline",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
          {/* Social links also live in the footer, so they drop off on narrow screens. */}
          <SocialLinks className="hidden sm:flex" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
