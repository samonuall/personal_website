import { Analytics } from "@vercel/analytics/next"

import { BackgroundPattern } from "@/components/background-pattern"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { FeaturedProjects } from "@/components/featured-projects"
import { Hero } from "@/components/hero"
import { Nav } from "@/components/nav"
import { ResearchSection } from "@/components/research-section"
import { SiteFooter } from "@/components/site-footer"
import { SkillsSection } from "@/components/skills-section"
import { Section, SectionHeader } from "@/components/ui/section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Analytics />
      <BackgroundPattern />
      <Nav />

      <main className="container">
        <Hero />

        <Section id="work" divided>
          <SectionHeader
            eyebrow="Experience"
            title="Where I've worked"
            description="Research labs, product teams, and one satellite ground system."
          />
          <ExperienceTimeline />
        </Section>

        <FeaturedProjects />

        <SkillsSection />

        <ResearchSection />
      </main>

      <SiteFooter />
    </div>
  )
}
