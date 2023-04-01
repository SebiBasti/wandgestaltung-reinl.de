import references from '@/styles/references.module.scss'
import utils from '@/styles/utils.module.scss'

export function References() {
  return (
    <section
      className={`${references.container} ${utils['border-bottom']}`}
      id="references"
      aria-label="Referenzen"
    >
      <h2>Referenzen:</h2>
      <h3>Risssanierungen</h3>
      <p>• Helma AG</p>
      <h3>Tapeten</h3>
      <p>• Hamburger Bahnhof</p>
      <p>• Galerie Esther Shipper</p>
      <p>• Grün Berlin GmbH</p>
      <p>• Gropius Bau - Philippe Parteno</p>
      <p>• Schloss Biesdorf</p>
      <p>• Schloss Wolfsburg</p>
      <p>• uvm.</p>
    </section>
  )
}
