"use client";

import { TMediaResponse, TMovie } from "@/lib/types";
import React from "react";
import MediaGrid from "../ui/MediaGrid";
import PaginationScrollUI from "../ui/PaginationScrollUI";
import { CircularProgress } from "@nextui-org/react";
import useServerSidePagination from "@/hooks/useServerSidePagination";
import { useScrollIntoView } from "@/hooks/useScrollIntoView";

const SuggestionMoviePage = ({
  movies,
  movieName,
  id,
  suggestion,
}: {
  movies: TMediaResponse<TMovie>;
  movieName: string;
  id: string;
  suggestion: string;
}) => {
  const {
    currentPage,
    isLoading,
    setCurrentPage,
    updatedMedia: updatedMovies,
  } = useServerSidePagination({
    media: movies.results,
    id,
    suggestion,
  });

  const scrollRef = useScrollIntoView({ page: currentPage });

  const heading =
    suggestion === "recommendations"
      ? "Recommended movies to"
      : "Similar movies to";

  return (
    <div ref={scrollRef} className="md:p-14 pt-10">
      <h1 className="text-3xl font-serif text-white my-10 mx-2 md:mx-4 font-bold">
        {heading} {movieName}
      </h1>
      {isLoading && (
        <div className="h-[65svh] flex justify-center items-center">
          <CircularProgress
            color="secondary"
            size="lg"
            aria-label="Loading..."
          />
        </div>
      )}
      {!isLoading && <MediaGrid path="movie" media={updatedMovies} />}
      <div className="flex mt-10 justify-center items-center">
        <PaginationScrollUI
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={movies.total_pages}
        />
      </div>
    </div>
  );
};

export default SuggestionMoviePage;
