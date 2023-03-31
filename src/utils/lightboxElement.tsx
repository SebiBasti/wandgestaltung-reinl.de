import { NextJsImage } from '@/utils/NextJsImage'
import LightboxComponent, {
  LightboxExternalProps
} from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

import React from 'react'

import 'yet-another-react-lightbox/plugins/counter.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

export function Lightbox(props: LightboxExternalProps) {
  return (
    <LightboxComponent
      plugins={[Fullscreen, Zoom, Thumbnails, Counter]}
      render={{ slide: NextJsImage }}
      {...props}
    />
  )
}
