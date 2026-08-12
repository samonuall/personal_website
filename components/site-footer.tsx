import Link from "next/link"

import { SocialLinks } from "./social-links"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="container flex flex-col items-start gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-foreground">
            Want to talk about retrieval, agents, or RL?{" "}
            <Link
              href="mailto:samonuall@gmail.com"
              className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
            >
              Send me an email
            </Link>
            .
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sam O&apos;Nuallain
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  )
}
