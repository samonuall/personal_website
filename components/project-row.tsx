'use client'

import { forwardRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ExternalLink, FileText, Github, Globe } from "lucide-react"

import type { Project, ProjectLink, ProjectLinkKind } from "@/data/projects"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { TagList } from "@/components/ui/tag"
import styles from "./project-row.module.css"

const linkPresets: Record<
  ProjectLinkKind,
  { label: string; icon: typeof Github; variant: "default" | "outline" | "ghost" }
> = {
  paper: { label: "Read the paper", icon: FileText, variant: "default" },
  site: { label: "Project page", icon: Globe, variant: "outline" },
  github: { label: "GitHub", icon: Github, variant: "outline" },
  demo: { label: "Open demo", icon: ExternalLink, variant: "ghost" },
}

interface ProjectRowProps {
  project: Project
  className?: string
  /** Id forwarded to the container for hash navigation. */
  id?: string
  /** Controlled expand state. */
  expanded?: boolean
  defaultExpanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  /** Called with the project id whenever the row toggles; used for hash sync. */
  onToggle?: (payload: { projectId: string; expanded: boolean }) => void
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
      detailId,
    },
    ref,
  ) => {
    const resolvedId = id ?? project.id
    const resolvedDetailId = detailId ?? `${resolvedId}-details`
    const isControlled = expanded !== undefined
    const [internalExpanded, setInternalExpanded] = useState(defaultExpanded)
    const isExpanded = isControlled ? expanded : internalExpanded

    const handleToggle = () => {
      const next = !isExpanded
      if (!isControlled) setInternalExpanded(next)
      onExpandedChange?.(next)
      onToggle?.({ projectId: project.id, expanded: next })
    }

    return (
      <div
        ref={ref}
        id={resolvedId}
        className={cn(
          "group rounded-2xl border border-border bg-card shadow-card transition-colors",
          isExpanded ? "border-primary/30" : "hover:border-primary/25",
          className,
        )}
      >
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={isExpanded}
          aria-controls={resolvedDetailId}
          className="flex w-full items-start gap-4 rounded-2xl px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 sm:px-6 sm:py-6"
        >
          <span className="hidden w-14 shrink-0 pt-1 text-sm tabular-nums text-muted-foreground sm:block">
            {project.year}
          </span>

          <span className="min-w-0 flex-1 space-y-2">
            <span className="block font-heading text-lg leading-snug text-foreground transition-colors group-hover:text-primary sm:text-xl">
              {project.title}
            </span>
            <span className="block text-sm leading-relaxed text-muted-foreground">
              {project.tagline}
            </span>
            <TagList items={project.technologies} limit={4} className="pt-1" />
          </span>

          <span
            className={cn(
              "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors",
              isExpanded && "border-primary/40 text-primary",
            )}
            aria-hidden="true"
          >
            <ChevronDown
              className={cn("h-4 w-4 transition-transform duration-200", isExpanded && "rotate-180")}
            />
          </span>
        </button>

        <div
          id={resolvedDetailId}
          className={cn(styles.details, isExpanded && styles.detailsOpen)}
        >
          <div className={styles.detailsInner}>
            <div className="grid gap-8 border-t border-border/70 px-5 pb-6 pt-6 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative pl-5 text-sm leading-relaxed text-foreground/80"
                      >
                        <span
                          className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-highlight"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.links.map((link) => (
                      <ProjectLinkButton key={link.href} link={link} />
                    ))}
                  </div>
                )}
              </div>

              <ProjectMediaPanel project={project} />
            </div>
          </div>
        </div>
      </div>
    )
  },
)

ProjectRow.displayName = "ProjectRow"

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  const preset = linkPresets[link.kind]
  const Icon = preset.icon
  const external = link.href.startsWith("http")

  return (
    <Button asChild size="sm" variant={preset.variant}>
      <Link
        href={link.href}
        {...(external
          ? { target: "_blank", rel: "noreferrer" }
          : { target: "_blank", rel: "noopener noreferrer" })}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
        {link.label ?? preset.label}
      </Link>
    </Button>
  )
}

function ProjectMediaPanel({ project }: { project: Project }) {
  const { media, title } = project

  if (!media) {
    return (
      <div className="flex min-h-[180px] items-center justify-center rounded-xl border border-dashed border-border bg-muted/50">
        <span className="font-heading text-3xl text-muted-foreground/40" aria-hidden="true">
          {title.slice(0, 2)}
        </span>
      </div>
    )
  }

  return (
    <figure className="space-y-2">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-muted/40">
        {media.type === "video" ? (
          <video
            controls
            preload="none"
            poster={media.poster}
            className="h-full w-full object-contain"
          >
            <source src={media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={media.src}
            alt={title}
            fill
            sizes="(min-width: 1024px) 440px, 90vw"
            className="object-contain p-2"
          />
        )}
      </div>
      {media.caption && (
        <figcaption className="text-xs leading-relaxed text-muted-foreground">
          {media.caption}
        </figcaption>
      )}
    </figure>
  )
}
