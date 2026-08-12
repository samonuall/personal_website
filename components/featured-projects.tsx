import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ProjectRow } from "@/components/project-row"
import { Section, SectionHeader } from "@/components/ui/section"
import { featuredProjects, type Project } from "@/data/projects"

export function FeaturedProjects({ items = featuredProjects }: { items?: Project[] }) {
  return (
    <Section id="projects" divided>
      <SectionHeader
        eyebrow="Selected projects"
        title="Recent work"
        description="A few things I've built and written up. Expand a row for the details."
        action={
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-primary/80"
          >
            All projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        }
      />

      <div className="mt-10 space-y-4">
        {items.map((project) => (
          <ProjectRow key={project.id} project={project} id={`featured-${project.id}`} />
        ))}
      </div>
    </Section>
  )
}
