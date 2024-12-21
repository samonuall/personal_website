import { Nav } from "@/components/nav"
import { ExperienceCard } from "@/components/experience-card"
import { experiences } from "@/data/experiences"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BackgroundPattern } from "@/components/background-pattern"
import Link from "next/link"

export default function Experience() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundPattern />
      <Nav />
      <main className="container mx-auto px-4 py-12">
        <ScrollAnimation className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-2xl mb-4">
            {"<"} Here, you can know me a little more and see my whole experience as a{" "}
            <span className="text-primary">Front-End Software Engineer</span> {"/>"}
          </h1>
          <Button asChild variant="outline">
            <Link href="/cv.pdf">Download CV</Link>
          </Button>
        </ScrollAnimation>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ScrollAnimation key={experience.id} delay={index * 100}>
              <ExperienceCard experience={experience} />
            </ScrollAnimation>
          ))}
        </div>
      </main>
    </div>
  )
}
