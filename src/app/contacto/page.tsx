import Container from '@/components/Container'
import ContactChannel from '@/components/ContactChannel'

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contacto</h1>
        <p className="mt-2 text-black/70 dark:text-white/70 max-w-xl">Elige cómo quieres contactarme y te respondo con una propuesta clara.</p>
        <ContactChannel />
      </section>
    </Container>
  )
}
