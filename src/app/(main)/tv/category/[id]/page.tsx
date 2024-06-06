import TVCategoryPage from "@/components/page/TVCategoryPage";
import PaginationScrollUI from "@/components/ui/PaginationScrollUI";
import { TVShowsUrl } from "@/lib/constants";
import { TMediaResponse, TTVShow } from "@/lib/types";
import { getMedia } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

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
