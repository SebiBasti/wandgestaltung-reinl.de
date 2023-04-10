import Image from 'next/image'

import { useEffect, useState } from 'react'

import { useHandleScroll } from '@/utils/'

import scrollButton from '@/styles/scrollButton.module.scss'

export function ScrollButton() {
  const [visible, setVisible] = useState<boolean>(false)
  // handleScroll uses setVisible to trigger visibility depending on scrollY
  const handleScroll = useHandleScroll(setVisible)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

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
