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
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Analytics/>
      <BackgroundPattern />
      <Nav />
      <main className="container mx-auto px-4 py-12">
        <ScrollAnimation delay={0} rootMargin="100px 0px">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="grid gap-6 bg-card/5 p-8 rounded-2xl shadow-lg">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary">
                Hi, I&apos;m Sam O&apos;Nuallain
              </h1>
              <p className="text-lg text-muted-foreground max-w-prose">
                AI engineer and researcher building production-ready machine learning systems, from autonomous agents to dense retrieval models. 
                I am completing my MS in Computer Science at UMass Amherst and seeking full-time AI/ML Engineer roles for Summer 2026.
              </p>
              <div className="flex gap-4">
                <Button asChild variant="outline" className="text-primary border-primary/30">
                  <Link href="/experience">See experiences</Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-primary to-indigo-500 text-white">
                  <Link href="/projects">View projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-card">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="mb-24" delay={100} rootMargin="150px 0px">
          <h2 className="text-3xl mb-8 text-primary">Experience</h2>
          <ExperienceSlider />
        </ScrollAnimation>

        <ScrollAnimation className="mb-24" delay={150} rootMargin="150px 0px">
          <h2 className="text-3xl mb-8 text-primary">Projects</h2>
          <ProjectSlider />
        </ScrollAnimation>

        <ScrollAnimation className="mb-24" delay={200} rootMargin="150px 0px">
          <TechnologiesGrid />
        </ScrollAnimation>
      </main>

      <footer className="border-t border-border/20 bg-popover/5">
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

