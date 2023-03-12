import career from "@/styles/career.module.scss"


export default function Career() {
  return (
    <section className={ career.container }>
      <h2>Laufbahn:</h2>
      <table>
        <tbody>
          <tr>
            <td>1992 – 1995</td>
            <td>Lehre zum Maler- und Lackierer</td>
          </tr>
          <tr>
            <td>1995 – 2005</td>
            <td>Malergeselle in renommiertem Unternehmen</td>
          </tr>
          <tr>
            <td>2005</td>
            <td>Firmengründung in Berlin</td>
          </tr>
          <tr>
            <td>seit 2009</td>
            <td>Sternenhimmelpartner</td>
          </tr>
          <tr>
            <td>seit 2010</td>
            <td>Entwicklung der Designtechnik</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
