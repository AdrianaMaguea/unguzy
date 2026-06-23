import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/hero_image.png"
          alt="UNGUZY — Balance Natural Para Tu Piel"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <svg className={styles.scrollArrow} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Skincare Natural</p>
        <h1 className={styles.headline}>
          <span className={styles.brandName}>UNGUZY</span>
          <span className={styles.subline}>Balance Natural<br />Para Tu Piel</span>
        </h1>
        <p className={styles.body}>
          Fórmulas artesanales elaboradas con ingredientes de origen natural,
          pensadas para nutrir y equilibrar tu piel con gentileza.
        </p>
        <div className={styles.actions}>
          <Link href="/productos" className="btn btn-primary">
            Ver productos
          </Link>
          <Link href="/nosotros" className="btn btn-outline" style={{ color: 'var(--color-blanco)', borderColor: 'rgba(253, 250, 246, 0.4)' }}>
            Nuestra historia
          </Link>
        </div>
      </div>
    </section>
  )
}
