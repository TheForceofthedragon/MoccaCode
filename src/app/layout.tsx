// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import GA from '@/analytics/GA'
import WhatsAppFab from '@/components/WhatsAppFab'  // 👈

export const metadata: Metadata = {
  title: 'Mocca Code',
  description: 'Portafolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark light" />
      </head>
      {/* BODY como “layout” de columna para anclar el footer abajo */}
      <body className="min-h-screen flex flex-col bg-white text-black dark:bg-neutral-950 dark:text-white">
        <Suspense fallback={null}>
          <GA />
        </Suspense>

        <Nav />

        {/* Esto empuja el footer al fondo */}
        <main className="flex-1">{children}</main>

        <Footer />

        {/* FAB SIEMPRE por encima de todo */}
        <WhatsAppFab />
      </body>
    </html>
  )
}
