import MovieDetailsPage from "@/components/page/MovieDetailsPage";
import { MediaUrl, MoviesUrl } from "@/lib/constants";
import {
  Collection,
  TMediaCreditsResponse,
  TMediaResponse,
  TMovie,
  TMovieDetailsResponse,
  TMediaLinks,
} from "@/lib/types";
import { getMedia } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const movie = (await getMedia(
    MoviesUrl.Origin + id.toString() + "?language=en-US"
  )) as TMovieDetailsResponse;

  if (!movie?.overview) notFound();

  return {
    title: "CM | " + movie.title,
    description: movie.overview,
  };
};

const MovieDetailsFetchPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const movie = (await getMedia(
    MoviesUrl.Origin + id.toString() + "?language=en-US"
  )) as TMovieDetailsResponse;

  if (!movie?.overview) notFound();

  const credits = (await getMedia(
    MoviesUrl.Origin + id + "/credits?language=en-US"
  )) as TMediaCreditsResponse;

  const { results: similarMovies } = (await getMedia(
    MoviesUrl.Origin + id + "/similar?language=en-US&page=1"
  )) as TMediaResponse<TMovie>;

  const { results: recommendedMovies } = (await getMedia(
    MoviesUrl.Origin + id + "/recommendations?language=en-US&page=1"
  )) as TMediaResponse<TMovie>;

  const movieLinks = await getMedia(
    MoviesUrl.Origin + id + "/external_ids"
  ) as TMediaLinks;

  const collection =
    movie.belongs_to_collection &&
    ((await getMedia(
      MediaUrl +
        "collection/" +
        movie.belongs_to_collection.id +
        "?language=en-US"
    )) as Collection);

  return (
    <MovieDetailsPage
      movie={movie}
      credits={credits}
      recommendedMovies={recommendedMovies}
      similarMovies={similarMovies}
      collection={collection || {}}
      movieLinks={movieLinks}
    />
  );
};

export default MovieDetailsFetchPage;
