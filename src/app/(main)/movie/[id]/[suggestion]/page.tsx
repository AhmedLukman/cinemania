import SuggestionMoviePage from "@/components/page/SuggestionMoviePage";
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

const SuggestionMovieFetchPage = async ({
  params: { id, suggestion },
}: {
  params: { id: string; suggestion: string };
}) => {
  const movies = (await getMedia(
    `${MoviesUrl.Origin}${id}/${suggestion}?language=en-US&page=1`
  )) as TMediaResponse<TMovie>;

  if (!movies || movies.results.length === 0) notFound();

  const { original_title: movieName } = (await getMedia(
    MoviesUrl.Origin + id
  )) as TMovie;

  return (
    <SuggestionMoviePage
      movieName={movieName}
      movies={movies}
      id={id}
      suggestion={suggestion}
    />
  );
};

export default SuggestionMovieFetchPage;
