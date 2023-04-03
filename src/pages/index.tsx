import {
  Career,
  Contact,
  Footer,
  Imprint,
  Logo,
  Navbar,
  Pictures,
  Profile,
  References,
  ScrollButton
} from '@/components'

import Head from 'next/head'

import main from '@/styles/main.module.scss'

export default function Home() {
  return (
    <main aria-labelledby={'page-title'} className={main.container}>
      <Navbar />
      <Logo />
      <Contact />
      <Profile />
      <Pictures />
      <References />
      <Career />
      <Imprint />
      <Footer />
      <ScrollButton />
    </main>
  )
}
