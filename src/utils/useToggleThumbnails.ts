import { useDebouncedCallback } from 'use-debounce'
import { ThumbnailsRef } from 'yet-another-react-lightbox'

import { RefObject } from 'react'

export const useToggleThumbnails = (
  ref: RefObject<ThumbnailsRef>
): (() => void) => {
  return useDebouncedCallback(() => {
    if (ref.current !== null && window) {
      ;(window.innerHeight <= 400 ? ref.current?.hide : ref.current?.show)?.()
    }
  }, 100)
}
