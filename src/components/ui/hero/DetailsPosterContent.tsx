import React from "react";

import MediaActions from "./MediaActions";
import { cn } from "@nextui-org/react";
import {
  TMediaCreditsResponse,
  TMovieDetailsResponse,
  TTVShowDetailsResponse,
} from "@/lib/types";
import { MediaType } from "@/lib/constants";
import MediaInfo from "./MediaInfo";
import { getMediaTitle } from "@/lib/utils";
import MediaCredits from "./MediaCredits";

const DetailsPosterContent = ({
  media,
  type,
  credits,
}:
  | {
      media: TMovieDetailsResponse;
      type: MediaType.MovieDetails;
      credits: TMediaCreditsResponse;
    }
  | {
      media: TTVShowDetailsResponse;
      type: MediaType.TVDetails;
      credits: TMediaCreditsResponse;
    }) => {
  return (
    <div className="md:w-2/3 min-h-[75svh] relative z-10 pt-24 pb-10">
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-serif max-w-3xl">
        {getMediaTitle(media)}
      </h2>
      {type === MediaType.MovieDetails && (
        <MediaInfo media={media} type={type} />
      )}
      {type === MediaType.TVDetails && <MediaInfo media={media} type={type} />}
      <p
        className={cn("max-w-prose mt-10 line-clamp-3", {
          "line-clamp-none": "revenue" in media,
        })}
      >
        {media.overview}
      </p>
      <MediaActions
        homepageURL={("homepage" in media && (media.homepage as string)) || ""}
        mediaId={media.id}
        title={getMediaTitle(media)}
      />
      {type === MediaType.MovieDetails && (
        <MediaCredits credits={credits} media={media} type={type} />
      )}
      {type === MediaType.TVDetails && (
        <MediaCredits credits={credits} media={media} type={type} />
      )}
    </div>
  );
};

export default DetailsPosterContent;
