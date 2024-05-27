import MoviesPage from "@/components/page/MoviesPage";
import { MoviesUrl } from "@/lib/constants";
import { TMediaResponse, TMovie } from "@/lib/types";
import { getMedia } from "@/lib/utils";
import React from "react";

export const revalidate = 3600 // revalidate at most every hour

const MoviesPageDataFetch = async () => {
  const { results: popularMovies } = (await getMedia(
    MoviesUrl.Popular + "?language=en-US&page=1"
  )) as TMediaResponse<TMovie>;
  const { results: trendingDailyMovies } = (await getMedia(
    MoviesUrl.Trending + "/day?language=en-US"
  )) as TMediaResponse<TMovie>;
  const { results: upcomingMovies } = (await getMedia(
    MoviesUrl.Upcoming + "?language=en-US&page=1"
  )) as TMediaResponse<TMovie>;
  const { results: nowPlayingMovies } = (await getMedia(
    MoviesUrl.Playing + "?language=en-US&page=1"
  )) as TMediaResponse<TMovie>;
  const { results: topRatedMovies } = (await getMedia(
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
