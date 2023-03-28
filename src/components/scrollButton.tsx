import Image from 'next/image'

import { useEffect, useState } from 'react'

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
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility) // comment 1
  }, []) // comment 2

  return (
    <div className={scrollButton.container}>
      <button
        type="button"
        onClick={scrollToTop}
        className={isVisible ? scrollButton.visible : scrollButton.invisible}
      >
        <Image
          src={'/images/misc/arrow_up.svg'}
          alt={'scroll nach oben Icon'}
          width={30}
          height={30}
        />
      </button>
    </div>
  )
}

/* comment 1
The return statement is used to remove the event listener when the component unmounts or is re-rendered.
This is necessary to prevent memory leaks and potential performance issues.
The returned function is called a "cleanup function", and it should undo any effects that the main function has caused.
 */

/* comment 2
The [] at the end of the useEffect hook is called the dependency array.
It is an array of dependencies that the hook will watch for changes.
If any of the dependencies change, the function passed as the first argument will be re-executed.
In this case, the empty array means that the hook will only run once, when the component mounts.
 */
