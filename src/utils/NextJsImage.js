import Image from 'next/image'
import { useState } from 'react'

export default function NextJsImage(...[image, , rect]) {
  const width = Math.round(
    Math.min(rect.width, (rect.height / image.height) * image.width)
  );
  const height = Math.round(
    Math.min(rect.height, (rect.width / image.width) * image.height)
  );

  const [src, setSrc] = useState(image.src);

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
  );
}