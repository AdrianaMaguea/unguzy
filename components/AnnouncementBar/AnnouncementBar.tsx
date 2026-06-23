import styles from './AnnouncementBar.module.css'

const items = [
  'Envío gratis por compra de kit',
  'Pago seguro a contra entrega',
]

export default function AnnouncementBar() {
  const repeated = [...items, ...items]

  return (
    <div className={styles.bar} role="banner" aria-label="Anuncios">
      <div className={styles.track} aria-hidden="true">
        {repeated.map((text, i) => (
          <span key={i} className={styles.item}>
            {text}
            <span className={styles.sep} aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
