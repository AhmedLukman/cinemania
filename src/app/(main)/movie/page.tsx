import MoviesPage from "@/components/page/MoviesPage";
import { MoviesUrl } from "@/lib/constants";
import { TMediaResponse, TMovie } from "@/lib/types";
import { fetchMedia } from "@/lib/utils";
import React from "react";

const MoviesPageDataFetch = async () => {
  const { results: popularMovies } = (await fetchMedia(
    MoviesUrl.Popular + "?language=en-US&page=1"
  )) as TMediaResponse<TMovie>;
  const { results: trendingDailyMovies } = (await fetchMedia(
    MoviesUrl.Trending + "/day?language=en-US"
  )) as TMediaResponse<TMovie>;
  const { results: upcomingMovies } = (await fetchMedia(
    MoviesUrl.Upcoming + "?language=en-US&page=1"
  )) as TMediaResponse<TMovie>;
  const { results: nowPlayingMovies } = (await fetchMedia(
    MoviesUrl.Playing + "?language=en-US&page=1"
  )) as TMediaResponse<TMovie>;
  const { results: topRatedMovies } = (await fetchMedia(
    MoviesUrl.TopRated + "?language=en-US&page=1"
  )) as TMediaResponse<TMovie>;
  return (
    <MoviesPage
      popularMovies={popularMovies}
      nowPlayingMovies={nowPlayingMovies}
      trendingDailyMovies={trendingDailyMovies}
      topRatedMovies={topRatedMovies}
      upcomingMovies={upcomingMovies}
    />
  );
};

export default MoviesPageDataFetch;
