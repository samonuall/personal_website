'use client'

import { Nav } from "@/components/nav"
import { ExperienceCard } from "@/components/experience-card"
import { experiences } from "@/data/experiences"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BackgroundPattern } from "@/components/background-pattern"
import { useEffect, useRef } from "react"
import { Analytics } from "@vercel/analytics/next"

export default function Experience() {
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([])


  useEffect(() => {
    // Handle hash change to scroll to specific card
    const hash = window.location.hash.slice(1)
    if (hash) {
      const element = experienceRefs.current[Number(hash)]
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        // Trigger a click event on the card
        const event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        console.log(element)
        console.log(event)
        element.dispatchEvent(event);
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Analytics />
      <BackgroundPattern />
      <Nav />
      <main className="container mx-auto px-4 py-12">
        <ScrollAnimation className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-2xl mb-4">
            <span className="text-primary">Experiences</span>
          </h1>
        </ScrollAnimation>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ScrollAnimation 
              key={experience.id} 
              delay={Math.min(index * 50, 200)}
              threshold={0.05}
              rootMargin="100px 0px"
            >
                <ExperienceCard 
                  experience={experience} 
                  ref={el => {
                    experienceRefs.current[Number(experience.id)] = el;
                    return;
                  }
                  }
                />
            </ScrollAnimation>
          ))}
        </div>
      </main>
    </div>
  )
}

