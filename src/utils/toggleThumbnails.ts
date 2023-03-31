import { ThumbnailsRef } from 'yet-another-react-lightbox'

import { RefObject } from 'react'

export const useToggleThumbnails = () => {
  return (ref: RefObject<ThumbnailsRef>, height: number | undefined) => {
    if (ref.current !== null && height) {
      ;(height <= 400 ? ref.current?.hide : ref.current?.show)?.()
    }
  }
}
