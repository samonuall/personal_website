'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0, 
  threshold = 0.1,
  rootMargin = '50px 0px'
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Use requestAnimationFrame for better performance
            requestAnimationFrame(() => {
              setTimeout(() => {
                if (entry.target) {
                  entry.target.classList.add('visible')
                  setHasAnimated(true)
                }
              }, delay)
            })
          }
        })
      },
      {
        threshold,
        rootMargin, // Start loading before element is visible
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, hasAnimated, threshold, rootMargin])

  return (
    <div 
      ref={ref} 
      className={`opacity-0 translate-y-4 transition-all duration-500 ease-out will-change-transform ${
        hasAnimated ? 'opacity-100 translate-y-0' : ''
      } ${className}`}
      style={{
        transform: hasAnimated ? 'translateY(0)' : 'translateY(16px)',
      }}
    >
      {children}
    </div>
  )
}

