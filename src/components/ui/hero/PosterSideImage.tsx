import Image from "next/image";
import React from "react";
import { dataUrl, getImageUrl } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

const PosterSideImage = ({
  posterPath,
  title,
}: {
  posterPath: string;
  title: string;
}) => {
  return (
    <aside className="mt-10 hidden md:block w-1/3 h-[80svh] rounded-xl relative">
      <Image
        unoptimized
        className=" object-cover"
        placeholder={dataUrl as PlaceholderValue}
        src={getImageUrl(posterPath)}
        alt={title}
        fill
      />
    </aside>
  );
};

export default PosterSideImage;
