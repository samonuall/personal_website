'use client'

import { forwardRef, type ReactNode, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ExternalLink, FileText, Github } from "lucide-react"

import { Project } from "@/data/projects"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import styles from "./project-row.module.css"

interface ProjectRowProps {
  project: Project
  className?: string
  /**
   * Optional id forwarded to the outer container for hash navigation.
   */
  id?: string
  /**
   * Controlled expand state.
   */
  expanded?: boolean
  /**
   * Initial expand state for uncontrolled usage.
   */
  defaultExpanded?: boolean
  /**
   * Called whenever expand state changes.
   */
  onExpandedChange?: (expanded: boolean) => void
  /**
   * Called with project id when the row toggles; useful for page-level hash handling.
   */
  onToggle?: (payload: { projectId: string; expanded: boolean }) => void
  /**
   * Optional custom media content rendered in the detail area.
   */
  mediaSlot?: ReactNode
  /**
   * Optional id for the details section (aria-controls target).
   */
  detailId?: string
}

export const ProjectRow = forwardRef<HTMLDivElement, ProjectRowProps>(
  (
    {
      project,
      className,
      id,
      expanded,
      defaultExpanded = false,
      onExpandedChange,
      onToggle,
      mediaSlot,
      detailId,
    },
    ref,
  ) => {
    const resolvedId = id ?? `project-${project.id}`
    const resolvedDetailId = detailId ?? `${resolvedId}-details`
    const isControlled = expanded !== undefined
    const [internalExpanded, setInternalExpanded] = useState(defaultExpanded)
    const isExpanded = isControlled ? expanded : internalExpanded

    const summaryTechnologies = useMemo(
      () => project.technologies.slice(0, 3),
      [project.technologies],
    )

    const handleToggle = () => {
      const next = !isExpanded
      if (!isControlled) {
        setInternalExpanded(next)
      }
      onExpandedChange?.(next)
      onToggle?.({ projectId: project.id, expanded: next })
    }

    return (
      <div ref={ref} id={resolvedId} className={cn(styles.row, "group", className)}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <div className={styles.kicker}>
            </div>
            <div className={styles.titleRow}>
              <h3 className={styles.title}>{project.title}</h3>
              <div className={styles.divider} aria-hidden="true" />
            </div>
            <div className={styles.techList}>
              {summaryTechnologies.map((tech) => (
                <span key={tech} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={isExpanded}
            aria-controls={resolvedDetailId}
            className={styles.toggle}
            data-expanded={isExpanded}
            aria-label={`${isExpanded ? "Collapse" : "Expand"} ${project.title} details`}
          >
            <span className="hidden sm:inline">{isExpanded ? "Collapse" : "Expand"}</span>
            <span className="sm:hidden">{isExpanded ? "Hide" : "Show"}</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                isExpanded ? "rotate-180" : "rotate-0",
              )}
              aria-hidden="true"
            />
          </button>
        </div>

        <div
          id={resolvedDetailId}
          className={cn(styles.details, isExpanded && styles.detailsOpen)}
          aria-hidden={!isExpanded}
        >
          <div className={styles.copy}>
            <p>{project.description}</p>

            <div className={styles.ctas}>
              {project.github && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={styles.ctaPrimary}
                >
                  <Link href={project.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </Link>
                </Button>
              )}

              {project.link && (
                <Button asChild variant="ghost" size="sm" className={styles.ctaGhost}>
                  <Link href={project.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Visit Project
                  </Link>
                </Button>
              )}

              {project.id === "2" && (
                <Button
                  asChild
                  size="sm"
                  className="shadow-none bg-gradient-to-r from-primary to-indigo-500 text-white focus-visible:ring-1 focus-visible:ring-primary/60"
                >
                  <a href="/poker_bot_report.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    Open Report
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className={styles.mediaPanel}>
            <div className={styles.mediaBody}>
              {mediaSlot ? (
                <div className={styles.mediaFrame}>{mediaSlot}</div>
              ) : (
                <div className={styles.mediaFrame}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className={styles.mediaImage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  },
)

ProjectRow.displayName = "ProjectRow"
