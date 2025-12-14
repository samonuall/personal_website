'use client'

import { useEffect, useMemo, useRef, useState } from "react"
import { Activity, Route, Sparkles } from "lucide-react"

import { experiences } from "@/data/experiences"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

type StoryPanel = {
  id: string
  eyebrow: string
  title: string
  summary: string
  detail?: string
  tags: string[]
  metrics: {
    label: string
    value: string
    hint?: string
  }[]
  accent: string
}

export function StoryScroller() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [parallaxOffsets, setParallaxOffsets] = useState<number[]>([])

  const storyPanels: StoryPanel[] = useMemo(() => {
    const klaviyo = experiences.find((exp) => exp.company === "Klaviyo")
    const clipProject = projects.find((proj) => proj.title.includes("CLIP-Based"))
    const xCamp = experiences.find((exp) => exp.company === "X-Camp Academy")
    const poker = projects.find((proj) => proj.title.includes("Poker Agent"))
    const radar = projects.find((proj) => proj.title.startsWith("RaDeR"))

    return [
      {
        id: "klaviyo-analytics",
        eyebrow: `${klaviyo?.company ?? "Messaging"} • ${klaviyo?.contractType ?? "Internship"}`,
        title: klaviyo
          ? `${klaviyo.title} — shipped analytics for 400+ senders`
          : "Data-rich messaging systems",
        summary:
          klaviyo?.description[0] ??
          "Shipped full-stack analytics that teams rely on to understand and iterate on real-time messaging.",
        detail:
          klaviyo?.description[1] ??
          "Orchestrated parallel API calls and added the right data context so ML-powered reporting stayed trustworthy.",
        tags: ["Python", "React", "AWS", "API analytics"],
        metrics: [
          {
            label: "Product adoption",
            value: "400+ companies",
            hint: "using the push analytics feature",
          },
          {
            label: "Report throughput",
            value: "5,000 reports / 2 wks",
            hint: "customer-facing dashboards",
          },
          {
            label: "Roadmap velocity",
            value: "3-week ship",
            hint: "MCP server feature lifecycle",
          },
        ],
        accent: "from-emerald-400/25 via-primary/10 to-transparent",
      },
      {
        id: "clip-pipeline",
        eyebrow: clipProject?.title ?? "Vector search service",
        title: "CLIP-powered similarity with FastAPI",
        summary:
          clipProject?.description ??
          "Built a pipeline to embed and serve image vectors for high-throughput search.",
        detail: "Kept latency predictable by separating embedding from retrieval and leaning on GPU-backed workers.",
        tags: clipProject?.technologies ?? ["Python", "FastAPI", "CLIP"],
        metrics: [
          {
            label: "Dataset scale",
            value: "100k images embedded",
            hint: "Spark + Kafka pipeline",
          },
          {
            label: "Inference speed",
            value: "162 QPS (8-core)",
            hint: "FastAPI CLIP service",
          },
          {
            label: "Deployment",
            value: "Dockerized end-to-end",
            hint: "GPU/CPU handoff",
          },
        ],
        accent: "from-indigo-500/25 via-sky-400/15 to-transparent",
      },
      {
        id: "xcamp-tutor",
        eyebrow: `${xCamp?.company ?? "LLM tutor"} • ${xCamp?.location ?? "Remote"}`,
        title: "LLM tutor that scales past classrooms",
        summary:
          xCamp?.description[0] ??
          "Built an LLM-powered coding tutor used by thousands of students in parallel.",
        detail:
          xCamp?.description[3] ??
          "Sessions stay responsive through multi-threaded message handling and an embedding-backed retrieval layer.",
        tags: ["LangChain", "React", "OpenAI API", "Concurrency"],
        metrics: [
          {
            label: "Students reached",
            value: "2,000+ learners",
            hint: "LLM coding tutor",
          },
          {
            label: "Context index",
            value: "90k submissions",
            hint: "embedded for retrieval",
          },
          {
            label: "Debugger lift",
            value: "+40% accuracy",
            hint: "dense retrieval grounding",
          },
        ],
        accent: "from-amber-400/20 via-rose-400/15 to-transparent",
      },
      {
        id: "poker-agent",
        eyebrow: poker?.title ?? "Reinforcement learning agent",
        title: "Monte Carlo planning that learns",
        summary:
          poker?.description ??
          "Engineered a reinforcement learning poker agent that balances exploration with calculated rollouts.",
        detail: "Policy updates stay stable by mixing search-backed moves with replay buffers.",
        tags: poker?.technologies ?? ["Python", "PyTorch", "MCTS"],
        metrics: [
          {
            label: "Simulations run",
            value: "50,000+ poker games",
            hint: "self-play training",
          },
          {
            label: "Policy design",
            value: "AlphaZero-inspired",
            hint: "custom network for Hold'em",
          },
        ],
        accent: "from-purple-500/20 via-primary/15 to-transparent",
      },
      {
        id: "rader",
        eyebrow: radar?.title ?? "Retrieval research",
        title: "Retrieval augmented dense retrieval",
        summary:
          radar?.description ??
          "Researching how retrieval models boost LLM comprehension and recall.",
        detail: "Evaluations pair HuggingFace models with targeted augmentation to keep outputs grounded.",
        tags: radar?.technologies ?? ["Python", "HuggingFace", "PyTorch"],
        metrics: [
          {
            label: "Benchmark",
            value: "SOTA on BRIGHT",
            hint: "reasoning-aware dense retrieval",
          },
          {
            label: "Data pipeline",
            value: "15x throughput",
            hint: "vLLM GPU data generation",
          },
        ],
        accent: "from-cyan-400/20 via-emerald-300/20 to-transparent",
      },
    ]
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener("change", updatePreference)
    return () => mediaQuery.removeEventListener("change", updatePreference)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const scrollEl = scrollRef.current
    if (!scrollEl) return

    const handleScroll = () => {
      requestAnimationFrame(() => {
        const containerRect = scrollEl.getBoundingClientRect()
        const offsets = panelRefs.current.map((panel) => {
          if (!panel) return 0
          const rect = panel.getBoundingClientRect()
          const viewportHeight = containerRect.height || 1
          const distanceFromCenter =
            (rect.top + rect.height / 2 - (containerRect.top + viewportHeight / 2)) /
            viewportHeight
          return -distanceFromCenter * 18
        })
        setParallaxOffsets(offsets)
      })
    }

    handleScroll()
    scrollEl.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      scrollEl.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [prefersReducedMotion, storyPanels.length])

  useEffect(() => {
    const scrollEl = scrollRef.current
    if (!scrollEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = panelRefs.current.findIndex((panel) => panel === entry.target)
            if (index !== -1) {
              setActiveIndex(index)
            }
          }
        })
      },
      {
        root: scrollEl,
        threshold: 0.4,
        rootMargin: "-10% 0px -10% 0px",
      },
    )

    panelRefs.current.forEach((panel) => panel && observer.observe(panel))
    return () => observer.disconnect()
  }, [storyPanels.length])

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-border/30 bg-card/25 p-6 shadow-2xl sm:p-10"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.1),transparent_28%),linear-gradient(140deg,rgba(255,255,255,0.04),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="relative grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[28px] border border-border/50 bg-background/70 shadow-xl backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(96,165,250,0.16),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.12),transparent_26%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background via-background/70 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div
              ref={scrollRef}
              className="no-scrollbar relative h-[70vh] overflow-y-auto scroll-smooth px-1 py-4 sm:px-3 lg:h-[calc(100vh-9rem)] lg:px-4 snap-y snap-mandatory"
            >
              <div className="space-y-12">
                {storyPanels.map((panel, index) => (
                  <article
                    key={panel.id}
                    ref={(el: HTMLDivElement | null) => {
                      panelRefs.current[index] = el
                    }}
                    className="relative scroll-m-6 snap-start"
                  >
                    {!prefersReducedMotion && (
                      <div
                        className={cn(
                          "pointer-events-none absolute -inset-x-6 inset-y-2 -z-10 rounded-[32px] blur-3xl",
                          `bg-gradient-to-br ${panel.accent}`,
                        )}
                        style={{
                          transform: `translateY(${(parallaxOffsets[index] ?? 0) * 1.1}px)`,
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <div
                      className={cn(
                        "relative rounded-3xl border border-border/50 bg-card/80 p-6 shadow-lg backdrop-blur",
                        !prefersReducedMotion && "transition-transform duration-500 ease-out",
                      )}
                      style={
                        prefersReducedMotion
                          ? undefined
                          : { transform: `translateY(${(parallaxOffsets[index] ?? 0) * 0.6}px)` }
                      }
                    >
                      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground/70">
                        <Route className="h-4 w-4 text-primary" aria-hidden="true" />
                        <span>{panel.eyebrow}</span>
                      </div>

                      <div className="mt-3 space-y-3">
                        <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
                          {panel.title}
                        </h3>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {panel.summary}
                        </p>
                        {panel.detail && (
                          <p className="text-sm leading-relaxed text-foreground/80">
                            {panel.detail}
                          </p>
                        )}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {panel.tags.map((tag) => (
                          <span
                            key={`${panel.id}-${tag}`}
                            className="rounded-full border border-border/60 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {panel.metrics.map((metric, metricIndex) => (
                          <div
                            key={`${panel.id}-${metric.label}-${metricIndex}`}
                            className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-4 shadow-inner"
                          >
                            {!prefersReducedMotion && (
                              <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-xl animate-[pulse_2.8s_ease-in-out_infinite]"
                                aria-hidden="true"
                              />
                            )}
                            <div className="relative flex items-center justify-between gap-3">
                              <div className="space-y-1">
                                <p className="text-[11px] uppercase tracking-[0.14em] text-foreground/70">
                                  {metric.label}
                                </p>
                                <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                                {metric.hint && (
                                  <p className="text-xs text-muted-foreground">{metric.hint}</p>
                                )}
                              </div>
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Activity className="h-5 w-5" aria-hidden="true" />
                              </div>
                            </div>
                            
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside
          className={cn(
            "order-1 z-10 flex h-fit flex-col space-y-6 rounded-2xl border border-border/40 bg-background/75 p-6 backdrop-blur",
            "lg:order-2 lg:sticky lg:top-16 lg:h-[calc(100vh-7rem)]",
          )}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Story spine</span>
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold leading-tight text-primary sm:text-4xl">
              Systems that stay reliable as they scale
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Every panel is a sample of the work I&apos;ve done to build AI systems.
            </p>
          </div>

          <div className="relative mt-6 flex-1 space-y-4 pl-5">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border/60 to-primary/20" />
            {storyPanels.map((panel, index) => (
              <div
                key={panel.id}
                className="relative flex items-start gap-3 text-sm text-muted-foreground transition-colors duration-200"
              >
                <span
                  className={cn(
                    "mt-1.5 h-2.5 w-2.5 rounded-full border border-border/60 bg-background",
                    index === activeIndex &&
                      "border-primary/60 bg-primary/80 shadow-[0_0_0_6px_rgba(96,165,250,0.25)]",
                  )}
                  aria-hidden="true"
                />
                <div className="space-y-0.5">
                  <p className="text-xs uppercase tracking-[0.14em] text-foreground/70">
                    {panel.eyebrow}
                  </p>
                  <p
                    className={cn(
                      "font-medium text-foreground/80",
                      index === activeIndex && "text-foreground",
                    )}
                  >
                    {panel.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
