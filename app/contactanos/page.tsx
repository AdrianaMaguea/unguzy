import Image from 'next/image'
import Link from 'next/link'
import SectionReveal from '@/components/SectionReveal/SectionReveal'
import { bp } from '@/lib/basePath'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contáctanos — UNGUZY Skincare Natural',
  description: 'Escríbenos por WhatsApp para hacer tu pedido o resolver cualquier duda sobre nuestros productos.',
}

export default function ContactanosPage() {
  return (
    <div className={styles.page}>

      {/* ─── Hero con textura ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src={`${bp}/images/texture.png`}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <SectionReveal fade>
            <p className={styles.heroLabel}>Hablemos</p>
            <h1 className={styles.heroTitle}>
              Estamos aquí<br /><em>para ayudarte</em>
            </h1>
            <p className={styles.heroSubtitle}>
              La forma más rápida de hacer tu pedido o resolver dudas
              es a través de WhatsApp. Respondemos en el menor tiempo posible.
            </p>

            <div className={styles.heroCta}>
              <Link
                href="https://wa.me/573007876642?text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20productos%20UNGUZY"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
                Abrir WhatsApp
              </Link>
              <p className={styles.heroPhone}>+57 300 787 6642</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Info cards ───────────────────────────────────────────────── */}
      <section className={styles.infoSection}>
        <div className="container">
          <div className={styles.infoGrid}>
            <SectionReveal delay={0}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3 className={styles.infoTitle}>Horario de atención</h3>
                <p className={styles.infoText}>Lunes a viernes<br />9:00 AM — 6:00 PM</p>
                <p className={styles.infoText} style={{ marginTop: '0.5rem' }}>Sábados<br />9:00 AM — 1:00 PM</p>
              </div>
            </SectionReveal>

            <SectionReveal delay={80}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <h3 className={styles.infoTitle}>Pedidos y despachos</h3>
                <p className={styles.infoText}>
                  Enviamos a todo Colombia. El despacho tarda de 1 a 3 días hábiles
                  después de confirmado el pago.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={160}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h3 className={styles.infoTitle}>Consultas de productos</h3>
                <p className={styles.infoText}>
                  ¿No sabes qué producto es el indicado para tu piel?
                  Cuéntanos y te ayudamos a elegir la rutina correcta.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

    </div>
  )
}
