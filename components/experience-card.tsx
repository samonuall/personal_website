'use client'

import { Experience } from "@/data/experiences"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { forwardRef, useState } from "react"

interface ExperienceCardProps {
  experience: Experience
}

// TODO: change so that ref points to the card actually
export const ExperienceCard = forwardRef<HTMLDivElement, ExperienceCardProps>(({experience, ...props}, ref) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <>
      <Card
        className="cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-border/50 bg-card"
        onClick={() => setIsOpen(true)}
        ref={ref}
      >
        <CardHeader>
          <CardTitle className="font-normal text-primary">{experience.title}</CardTitle>
          <div className="text-sm text-muted-foreground">
            {experience.contractType}
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground mb-2">
            {experience.dateRange} • {experience.location}
          </div>
          <h3 className="font-medium mb-4 text-secondary">{experience.company}</h3>
          <ul className="text-sm text-muted-foreground list-disc list-inside">
            Click to learn more
          </ul>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl bg-card">
          <DialogHeader>
            <DialogTitle className="font-normal text-primary">{experience.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="text-sm text-muted-foreground">
              {experience.dateRange} • {experience.location}
            </div>
            <h3 className="font-medium text-secondary">{experience.company}</h3>
            <ul className="text-muted-foreground list-disc list-inside">
              {experience.description.map((point, index) => (
                <li key={index} className="mb-2">{point}</li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
)

