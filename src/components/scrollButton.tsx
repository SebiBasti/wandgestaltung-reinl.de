import { useEffect, useState } from 'react'
import Image from "next/image"
import scrollButton from '@/styles/scrollButton.module.scss'

export function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 150) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className={ scrollButton.container }>
      <button
        type="button"
        onClick={scrollToTop}
        className={ isVisible ? scrollButton.visible : scrollButton.invisible }
      >
        <Image
          src={ '/images/misc/arrow_up.svg' }
          alt={ 'scroll nach oben Icon' }
          width={ 30 }
          height={ 30 }
        />
      </button>
    </div>
  )
}