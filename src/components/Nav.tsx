'use client'
import Link from 'next/link'
import { Laptop, Github, Linkedin, Moon, Sun } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { site } from '@/lib/site'

export function Nav() {
  const pathname = usePathname()
  const [dark, setDark] = useState<boolean>(true)

  // 1) Leer preferencia al montar (localStorage o media query)
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    if (stored === 'light') setDark(false)
    else if (stored === 'dark') setDark(true)
    else {
      // sin preferencia guardada: usa el sistema
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDark(prefers)
    }
  }, [])

  // 2) Aplicar/quitar clase en <html> y persistir
  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight flex items-center gap-2">
          <Laptop className="size-5" /> {site.name}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {site.nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href} className={`hover:opacity-70 ${active ? 'font-semibold' : ''}`}>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.github} target="_blank" className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5" aria-label="GitHub">
            <Github className="size-5" />
          </a>
          <a href={site.linkedin} target="_blank" className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5" aria-label="LinkedIn">
            <Linkedin className="size-5" />
          </a>

          <button
            onClick={() => setDark((v) => !v)}
            aria-pressed={dark}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Alternar tema"
          >
            {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
        </div>
      </div>
    </header>
  )
}
