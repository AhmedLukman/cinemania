import React from "react";
import MediaActions from "./MediaActions";
import {
  TMediaCreditsResponse,
  TMovieDetailsResponse,
  TMediaLinks,
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
  mediaLinks,
}:
  | {
      media: TMovieDetailsResponse;
      type: MediaType.MovieDetails;
      credits: TMediaCreditsResponse;
      mediaLinks: TMediaLinks;
    }
  | {
      media: TTVShowDetailsResponse;
      type: MediaType.TVDetails;
      credits: TMediaCreditsResponse;
      mediaLinks: TMediaLinks;
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
        className={`max-w-prose mt-10 ${
          "revenue" in media ? "" : "line-clamp-3"
        }`}
      >
        {media.overview}
      </p>
      <MediaActions
        // homepageURL={("homepage" in media && (media.homepage as string)) || ""}
        mediaId={media.id}
        title={getMediaTitle(media)}
      />
      {type === MediaType.MovieDetails && (
        <MediaCredits
          mediaLinks={mediaLinks}
          credits={credits}
          media={media}
          type={type}
        />
      )}
      {type === MediaType.TVDetails && (
        <MediaCredits mediaLinks={mediaLinks} credits={credits} media={media} type={type} />
      )}
    </div>
  );
};

export default DetailsPosterContent;
