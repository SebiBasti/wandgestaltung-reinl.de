import dynamic from 'next/dynamic'
import Image from 'next/image'

import React, { useEffect, useRef, useState } from 'react'

import { CustomLightboxState, useToggleThumbnails } from '@/utils'
import { ThumbnailsRef } from 'yet-another-react-lightbox'

import { picturesArr } from '~/images/references/imageIndex'

import pictures from '@/styles/pictures.module.scss'
import utils from '@/styles/utils.module.scss'

const Lightbox = dynamic(() =>
  import('@/utils/lightboxElement').then((mod) => mod.Lightbox)
)

export function Pictures() {
  const [state, setState] = useState<CustomLightboxState>({
    open: false,
    interactive: false,
    loaded: false,
    slides: []
  })
  const ref = useRef<ThumbnailsRef>(null)
  const toggleThumbnails = useToggleThumbnails(ref)

  useEffect(() => {
    window.addEventListener('resize', toggleThumbnails)

    return () => {
      window.removeEventListener('resize', toggleThumbnails)
    }
  }, [toggleThumbnails])

  const pictureButtons = picturesArr.map((el, index: number) => {
    return (
      <button
        onClick={() => {
          setState({
            ...state,
            slides: el.images,
            open: true,
            interactive: true
          })
        }}
        key={index}
      >
        <Image
          src={el.image}
          alt={`${el.description} Bildergalerie`}
          style={{ objectFit: 'cover' }}
          sizes={
            '(max-width: 573px) calc(100vw - 4rem), (max-width: calc(800px + 4rem)) calc(50vw - 2.5rem), 392px'
          }
          fill
        />
        <p>{el.description}</p>
      </button>
    )
  })

  const lightboxElement = (
    <Lightbox
      open={state.open}
      close={() => setState({ ...state, open: false })}
      slides={state.slides}
      zoom={{
        maxZoomPixelRatio: 2,
        zoomInMultiplier: 2
      }}
      thumbnails={{
        vignette: false,
        imageFit: 'cover',
        ref: ref
      }}
      counter={{ style: { top: 'unset', bottom: 0 } }}
      on={{
        entering: () => {
          setState({ ...state, loaded: true })
          toggleThumbnails()
        },
        exiting: () => setState({ ...state, loaded: false })
      }}
    />
  )

  return (
    <section
      className={`${pictures.container} ${utils['border-bottom']}`}
      id="pictures"
      aria-label="Bildergalerie"
    >
      <noscript>
        <h3 className={pictures.noscript}>
          Aktivieren Sie Javascript um die Bildergalerie aufzurufen.
        </h3>
      </noscript>
      {pictureButtons}
      {state.interactive && lightboxElement}
    </section>
  )
}
