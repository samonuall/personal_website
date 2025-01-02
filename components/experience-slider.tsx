'use client'

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { experiences } from "@/data/experiences"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function ExperienceSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleCardClick = (experienceId: string) => {
    router.push(`/experience#${experienceId}`)
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {experiences.map((experience) => (
          <Card 
            key={experience.id} 
            className="snap-center shrink-0 w-[300px] cursor-pointer transition-all duration-300 hover:border hover:border-primary hover:bg-opacity-10"
            onClick={() => handleCardClick(experience.id)}
          >
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">{experience.company}</h3>
              <p className="text-sm text-muted-foreground">{experience.dateRange}</p>
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

