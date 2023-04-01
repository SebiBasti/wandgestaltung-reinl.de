import Image from 'next/image'
import Link from 'next/link'

import contact from '@/styles/contact.module.scss'
import utils from '@/styles/utils.module.scss'

export function Contact() {
  return (
    <section
      className={`${contact.container} ${utils['border-bottom']}`}
      id="contact"
      aria-label="Kontakt"
    >
      <Link href={'tel:+49-179-111-0046'} className={contact.link}>
        <div className={contact['image-container']}>
          <Image src={'/images/misc/phone.svg'} alt="Icon Telefon" fill />
        </div>
        <p>+49 179 111 0046</p>
      </Link>
      <Link
        href={'mailto:mail@wandgestaltung-reinl.de'}
        className={contact.link}
      >
        <div className={contact['image-container']}>
          <Image src={'/images/misc/mail.svg'} alt="Icon Email" fill />
        </div>
        <p>mail@wandgestaltung-reinl.de</p>
      </Link>
    </section>
  )
}
