import PeoplePage from "@/components/page/PeoplePage";
import { PeopleUrl } from "@/lib/constants";
import { TMediaResponse, TPeople } from "@/lib/types";
import { getMedia } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";

export const revalidate = 3600; // revalidate at most every hour

export const metadata: Metadata = {
  title: "Cinemania | People",
  description: "Discover popular and trending people in the movie industry."
};

const PeopleFetchPage = async () => {
  const { results: popularPeople } = (await getMedia(
    PeopleUrl.Popular + "?language=en-US&page=1"
  )) as TMediaResponse<TPeople>;

  const { results: trendingPeople } = (await getMedia(
    PeopleUrl.Trending + "/day?language=en-US"
  )) as TMediaResponse<TPeople>;

  return (
    <PeoplePage popularPeople={popularPeople} trendingPeople={trendingPeople} />
  );
};

export default PeopleFetchPage;
