import pictures from "@/styles/pictures.module.scss"
import "yet-another-react-lightbox/styles.css"
import { picturesArr } from "~images/references/imageIndex"
import NextJsImage from "@/utils/NextJsImage"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useState } from 'react'
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

const Lightbox = dynamic(() => import('yet-another-react-lightbox'))

export default function Pictures() {
  const [open, setOpen] = useState(false)
  const [slides, setSlides] = useState(true)
  const [interactive, setInteractive] = useState(false)

  return (
    <section className={ pictures.container }>
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
          plugins={ [Fullscreen, Zoom] } // Zoom deactivated for now
          zoom={{
            maxZoomPixelRatio: 1,
            zoomInMultiplier: 2
          }}
        />
      }
    </section>
  )
}
