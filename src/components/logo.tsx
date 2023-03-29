import Image from 'next/image'

import logo from '@/styles/logo.module.scss'

export function Logo() {
  return (
    <header className={logo.container}>
      <Image
        src={'/images/misc/logo.svg'}
        alt="Logo Wandgestaltung Reinl"
        fill
      />
    </header>
  )
}
