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
import { Github, ExternalLink } from 'lucide-react'
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
        className="cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg overflow-hidden border border-border/50"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-4"
          />
        </div>
        <CardHeader>
          <CardTitle className="font-normal">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-normal">{project.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
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
                  className="px-2 py-1 bg-secondary rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <Button asChild variant="outline" size="sm">
                  <Link href={project.github} target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              )}
              {project.link && (
                <Button asChild size="sm">
                  <Link href={project.link} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Project
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

