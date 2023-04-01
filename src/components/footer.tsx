import Link from 'next/link'

import footer from '@/styles/footer.module.scss'

export function Footer() {
  return (
    <section aria-label="Footer" className={footer.container}>
      <p>Fullstack&nbsp;Web&nbsp;Development Sebastian&nbsp;Remm:&nbsp;</p>
      <span className={footer.logo}>
        <Link href="https://www.sebibasti.dev/">sebibasti.dev</Link>
      </span>
    </section>
  )
}
