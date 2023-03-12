import footer from '@/styles/footer.module.scss'
import Link from "next/link"

export default function Footer() {
  return (
    <section className={ footer.container }>
      <p>Fullstack Web Development Sebastian Remm:&nbsp;</p>
      <div className={ footer.logo }>
        <Link href="https://www.sebibasti.dev/">
          sebibasti.dev
        </Link>
      </div>
    </section>
  )
}