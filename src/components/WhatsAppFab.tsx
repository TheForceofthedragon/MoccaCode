'use client'
import { Send } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { site } from '@/lib/site'
import { trackEvent } from '@/lib/track'
import { FaWhatsapp } from 'react-icons/fa' 

export default function WhatsAppFab() {
  const pathname = usePathname()
  if (pathname === '/contacto') return null
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hola Bryan, vi tu portafolio')}`
  return (
    <a
      href={href}
      target="_blank"
      className="fixed bottom-5 right-5 inline-flex items-center justify-center rounded-full p-4 shadow-lg border bg-green-500 hover:opacity-90"
      aria-label="Contactar por WhatsApp"
      onClick={() => trackEvent('click_whatsapp', { position: 'fab' })}
    >
      <FaWhatsapp size={22} color="white" />  {/* ✅ ícono WhatsApp */}
    </a>
  )
}
