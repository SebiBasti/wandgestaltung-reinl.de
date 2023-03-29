import Counter from 'yet-another-react-lightbox/plugins/counter'
import 'yet-another-react-lightbox/plugins/counter.css'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

import dynamic from 'next/dynamic'
import Image from 'next/image'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { CustomLightboxState, useDebounce, useWindowDimensions } from '@/utils'
import { NextJsImage } from '@/utils'

import { picturesArr } from '~images/references/imageIndex'

import pictures from '@/styles/pictures.module.scss'
import utils from '@/styles/utils.module.scss'

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false
})

export function Pictures() {
  const [state, setState] = useState<CustomLightboxState>({
    open: false,
    interactive: false,
    loaded: false,
    slides: []
  })
  const { height } = useWindowDimensions()
  const debouncedHeight = useDebounce(height)
  const ref = useRef<any>(null)

  const toggleThumbnails = useCallback(() => {
    if (ref.current !== null) {
      ;((debouncedHeight ?? 0) <= 400
        ? ref.current?.hide
        : ref.current?.show)?.()
    }
  }, [ref, debouncedHeight])

  const handleResize = useCallback(() => {
    state.loaded && toggleThumbnails()
  }, [state, toggleThumbnails])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    state.loaded && toggleThumbnails()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize, state, toggleThumbnails])

  const pictureButtons = useMemo(() => {
    return picturesArr.map((el, index: number) => {
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
            sizes={'(max-width: 573px) calc(100vw - 4rem), calc(50vw - 2.5rem)'}
            fill
          />
          <p>{el.description}</p>
        </button>
      )
    })
  }, [state])

  const lightboxElement = useMemo(() => {
    return (
      <Lightbox
        open={state.open}
        close={() => setState({ ...state, open: false })}
        slides={state.slides}
        render={{ slide: NextJsImage }}
        plugins={[Fullscreen, Zoom, Thumbnails, Counter]}
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
          entering: () => setState({ ...state, loaded: true }),
          exiting: () => setState({ ...state, loaded: false })
        }}
      />
    )
  }, [state, ref])

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
      {pictureButtons}
      {state.interactive && lightboxElement}
    </section>
  )
}
