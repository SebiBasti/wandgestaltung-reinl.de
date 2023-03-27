import { RenderSlideProps } from 'yet-another-react-lightbox'
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from 'yet-another-react-lightbox/core'

import Image from 'next/image'

import { ReactNode, useState } from 'react'

export function NextJsImage(props: RenderSlideProps): ReactNode {
  const { imageFit } = useLightboxProps().carousel
  const cover =
    isImageSlide(props.slide) && isImageFitCover(props.slide, imageFit)
  const zoom = Math.round(props.zoom ?? 1)
  const limitedZoom = zoom <= 4 ? zoom : 4
  const slideWidth = props.slide.width ?? 0
  const slideHeight = props.slide.height ?? 0

  const width =
    (!cover
      ? Math.round(
          Math.min(
            props.rect.width,
            (props.rect.height / slideHeight) * slideWidth
          )
        )
      : props.rect.width) * limitedZoom

  const height =
    (!cover
      ? Math.round(
          Math.min(
            props.rect.height,
            (props.rect.width / slideWidth) * slideHeight
          )
        )
      : props.rect.height) * limitedZoom

  const [src, setSrc] = useState(props.slide.src)

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        alt={'loading animation'}
        src={'/images/misc/loading.svg'}
        width={80}
        height={80}
        style={{
          left: '50%',
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        priority
      />
      <Image
        fill
        alt={`${src} Bild`}
        src={src}
        onError={() => setSrc('/images/misc/placeholder.svg')}
        draggable={false}
        style={{ objectFit: cover ? 'cover' : 'contain' }}
        quality={zoom <= 1 ? '75' : '100'}
        sizes={
          typeof window !== 'undefined'
            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
            : `${width}px`
        }
      />
    </div>
  )
}

/*
The provided code is a TypeScript function called NextJsImage that is used to render an image component
for a React lightbox library. The function takes three arguments: slide, offset, and rect.
The slide argument is an object of type SlideImage, which contains information about the image to be displayed.
The offset argument is a number that represents the position of the image in the gallery.
The rect argument is an object of type ContainerRect, which represents the dimensions of the container element
that the image will be displayed in.
*/
