'use client'

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
    } catch (e) {
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
    } catch (e) {
      // ignore
    }
  }, [isLight])

  return (
    <button
      aria-label="Toggle color theme"
      onClick={() => setIsLight((v) => !v)}
      className="relative inline-flex items-center w-14 h-7 bg-card/20 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      <div className="absolute left-1 top-1 text-yellow-400">
        <Sun className="w-4 h-4" />
      </div>
      <div className="absolute right-1 top-1 text-slate-300">
        <Moon className="w-4 h-4" />
      </div>
      <span
        className={`relative block h-5 w-5 rounded-full bg-white shadow transform transition-transform ${isLight ? 'translate-x-7' : 'translate-x-0'}`}
      />
    </button>
  )
}
