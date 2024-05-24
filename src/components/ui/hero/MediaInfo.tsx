import { MediaType } from "@/lib/constants";
import {
  TMovie,
  TMovieDetailsResponse,
  TTVShow,
  TTVShowDetailsResponse,
} from "@/lib/types";
import { getGenreNameById } from "@/lib/utils";
import React from "react";

const MediaInfo = ({
  media,
  type,
}:
  | { media: TMovie; type: MediaType.Movie }
  | { media: TTVShow; type: MediaType.TV }
  | { media: TTVShowDetailsResponse; type: MediaType.TVDetails }
  | { media: TMovieDetailsResponse; type: MediaType.MovieDetails }) => {
  const releaseDate =
    type === MediaType.Movie || type === MediaType.MovieDetails
      ? media.release_date
      : media.first_air_date;

  return (
    <div className="flex justify-between items-center gap-5 md:gap-0 flex-wrap md:max-w-xl">
      <div className="space-x-5 text-sm mt-4">
        <time dateTime={releaseDate.substring(0, 4)}>
          {releaseDate.substring(0, 4)}
        </time>
        <span className="border rounded-md p-1">
          {media.vote_average?.toFixed(1)}
        </span>
      </div>
      <div className=" gap-3 md:gap-5 flex flex-wrap text-sm mt-2 md:mt-6">
        {(type === MediaType.Movie || type === MediaType.TV) &&
          media.genre_ids.map((genre) => (
            <span
              key={genre.toString()}
              className="border rounded-md p-2 bg-black/40"
            >
              {getGenreNameById(genre)}
            </span>
          ))}
        {(type === MediaType.MovieDetails || type === MediaType.TVDetails) &&
          media.genres.map((genre) => (
            <span className="border rounded-md p-2 bg-black/40" key={genre.id}>
              {genre.name}
            </span>
          ))}
      </div>
    </div>
  );
};

export default MediaInfo;
