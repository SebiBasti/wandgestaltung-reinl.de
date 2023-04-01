import { useDebounce } from 'use-debounce'
import { RenderSlideProps } from 'yet-another-react-lightbox'
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps
} from 'yet-another-react-lightbox/core'

import Image from 'next/image'

import { ReactNode, useState } from 'react'

export function NextJsImage(props: RenderSlideProps): ReactNode {
  const { imageFit } = useLightboxProps().carousel
  const cover =
    isImageSlide(props.slide) && isImageFitCover(props.slide, imageFit)
  const slideWidth = props.slide.width ?? 0
  const slideHeight = props.slide.height ?? 0

  const [width] = useDebounce(
    !cover
      ? Math.round(
          Math.min(
            props.rect.width,
            (props.rect.height / slideHeight) * slideWidth
          )
        )
      : props.rect.width,
    50,
    { maxWait: 100 }
  )

  const [height] = useDebounce(
    !cover
      ? Math.round(
          Math.min(
            props.rect.height,
            (props.rect.width / slideWidth) * slideHeight
          )
        )
      : props.rect.height,
    50,
    { maxWait: 100 }
  )

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
          transform: 'translate(-50%, -50%)'
        }}
        priority
      />
      <Image
        fill
        alt={`${src} Bild`}
        src={src}
        loading="eager"
        onError={() => setSrc('/images/misc/placeholder.svg')}
        draggable={false}
        style={{ objectFit: cover ? 'cover' : 'contain' }}
        quality={'100'}
        sizes={
          typeof window !== 'undefined'
            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
            : `${width}px`
        }
      />
    </div>
  )
}
