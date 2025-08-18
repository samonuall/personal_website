'use client'

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/data/projects"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function ProjectSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleCardClick = (projectId: string) => {
    router.push(`/projects#${projectId}`)
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className="snap-center shrink-0 w-[300px] cursor-pointer transition-all duration-300 hover:border hover:border-primary hover:bg-opacity-10 overflow-hidden"
            onClick={() => handleCardClick(project.id)}
          >
            <div className="relative h-32 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-2"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 line-clamp-2">{project.title}</h3>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary rounded-full text-xs text-primary-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-primary rounded-full text-xs text-primary-foreground">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="absolute top-1/2 -left-4 -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scroll('left')}
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute top-1/2 -right-4 -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scroll('right')}
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
