import navbar from '@/styles/navbar.module.scss'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  function handleScroll() {
    const currentYOffset = window.scrollY
    const visible = 120 > currentYOffset

    setVisible(visible)
  }

  return (
    <>
      <nav className={ `${visible ? navbar.visible : ''} ${navbar.container}` }>
        <span>
          <Link href={ '#contact' } scroll={ false }>Kontakt</Link>
          <Link href={ '#profile' } scroll={ false }>Profil</Link>
          <Link href={ '#pictures' } scroll={ false }>Bilder</Link>
        </span>
        <span>
          <Link href={ '#references' } scroll={ false }>Referenzen</Link>
          <Link href={ '#career' } scroll={ false }>Laufbahn</Link>
          <Link href={ '#imprint' } scroll={ false }>Impressum</Link>
        </span>
      </nav>
    </>
  )
}
