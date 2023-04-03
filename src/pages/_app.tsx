import SEO from '@/config/next-seo.config'
import { DefaultSeo } from 'next-seo'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { useCanonicalUrl } from '@/utils'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  const canonicalUrl = useCanonicalUrl('https://www.wandgestaltung-reinl.de')
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo canonical={canonicalUrl} {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
