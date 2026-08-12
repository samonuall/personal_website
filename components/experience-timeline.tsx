import { experiences, type Experience } from "@/data/experiences"
import { TagList } from "@/components/ui/tag"

/**
 * A quiet vertical timeline driven entirely by `data/experiences.ts`.
 * Add or edit a role there and it shows up here — nothing to touch in the markup.
 */
export function ExperienceTimeline({ items = experiences }: { items?: Experience[] }) {
  return (
    <ol className="mt-10 space-y-0">
      {items.map((experience, index) => (
        <li
          key={experience.id}
          className="relative grid gap-x-8 gap-y-3 border-t border-border/70 py-8 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]"
        >
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">{experience.dateRange}</p>
            <p className="text-xs text-muted-foreground">{experience.location}</p>
          </div>

          <div className="space-y-3">
            <div>
              <h3 className="text-lg leading-snug text-foreground">
                {experience.title}
                <span className="text-muted-foreground"> · </span>
                <span className="text-primary">{experience.company}</span>
              </h3>
            </div>

            <ul className="space-y-2">
              {experience.description.map((line) => (
                <li
                  key={line}
                  className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-highlight/70"
                    aria-hidden="true"
                  />
                  {line}
                </li>
              ))}
            </ul>

            {experience.technologies && experience.technologies.length > 0 && (
              <TagList items={experience.technologies} className="pt-1" />
            )}
          </div>

          <span className="sr-only">{`Role ${index + 1} of ${items.length}`}</span>
        </li>
      ))}
    </ol>
  )
}
