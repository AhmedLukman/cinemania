"use client";

import CategoryPageHeading from "@/components/ui/CategoryPageHeading";
import MediaGrid from "@/components/ui/MediaGrid";
import PaginationUI from "@/components/ui/PaginationUI";
import { useScrollIntoView } from "@/hooks/useScrollIntoView";
import { MoviesUrl } from "@/lib/constants";
import { TMediaResponse, TMovie } from "@/lib/types";
import { getMedia } from "@/lib/utils";
import { CircularProgress } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const MovieCategoryPage = ({
  movieResponse: { page, results, total_pages },
  id,
}: {
  movieResponse: TMediaResponse<TMovie>;
  id: string;
}) => {
  const [frequency, setFrequency] = useState(new Set(["daily"]));
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(results);
  const [totalPages, setTotalPages] = useState(total_pages);
  const [currentPage, setCurrentPage] = useState(page);

  const ref = useScrollIntoView({ page: currentPage });

  const url =
    id === "trending"
      ? MoviesUrl.Trending + (frequency.has("daily") ? "/day" : "/week")
      : id === "upcoming"
      ? MoviesUrl.Upcoming
      : id === "top-rated"
      ? MoviesUrl.TopRated
      : id === "now-playing"
      ? MoviesUrl.Playing
      : "";

  useEffect(() => {
    if (currentPage === page) {
      setMovies(results);
      return;
    }
    const fetchMoviesCategoryByPage = async () => {
      setIsLoading(true);
      const response = (await getMedia(
        `${url}?language=en-US&page=${currentPage}`
      )) as TMediaResponse<TMovie>;
      setMovies(response.results);
      setIsLoading(false);
    };
    fetchMoviesCategoryByPage();
  }, [currentPage, url, page, results, total_pages]);

  useEffect(() => {
    if (frequency.has("daily")) {
      setMovies(results);
      setTotalPages(total_pages);
      return;
    }
    const fetchMoviesCategoryByFrequency = async () => {
      setIsLoading(true);
      const response = (await getMedia(
        `${url}?language=en-US&page=${currentPage}`
      )) as TMediaResponse<TMovie>;

      setMovies(response.results);
      setTotalPages(response.total_pages);
      setIsLoading(false);
    };
    fetchMoviesCategoryByFrequency();
  }, [frequency, results, total_pages, currentPage, url]);

  return (
    <div ref={ref} className="md:p-14 pt-10">
      <CategoryPageHeading
        id={id}
        isLoading={isLoading}
        setFrequency={setFrequency}
        frequency={frequency}
        type="Movies"
      />
      {isLoading && (
        <div className="h-[65svh] flex justify-center items-center">
          <CircularProgress
            color="secondary"
            size="lg"
            aria-label="Loading..."
          />
        </div>
      )}
      {!isLoading && <MediaGrid path="movie" media={movies} />}
      <div className="flex mt-10 justify-center items-center">
        <PaginationUI
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default MovieCategoryPage;
