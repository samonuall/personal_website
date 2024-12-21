'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollAnimation({ children, className = '', delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              entry.target.classList.add('visible')
              setHasAnimated(true)
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, hasAnimated])

  return (
    <div 
      ref={ref} 
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${
        hasAnimated ? 'opacity-100 translate-y-0' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

