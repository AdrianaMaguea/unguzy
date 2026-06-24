'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './IngredientCarousel.module.css'

interface Ingredient {
  id: string
  image: string
  name: string
  benefit: string
  description: string
}

interface IngredientCarouselProps {
  items: Ingredient[]
}

function getVisible(): number {
  if (typeof window === 'undefined') return 4
  if (window.innerWidth <= 640) return 1
  if (window.innerWidth <= 1024) return 2
  return 4
}

export default function IngredientCarousel({ items }: IngredientCarouselProps) {
  const [visible, setVisible] = useState(4)
  const [index, setIndex] = useState(0)
  const max = items.length - visible
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const update = () => {
      const v = getVisible()
      setVisible(v)
      setIndex((i) => Math.min(i, items.length - v))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [items.length])

  const prev = () => setIndex((i) => Math.max(i - 1, 0))
  const next = () => setIndex((i) => Math.min(i + 1, max))

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) {
      delta > 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  return (
    <div className={styles.root}>
      <div
        className={styles.viewport}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ul
          className={styles.track}
          style={{ transform: `translateX(calc(-${index} * (100% / ${visible}) - ${index} * var(--gap)))` }}
        >
          {items.map((ing) => (
            <li key={ing.id} className={styles.card} style={{ flex: `0 0 calc((100% - ${visible - 1} * var(--gap)) / ${visible})` }}>
              <div className={styles.imageWrap}>
                <Image
                  src={ing.image}
                  alt={ing.name}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className={styles.benefit}>{ing.benefit}</p>
              <h3 className={styles.name}>{ing.name}</h3>
              <p className={styles.description}>{ing.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={prev}
          disabled={index === 0}
          aria-label="Anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className={styles.dots}>
          {Array.from({ length: Math.max(max + 1, 1) }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir a posición ${i + 1}`}
            />
          ))}
        </div>

        <button
          className={styles.arrow}
          onClick={next}
          disabled={index >= max}
          aria-label="Siguiente"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
