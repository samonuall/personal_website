import Link from "next/link"
import { SocialLinks } from "./social-links"
import ThemeToggle from './theme-toggle'

export function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 md:p-6">
      <Link href="/" className="text-xl font-semibold">
        portfolio
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
          projects
        </Link>
        <Link href="/experience" className="text-muted-foreground hover:text-primary transition-colors">
          experience
        </Link>
        <SocialLinks />
        <ThemeToggle />
      </div>
    </nav>
  )
}

