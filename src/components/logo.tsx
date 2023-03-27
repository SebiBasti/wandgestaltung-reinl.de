import logo from '@/styles/logo.module.scss'
import Image from 'next/image'

export function Logo() {
  return (
    <header className={logo.container}>
      <Image
        src={'/images/misc/logo.svg'}
        alt="Logo Wandgestaltung Reinl"
        fill
        priority
      />
    </header>
  )
}
