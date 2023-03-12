import Image from "next/image";

export default function NextJsImage(...[image, , rect]) {
  const imageDefault = image.default
  const width = Math.round(
    Math.min(rect.width, (rect.height / imageDefault.height) * imageDefault.width)
  );
  const height = Math.round(
    Math.min(rect.height, (rect.width / imageDefault.width) * imageDefault.height)
  );

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={image.default}
        loading="eager"
        // placeholder="blur"
        draggable={ false }
        sizes={
          typeof window !== "undefined"
            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
            : `${width}px`
        }
      />
    </div>
  );
}