import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { experiences } from "@/data/experiences"

const currentRole = experiences.find((experience) => experience.current)

const facts = [
  "Retrieval & RAG systems",
  "LLM agents and evaluation",
  "Reinforcement learning",
  "Python · PyTorch · React",
]

export function Hero() {
  return (
    <section className="pt-16 pb-14 sm:pt-24 sm:pb-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="max-w-2xl space-y-6">
          <p className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" aria-hidden="true" />
            Boston, MA
          </p>

          <h1 className="text-4xl leading-[1.1] text-foreground sm:text-5xl">
            Sam O&apos;Nuallain
          </h1>

          <p className="text-xl leading-relaxed text-foreground/80 sm:text-2xl">
            I build machine learning systems and publish research on how they retrieve,
            reason, and go wrong.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            Most recently I wrote{" "}
            <Link
              href="/projects#autoindex"
              className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
            >
              AutoIndex
            </Link>
            , which learns executable document transformations that lift retrieval quality
            without touching the retriever. Before that: dense retrieval research at UMass
            CIIR, MCP server work during an earlier Klaviyo internship, and flight software
            at Lockheed Martin Space.
          </p>

          {currentRole && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-card">
              <span className="eyebrow shrink-0">Currently</span>
              <span className="text-foreground">
                {currentRole.title} at{" "}
                <span className="text-primary">{currentRole.company}</span>
              </span>
              <span className="text-muted-foreground">since {currentRole.dateRange.split(" – ")[0]}</span>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild>
              <Link href="/projects">View projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="mailto:samonuall@gmail.com">Get in touch</Link>
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-3 text-sm text-muted-foreground">
            {facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span
                  className="h-1 w-1 rounded-full bg-muted-foreground/50"
                  aria-hidden="true"
                />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-first lg:order-none">
          <div className="relative mx-auto aspect-[4/5] w-52 overflow-hidden rounded-2xl border border-border bg-muted shadow-card sm:w-64 lg:w-full">
            <Image
              src="/profile.jpg"
              alt="Sam O'Nuallain"
              fill
              priority
              sizes="(min-width: 1024px) 320px, 256px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
