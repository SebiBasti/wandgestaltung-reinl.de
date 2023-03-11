import pictures from "@/styles/pictures.module.scss"
import Image from "next/image"
import {picturesArr} from "../../public/images/references/imageIndex";

export default function Pictures() {
  return (
    <section className={ pictures.container }>
      { picturesArr.map((el) => {
        return (
          <button>
            <Image
              src={ el.image }
              alt={ `${el.description} Bildergalerie` }
              style={{ objectFit:"cover" }}
              fill
            />
            <p>
              { el.description }
            </p>
          </button>
        )
      }) }
    </section>
  )
}
