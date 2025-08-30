// src/components/WhatsAppFab.tsx
'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import { FaWhatsapp } from 'react-icons/fa'
import { site } from '@/lib/site'
import { trackEvent } from '@/lib/track'

export default function WhatsAppFab() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Ocúltalo en /contacto si quieres
  if (pathname === '/contacto') return null
  if (!mounted) return null

  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hola Bryan, vi tu portafolio 👉')}`

  return createPortal(
    <a
      href={href}
      target="_blank"
      aria-label="Contactar por WhatsApp"
      onClick={() => trackEvent('click_whatsapp', { position: 'fab' })}
      className="
        fixed bottom-5 right-5 md:bottom-8 md:right-8
        z-[2147483647]  /* máximo seguro 32-bits */
        inline-flex items-center justify-center rounded-full p-4
        bg-green-500 text-white shadow-lg hover:scale-[1.05] transition
      "
    >
      <FaWhatsapp size={22} />
    </a>,
    document.body
  )
}
