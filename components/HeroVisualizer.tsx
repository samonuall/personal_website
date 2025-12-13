'use client'

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

type Particle = {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  hue: number
  drift: number
  parallax: number
  vx?: number
  vy?: number
}

type HeroVisualizerProps = {
  className?: string
}

export function HeroVisualizer({ className }: HeroVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const animationFrame = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const sizeRef = useRef({ width: 0, height: 0 })
  const pointerRef = useRef({ x: 0.5, y: 0.5 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const spawnParticle = (x: number, y: number, options?: { vx?: number; vy?: number; size?: number }) => {
    const sizeBase = options?.size ?? 4 + Math.random() * 9
    particlesRef.current.push({
      x,
      y,
      baseX: x,
      baseY: y,
      size: sizeBase,
      hue: 205 + Math.random() * 70,
      drift: 0.6 + Math.random() * 0.7,
      parallax: 0.6 + Math.random() * 1.2,
      vx: options?.vx,
      vy: options?.vy,
    })

    particlesRef.current = particlesRef.current.slice(-120)
  }

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
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const createParticles = (width: number, height: number) => {
      const density = Math.max(28, Math.min(60, Math.floor((width * height) / 18000)))
      particlesRef.current = Array.from({ length: density }).map(() => {
        const baseX = Math.random() * width
        const baseY = Math.random() * height
        return {
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          size: 4 + Math.random() * 9,
          hue: 205 + Math.random() * 70,
          drift: 0.6 + Math.random() * 0.7,
          parallax: 0.6 + Math.random() * 1.2,
        }
      })
    }

    const resize = () => {
      const rect = container.getBoundingClientRect()
      sizeRef.current = { width: rect.width, height: rect.height }

      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      createParticles(rect.width, rect.height)
    }

    const animate = () => {
      const { width, height } = sizeRef.current
      if (width === 0 || height === 0) return

      ctx.clearRect(0, 0, width, height)

      const pointer = pointerRef.current
      const offsetX = (pointer.x - 0.5) * 48
      const offsetY = (pointer.y - 0.5) * 48
      const time = performance.now() * 0.001

      for (const particle of particlesRef.current) {
        const targetX = particle.baseX + offsetX * particle.parallax
        const targetY = particle.baseY + offsetY * particle.parallax

        if (particle.vx || particle.vy) {
          particle.x += particle.vx ?? 0
          particle.y += particle.vy ?? 0

          particle.baseX += (particle.vx ?? 0) * 0.35
          particle.baseY += (particle.vy ?? 0) * 0.35

          particle.vx = (particle.vx ?? 0) * 0.94
          particle.vy = (particle.vy ?? 0) * 0.94

          if (Math.abs(particle.vx) < 0.05 && Math.abs(particle.vy) < 0.05) {
            particle.vx = 0
            particle.vy = 0
          }
        }

        particle.baseX = Math.max(0, Math.min(width, particle.baseX))
        particle.baseY = Math.max(0, Math.min(height, particle.baseY))

        particle.x += (targetX - particle.x) * (0.06 + particle.drift * 0.03)
        particle.y += (targetY - particle.y) * (0.06 + particle.drift * 0.03)

        const pulse = Math.sin(time * (0.9 + particle.drift)) * 0.5 + 0.5
        const radius = particle.size * (0.75 + pulse * 0.5)

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          radius * 7,
        )
        gradient.addColorStop(0, `hsla(${particle.hue}, 85%, 65%, 0.9)`)
        gradient.addColorStop(1, `hsla(${particle.hue}, 85%, 65%, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrame.current = window.requestAnimationFrame(animate)
    }

    resize()
    animationFrame.current = window.requestAnimationFrame(animate)
    window.addEventListener("resize", resize)

    return () => {
      if (animationFrame.current) window.cancelAnimationFrame(animationFrame.current)
      window.removeEventListener("resize", resize)
    }
  }, [prefersReducedMotion])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/30 via-background to-indigo-900/40",
        className,
      )}
      onPointerMove={(event) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        pointerRef.current = {
          x: (event.clientX - rect.left) / rect.width,
          y: (event.clientY - rect.top) / rect.height,
        }
      }}
      onClick={(event) => {
        if (prefersReducedMotion || !containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        const burstCount = 5 + Math.floor(Math.random() * 5)
        for (let i = 0; i < burstCount; i++) {
          const angle = Math.random() * Math.PI * 2
          const size = 3 + Math.random() * 7
          const speedBase = 2.4 + Math.random() * 3.2
          const inertiaBoost = Math.max(1, 7 / size)
          const speed = speedBase * inertiaBoost
          spawnParticle(x, y, {
            size,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
          })
        }
      }}
      onPointerLeave={() => {
        pointerRef.current = { x: 0.5, y: 0.5 }
      }}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(16, 185, 129, 0.24), transparent 35%), radial-gradient(circle at 80% 10%, rgba(99, 102, 241, 0.24), transparent 35%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.2), transparent 30%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 mix-blend-screen opacity-70"
        style={{
          background:
            "linear-gradient(120deg, rgba(255, 255, 255, 0.14) 0%, transparent 40%), linear-gradient(300deg, rgba(255, 255, 255, 0.1) 0%, transparent 35%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 40%)",
        }}
        aria-hidden="true"
      />

      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 h-full w-full transition-opacity duration-500",
          prefersReducedMotion ? "opacity-0" : "opacity-100",
        )}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-65"
        style={{
          background:
            "radial-gradient(200px 200px at 20% 30%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(140px 140px at 75% 60%, rgba(255,255,255,0.07), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <span className="sr-only">
        Animated ambient visualization reacting to pointer movement.
      </span>
    </div>
  )
}
