import { useDebouncedCallback } from 'use-debounce'

// debounced handleScroll to prevent scroll event from firing way too often
export const useHandleScroll = (
  setVisible: (visible: boolean) => void
): (() => void) => {
  return useDebouncedCallback(
    () => {
      const currentYOffset = window.scrollY
      const currentWidth = window.innerWidth
      // different visibility depending on the navbar size on different viewport widths
      // also used for scroll button visibility
      if (currentWidth <= 628) {
        setVisible(60 < currentYOffset)
      } else {
        setVisible(120 < currentYOffset)
      }
    },
    100,
    { maxWait: 250 }
  )
}
