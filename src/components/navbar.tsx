import Link from 'next/link'

import { useEffect, useState } from 'react'

import navbar from '@/styles/navbar.module.scss'

export default function Navbar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll) // comment 1
  })

  function handleScroll() {
    const currentYOffset = window.scrollY
    const visible = 120 > currentYOffset

    setVisible(visible)
  }

  return (
    <>
      <nav className={`${visible ? navbar.visible : ''} ${navbar.container}`}>
        <span>
          <Link href={'#contact'} scroll={false}>
            Kontakt
          </Link>
          <Link href={'#profile'} scroll={false}>
            Profil
          </Link>
          <Link href={'#pictures'} scroll={false}>
            Bilder
          </Link>
        </span>
        <span>
          <Link href={'#references'} scroll={false}>
            Referenzen
          </Link>
          <Link href={'#career'} scroll={false}>
            Laufbahn
          </Link>
          <Link href={'#imprint'} scroll={false}>
            Impressum
          </Link>
        </span>
      </nav>
    </>
  )
}

/* comment 1
The return statement is used to remove the event listener when the component unmounts or is re-rendered.
This is necessary to prevent memory leaks and potential performance issues.
The returned function is called a "cleanup function", and it should undo any effects that the main function has caused.
 */
