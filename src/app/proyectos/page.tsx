import Container from '@/components/Container'
import { site } from '@/lib/site'
import { ProjectCard } from '@/components/ProjectCard'

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Proyectos destacados</h1>
            <p className="mt-2 text-black/70 dark:text-white/70 max-w-2xl">Un vistazo a mi trabajo reciente. Haz clic para abrirlos.</p>
          </div>
          <a href="/contacto" className="hidden md:inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5">¿Hacemos el tuyo?</a>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {site.projects.map((p) => (<ProjectCard key={p.title} p={p} />))}
        </div>
      </section>
    </Container>
  )
}
