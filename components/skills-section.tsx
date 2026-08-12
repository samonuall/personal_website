import Image from "next/image"

import { Section, SectionHeader } from "@/components/ui/section"
import { skillGroups, type Skill, type SkillGroup } from "@/data/skills"

export function SkillsSection({ groups = skillGroups }: { groups?: SkillGroup[] }) {
  return (
    <Section id="skills" divided>
      <SectionHeader
        eyebrow="Toolkit"
        title="What I build with"
        description="Research code, the services that serve it, and the interfaces on top."
      />

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <div key={group.id} className="space-y-4">
            <h3 className="eyebrow">{group.label}</h3>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <SkillItem skill={skill} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function SkillItem({ skill }: { skill: Skill }) {
  const initials = skill.name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase()

  return (
    <div className="flex items-center gap-3 text-sm text-foreground">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
        {skill.icon ? (
          <Image
            src={skill.icon}
            alt=""
            width={18}
            height={18}
            className="h-[18px] w-[18px] object-contain"
          />
        ) : (
          <span className="text-[10px] font-semibold text-muted-foreground">{initials}</span>
        )}
      </span>
      {skill.name}
    </div>
  )
}

export type { Skill, SkillGroup }
