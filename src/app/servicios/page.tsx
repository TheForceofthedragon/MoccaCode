import Container from '@/components/Container'
import { Code2, Globe2, Smartphone, Wrench, Server, BarChart3 } from 'lucide-react'

const services = [
  { icon: Globe2, title: 'Páginas web a medida', desc: 'Landing pages y sitios corporativos con diseño premium y SEO técnico.' },
  { icon: Smartphone, title: 'Responsive y performance', desc: 'Velocidad, accesibilidad y UX impecable en móviles y escritorio.' },
  { icon: Code2, title: 'Integraciones y automatización', desc: 'Formularios, WhatsApp, Analytics, pixel y flujos sin backend complejo.' },
  { icon: Wrench, title: 'Mantenimiento y soporte', desc: 'Monitoreo continuo, actualizaciones y asistencia personalizada para tu web.' },
  { icon: Server, title: 'Dominio y hosting asegurados', desc: 'Configuramos y gestionamos tu dominio y hosting para que tu sitio esté siempre en línea.' },
  { icon: BarChart3, title: 'Optimización SEO & Analytics', desc: 'Posicionamiento en buscadores y métricas claras para crecer con datos reales.' },
]

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Servicios</h1>
        <p className="mt-4 max-w-2xl">
          Diseño y desarrollo web con foco en resultados: velocidad, SEO y conversión.
        </p>

        {/* Grid de servicios */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border p-6 transition-transform duration-300 
                         hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 
                         hover:bg-neutral-900 dark:hover:bg-neutral-800"
            >
              <s.icon className="mb-4 size-8 text-indigo-400" />
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
