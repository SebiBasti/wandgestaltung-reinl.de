import Image from 'next/image'
import { ReactNode, useState } from 'react'
import { ContainerRect } from 'yet-another-react-lightbox'

export default function NextJsImage(slide: any, offset: number, rect: ContainerRect): ReactNode {
  console.log(arguments)
  const width = Math.round(
    Math.min(rect.width, (rect.height / slide.height) * slide.width)
  )
  const height = Math.round(
    Math.min(rect.height, (rect.width / slide.width) * slide.height)
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