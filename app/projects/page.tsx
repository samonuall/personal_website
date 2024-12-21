import { Nav } from "@/components/nav"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BackgroundPattern } from "@/components/background-pattern"
import Link from "next/link"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundPattern />
      <Nav />
      <main className="container mx-auto px-4 py-12">
        <ScrollAnimation className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-2xl mb-4">
            {"<"} Check out my latest projects and{" "}
            <span className="text-primary">experiments</span> {"/>"}
          </h1>
          <Button asChild variant="outline">
            <Link href="https://github.com/yourusername" target="_blank">
              View GitHub Profile
            </Link>
          </Button>
        </ScrollAnimation>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </ScrollAnimation>
          ))}
        </div>
      </main>
    </div>
  )
}

