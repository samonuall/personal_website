'use client'

import { Nav } from "@/components/nav"
import { ExperienceCard } from "@/components/experience-card"
import { experiences } from "@/data/experiences"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BackgroundPattern } from "@/components/background-pattern"
import Link from "next/link"
import { useEffect, useRef } from "react"

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
      <BackgroundPattern />
      <Nav />
      <main className="container mx-auto px-4 py-12">
        <ScrollAnimation className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-2xl mb-4">
            {"<"} Here, you can see my experience as a {" "}
            <span className="text-primary">Software Engineer</span> {"/>"}
          </h1>
          <Button asChild variant="outline">
            <Link href="/cv.pdf" target="_blank">Download CV</Link>
          </Button>
        </ScrollAnimation>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ScrollAnimation key={experience.id} delay={index * 100}>
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

