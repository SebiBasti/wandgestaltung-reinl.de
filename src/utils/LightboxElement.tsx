import LightboxComponent, {
  LightboxExternalProps
} from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import 'yet-another-react-lightbox/plugins/counter.css'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

import { NextJsImage } from '@/utils/NextJsImage'

export function Lightbox(props: LightboxExternalProps) {
  return (
    <LightboxComponent
      plugins={[Fullscreen, Zoom, Thumbnails, Counter]}
      render={{ slide: NextJsImage }}
      {...props}
    />
  )
}
