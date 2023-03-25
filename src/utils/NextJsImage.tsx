import Image from 'next/image'
import { ReactNode, useState } from 'react'
import { ContainerRect, SlideImage } from 'yet-another-react-lightbox'

export default function NextJsImage(slide: SlideImage, offset: number, rect: ContainerRect): ReactNode {
  const slideWidth = slide.width ?? 0
  const slideHeight = slide.height ?? 0

  const width = Math.round(
    Math.min(rect.width, (rect.height / slideHeight) * slideWidth)
  )
  const height = Math.round(
    Math.min(rect.height, (rect.width / slideWidth) * slideHeight)
  )

  const [src, setSrc] = useState(slide.src)

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        alt={ 'loading animation' }
        src={ '/images/misc/loading.svg' }
        width={ 80 }
        height={ 80 }
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
        alt={ `${src} Bild` }
        src={ src }
        onError={() => setSrc('/images/misc/placeholder.svg')}
        draggable={ false }
        sizes={
          typeof window !== 'undefined'
            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
            : `${width}px`
        }
      />
    </div>
  )
}