import Image from "next/image";

function ProductImages({ images = [] }) {
    if (!images || images.length === 0) return <div></div>;


  return (
    <>
      {images.map(({ id, url, image_dimensions }: any) => (
        <div key={id} className="md:py-3">
          <Image
            key={id}
            src={url}
            width={image_dimensions.width}
            height={image_dimensions.height}
            className="rounded-lg transition-all"
            quality={100}
            alt=""
          />
        </div>
      ))}
    </>
  );
}

export default ProductImages;
