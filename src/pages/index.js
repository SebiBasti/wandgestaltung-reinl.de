import Head from 'next/head'
import main from '@/styles/main.module.scss'
import Logo from '@/components/logo'
import Contact from '@/components/contact'
import Profile from '@/components/profile'
import Pictures from '@/components/pictures'
import Career from '@/components/career'
import Imprint from "@/components/imprint"
import Footer from "@/components/footer"
import References from "@/components/references"
import ScrollButton from "@/components/scrollButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wandgestaltung Reinl</title>
        <meta name="description" content="Werte schaffen, Werte erhalten - Exklusive Malerarbeiten seit 2004" />
        <meta name="robots" content="noodp, noydir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={ main.container }>
        <Logo/>
        <Contact/>
        <Profile/>
        <Pictures/>
        <References/>
        <Career/>
        <Imprint/>
        <Footer/>
        <ScrollButton/>
      </main>
    </>
  )
}
