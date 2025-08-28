export type Project = {
  title: string
  description: string
  href: string
  stack: string[]
  image?: string
  imageAlt?: string
}

export const site = {
  name: 'Mocca Code',
  tagline: 'Desarrollo sitios web modernos, rápidos y listos para vender.',
  whatsapp: '956959100',
  email: 'moccacode1102@gmail.com',
  github: 'https://github.com/TheForceofthedragon',
  linkedin: 'https://www.linkedin.com/in/mocca-code-a272ba381',
  instagram: 'https://www.instagram.com/moccacode?igsh=NTBpZmlnc25oOWcw',
  tiktok: 'https://www.tiktok.com/@mocca.code?_t=ZS-8zF7X3zV5W6&_r=1',
  facebook: 'https://www.facebook.com/tucuenta',
  
  nav: [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/sobre-mi', label: 'Sobre Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ],
  tech: ['Next.js','React','TypeScript','Tailwind CSS','Framer Motion','Vercel'],
  projects: [
    {
      title: 'SoulCar — Sitio de reservas para autos de eventos',
      description: 'Frontend Next.js + Tailwind con integración a Apps Script / Firebase.',
      href: 'https://tusitio1.com',
      stack: ['Next.js','Tailwind','Vercel'],
      image: '/proyectos/soulcar.webp', imageAlt: 'Preview de SoulCar',
    },
    {
      title: 'Mocca Code — Estudio web minimalista',
      description: 'Landing page optimizada con SEO, animaciones y formulario.',
      href: 'https://tusitio2.com',
      stack: ['React','Tailwind','Framer Motion'],
      image: '/proyectos/mocca.webp', imageAlt: 'Preview de Mocca Code',
    },
  ] as Project[],
}
