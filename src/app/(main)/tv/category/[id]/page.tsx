import TVCategoryPage from "@/components/page/TVCategoryPage";
import PaginationScrollUI from "@/components/ui/PaginationScrollUI";
import { TVShowsUrl } from "@/lib/constants";
import { TMediaResponse, TTVShow } from "@/lib/types";
import { getCategoryHeading, getMedia } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}) => {

  if (id !== "trending" && id !== "upcoming" && id !== "top-rated") notFound();

  const heading = getCategoryHeading(id);

  return {
    title: `CM | ${heading} TV shows`,
    description: `Check out these ${heading} TV shwos in Cinemania!`,
  };
};

const TVCategoryFetchPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const url =
    id === "trending"
      ? TVShowsUrl.Trending + "/day"
      : id === "upcoming"
      ? TVShowsUrl.Upcoming
      : id === "top-rated"
      ? TVShowsUrl.TopRated
      : null;

  if (!url) notFound();

  const tvResponse = (await getMedia(
    `${url}?language=en-US&page=1`
  )) as TMediaResponse<TTVShow>;

  return <TVCategoryPage tvResponse={tvResponse} id={id} />;
};

export default TVCategoryFetchPage;
