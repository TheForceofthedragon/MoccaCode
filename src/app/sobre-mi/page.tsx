import Container from '@/components/Container'
import { site } from '@/lib/site'
import { FaLaptopCode } from 'react-icons/fa'

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Sobre Nosotros</h1>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <p className="text-black/80 dark:text-white/80">
            Somos {site.name}, desarrolladores web enfocados en crear experiencias rápidas, accesibles y hermosas.
            Trabajo con stack moderno (Next.js + Tailwind) y optimizo Core Web Vitals para mejorar posicionamiento y conversión.
            También integro WhatsApp, analítica y automatizaciones ligeras.
          </p>
          <div className="rounded-2xl border p-6">
            <h3 className="font-medium">Qué me diferencia</h3>
            <ul className="mt-3 space-y-2 text-sm opacity-90 list-disc list-inside">
              <li>Pixels perfectos en todas las pantallas.</li>
              <li>SEO técnico y buenas prácticas de accesibilidad.</li>
              <li>Entrega ágil y soporte cercano.</li>
            </ul>
          </div>
        </div>
        <FaLaptopCode size={60} className="text-indigo-500" />
          <h2 className="text-2xl font-bold">Nuestros valores</h2>
          <ul className="max-w-md text-left list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Transparencia y confianza en cada proyecto.</li>
            <li>Diseños modernos, funcionales y accesibles.</li>
            <li>Soporte cercano y orientación a resultados.</li>
          </ul>
      </section>
    </Container>
  )
}
