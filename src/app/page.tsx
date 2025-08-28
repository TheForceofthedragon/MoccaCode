'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Container from '@/components/Container'
import { site } from '@/lib/site'
import { trackEvent } from '@/lib/track'
import WhatsAppFab from '@/components/WhatsAppFab'

export default function Page() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(50%_50%_at_50%_20%,black,transparent)]">
        <div className="absolute -inset-[10%] bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-emerald-500/10 blur-3xl" />
      </div>
      <Container>
        <div className="pt-16 pb-20 md:pt-24 md:pb-28">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-bold tracking-tight">
            Creamos <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500 bg-clip-text text-transparent">sitios web</span> modernos
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7, delay:0.1}} className="mt-5 max-w-2xl text-lg text-black/70 dark:text-white/70">
            {site.tagline}
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7, delay:0.15}} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={"/contacto"}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white dark:bg-white dark:text-black hover:opacity-90"
              onClick={() => trackEvent('click_whatsapp', { position: 'hero' })}
            >
              <Sparkles className="size-5" /> Quiero mi página <ArrowRight className="size-4" />
            </a>
            <a href="/proyectos" className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 hover:bg-black/5 dark:hover:bg-white/5">
              Ver proyectos
            </a>
          </motion.div>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {site.tech.map((t) => (<span key={t} className="rounded-full border px-3 py-1 text-xs opacity-80">{t}</span>))}
          </div>
        </div>
      </Container>
      <WhatsAppFab />
    </section>
  )
}
