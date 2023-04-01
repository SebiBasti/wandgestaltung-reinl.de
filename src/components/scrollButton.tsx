import { createHandleScroll } from '@/utils/createHandleScroll'

import Image from 'next/image'

import { useEffect, useState } from 'react'

import scrollButton from '@/styles/scrollButton.module.scss'

export function ScrollButton() {
  const [visible, setVisible] = useState<boolean>(false)
  // handleScroll uses setVisible to trigger visibility depending on scrollY
  const handleScroll = createHandleScroll(setVisible)

  // const toggleVisibility = () => {
  //   if (window.scrollY > 120) {
  //     setIsVisible(true)
  //   } else {
  //     setIsVisible(false)
  //   }
  // }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={
        `${visible ? scrollButton.visible : ''} ` +
        scrollButton['scroll-button']
      }
    >
      <Image
        src={'/images/misc/arrow_up.svg'}
        alt={'scroll nach oben Button'}
        width={40}
        height={40}
      />
    </button>
  )
}
