'use client'

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { Analytics } from "@vercel/analytics/next"
import { Github } from "lucide-react"

import { BackgroundPattern } from "@/components/background-pattern"
import { Nav } from "@/components/nav"
import { ProjectRow } from "@/components/project-row"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const registerRowRef = useCallback(
    (projectId: string) => (node: HTMLDivElement | null) => {
      rowRefs.current[projectId] = node
    },
    [],
  )

  const focusHashTarget = useCallback((targetId: string | null) => {
    if (!targetId) return

    const decodedId = decodeURIComponent(targetId)
    setExpandedId(decodedId)

    const target = rowRefs.current[decodedId]
    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }
  }, [])

  useEffect(() => {
    const initialHash = window.location.hash.slice(1)
    if (initialHash) focusHashTarget(initialHash)

    const onHashChange = () => {
      const nextHash = window.location.hash.slice(1)
      if (nextHash) focusHashTarget(nextHash)
      else setExpandedId(null)
    }

    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [focusHashTarget])

  const handleRowToggle = useCallback(
    ({ projectId, expanded }: { projectId: string; expanded: boolean }) => {
      setExpandedId((current) => {
        if (expanded) return projectId
        return current === projectId ? null : current
      })

      if (expanded) {
        window.history.replaceState(null, "", `#${projectId}`)
      } else {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`)
      }
    },
    [],
  )

  return (
    <div className="min-h-screen">
      <Analytics />
      <BackgroundPattern />
      <Nav />

      <main className="container">
        <section className="max-w-2xl space-y-5 pt-16 pb-12 sm:pt-20">
          <p className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" aria-hidden="true" />
            Projects
          </p>
          <h1 className="text-4xl leading-tight text-foreground sm:text-5xl">
            Things I&apos;ve built
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Research projects, ML services, and coursework I took further than it needed to
            go. Expand any row for the write-up, results, and links.
          </p>
          <div className="pt-1">
            <Button asChild variant="outline">
              <Link href="https://github.com/samonuall" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub profile
              </Link>
            </Button>
          </div>
        </section>

        <div className="space-y-4 pb-20">
          {projects.map((project) => (
            <ProjectRow
              key={project.id}
              ref={registerRowRef(project.id)}
              project={project}
              id={project.id}
              expanded={expandedId === project.id}
              onToggle={handleRowToggle}
            />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
