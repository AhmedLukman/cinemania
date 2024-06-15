import React from "react";
import {
  TMovie,
  TMovieDetailsResponse,
  TSingleTVSeasonResponse,
  TTVShow,
  TTVShowDetailsResponse,
} from "@/lib/types";
import ViewImages from "../ViewImages";
import { getMediaTitle } from "@/lib/utils";
import ViewVideos from "../ViewVideos";
import FavButton from "./FavButton";

const MediaActions = ({
  media,
}: {
  media:
    | TMovieDetailsResponse
    | TTVShowDetailsResponse
    | TMovie
    | TTVShow
    | (TSingleTVSeasonResponse & { season: string });
}) => {
  const title = getMediaTitle(media);
  return (
    <div className="mt-10 flex items-center justify-between gap-2 md:justify-start md:gap-5">
      {"videos" in media && (
        <ViewVideos videoData={media.videos.results} title={title} />
      )}
      {"images" in media && (
        <ViewImages imageData={media.images} title={title} />
      )}
      <FavButton />
    </div>
  );
};

export default MediaActions;
