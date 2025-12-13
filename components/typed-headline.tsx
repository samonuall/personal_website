'use client'

import { useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"

type TypedHeadlineProps = {
  fallback: string
  words: string[]
  className?: string
  intervalMs?: number
}

type Phase = "typing" | "pausing" | "deleting"

export function TypedHeadline({
  fallback,
  words,
  className,
  intervalMs = 1800,
}: TypedHeadlineProps) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>("typing")
  const [displayText, setDisplayText] = useState("")
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const availableWords = useMemo(() => words.filter(Boolean), [words])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    setIndex(0)
    setDisplayText(availableWords[0] ?? "")
    setPhase("typing")
  }, [availableWords])

  useEffect(() => {
    if (availableWords.length === 0) return
    if (prefersReducedMotion || availableWords.length < 2) {
      setDisplayText(availableWords[0])
      return
    }

    const typingSpeedMs = 70
    const deletingSpeedMs = 45
    const pauseAfterTypingMs = intervalMs
    const currentWord = availableWords[index] ?? ""

    if (phase === "typing") {
      if (displayText === currentWord) {
        const pause = window.setTimeout(() => setPhase("pausing"), pauseAfterTypingMs)
        return () => window.clearTimeout(pause)
      }

      const nextChar = currentWord.slice(0, displayText.length + 1)
      const timeout = window.setTimeout(() => setDisplayText(nextChar), typingSpeedMs)
      return () => window.clearTimeout(timeout)
    }

    if (phase === "pausing") {
      const timeout = window.setTimeout(() => setPhase("deleting"), 450)
      return () => window.clearTimeout(timeout)
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        const nextChar = currentWord.slice(0, displayText.length - 1)
        const timeout = window.setTimeout(() => setDisplayText(nextChar), deletingSpeedMs)
        return () => window.clearTimeout(timeout)
      }

      const timeout = window.setTimeout(() => {
        setIndex((current) => (current + 1) % availableWords.length)
        setPhase("typing")
      }, 200)
      return () => window.clearTimeout(timeout)
    }
  }, [
    availableWords,
    displayText,
    index,
    intervalMs,
    phase,
    prefersReducedMotion,
  ])

  const activeWord = displayText || (prefersReducedMotion ? availableWords[0] || "" : "")

  return (
    <div className="relative inline-flex flex-col gap-3">
      <h1 className={cn("text-balance", className)}>{fallback}</h1>
      {availableWords.length > 0 ? (
        <span
          className="inline-flex items-center gap-3 text-base text-muted-foreground sm:text-lg"
          aria-live="polite"
        >
          <span className="h-px w-10 rounded-full bg-primary/50" aria-hidden="true" />
          <span className="relative flex items-center">
            <span className="whitespace-nowrap">{activeWord}</span>
            {!prefersReducedMotion && availableWords.length > 1 ? (
              <span className="ml-1 h-5 w-[2px] animate-pulse rounded-full bg-primary/70" />
            ) : null}
          </span>
        </span>
      ) : null}

      <noscript>
        <p className="text-sm text-muted-foreground">
          {availableWords[0] ? `Focus: ${availableWords[0]}` : fallback}
        </p>
      </noscript>
    </div>
  )
}
