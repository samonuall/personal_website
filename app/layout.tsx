import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'

import { ThemeScript } from '@/components/theme-script'

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const heading = Lora({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-heading',
})

const siteUrl = 'https://samonuall.vercel.app'
const description =
  'Sam O’Nuallain — ML engineer and researcher building retrieval systems, LLM tooling, and the interfaces around them.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sam O'Nuallain — ML Engineer & Researcher",
    template: "%s — Sam O'Nuallain",
  },
  description,
  openGraph: {
    title: "Sam O'Nuallain — ML Engineer & Researcher",
    description,
    url: siteUrl,
    siteName: "Sam O'Nuallain",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sam O'Nuallain — ML Engineer & Researcher",
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable} ${heading.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  )
}
