import React from "react";
import Image from "next/image";
import { TImage } from "@/lib/types";
import { dataUrl, getImageUrl } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { ImageSize } from "@/lib/constants";

const ImageModalSection = ({
  images,
  title,
  heading,
}: {
  images: TImage[];
  title: string;
  heading: string;
}) => {
  return (
    <section>
      <h3 className="text-2xl font-bold">{heading}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Image
            unoptimized
            key={index}
            placeholder={dataUrl as PlaceholderValue}
            alt={`${title} ${heading.slice(0, -1)} image`}
            width={image.height}
            height={image.width}
            src={getImageUrl(image.file_path, ImageSize.Small)}
            className="m-2"
          />
        ))}
      </div>
    </section>
  );
};

export default ImageModalSection;
