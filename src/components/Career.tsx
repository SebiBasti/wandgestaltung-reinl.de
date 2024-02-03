import career from '@/styles/career.module.scss'
import utils from '@/styles/utils.module.scss'

export function Career() {
  return (
    <section
      className={`${career.container} ${utils['border-bottom']}`}
      id="career"
      aria-labelledby={'career-title'}
    >
      <h2 id={'career-title'}>Laufbahn:</h2>
      <p className={`${career['list-item']}`}>
        <span>1992&nbsp;–&nbsp;1995</span>
        <span>Lehre zum Maler- und&nbsp;Lackierer</span>
      </p>
      <p className={`${career['list-item']}`}>
        <span>1995&nbsp;–&nbsp;2005</span>
        <span>Malergeselle in renommiertem Unternehmen</span>
      </p>
      <p className={`${career['list-item']}`}>
        <span>2005</span>
        <span>Firmengründung in&nbsp;Berlin</span>
      </p>
      <p className={`${career['list-item']}`}>
        <span>seit 2009</span>
        <span>Sternenhimmel&shy;partner</span>
      </p>
      <p className={`${career['list-item']}`}>
        <span>seit 2010</span>
        <span>Entwicklung der Designtechnik</span>
      </p>
    </section>
  )
}
