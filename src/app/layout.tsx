import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import GA from '@/analytics/GA'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: `Portafolio – ${site.name}`,
  description: 'Portafolio de desarrollo web con Next.js y Tailwind',
  metadataBase: new URL('https://tu-dominio.com'), // cambia por tu dominio real
  openGraph: {
    title: `Portafolio – ${site.name}`,
    description: 'Sitios web modernos, rápidos y listos para vender.',
    url: '/',
    siteName: site.name,
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Portafolio – ${site.name}`,
    description: 'Sitios web modernos, rápidos y listos para vender.',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <GA />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
