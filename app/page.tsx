import dynamic from "next/dynamic"

import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import { BackgroundPattern } from "@/components/background-pattern"
import { ExperienceSlider } from "@/components/experience-slider"
import { Nav } from "@/components/nav"
import { ProjectSlider } from "@/components/project-slider"
import { ScrollAnimation } from "@/components/scroll-animation"
import { SocialLinks } from "@/components/social-links"
import { TechnologiesGrid } from "@/components/technologies-grid"
import { TypedHeadline } from "@/components/typed-headline"
import { Button } from "@/components/ui/button"

const HeroVisualizer = dynamic(
  () => import("@/components/HeroVisualizer").then((mod) => mod.HeroVisualizer),
  {
    ssr: false,
    loading: () => <HeroVisualizerFallback />,
  },
)

function HeroVisualizerFallback() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-primary/25 via-background to-indigo-900/40">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.24), transparent 35%), radial-gradient(circle at 80% 10%, rgba(16, 185, 129, 0.22), transparent 30%), radial-gradient(circle at 65% 80%, rgba(59, 130, 246, 0.18), transparent 32%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 mix-blend-screen opacity-70"
        style={{
          background:
            "linear-gradient(120deg, rgba(255, 255, 255, 0.12) 0%, transparent 40%), linear-gradient(300deg, rgba(255, 255, 255, 0.1) 0%, transparent 35%)",
        }}
        aria-hidden="true"
      />
      <div className="relative flex h-full items-center justify-center p-6">
        <div className="max-w-[18rem] rounded-xl border border-border/40 bg-background/70 px-4 py-3 text-center text-sm text-foreground/80 backdrop-blur">
          Ambient visual loading&hellip;
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Analytics />
      <BackgroundPattern />
      <Nav />
      <main className="container mx-auto px-4 py-12">
        <ScrollAnimation delay={0} rootMargin="100px 0px">
          <section className="relative mb-24 overflow-hidden rounded-3xl border border-border/30 bg-card/20 p-6 sm:p-10 shadow-2xl">
            <div
              className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-10 bottom-[-120px] h-80 w-80 rounded-full bg-indigo-600/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative z-10 flex flex-col gap-6">
                <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span>AI systems portfolio</span>
                </div>

                <TypedHeadline
                  fallback="Hi, I&apos;m Sam O&apos;Nuallain"
                  words={[
                    "Python, FastAPI, and LangChain systems",
                    "PyTorch research with HuggingFace models",
                    "React interfaces for AI tools",
                    "SQL and Pandas data pipelines",
                    "C/C++ reliability for space systems",
                  ]}
                  className="text-4xl font-semibold leading-tight text-primary sm:text-5xl lg:text-6xl"
                />

                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  AI engineer and researcher building production-ready systems with resilient MLOps,
                  concise research, and thoughtful interfaces.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="outline" className="border-primary/30 text-primary">
                    <Link href="/experience">See experiences</Link>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-primary to-indigo-500 text-white">
                    <Link href="/projects">View projects</Link>
                  </Button>
                </div>

                <div className="grid gap-3 text-sm text-muted-foreground sm:max-w-xl sm:grid-cols-2">
                  <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-primary/70" aria-hidden="true" />
                    <span>LLM + multi-agent workflows</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-amber-400/70" aria-hidden="true" />
                    <span>Product-focused research</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-sky-400/70" aria-hidden="true" />
                    <span>Reliable deployment + evals</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-indigo-400/70" aria-hidden="true" />
                    <span>Interfaces that explain the work</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div
                  className="pointer-events-none absolute inset-0 -z-10 -m-6 rounded-[32px] bg-gradient-to-br from-primary/40 via-indigo-600/25 to-transparent blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
                  <HeroVisualizer />
                </div>
              </div>
            </div>
          </section>
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
