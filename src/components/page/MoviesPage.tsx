import React from "react";
import MediaCategorySlider from "@/components/ui/sliders/MediaCategorySlider";
import DoubleSlider from "@/components/ui/sliders/DoubleSlider";
import { MediaType } from "@/lib/constants";
import { TMoviesPage } from "@/lib/types";
import MediaCard from "../ui/MediaCard";
import MediaCategory from "../ui/MediaCategory";

const MoviesPage = ({
  popularMovies,
  nowPlayingMovies,
  trendingDailyMovies,
  topRatedMovies,
  upcomingMovies,
}: TMoviesPage) => {
  return (
    <>
      <DoubleSlider type={MediaType.Movie} popularMedia={popularMovies} />

      <MediaCategory
        media={nowPlayingMovies}
        path={`/movie/category/now-playing`}
        heading="Now Playing"
      >
        <MediaCategorySlider mediaLength={nowPlayingMovies.length}>
          {nowPlayingMovies.map((nowPlayingMovie) => (
            <MediaCard
              key={nowPlayingMovie.id}
              media={nowPlayingMovie}
              path={`/movie/${nowPlayingMovie.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={trendingDailyMovies}
        path={`/movie/category/trending`}
        heading="Trending"
      >
        <MediaCategorySlider mediaLength={trendingDailyMovies.length}>
          {trendingDailyMovies.map((trendingDailyMovie) => (
            <MediaCard
              key={trendingDailyMovie.id}
              media={trendingDailyMovie}
              path={`/movie/${trendingDailyMovie.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={topRatedMovies}
        path={`/movie/category/top-rated`}
        heading="Top Rated"
      >
        <MediaCategorySlider mediaLength={topRatedMovies.length}>
          {topRatedMovies.map((topRatedMovie) => (
            <MediaCard
              key={topRatedMovie.id}
              media={topRatedMovie}
              path={`/movie/${topRatedMovie.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={upcomingMovies}
        path={`/movie/category/upcoming`}
        heading="Upcoming"
      >
        <MediaCategorySlider mediaLength={upcomingMovies.length}>
          {upcomingMovies.map((upcomingMovie) => (
            <MediaCard
              key={upcomingMovie.id}
              media={upcomingMovie}
              path={`/movie/${upcomingMovie.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>
    </>
  );
};

export default MoviesPage;
