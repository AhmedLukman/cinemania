import { dataUrl, getImageUrl, getMediaTitle } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { PropsWithChildren } from "react";
import PosterSideImage from "./PosterSideImage";
import { ImageSize } from "@/lib/constants";
import {
  Season,
  TMovie,
  TMovieDetailsResponse,
  TSingleTVSeasonResponse,
  TTVShow,
  TTVShowDetailsResponse,
} from "@/lib/types";

const PosterContainer = ({
  media,
  children,
}: {
  media:
    | TMovie
    | TTVShow
    | TMovieDetailsResponse
    | TTVShowDetailsResponse
    | TSingleTVSeasonResponse;
} & PropsWithChildren) => {
  return (
    <div className="min-h-[100svh] rounded-md relative">
      {/* Main Image */}
      <Image
        unoptimized
        placeholder={dataUrl as PlaceholderValue}
        className="  object-cover object-center"
        src={getImageUrl(
          "backdrop_path" in media ? media.backdrop_path : media.poster_path,
          ImageSize.Large
        )}
        alt={getMediaTitle(media) + " backdrop"}
        fill
        priority
      />

      {/* Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black" />

      <div className="h-full z-50 md:gap-5 lg:flex px-5 md:px-12 lg:px-16 xl:px-20  text-white">
        {children}
        {!("season_number" in media) && (
          <PosterSideImage
            posterPath={media.poster_path}
            title={getMediaTitle(media) + " poster"}
          />
        )}
      </div>
    </div>
  );
};

export default PosterContainer;
