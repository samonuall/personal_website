'use client'

import { Nav } from "@/components/nav"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BackgroundPattern } from "@/components/background-pattern"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Projects() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Handle hash change to scroll to specific card
    const hash = window.location.hash.slice(1)
    if (hash) {
      const element = projectRefs.current[Number(hash)]
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        // Trigger a click event on the card to open the dialog
        const event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        element.dispatchEvent(event);
      }
    }
  }, [])
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
            <Link href="https://github.com/samonuall" target="_blank">
              View GitHub Profile
            </Link>
          </Button>
        </ScrollAnimation>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ScrollAnimation 
              key={project.id} 
              delay={Math.min(index * 50, 200)}
              threshold={0.05}
              rootMargin="100px 0px"
            >
              <div ref={el => {
                projectRefs.current[Number(project.id)] = el;
                return;
              }}>
                <ProjectCard project={project} />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </main>
    </div>
  )
}

