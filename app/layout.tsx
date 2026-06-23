import type { Metadata } from 'next'
import './globals.css'
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'UNGUZY — Skincare Natural',
  description: 'Balance Natural Para Tu Piel. Fórmulas artesanales con ingredientes de origen natural.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return (
    <html lang="es">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `@font-face{font-family:'UnguzyFont';src:url('${basePath}/fonts/against regular.otf') format('opentype');font-weight:normal;font-style:normal;font-display:swap;}` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <AnnouncementBar />
        <Navbar />
        <main style={{ paddingTop: 'var(--header-total)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
