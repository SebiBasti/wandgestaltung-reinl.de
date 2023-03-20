import { StaticImageData } from 'next/image'

export interface NextJsImageType {
  height: number,
  width: number,
  src: string
}

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