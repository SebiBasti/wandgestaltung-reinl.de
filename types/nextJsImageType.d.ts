import { StaticImageData } from 'next/image'

interface ImageType {
  src: string,
  height: number,
  width: number,
  blurDataURL: string,
  blurWidth: number,
  blurHeight: number
}

export interface ImageObj {
  description: string,
  image: StaticImageData,
  images: Array<ImageType>
}
