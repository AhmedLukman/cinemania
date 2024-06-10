import React from "react";
import Image from "next/image";
import { Card, Link, cn } from "@nextui-org/react";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { dataUrl, getImageUrl, getMediaTitle } from "@/lib/utils";
import { TMediaCategory } from "@/lib/types";

const MediaCard = ({
  media,
  path,
  element = "h4",
  className
}: {
  media: TMediaCategory;
  path: string;
  element?: keyof JSX.IntrinsicElements;
  className?: string
}) => {
  const Element = element;

  const imagePath =
    "poster_path" in media
      ? media.poster_path
      : "still_path" in media
      ? media.still_path
      : "profile_path" in media
      ? media.profile_path
      : null;
  const isCrew = "job" in media;
  const isCast = "character" in media;

  return (
    <div className={className}>
      <Card
        isPressable
        as={Link}
        href={path}
        radius="lg"
        className="border-none relative group h-72 md:h-[430px] shadow-sm shadow-gray-500"
      >
        {"episode_number" in media && media.episode_number && (
          <span className="absolute bg-gradient-to-b from-black/40 via-black to-black/40 z-50 text-white py-3 px-5 text-center rounded-tl-lg rounded-tr-none rounded-br-xl">
            {media.episode_number}
          </span>
        )}
        <Image
          unoptimized
          placeholder={dataUrl as PlaceholderValue}
          alt={"imageAlt"}
          className="object-cover md:group-hover:scale-110 transition duration-300"
          fill
          src={
            imagePath ? getImageUrl(imagePath) : "/assets/images/avatar.jpeg"
          }
        />
        <div
          className={cn(
            "absolute  flex-col bottom-0 w-full p-1 min-h-10 bg-black/90 md:group-hover:bg-black/75 md:group-hover:min-h-full z-30 transition-all duration-300 flex items- justify-center"
          )}
        >
          <Element
            className={cn(
              "text-center mx-6 rounded-lg max-w-sm text-white text-lg"
            )}
          >
            {getMediaTitle(media)}
          </Element>
          {(isCast || isCrew) && (
            <p className="text-gray-500 text-center text-sm">
              {isCast && media.character}
              {isCrew && media.job}
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default MediaCard;
