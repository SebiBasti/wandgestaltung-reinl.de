import { Lightbox as StaticLightbox } from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import 'yet-another-react-lightbox/plugins/counter.css'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import { picturesArr } from '~images/references/imageIndex'

import dynamic from 'next/dynamic'
import Image from 'next/image'

import React, { createContext, useState } from 'react'

import { NextJsImage } from '@/utils'

import pictures from '@/styles/pictures.module.scss'
import utils from '@/styles/utils.module.scss'

const Lightbox = dynamic<React.ComponentProps<typeof StaticLightbox>>(
  () => import('yet-another-react-lightbox'),
  {
    ssr: false,
  }
)

export function Pictures() {
  const [open, setOpen] = useState<boolean>(false)
  const [slides, setSlides] = useState<HTMLImageElement[]>([])
  const [interactive, setInteractive] = useState<boolean>(false)
  const zoomContext = createContext<number>(1)

  return (
    <section
      className={`${pictures.container} ${utils['border-bottom']}`}
      id="pictures"
    >
      <noscript>
        <h3 className={pictures.noscript}>
          Aktivieren Sie Javascript um die Bildergalerie aufzurufen.
        </h3>
      </noscript>
      {picturesArr.map((el, index: number) => {
        return (
          <button
            onClick={() => {
              setSlides(el.images)
              setOpen(true)
              setInteractive(true)
            }}
            key={index}
          >
            <Image
              src={el.image}
              alt={`${el.description} Bildergalerie`}
              style={{ objectFit: 'cover' }}
              sizes={'75vw'}
              fill
            />
            <p>{el.description}</p>
          </button>
        )
      })}
      {interactive && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          render={{ slide: NextJsImage }}
          plugins={[Fullscreen, Zoom, Thumbnails, Counter]}
          zoom={{
            maxZoomPixelRatio: 1,
            zoomInMultiplier: 2,
          }}
          thumbnails={{ vignette: false, imageFit: 'cover' }}
          counter={{ style: { top: 'unset', bottom: 0 } }}
        />
      )}
    </section>
  )
}
