import Image from 'next/image'
import logo from '@/styles/logo.module.scss'

export default function Logo() {
  return (
    <header className={ logo.container }>
      <Image
        src={ '/images/misc/logo.svg' }
        alt='Logo Wandgestaltung Reinl'
        fill
        priority
      />
    </header>
  )
}