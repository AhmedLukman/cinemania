import MediaGrid from "@/components/ui/MediaGrid";
import { MoviesUrl } from "@/lib/constants";
import { TMediaResponse, TMovie, TMovieDetailsResponse } from "@/lib/types";
import { getMedia } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = async ({
  params: { id, suggestion },
}: {
  params: { id: string; suggestion: string };
}) => {
  const movie = (await getMedia(
    MoviesUrl.Origin + id.toString() + "?language=en-US"
  )) as TMovieDetailsResponse;

  if (!movie?.overview) notFound();

  return {
    title: `CM | ${
      suggestion === "recommendations" ? "Recommended" : "Similar"
    } movies to ${movie.title}`,
    description: `Check out these ${
      suggestion === "recommendations" ? "recommended" : "similar"
    } movies to ${movie.title}`,
  };
};

const SuggestionMoviePage = async ({
  params: { id, suggestion },
}: {
  params: { id: string; suggestion: string };
}) => {
  let movies;
  if (suggestion === "recommendations")
    movies = (await getMedia(
      MoviesUrl.Origin + id + "/recommendations?language=en-US&page=1"
    )) as TMediaResponse<TMovie>;
  else if (suggestion === "similar")
    movies = (await getMedia(
      MoviesUrl.Origin + id + "/similar?language=en-US&page=1"
    )) as TMediaResponse<TMovie>;

  if (!movies || movies.results.length === 0) notFound();

  const { original_title: movieName } = (await getMedia(
    MoviesUrl.Origin + id
  )) as TMovie;

  const heading =
    suggestion === "recommendations"
      ? "Recommended movies to"
      : "Similar movies to";

  return (
    <div className="md:p-14 pt-10">
      <h1 className="text-3xl font-serif text-white my-10 mx-2 md:mx-4 font-bold">
        {heading} {movieName}
      </h1>
      <MediaGrid path="movie" media={movies.results} />;
    </div>
  );
};

export default SuggestionMoviePage;
