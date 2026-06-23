import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero/Hero'
import ProductCard from '@/components/ProductCard/ProductCard'
import SectionReveal from '@/components/SectionReveal/SectionReveal'
import { featuredProducts } from '@/lib/products'
import { WHATSAPP_NUMBER } from '@/lib/config'
import { bp } from '@/lib/basePath'
import styles from './page.module.css'

const ingredientesActivos = [
  {
    id: 'manzanilla',
    image: `${bp}/images/manzanilla.png`,
    name: 'Manzanilla',
    benefit: 'Calmante & Antiinflamatorio',
    description: 'Suaviza la piel irritada y reduce el enrojecimiento con su acción antiinflamatoria natural.',
  },
  {
    id: 'hamamelis',
    image: `${bp}/images/hamamelis.png`,
    name: 'Hamamelis',
    benefit: 'Astringente & Purificante',
    description: 'Afina los poros, controla el exceso de sebo y equilibra la piel mixta con suavidad.',
  },
  {
    id: 'carbonactivado',
    image: `${bp}/images/carbonactivado.png`,
    name: 'Carbón Activado',
    benefit: 'Desintoxicante & Purificante',
    description: 'Absorbe impurezas y toxinas desde el interior del poro, dejando la piel limpia y renovada.',
  },
  {
    id: 'arroz',
    image: `${bp}/images/arroz.png`,
    name: 'Arroz',
    benefit: 'Iluminador & Nutritivo',
    description: 'Unifica el tono, aporta luminosidad y nutre la piel con aminoácidos y vitaminas del complejo B.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* ─── Productos destacados ─────────────────────────────────────── */}
      <section className={styles.featured}>
        <div className="container">
          <SectionReveal>
            <p className="section-label">Selección de la marca</p>
            <h2 className="section-title">Productos Destacados</h2>
          </SectionReveal>

          <div className={styles.grid}>
            {featuredProducts.map((product, i) => (
              <SectionReveal key={product.id} delay={i * 120}>
                <ProductCard product={product} hideIngredients />
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className={styles.viewAll}>
            <Link href="/productos" className="btn btn-outline">
              Ver catálogo completo
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ─── CTA Asesoramiento ───────────────────────────────────────── */}
      <section className={styles.asesoria}>
        <SectionReveal>
          <div className={styles.asesoriaInner}>
            <p className="section-label" style={{ color: 'var(--color-ambar)' }}>¿Necesitas asesoramiento?</p>
            <h2 className={styles.asesoriaTitle}>Contáctanos</h2>
            <p className={styles.asesoriaText}>
              Nuestro equipo está listo para orientarte en tu rutina de cuidado
              y ayudarte a elegir los productos ideales para tu piel.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría recibir asesoramiento sobre los productos UNGUZY')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.asesoriaBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
              </svg>
              Escribirnos por WhatsApp
            </a>
          </div>
        </SectionReveal>
      </section>

      {/* ─── Ingredientes activos ────────────────────────────────────── */}
      <section className={styles.activos}>
        <div className="container">
          <SectionReveal>
            <p className="section-label">Ingredientes Activos</p>
            <h2 className="section-title">Lo que hace la diferencia</h2>
          </SectionReveal>
          <div className={styles.activosGrid}>
            {ingredientesActivos.map((ing, i) => (
              <SectionReveal key={ing.id} delay={i * 110}>
                <article className={styles.activoCard}>
                  <div className={styles.activoImageWrap}>
                    <Image
                      src={ing.image}
                      alt={ing.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                      className={styles.activoImage}
                    />
                  </div>
                  <p className={styles.activoBenefit}>{ing.benefit}</p>
                  <h3 className={styles.activoName}>{ing.name}</h3>
                  <p className={styles.activoDesc}>{ing.description}</p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Teaser Nosotros ──────────────────────────────────────────── */}
      <section className={styles.nosotrosTeaser}>
        <div className={styles.nosotrosInner}>
          <SectionReveal className={styles.nosotrosImage} fade>
            <div className={styles.imageFrame}>
              <Image
                src={`${bp}/images/modelo2.png`}
                alt="Mujer usando productos UNGUZY"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </SectionReveal>

          <SectionReveal className={styles.nosotrosContent} delay={200}>
            <p className="section-label">Sobre la marca</p>
            <h2 className={styles.nosotrosTitle}>
              Formulado con intención.<br />
              <em>Elaborado con cuidado.</em>
            </h2>
            <p className={styles.nosotrosText}>
              UNGUZY nace de la convicción de que la piel merece ingredientes
              honestos. Cada fórmula es el resultado de seleccionar activos
              botánicos con propósito — sin rellenos, sin excesos.
            </p>
            <p className={styles.nosotrosText}>
              Creemos que el cuidado de la piel es un ritual, no una obligación.
              Y que los mejores ingredientes vienen de la naturaleza.
            </p>
            <Link href="/nosotros" className="btn btn-outline" style={{ marginTop: '1rem' }}>
              Conocer nuestra historia
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Banner ingredientes ──────────────────────────────────────── */}
      <section className={styles.ingredientsBanner}>
        <div className="container">
          <SectionReveal>
            <p className="section-label" style={{ textAlign: 'center', color: 'var(--color-papel)', opacity: 0.6 }}>
              Ingredientes clave
            </p>
            <h2 className={styles.ingredientsTitle}>
              De la naturaleza a tu rutina
            </h2>
          </SectionReveal>
          <SectionReveal delay={150}>
            <div className={styles.ingredientsList}>
              {['Rosa Mosqueta', 'Ácido Hialurónico', 'Hamamelis', 'Aceite de Argán', 'Aloe Vera', 'Vitamina C'].map((ing) => (
                <span key={ing} className={styles.ingredientChip}>{ing}</span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
