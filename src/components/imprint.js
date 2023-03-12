import imprint from '@/styles/imprint.module.scss'
import Link from "next/link"

export default function Imprint() {
  return (
    <section className={ imprint.container }>
      <h2>Impressum:</h2>
      <h3>Angaben gemäß § 5 TMG</h3>
      <p>Daniel Reinl</p>
      <p>Wandgestaltung Reinl</p>
      <p>Zur Kohlengrube 1</p>
      <p>15749 Mittenwalde</p>
      <h3>Kontakt</h3>
      <p>Telefon: +49 179 111 00 46</p>
      <p>E-Mail: mail@wandgestaltung-reinl.de</p>
      <h3>Umsatzsteuer-ID</h3>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
      <p>49/261/08064</p>
      <h3>Angaben zur Berufshaftpflichtversicherung</h3>
      <p>Name des Versicherers:</p>
      <p>Signal Iduna</p>
      <Link href={ 'https://www.e-recht24.de/impressum-generator.htm' }>Quelle</Link>
    </section>
  )
}