"use client";

import { TVShowsUrl } from "@/lib/constants";
import { TMediaResponse, TTVShow } from "@/lib/types";
import { getMedia } from "@/lib/utils";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import CategoryPageHeading from "../ui/CategoryPageHeading";
import MediaGrid from "../ui/MediaGrid";
import { CircularProgress } from "@nextui-org/react";
import PaginationUI from "../ui/PaginationUI";

const TVCategoryPage = ({
  tvResponse: { page, results, total_pages },
  id,
}: {
  tvResponse: TMediaResponse<TTVShow>;
  id: string;
}) => {
  const [frequency, setFrequency] = useState(new Set(["daily"]));
  const [isLoading, setIsLoading] = useState(false);
  const [tvShows, setTVShows] = useState(results);
  const [totalPages, setTotalPages] = useState(total_pages);
  const [currentPage, setCurrentPage] = useState(page);

  const url =
    id === "trending"
      ? TVShowsUrl.Trending + (frequency.has("daily") ? "/day" : "/week")
      : id === "upcoming"
      ? TVShowsUrl.Upcoming
      : id === "top-rated"
      ? TVShowsUrl.TopRated
      : id === "airing-today"
      ? TVShowsUrl.AiringToday
      : null;

  useEffect(() => {
    if (currentPage === page) {
      setTVShows(results);
      return;
    }
    const fetchTVShowsCategoryByPage = async () => {
      setIsLoading(true);
      const response = (await getMedia(
        `${url}?language=en-US&page=${currentPage}`
      )) as TMediaResponse<TTVShow>;
      setTVShows(response.results);
      setIsLoading(false);
    };
    fetchTVShowsCategoryByPage();
  }, [currentPage, url, page, results, total_pages]);

  useEffect(() => {
    if (frequency.has("daily")) {
      setTVShows(results);
      setTotalPages(total_pages);
      return;
    }
    const fetchTVShowsCategoryByFrequency = async () => {
      setIsLoading(true);
      const response = (await getMedia(
        `${url}?language=en-US&page=${currentPage}`
      )) as TMediaResponse<TTVShow>;

      setTVShows(response.results);
      setTotalPages(response.total_pages);
      setIsLoading(false);
    };
    fetchTVShowsCategoryByFrequency();
  }, [frequency, results, total_pages, currentPage, url]);

  return (
    <div className="md:p-14 pt-10">
      <CategoryPageHeading
        id={id}
        isLoading={isLoading}
        setFrequency={setFrequency}
        frequency={frequency}
        type="TV Shows"
      />
      {isLoading && (
        <div className="h-[55svh] flex justify-center items-center">
          <CircularProgress
            color="secondary"
            size="lg"
            aria-label="Loading..."
          />
        </div>
      )}
      {!isLoading && <MediaGrid path="movie" media={tvShows} />}
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

export default TVCategoryPage;
