'use client'
import React from 'react'
import { ArrowRight, Globe2 } from 'lucide-react'
import SmartImage from './SmartImage'
import type { Project } from '@/lib/site'
import { trackEvent } from '@/lib/track'

export function ProjectCard({ p }: { p: Project }) {
  const host = (() => { try { return new URL(p.href).host } catch { return 'Proyecto' } })()
  return (
    <a
      href={p.href}
      target="_blank"
      className="group rounded-2xl border overflow-hidden bg-white/60 dark:bg-neutral-900/60"
      onClick={() => trackEvent('click_proyecto', { title: p.title, host })}
    >
      {p.image && (
        <SmartImage src={p.image} alt={p.imageAlt || p.title} width={1200} height={630} className="w-full h-auto" />
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm opacity-70">
          <Globe2 className="size-4" /> {host}
        </div>
        <h3 className="mt-2 text-lg font-semibold group-hover:underline underline-offset-4">{p.title}</h3>
        <p className="mt-2 text-sm opacity-80">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((t) => (<span key={t} className="text-xs rounded-full border px-2 py-1 opacity-80">{t}</span>))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t px-6 py-3 text-sm opacity-80">
        <span className="inline-flex items-center gap-2">Ver sitio <ArrowRight className="size-4" /></span>
        <span className="inline-flex items-center gap-2">Live</span>
      </div>
    </a>
  )
}
