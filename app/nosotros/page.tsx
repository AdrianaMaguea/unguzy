import Image from 'next/image'
import SectionReveal from '@/components/SectionReveal/SectionReveal'
import { bp } from '@/lib/basePath'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros — UNGUZY Skincare Natural',
  description: 'Conoce la historia de UNGUZY, nuestra filosofía y los ingredientes que hacen especiales nuestras fórmulas.',
}

function IconTransparencia() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 9 C36 17 39 26 39 33 C39 43 36 54 32 58 C28 54 25 43 25 33 C25 26 28 17 32 9Z" />
      <line x1="32" y1="13" x2="32" y2="54" />
      <line x1="32" y1="28" x2="27" y2="36" />
      <line x1="32" y1="28" x2="37" y2="36" />
      <line x1="32" y1="40" x2="28" y2="46" />
      <line x1="32" y1="40" x2="36" y2="46" />
      <circle cx="32" cy="9" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconOrigenNatural() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="32" y1="58" x2="32" y2="36" />
      <path d="M32 36 C29 26 27 15 32 9 C37 15 35 26 32 36Z" />
      <path d="M32 40 C24 35 14 31 10 34 C14 39 24 44 32 40Z" />
      <path d="M32 40 C40 35 50 31 54 34 C50 39 40 44 32 40Z" />
      <circle cx="32" cy="9" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="10" cy="34" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="54" cy="34" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="32" cy="58" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconGentileza() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 33 C29 24 27 14 32 9 C37 14 35 24 32 33Z" />
      <path d="M32 33 C25 30 16 25 13 20 C17 15 26 22 32 33Z" />
      <path d="M32 33 C39 30 48 25 51 20 C55 15 46 22 32 33Z" />
      <path d="M32 33 C25 38 17 45 14 50 C18 54 26 45 32 33Z" />
      <path d="M32 33 C39 38 47 45 50 50 C54 54 46 45 32 33Z" />
      <line x1="32" y1="33" x2="22" y2="26" />
      <line x1="32" y1="33" x2="42" y2="26" />
      <line x1="32" y1="33" x2="19" y2="39" />
      <line x1="32" y1="33" x2="45" y2="39" />
      <circle cx="22" cy="26" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="42" cy="26" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="19" cy="39" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="45" cy="39" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="32" cy="33" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconIntencion() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="32" y1="32" x2="32" y2="13" />
      <line x1="32" y1="32" x2="48" y2="22" />
      <line x1="32" y1="32" x2="48" y2="42" />
      <line x1="32" y1="32" x2="32" y2="51" />
      <line x1="32" y1="32" x2="16" y2="42" />
      <line x1="32" y1="32" x2="16" y2="22" />
      <circle cx="32" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="48" cy="22" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="48" cy="42" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="32" cy="51" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="42" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="22" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const valores = [
  {
    titulo: 'Transparencia',
    texto: 'Cada ingrediente tiene un propósito. No usamos rellenos ni ingredientes cuya función no podamos explicar.',
    icono: <IconTransparencia />,
  },
  {
    titulo: 'Origen Natural',
    texto: 'Trabajamos con activos botánicos de procedencia verificada, priorizando ingredientes de comercio justo cuando es posible.',
    icono: <IconOrigenNatural />,
  },
  {
    titulo: 'Gentileza',
    texto: 'Formulamos para todo tipo de piel; la eficacia no debería comprometer la suavidad.',
    icono: <IconGentileza />,
  },
  {
    titulo: 'Intención',
    texto: 'Cada producto nace de una necesidad real. No fabricamos por fabricar: cada lanzamiento es el resultado de meses de formulación.',
    icono: <IconIntencion />,
  },
]

const ingredientes = [
  { nombre: 'Rosa Mosqueta', beneficio: 'Regenera y unifica el tono.' },
  { nombre: 'Hamamelis', beneficio: 'Astringente natural; minimiza los poros.' },
  { nombre: 'Ácido Hialurónico', beneficio: 'Hidratación en profundidad.' },
  { nombre: 'Aceite de Argán', beneficio: 'Nutrición y refuerzo de la barrera cutánea.' },
  { nombre: 'Aloe Vera', beneficio: 'Calmante y antiinflamatorio.' },
  { nombre: 'Vitamina C', beneficio: 'Antioxidante; ilumina y unifica el tono.' },
]

export default function NosotrosPage() {
  return (
    <div className={styles.page}>

      {/* ─── Hero de sección ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src={`${bp}/images/macro.png`}
            alt="Ingrediente natural UNGUZY"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <SectionReveal>
            <p className="section-label" style={{ color: 'var(--color-ambar)' }}>Nuestra historia</p>
            <h1 className={styles.heroTitle}>
              Formulado con<br />
              <em>intención natural</em>
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Historia ────────────────────────────────────────────────── */}
      <section className={styles.historia}>
        <div className={styles.historiaInner}>
          <SectionReveal className={styles.historiaTexto}>
            <p className="section-label">Origen</p>
            <h2 className={styles.sectionTitle}>Por qué existe UNGUZY</h2>
            <p className={styles.body}>
              UNGUZY nació de una pregunta simple: ¿por qué la mayoría de los
              productos de skincare tienen listas de ingredientes que nadie entiende?
            </p>
            <p className={styles.body}>
              Empezamos a formular en pequeños lotes, con ingredientes botánicos
              de alta concentración y sin rellenos innecesarios. Lo que comenzó
              como un proyecto personal se convirtió en una marca porque funcionaba:
              para nosotras y para las personas que probaron nuestras primeras
              fórmulas.
            </p>
            <p className={styles.body}>
              Hoy seguimos elaborando cada producto con el mismo criterio:
              si no tiene una razón de estar en la fórmula, no está.
            </p>

            <div className={styles.nombreOrigen}>
              <h3 className={styles.nombreTitulo}>Por qué UNGUZY</h3>
              <p className={styles.body}>
                El nombre está inspirado en <em>ngozi</em>, la palabra swahili
                que designa la piel. Una lengua del África Oriental que nombra
                aquello que protegemos: la piel como primer contacto con el mundo,
                como límite vivo entre el adentro y el afuera.
              </p>
              <p className={styles.body}>
                Elegimos esa raíz porque nos recordaba que el cuidado de la piel
                no es vanidad — es atención. Y que los mejores ingredientes
                para cuidarla llevan siglos siendo reconocidos por culturas
                que aprendieron a leer la naturaleza antes que los laboratorios.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal className={styles.historiaImagen} fade delay={200}>
            <div className={styles.imagenFrame}>
              <Image
                src={`${bp}/images/modelo1.png`}
                alt="Ingredientes naturales UNGUZY"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Valores ─────────────────────────────────────────────────── */}
      <section className={styles.valores}>
        <div className="container">
          <SectionReveal>
            <p className="section-label">Lo que nos guía</p>
            <h2 className={`section-title ${styles.sectionTitleCenter}`}>Nuestros Valores</h2>
          </SectionReveal>
          <div className={styles.valoresGrid}>
            {valores.map((v, i) => (
              <SectionReveal key={v.titulo} delay={i * 100}>
                <div className={styles.valorCard}>
                  <div className={styles.valorIcono}>{v.icono}</div>
                  <h3 className={styles.valorTitulo}>{v.titulo}</h3>
                  <p className={styles.valorTexto}>{v.texto}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Ingredientes clave ───────────────────────────────────────── */}
      <section className={styles.ingredientes}>
        <div className="container">
          <SectionReveal>
            <p className="section-label" style={{ color: 'var(--color-blanco)', opacity: 0.7 }}>
              Materia prima
            </p>
            <h2 className={styles.ingredientesTitulo}>Ingredientes Clave</h2>
          </SectionReveal>
          <div className={styles.ingredientesGrid}>
            {ingredientes.map((ing, i) => (
              <SectionReveal key={ing.nombre} delay={i * 80}>
                <div className={styles.ingredienteItem}>
                  <h4 className={styles.ingredienteNombre}>{ing.nombre}</h4>
                  <p className={styles.ingredienteBeneficio}>{ing.beneficio}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
