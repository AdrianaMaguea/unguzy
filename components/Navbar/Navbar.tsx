'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { bp } from '@/lib/basePath'
import styles from './Navbar.module.css'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/productos', label: 'Productos' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contactanos', label: 'Contáctanos' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const darkHero = pathname === '/productos'
  const solidNav = pathname.startsWith('/productos/') // detail pages — white bg, needs solid nav
  const forceWhite = darkHero && !scrolled
  const useScrolledStyle = scrolled || solidNav

  return (
    <header className={`${styles.header} ${useScrolledStyle ? styles.scrolled : ''} ${forceWhite ? styles.forceWhite : ''}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image
            src={`${bp}/images/logo.png`}
            alt="UNGUZY"
            width={120}
            height={64}
            style={{ objectFit: 'contain' }}
            className={`${styles.logoImg} ${useScrolledStyle || forceWhite ? styles.logoScrolled : styles.logoDefault}`}
            priority
          />
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${pathname === href ? styles.active : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ''}`} />
        </button>
      </nav>
    </header>
  )
}
