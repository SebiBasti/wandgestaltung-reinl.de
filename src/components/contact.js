import Image from 'next/image'
import contact from '@/styles/contact.module.scss'
import Link from "next/link"

export default function Contact() {
  return (
    <section className={ contact.container }>
      <Link
        href={ 'tel:+49-179-111-0046' }
        className={ contact.link }
      >
        <div className={ contact['image-container'] }>
          <Image
            src={ '/images/misc/phone.svg' }
            alt='Icon Telefon'
            fill
            priority
          />
        </div>
        <p>+49 179 111 0046</p>
      </Link>
      <Link
        href={ 'mailto:mail@wandgestaltung-reinl.de' }
        className={ contact.link }
      >
        <div className={ contact['image-container'] }>
          <Image
            src={ '/images/misc/mail.svg' }
            alt='Icon Email'
            fill
            priority
          />
        </div>
        <p>mail@wandgestaltung-reinl.de</p>
      </Link>
    </section>
  )
}