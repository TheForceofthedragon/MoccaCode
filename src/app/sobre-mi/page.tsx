import Container from '@/components/Container'
import { site } from '@/lib/site'
import { FaLaptopCode } from 'react-icons/fa'
import { Target, Eye } from "lucide-react"
import Image from "next/image"
import { Code2 } from "lucide-react"

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 space-y-12">
      {/* Intro + Icono alineados */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        
        {/* Texto */}
        <header className="space-y-4 md:w-2/3">
          <h1 className="text-3xl sm:text-4xl font-bold">Sobre Nosotros</h1>
          <p className="max-w-3xl leading-relaxed text-base sm:text-lg">
            Somos <strong>{site.name}</strong>, desarrolladores web enfocados en crear
            experiencias rápidas, accesibles y hermosas. Trabajamos con stack moderno 
            (Next.js + Tailwind) y optimizamos Core Web Vitals para mejorar posicionamiento y conversión. 
            También integramos WhatsApp, analítica y automatizaciones ligeras.
          </p>
        </header>

        {/* Icono */}
        <div className="flex-shrink-0">
          <div className="relative w-[150px] h-[150px] rounded-3xl shadow-2xl bg-gradient-to-tr from-fuchsia-600 to-blue-500 flex items-center justify-center">
            <Code2 className="text-white w-16 h-16" />
          </div>
        </div>
      </div>

      {/* Diferenciador + Misión & Visión */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="p-6 border rounded-2xl">
          <h2 className="font-bold text-lg mb-3">Qué nos diferencia</h2>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>✔ Pixels perfectos en todas las pantallas.</li>
            <li>✔ SEO técnico y buenas prácticas de accesibilidad.</li>
            <li>✔ Entrega ágil y soporte cercano.</li>
          </ul>
        </div>

        <div className="p-6 border rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <Target className="size-5 text-primary" />
            <h2 className="font-bold text-lg">Misión</h2>
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            Ayudar a emprendedores y negocios a vender más con sitios web rápidos,
            claros y optimizados, integrando herramientas que generen impacto real.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="size-5 text-primary" />
            <h2 className="font-bold text-lg">Visión</h2>
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            Convertirnos en un referente en Latam en desarrollo web moderno,
            reconocidos por la calidad, innovación y el valor que damos a cada cliente.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          Nuestros valores
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2 text-sm sm:text-base leading-relaxed">
          <li>✨ Transparencia y confianza en cada proyecto.</li>
          <li>✨ Diseños modernos, funcionales y accesibles.</li>
          <li>✨ Soporte cercano y orientación a resultados.</li>
          <li>✨ Compromiso con la innovación constante.</li>
        </ul>
      </section>
    </div>
  )
}
