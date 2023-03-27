import SEO from '@/config/next-seo.config'
import '@/styles/globals.scss'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
