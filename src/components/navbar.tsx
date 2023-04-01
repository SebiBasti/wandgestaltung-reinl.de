import { useDebouncedCallback } from 'use-debounce'

import Link from 'next/link'

import { useEffect, useState } from 'react'

import navbar from '@/styles/navbar.module.scss'

export default function Navbar() {
  const [visible, setVisible] = useState<boolean>(false)

  // debounced handleScroll to prevent scroll event from firing way too often
  const handleScroll = useDebouncedCallback(
    () => {
      const currentYOffset = window.scrollY
      const currentWidth = window.innerWidth
      // different visibility depending on the navbar size on different viewport widths
      if (currentWidth <= 628) {
        setVisible(60 < currentYOffset)
      } else {
        setVisible(120 < currentYOffset)
      }
    },
    100,
    { maxWait: 250 }
  )

  // allow Keyboard users to activate navbar with a tab
  const handleTab = (event: KeyboardEvent) => {
    if (event.key == 'Tab') {
      setVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keyup', (event) => handleTab(event))
    // cleanup function to prevent memory leaks etc.
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keyup', (event) => handleTab(event))
    }
  }, [])

  return (
    <>
      <nav className={`${visible ? navbar.visible : ''} ${navbar.container}`}>
        <ul>
          <li>
            <Link href={'#contact'} scroll={false}>
              Kontakt
            </Link>
          </li>
          <li>
            <Link href={'#profile'} scroll={false}>
              Profil
            </Link>
          </li>
          <li>
            <Link href={'#pictures'} scroll={false}>
              Bilder
            </Link>
          </li>
          <li>
            <Link href={'#references'} scroll={false}>
              Referenzen
            </Link>
          </li>
          <li>
            <Link href={'#career'} scroll={false}>
              Laufbahn
            </Link>
          </li>
          <li>
            <Link href={'#imprint'} scroll={false}>
              Impressum
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
