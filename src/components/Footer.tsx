import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 py-10">
      <div className="bg-neutral-950 text-white"></div>
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"></div>
        <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">

          {/* GitHub */}
          <a href={site.github} target="_blank" className="p-3 rounded-full border-3 border-white hover:bg-gray-800 hover:text-white transition">
            <Github className="size-5" />
          </a>

          {/* LinkedIn */}
          <a href={site.linkedin} target="_blank" className="p-3 rounded-full border-3 border-white hover:bg-blue-600 hover:text-white transition">
            <Linkedin className="size-5" />
          </a>

          {/* Instagram */}
          <a href={site.instagram} target="_blank" className="p-3 rounded-full border-3 border-white hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600:text-white transition">
            <FaInstagram size={20} />
          </a>

          {/* TikTok */}
          <a href={site.tiktok} target="_blank" className="p-3 rounded-full border-3 border-white hover:bg-black hover:text-white transition">
            <FaTiktok size={20} />
          </a>

          {/* Facebook */}
          <a href={site.facebook} target="_blank" className="p-3 rounded-full border-3 border-white hover:bg-blue-700 hover:text-white transition">
            <FaFacebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
