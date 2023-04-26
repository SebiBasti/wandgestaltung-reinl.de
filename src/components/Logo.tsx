import Image from 'next/image'

import logo from '@/styles/logo.module.scss'

export function Logo() {
  return (
    <header aria-labelledby="logo" className={logo.container}>
      <Image
        src={'/images/misc/logo.svg'}
        alt="Logo Wandgestaltung Reinl"
        id={'logo'}
        fill
      />
    </header>
  )
}
