import pictures from '@/styles/pictures.module.scss'
import utils from '@/styles/utils.module.scss'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { picturesArr } from '~images/references/imageIndex'
import { NextJsImage } from '@/utils'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'

import { Lightbox as StaticLightbox } from 'yet-another-react-lightbox'

const Lightbox = dynamic<React.ComponentProps<typeof StaticLightbox>>(
  () => import('yet-another-react-lightbox'),
  {
    ssr: false
  }
)

export function Pictures() {
  const [open, setOpen] = useState<boolean>(false)
  const [slides, setSlides] = useState<HTMLImageElement[]>([])
  const [interactive, setInteractive] = useState<boolean>(false)

  return (
    <section className={ `${pictures.container} ${utils['border-bottom']}` } id="pictures">
      <noscript>
        <h3 className={ pictures.noscript }>Aktivieren Sie Javascript um die Bildergalerie aufzurufen.</h3>
      </noscript>
      { picturesArr.map((el, index: number) => {
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
