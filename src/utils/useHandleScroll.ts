import { useDebouncedCallback } from 'use-debounce'

// This hook returns a debounced callback function that handles scroll events.
export const useHandleScroll =
  // The setVisible function is passed in as a parameter to update the visibility state.
  (setVisible: (visible: boolean) => void) => {
    // Return a debounced callback function that will be called when the user scrolls.
    return useDebouncedCallback(
      () => {
        // Get the current scroll position and window width.
        const currentYOffset = window.scrollY
        const currentWidth = window.innerWidth
        // Set the visibility state based on the scroll position and window width.
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
