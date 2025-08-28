'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Laptop, Github, Linkedin, Moon, Sun, Menu, X } from 'lucide-react'
import { site } from '@/lib/site'

export function Nav() {
  const pathname = usePathname()
  const [dark, setDark] = useState(true)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Montado para poder usar portal (document.body)
  useEffect(() => { setMounted(true) }, [])

  // Tema inicial
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(stored ? stored === 'dark' : prefers)
  }, [])
  useEffect(() => {
    const root = document.documentElement
    if (dark) { root.classList.add('dark'); localStorage.setItem('theme', 'dark') }
    else { root.classList.remove('dark'); localStorage.setItem('theme', 'light') }
  }, [dark])

  // Cerrar panel al cambiar de ruta
  useEffect(() => { setOpen(false) }, [pathname])

  // Bloquear scroll del body mientras el panel está abierto
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  // --- UI principal ---
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-semibold tracking-tight flex items-center gap-2">
            <Laptop className="size-5" /> {site.name}
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {site.nav.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:opacity-70 ${active ? 'font-semibold text-primary' : ''}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Acciones + trigger móvil */}
          <div className="flex items-center gap-2">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
              <Github className="size-5" />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
              <Linkedin className="size-5" />
            </a>
            <button
              onClick={() => setDark(v => !v)}
              aria-label="Alternar tema"
              className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
            >
              {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>

            {/* Botón hamburguesa */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
              aria-label="Abrir menú"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Panel móvil via PORTAL (se monta en <body>) */}
      {mounted && open && createPortal(
        <div className="fixed inset-0 z-[999]">
          {/* Backdrop opaco */}
          <button
            aria-label="Cerrar menú"
            className="fixed inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Panel full-screen con fondo sólido */}
          <div
            id="mobile-menu"
            className="fixed inset-0 bg-white dark:bg-neutral-950 p-6 overflow-y-auto animate-[slide-in_.25s_ease-out] origin-right"
          >
            {/* Barra del panel */}
            <div className="sticky top-0 -mx-6 px-6 py-3 bg-white dark:bg-neutral-950 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
              <span className="font-semibold">Menú</span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
                aria-label="Cerrar menú"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Enlaces */}
            <nav className="mt-4 space-y-3 text-lg">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 ${
                    pathname === item.href ? 'font-semibold text-primary' : ''
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA opcionales */}
            <hr className="my-6 border-black/10 dark:border-white/10" />
            <div className="grid gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-white dark:bg-white dark:text-black"
                onClick={() => setOpen(false)}
              >
                Quiero mi página
              </Link>
              <Link
                href="/proyectos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
