'use client'

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { Analytics } from "@vercel/analytics/next"

import { BackgroundPattern } from "@/components/background-pattern"
import { Nav } from "@/components/nav"
import { ProjectRow } from "@/components/project-row"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { projects } from "@/data/projects"
import styles from "./projects.module.css"

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const registerRowRef = useCallback(
    (projectId: string) => (node: HTMLDivElement | null) => {
      rowRefs.current[projectId] = node
    },
    [],
  )

  const focusHashTarget = useCallback(
    (targetId: string | null, { scroll = true }: { scroll?: boolean } = {}) => {
      if (!targetId) return

      const decodedId = decodeURIComponent(targetId)
      setExpandedId(decodedId)

      const target = rowRefs.current[decodedId]
      if (target && scroll) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
        })
      }
    },
    [],
  )

  useEffect(() => {
    const initialHash = window.location.hash.slice(1)
    if (initialHash) {
      focusHashTarget(initialHash)
    }

    const onHashChange = () => {
      const nextHash = window.location.hash.slice(1)
      if (nextHash) {
        focusHashTarget(nextHash)
      } else {
        setExpandedId(null)
      }
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
    <div className="min-h-screen bg-background text-foreground">
      <Analytics />
      <BackgroundPattern />
      <Nav />
      <main className="container mx-auto px-4 py-12">
        <ScrollAnimation className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className={cn("text-3xl font-semibold leading-tight sm:text-4xl", styles.heroTitle)}>Projects</h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            A selection of my some of my recent work.
          </p>
          <div className="mt-6 inline-flex">
            <Button asChild variant="outline" className="border-primary/35 text-primary shadow-none">
              <Link href="https://github.com/samonuall" target="_blank" rel="noreferrer">
                View GitHub Profile
              </Link>
            </Button>
          </div>
        </ScrollAnimation>

        <div className={cn("mx-auto flex max-w-5xl flex-col", styles.list)}>
          {projects.map((project, index) => (
            <ScrollAnimation
              key={project.id}
              delay={Math.min(index * 60, 220)}
              threshold={0.05}
              rootMargin="120px 0px"
              className={styles.listItem}
            >
              <ProjectRow
                ref={registerRowRef(project.id)}
                project={project}
                id={project.id}
                detailId={`${project.id}-details`}
                expanded={expandedId === project.id}
                onToggle={handleRowToggle}
                className="backdrop-blur-sm"
              />
            </ScrollAnimation>
          ))}
        </div>
      </main>
    </div>
  )
}
