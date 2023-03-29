import Image from 'next/image'

import profile from '@/styles/profile.module.scss'
import utils from '@/styles/utils.module.scss'

export function Profile() {
  return (
    <section
      className={`${profile.container} ${utils['border-bottom']}`}
      id="profile"
    >
      <div className={profile['image-container']}>
        <Image
          src={'/images/misc/profile.png'}
          alt="Profil Bild Daniel Reinl"
          style={{ objectFit: 'cover' }}
          sizes={
            '(max-width: 573px) calc(100vw - 4rem), ' +
            'calc((100vw - 4rem) * 0.382)'
          }
          fill
          priority
        />
      </div>
      <div className={profile.content}>
        <span className={profile.header}>
          <h1>Exklusive Malerarbeiten&nbsp;</h1>
          <h1>seit 2004</h1>
        </span>
        <span className={profile.body}>
          <h2>Leistungen:</h2>
          <p>• Tapezierarbeiten aller Art</p>
          <p>
            Fototapeten - Stofftapeten - Einzelanfertigungen - Handgefertigte
            Tapeten
          </p>
          <p>• Risssanierung</p>
          <p>
            Elastische Sanierung nach Merkblatt 13b vom Bundesverband für
            Sachwertschutz - Sanierung ruhender Setzrisse - Arbeiten werden auf
            Gewährleistung ausgeführt
          </p>
          <p>• Exklusive Malerarbeiten</p>
          <p>Farbberatung & Farbkonzepte - Maßgeschneiderte Lösungen</p>
          <p>• Sternenhimmel</p>
          <p>
            Einzigartige Maltechnik - Spezialfarben - künstlerische Ausprägung -
            höchste Ansprüche an Qualität und Ausführung
          </p>
        </span>
      </div>
    </section>
  )
}
