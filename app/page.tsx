import dynamic from "next/dynamic"

import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import { BackgroundPattern } from "@/components/background-pattern"
import { Nav } from "@/components/nav"
import { ScrollAnimation } from "@/components/scroll-animation"
import { StoryScroller } from "@/components/StoryScroller"
import { SkillsSection } from "@/components/skills-section"
import { SocialLinks } from "@/components/social-links"
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
                    <Link href="mailto:samonuall@gmail.com">Get in touch</Link>
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

        <ScrollAnimation className="mb-24" delay={60} rootMargin="160px 0px">
          <StoryScroller />
        </ScrollAnimation>

        <ScrollAnimation className="mb-24" delay={90} rootMargin="160px 0px">
          <SkillsSection />
        </ScrollAnimation>

        <ScrollAnimation className="mb-24" delay={120} rootMargin="160px 0px">
          <section className="relative overflow-hidden rounded-3xl border border-border/30 bg-card/25 p-6 shadow-2xl sm:p-10">
            <div
              className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-primary/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-[-120px] right-[-40px] h-80 w-80 rounded-full bg-indigo-600/25 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid items-start gap-10 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span>Education</span>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-border/40 bg-background/70 p-5 shadow-sm">
                      <h3 className="text-lg font-semibold text-foreground">
                        University of Massachusetts Amherst
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        MS in Computer Science
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground/80">Expected May 2026</p>
                    </div>

                    <div className="rounded-2xl border border-border/40 bg-background/70 p-5 shadow-sm">
                      <h3 className="text-lg font-semibold text-foreground">
                        University of Massachusetts Amherst
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        BS in Computer Science & Economics
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <p className="text-xs text-muted-foreground/80">Graduated December 2024</p>
                        <span className="text-xs text-muted-foreground/60">•</span>
                        <p className="text-xs font-semibold text-primary">3.9 GPA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>Publications</span>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="https://debrup-61.github.io/RaDeR.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-2xl border border-border/40 bg-background/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                            RaDeR: Reasoning-aware Dense Retrieval Models
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            D. Das, S. O&apos;Nuallain, R. Rahimi
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground/80">EMNLP &apos;25</p>
                        </div>
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
