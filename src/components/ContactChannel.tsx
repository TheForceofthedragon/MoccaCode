'use client'
import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { site } from '@/lib/site'
import { trackEvent } from '@/lib/track'

export default function ContactChannel() {
  const [mode, setMode] = useState<'whatsapp' | 'email'>('whatsapp')

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-3">
      <div className="md:col-span-1 space-y-3">
        <button onClick={() => setMode('whatsapp')}
          className={`w-full rounded-2xl border p-4 text-left hover:bg-black/5 dark:hover:bg-white/5 ${mode==='whatsapp' ? 'ring-2 ring-green-500' : ''}`}>
          <div className="font-medium">WhatsApp</div>
          <div className="text-sm opacity-70">Respuesta rápida, ideal para cotización express.</div>
        </button>
        <button onClick={() => setMode('email')}
          className={`w-full rounded-2xl border p-4 text-left hover:bg-black/5 dark:hover:bg-white/5 ${mode==='email' ? 'ring-2 ring-indigo-500' : ''}`}>
          <div className="font-medium">Email</div>
          <div className="text-sm opacity-70">Más formal, adjunta detalles y archivos.</div>
        </button>
      </div>

      <div className="md:col-span-2">
        {mode === 'whatsapp' ? (
          <div className="rounded-3xl border p-6 bg-white/60 dark:bg-neutral-900/60">
            <p className="opacity-80">Escríbeme por WhatsApp y te respondo con una propuesta clara y tiempos realistas.</p>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hola Bryan, quiero una cotización para mi web.')}`}
              target="_blank"
              className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white dark:bg-white dark:text-black hover:opacity-90"
              onClick={() => trackEvent('click_whatsapp', { position: 'contact' })}
            >
              <Send className="size-4" /> Escribir por WhatsApp
            </a>
            <div className="mt-3 text-sm opacity-70">Tiempo de respuesta habitual: 1–6 h.</div>
          </div>
        ) : (
          <form
            className="rounded-3xl border p-6 bg-white/60 dark:bg-neutral-900/60 space-y-3"
            onSubmit={(e) => {
              e.preventDefault()
              const fd = new FormData(e.currentTarget as HTMLFormElement)
              const name = String(fd.get('name') || '')
              const mail = String(fd.get('mail') || '')
              const msg = String(fd.get('msg') || '')
              const subject = encodeURIComponent(`Consulta web de ${name}`)
              const body = encodeURIComponent(`${msg}\n\nEmail: ${mail}`)
              trackEvent('form_submit', { channel: 'email' })
              window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
            }}
          >
            <div className="grid gap-3 md:grid-cols-2">
              <input name="name" placeholder="Tu nombre" className="w-full rounded-xl border bg-transparent px-4 py-3 outline-none" required />
              <input name="mail" placeholder="Tu email" type="email" className="w-full rounded-xl border bg-transparent px-4 py-3 outline-none" required />
            </div>
            <textarea name="msg" placeholder="Cuéntame de tu proyecto" className="w-full rounded-xl border bg-transparent px-4 py-3 outline-none min-h-32" required />
            <button type="submit" className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white dark:bg-white dark:text-black hover:opacity-90">
              <Mail className="size-4" /> Enviar por correo
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
