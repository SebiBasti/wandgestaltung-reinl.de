import pictures from "@/styles/pictures.module.scss"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import { picturesArr } from "~images/references/imageIndex"
import NextJsImage from "@/utils/NextJsImage"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useState } from 'react'
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"

const Lightbox = dynamic(() => import('yet-another-react-lightbox'))

export default function Pictures() {
  const [open, setOpen] = useState(false)
  const [slides, setSlides] = useState(true)
  const [interactive, setInteractive] = useState(false)

  return (
    <section className={ pictures.container } id="pictures">
      <noscript>
        <h3 className={ pictures.noscript }>Aktivieren Sie Javascript um die Bildergalerie aufzurufen.</h3>
      </noscript>
      { picturesArr.map((el, index) => {
        return (
          <button
            onClick={() => {
              setSlides(el.images)
              setOpen(true)
              setInteractive(true)
            }}
            key={ index }
          >
            <Image
              src={ el.image }
              alt={ `${el.description} Bildergalerie` }
              style={{ objectFit:"cover" }}
              sizes={ '75vw' }
              fill
            />
            <p>
              { el.description }
            </p>
          </button>
        )
      }) }
      { interactive &&
        <Lightbox
          open={ open }
          close={() => setOpen(false)}
          slides={ slides }
          render={{ slide: NextJsImage }}
          plugins={ [Fullscreen, Zoom, Thumbnails] }
          zoom={{
            maxZoomPixelRatio: 1,
            zoomInMultiplier: 2
          }}
        />
      }
    </section>
  )
}
