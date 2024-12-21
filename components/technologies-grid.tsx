import { categories, technologies } from "@/data/technologies"
import Image from "next/image"

export function TechnologiesGrid() {
  return (
    <div className="grid gap-8">
      <h2 className="text-3xl font-bold">
        These are the technologies I&apos;ve been using
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(categories).map(([key, title]) => (
          <div
            key={key}
            className="p-6 rounded-lg bg-card border"
          >
            <h3 className="font-semibold mb-4">{title}</h3>
            <div className="grid gap-4">
              {technologies
                .filter((tech) => tech.category === key)
                .map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={20}
                      height={20}
                      className="rounded-sm"
                    />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

