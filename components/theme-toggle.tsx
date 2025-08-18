'use client'
import React from 'react'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) {
        setIsLight(stored === 'light')
        if (stored === 'light') document.documentElement.classList.add('light')
        else document.documentElement.classList.remove('light')
      } else {
        // default to dark (no 'light' class)
        document.documentElement.classList.remove('light')
        setIsLight(false)
      }
    } catch {
        // ignore in SSR or privacy modes  
    }
  }, [])

  useEffect(() => {
    try {
      if (isLight) {
        document.documentElement.classList.add('light')
        localStorage.setItem('theme', 'light')
      } else {
        document.documentElement.classList.remove('light')
        localStorage.setItem('theme', 'dark')
      }
    } catch {
      // ignore
    }
  }, [isLight])

  return (
    <button
      aria-label="Toggle color theme"
      aria-pressed={isLight}
      onClick={() => setIsLight((v) => !v)}
      className="relative inline-flex items-center w-14 h-7 bg-card/20 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      <div className={`absolute left-2 inset-y-0 flex items-center justify-center transition-opacity duration-300 ${isLight ? 'opacity-100' : 'opacity-0'}`}>
        <Sun className="w-4 h-4" />
      </div>
      <div className={`absolute right-2 inset-y-0 flex items-center justify-center transition-opacity duration-300 ${isLight ? 'opacity-0' : 'opacity-100'}`}>
        <Moon className="w-4 h-4" />
      </div>
      <span
        className={`relative z-10 block h-5 w-5 rounded-full shadow transform transition-all duration-300 ease-out will-change-transform ${isLight ? 'translate-x-7 bg-gradient-to-r from-white/90 to-blue-200 scale-105 rotate-3' : 'translate-x-0 bg-card scale-100 rotate-0'}`}
      />
    </button>
  )
}
