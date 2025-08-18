'use client'

import { Project } from "@/data/projects"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, FileText } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card
        className="cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(255,45,149,0.15)] overflow-hidden border border-border/20 bg-card text-card-foreground rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-48 w-full bg-gradient-to-b from-primary/10 to-transparent">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-4"
          />
        </div>
        <CardHeader>
          <CardTitle className="font-normal text-primary">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl bg-popover text-popover-foreground rounded-xl ring-1 ring-primary/20">
          <DialogHeader>
            <DialogTitle className="font-normal text-primary">{project.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="relative h-64 w-full rounded-lg overflow-hidden bg-card">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <p className="text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-card/10 border border-primary/10 rounded-full text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              {project.github && (
                <Button asChild variant="outline" size="sm" className="text-primary border-primary/40">
                  <Link href={project.github} target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              )}
              {project.link && (
                <Button asChild variant="ghost" size="sm" className="text-primary">
                  <Link href={project.link} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Project
                  </Link>
                </Button>
              )}

              {project.id === '2' && (
                <Button asChild size="sm" className="bg-gradient-to-r from-primary to-secondary text-white shadow-[0_8px_30px_rgba(255,45,149,0.15)]">
                  <a href="/poker_bot_report.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    Open Report
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

