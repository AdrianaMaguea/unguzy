import Image from 'next/image'
import ProductCard from '@/components/ProductCard/ProductCard'
import SectionReveal from '@/components/SectionReveal/SectionReveal'
import { products } from '@/lib/products'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productos — UNGUZY Skincare Natural',
  description: 'Catálogo completo de productos UNGUZY. Sérum, tónicos, jabones y cremas con ingredientes de origen natural.',
}

export default function ProductosPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/lifestyle.png"
            alt="UNGUZY lifestyle"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <svg className={styles.scrollArrow} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        <div className={styles.heroContent}>
          <SectionReveal className={styles.heroText}>
            <p className="section-label" style={{ color: 'var(--color-ambar)' }}>Catálogo completo</p>
            <h1 className={styles.title}>Nuestros<br />Productos</h1>
            <p className={styles.subtitle}>
              Seis fórmulas elaboradas con ingredientes botánicos
              de alta concentración. Sin rellenos, sin artificios.
            </p>
          </SectionReveal>

        </div>
      </section>

      <section className={styles.catalog}>
        <div className="container">
          <div className={styles.grid}>
            {products.map((product, i) => (
              <SectionReveal key={product.id} delay={i * 80}>
                <ProductCard product={product} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
