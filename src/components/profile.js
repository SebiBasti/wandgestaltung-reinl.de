import Image from 'next/image'
import profile from '@/styles/profile.module.scss'

export default function Profile() {
  return (
    <section className={ profile.container }>
      <div className={ profile['image-container'] }>
        <Image
          src={ '/images/misc/profile.jpg' }
          alt='Profil Bild Daniel Reinl'
          style={{ objectFit:"cover" }}
          fill
          priority
        />
      </div>
      <div className={ profile.content }>
        <div className={ profile.header }>
          <h1>Exklusive Malerarbeiten&nbsp;</h1>
          <h1>seit 15 Jahren</h1>
        </div>
        <div className={ profile.body }>
          <h2>Leistungen:</h2>
          <p>• Tapezierarbeiten aller Art</p>
          <p>Fototapeten - Stofftapeten - Einzelanfertigungen - Handgefertigte Tapeten</p>
          <p>• Risssanierung</p>
          <p>Elastische Sanierung nach (NORM) - Sanierung ruhender Setzrisse - Arbeiten werden auf Gewährleistung ausgeführt</p>
          <p>• Exklusive Malerarbeiten</p>
          <p>Farbberatung & Farbkonzepte - Maßgeschneiderte Lösungen</p>
          <p>• Sternenhimmel</p>
          <p>Einzigartige Maltechnik - Spezialfarben - künstlerische Ausprägung - höchste Ansprüche an Qualität und Ausführung</p>
        </div>
      </div>
    </section>
  )
}