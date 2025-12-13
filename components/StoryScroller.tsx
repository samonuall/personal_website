'use client'

import { useEffect, useMemo, useRef, useState } from "react"
import { Code2, Route, Sparkles } from "lucide-react"

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
  snippet: {
    label: string
    code: string
  }
  accent: string
}

export function StoryScroller() {
  const containerRef = useRef<HTMLDivElement>(null)
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
        snippet: {
          label: "Async enrichment",
          code: `async def enrich_report(event_ids):
    payloads = await gather_from_public_apis(event_ids)
    context = await embed_help_docs()
    return assemble({
        "delivery": payloads["push"],
        "audience": context["segments"],
        "quality": payloads["lifecycle"],
    })`,
        },
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
        snippet: {
          label: "FastAPI + CLIP",
          code: `@app.post("/search")
async def search(image: bytes):
    embedding = clip.encode(image)
    return index.similar(embedding, k=5)`,
        },
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
        snippet: {
          label: "Concurrent sessions",
          code: `def tutor(message, session_id):
    with SessionPool(session_id) as session:
        history = session.fetch_thread()
        context = retrieval.embed_submissions(90000)
        return llm.reply(message, history=history, context=context)`,
        },
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
        snippet: {
          label: "Tree search loop",
          code: `for state in rollout(game):
    node = tree.expand(state)
    reward = simulate(node, policy_net)
    tree.backpropagate(node, reward)`,
        },
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
        snippet: {
          label: "Model pass",
          code: `query = retriever.fetch(question)
augmented = rerank(query, top_k=5)
answer = llm.generate(augmented)`,
        },
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

    const handleScroll = () => {
      requestAnimationFrame(() => {
        const offsets = panelRefs.current.map((panel) => {
          if (!panel) return 0
          const rect = panel.getBoundingClientRect()
          const viewportHeight = window.innerHeight || 1
          const distanceFromCenter =
            (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight
          return -distanceFromCenter * 18
        })
        setParallaxOffsets(offsets)
      })
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [prefersReducedMotion, storyPanels.length])

  useEffect(() => {
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
        threshold: 0.4,
        rootMargin: "-10% 0px -10% 0px",
      },
    )

    panelRefs.current.forEach((panel) => panel && observer.observe(panel))
    return () => observer.disconnect()
  }, [storyPanels.length])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl border border-border/30 bg-card/25 p-6 shadow-2xl sm:p-10"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.1),transparent_28%),linear-gradient(140deg,rgba(255,255,255,0.04),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="relative grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
        <div
          className={cn(
            "z-10 space-y-6 rounded-2xl border border-border/40 bg-background/70 p-6 backdrop-blur",
            prefersReducedMotion ? "relative" : "sticky top-24",
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
              Every panel is pulled from live projects and roles—vectors, agents, and tooling stitched
              together so ML experiments ship like products.
            </p>
          </div>

          <div className="relative mt-6 space-y-4 pl-5">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border/60 to-transparent" />
            {storyPanels.map((panel, index) => (
              <div
                key={panel.id}
                className="relative flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span
                  className={cn(
                    "mt-1.5 h-2.5 w-2.5 rounded-full border border-border/60 bg-background",
                    index === activeIndex && "border-primary/60 bg-primary/80 shadow-[0_0_0_6px_rgba(96,165,250,0.25)]",
                  )}
                  aria-hidden="true"
                />
                <div className="space-y-0.5">
                  <p className="text-xs uppercase tracking-[0.14em] text-foreground/70">
                    {panel.eyebrow}
                  </p>
                  <p className="font-medium text-foreground">{panel.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative space-y-16">
          {storyPanels.map((panel, index) => (
            <div
              key={panel.id}
              ref={(el) => {
                panelRefs.current[index] = el
              }}
              className="relative min-h-[60vh]"
            >
              {!prefersReducedMotion && (
                <div
                  className={cn(
                    "pointer-events-none absolute -inset-x-8 inset-y-6 -z-10 rounded-[32px] blur-3xl",
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
                  "rounded-3xl border border-border/50 bg-background/80 p-6 shadow-lg backdrop-blur",
                  prefersReducedMotion ? "relative" : "sticky top-10",
                  !prefersReducedMotion && "transition-transform duration-700 ease-out",
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
                  <p className="text-base leading-relaxed text-muted-foreground">{panel.summary}</p>
                  {panel.detail && (
                    <p className="text-sm leading-relaxed text-foreground/80">{panel.detail}</p>
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

                <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 bg-card/60">
                  <div className="flex items-center justify-between border-b border-border/50 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4 w-4" aria-hidden="true" />
                      <span>{panel.snippet.label}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">snippet</span>
                  </div>
                  <pre className="whitespace-pre-wrap break-words px-4 py-4 text-sm font-mono leading-relaxed text-foreground/90">
                    {panel.snippet.code}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
