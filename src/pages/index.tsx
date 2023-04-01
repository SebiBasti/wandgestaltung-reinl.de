import {
  Career,
  Contact,
  Footer,
  Imprint,
  Logo,
  Pictures,
  Profile,
  References,
  ScrollButton
} from '@/components'

import Head from 'next/head'

import Navbar from '@/components/navbar'

import main from '@/styles/main.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wandgestaltung Reinl</title>
        <meta
          name="description"
          content="Werte schaffen, Werte erhalten - Exklusive Malerarbeiten seit 2004"
        />
        <meta name="robots" content="noodp, noydir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  )
}
