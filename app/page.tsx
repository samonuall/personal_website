import { Button } from "@/components/ui/button"
import { ExperienceSlider } from "@/components/experience-slider"
import { ProjectSlider } from "@/components/project-slider"
import { Nav } from "@/components/nav"
import { TechnologiesGrid } from "@/components/technologies-grid"
import { SocialLinks } from "@/components/social-links"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BackgroundPattern } from "@/components/background-pattern"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundPattern />
      <Nav />
      <main className="container mx-auto px-4 py-12">
        <ScrollAnimation delay={0} rootMargin="100px 0px">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="grid gap-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary">
                Hi, I&apos;m Sam O&apos;Nuallain
              </h1>
              <p className="text-xl text-muted-foreground">
                I&apos;m a Computer Science student at the University of Massachusetts Amherst, 
                with a strong interest in AI and machine learning. I&apos;m pursuing a MS in Computer Science 
                (expected graduation: May 2026) and am interning at Klaviyo as a Software Engineer this summer.
              </p>
              <div className="flex gap-4">
                <Button asChild variant="outline">
                  <Link href="/experience">See experiences</Link>
                </Button>
                <Button asChild variant="default">
                  <Link href="/projects">View projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="mb-24" delay={100} rootMargin="150px 0px">
          <h2 className="text-3xl mb-8 text-secondary">Experience</h2>
          <ExperienceSlider />
        </ScrollAnimation>

        <ScrollAnimation className="mb-24" delay={150} rootMargin="150px 0px">
          <h2 className="text-3xl mb-8 text-secondary">Projects</h2>
          <ProjectSlider />
        </ScrollAnimation>

        <ScrollAnimation className="mb-24" delay={200} rootMargin="150px 0px">
          <TechnologiesGrid />
        </ScrollAnimation>
      </main>

      <footer className="border-t relative bg-accent/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sam O&apos;Nuallain. All rights reserved.
            </p>
            <SocialLinks />
          </div>
        </div>
      </footer>
    </div>
  )
}

