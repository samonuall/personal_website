import { Section, SectionHeader } from "@/components/ui/section"
import { EntryCard } from "@/components/ui/entry-card"
import { Tag } from "@/components/ui/tag"
import { education } from "@/data/education"
import { authorName, publications } from "@/data/publications"

/** Splits an author list so the site owner's name can be emphasized. */
function Authors({ authors }: { authors: string }) {
  const parts = authors.split(authorName)

  if (parts.length === 1) return <>{authors}</>

  return (
    <>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <span className="font-medium text-foreground">{authorName}</span>
          )}
        </span>
      ))}
    </>
  )
}

export function ResearchSection() {
  return (
    <Section id="research" divided>
      <SectionHeader
        eyebrow="Research"
        title="Publications & education"
        description="Papers I've written or contributed to, and where I studied."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="eyebrow">Publications</h3>
          {publications.map((publication) => (
            <EntryCard
              key={publication.id}
              href={publication.href}
              title={publication.title}
              subtitle={<Authors authors={publication.authors} />}
            >
              <Tag variant="solid">{publication.venue}</Tag>
            </EntryCard>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="eyebrow">Education</h3>
          {education.map((entry) => (
            <EntryCard
              key={entry.id}
              title={entry.school}
              subtitle={entry.degree}
              meta={
                entry.note ? `${entry.dateRange} · ${entry.note}` : entry.dateRange
              }
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
