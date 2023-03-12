import '@/styles/globals.scss'
import { DefaultSeo } from 'next-seo'
import SEO from '@/config/next-seo.config'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
