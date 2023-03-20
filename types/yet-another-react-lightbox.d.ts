import { NextJsImageType } from '@/utils/NextJsImage'

declare module 'yet-another-react-lightbox' {
    interface SlideTypes {
        CustomSlide: NextJsImageType
    }
}

export {}