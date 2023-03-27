import SEO from '@/config/next-seo.config'
import { DefaultSeo } from 'next-seo'

import { AppProps } from 'next/app'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
