import Image from "next/image"
import { useState } from "react"

export default function NextJsImage(...[image, , rect]) {
  const width = Math.round(
    Math.min(rect.width, (rect.height / image.height) * image.width)
  );
  const height = Math.round(
    Math.min(rect.height, (rect.width / image.width) * image.height)
  );

  const [src, setSrc] = useState(image.src);

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt={ `${src} Bild` }
        src={ src }
        placeholder="blur"
        blurDataURL="./images/misc/loading.svg"
        onError={() => setSrc('./images/misc/placeholder.svg')}
        draggable={ false }
        sizes={
          typeof window !== "undefined"
            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
            : `${width}px`
        }
      />
    </div>
  );
}