import { Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link
        href="https://github.com/samonuall"
        target="_blank"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Github className="h-5 w-5" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/sam-onuallain"
        target="_blank"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      <Link
        href="mailto:samonuall@gmail.com"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Mail className="h-5 w-5" />
      </Link>
    </div>
  )
}

