'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './ProductCarousel.module.css'

interface ProductCarouselProps {
  images: string[]
  productName: string
}

export default function ProductCarousel({ images, productName }: ProductCarouselProps) {
  const [active, setActive] = useState(0)

  if (images.length === 1) {
    return (
      <div className={styles.staticWrapper}>
        <Image
          src={images[0]}
          alt={productName}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    )
  }

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length)
  const next = () => setActive((i) => (i + 1) % images.length)

  return (
    <div className={styles.carousel}>
      <div className={styles.track}>
        {images.map((src, i) => (
          <div
            key={src}
            className={`${styles.slide} ${i === active ? styles.slideActive : ''}`}
            aria-hidden={i !== active}
          >
            <Image
              src={src}
              alt={`${productName} — vista ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <button
        className={`${styles.arrow} ${styles.arrowPrev}`}
        onClick={prev}
        aria-label="Imagen anterior"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        className={`${styles.arrow} ${styles.arrowNext}`}
        onClick={next}
        aria-label="Siguiente imagen"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Ver imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
