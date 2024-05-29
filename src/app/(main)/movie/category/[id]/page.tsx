"use client";

import CategoryPageHeading from "@/components/ui/CategoryPageHeading";
import MediaGrid from "@/components/ui/MediaGrid";
import PaginationScrollUI from "@/components/ui/PaginationScrollUI";
import useFetchMediaCategory from "@/hooks/useFetchMediaCategory";
import { MoviesUrl } from "@/lib/constants";
import { TMovie } from "@/lib/types";
import { notFound } from "next/navigation";
import React, { useState } from "react";

const MovieCategoryPage = ({ params: { id } }: { params: { id: string } }) => {
  const [value, setValue] = React.useState<any>(new Set(["daily"]));
  const [isLoading, setIsLoading] = useState(true);
  const url =
    id === "trending"
      ? value.has("daily")
        ? MoviesUrl.Trending + "/day"
        : MoviesUrl.Trending + "/week"
      : id === "upcoming"
      ? MoviesUrl.Upcoming
      : id === "top-rated"
      ? MoviesUrl.TopRated
      : id === "now-playing"
      ? MoviesUrl.Playing
      : null;

  if (!url) notFound();

  const [media, setMedia] = useState<TMovie[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useFetchMediaCategory({
    setIsLoading,
    currentPage,
    setMedia,
    setTotalPages,
    url,
  });

  return (
    <div className="md:p-14 pt-10">
      <CategoryPageHeading
        id={id}
        isLoading={isLoading}
        setValue={setValue}
        value={value}
        type="Movies"
      />
      <MediaGrid path="movie" media={media} />
      <div className="flex mt-10 justify-center items-center">
        {!isLoading && (
          <PaginationScrollUI
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default MovieCategoryPage;
