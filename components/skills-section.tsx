import Image from "next/image"

type Skill = {
  name: string
  icon?: string
  area: string
  tone: string
}

const defaultSkills: Skill[] = [
  {
    name: "Python",
    icon: "/icons/python.svg",
    area: "Backend • ML",
    tone: "from-amber-400/25 via-orange-500/10 to-transparent",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    area: "Frontend services",
    tone: "from-yellow-300/30 via-amber-400/10 to-transparent",
  },
  {
    name: "C++",
    icon: "/icons/cpp.svg",
    area: "Performance systems",
    tone: "from-sky-400/30 via-indigo-500/10 to-transparent",
  },
  {
    name: "PyTorch",
    icon: "/icons/pytorch.svg",
    area: "Modeling & research",
    tone: "from-rose-400/30 via-orange-500/10 to-transparent",
  },
  {
    name: "SQL",
    icon: "/icons/sql.svg",
    area: "Analytics & storage",
    tone: "from-emerald-400/25 via-teal-500/10 to-transparent",
  },
  {
    name: "React.js",
    icon: "/icons/react.svg",
    area: "Interfaces",
    tone: "from-cyan-400/30 via-sky-500/10 to-transparent",
  },
  {
    name: "Docker",
    icon: "/icons/docker_logo.svg",
    area: "Containers",
    tone: "from-blue-400/25 via-primary/10 to-transparent",
  },
  {
    name: "Git",
    area: "Collaboration",
    tone: "from-rose-400/25 via-amber-400/10 to-transparent",
  },
  {
    name: "FastAPI",
    icon: "/icons/FastAPI.svg",
    area: "APIs at speed",
    tone: "from-emerald-400/25 via-teal-500/10 to-transparent",
  },
  {
    name: "Django REST",
    icon: "/icons/django-rest_logo.svg",
    area: "Structured services",
    tone: "from-slate-400/25 via-emerald-400/10 to-transparent",
  },
  {
    name: "NLP / HuggingFace",
    icon: "/icons/huggingface.svg",
    area: "Token & embedding stacks",
    tone: "from-amber-300/25 via-rose-400/10 to-transparent",
  },
  {
    name: "LangChain",
    icon: "/icons/langchain.svg",
    area: "LLM orchestration",
    tone: "from-emerald-400/30 via-primary/10 to-transparent",
  },
]

type SkillsSectionProps = {
  skills?: Skill[]
}

export function SkillsSection({ skills = defaultSkills }: SkillsSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/30 bg-card/25 p-6 shadow-2xl sm:p-10">
      <BackgroundAccents />

      <div className="relative grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionIntro />
        <SkillGrid skills={skills} />
      </div>
    </section>
  )
}

function SectionIntro() {
  return (
    <div className="space-y-6">
      <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
        <span>Systems &amp; skills</span>
      </div>

      <div className="space-y-3">
        <h2 className="text-3xl font-semibold leading-tight text-primary sm:text-4xl">
          A stack tuned for shipping research
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          End-to-end delivery from modeling to interfaces: lean services, ML pipelines, and the tooling
          that keeps experiments reproducible and shippable.
        </p>
      </div>
    </div>
  )
}

function SkillGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 -z-10 -m-6 rounded-3xl border border-border/20 bg-gradient-to-br from-primary/20 via-indigo-600/15 to-transparent blur-2xl"
        aria-hidden="true"
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

function SkillCard({ skill }: { skill: Skill }) {
  const fallback =
    skill.name.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase() ||
    skill.name.slice(0, 3).toUpperCase()

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/70 px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${skill.tone} opacity-80`}
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-card/70 ring-1 ring-border/40 backdrop-blur group-hover:ring-primary/40">
          {skill.icon ? (
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          ) : (
            <span className="text-xs font-semibold text-muted-foreground">{fallback}</span>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">{skill.name}</span>
          <span className="text-xs text-muted-foreground">{skill.area}</span>
        </div>
      </div>
    </div>
  )
}

function BackgroundAccents() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-120px] right-[-40px] h-80 w-80 rounded-full bg-indigo-600/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.12),transparent_35%)]"
        aria-hidden="true"
      />
    </>
  )
}

export type { Skill, SkillsSectionProps }
