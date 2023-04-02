import { useDebouncedCallback } from 'use-debounce'
import { ThumbnailsRef } from 'yet-another-react-lightbox'

import { RefObject } from 'react'

// Define a custom hook `useToggleThumbnails`
// that accepts a `RefObject` of the thumbnails component
// and returns a function that toggles the visibility of the component
export const useToggleThumbnails = (ref: RefObject<ThumbnailsRef>) => {
  // Use the `useDebouncedCallback` hook to debounce the function call
  // that toggles the visibility of the component.
  // The callback function will execute only after a 100ms wait period
  // since the last time it was called.
  return useDebouncedCallback(() => {
    if (ref.current !== null && window) {
      // If the thumbnails component is currently mounted and the `window` object exists,
      // Check if the height of the viewport is less than or equal to 400px
      ;(window.innerHeight <= 400 ? ref.current?.hide : ref.current?.show)?.()
      // If so, hide the thumbnails component; otherwise, show it.
    }
  }, 100)
}
