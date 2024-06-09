import PeoplePage from "@/components/page/PeoplePage";
import { PeopleUrl } from "@/lib/constants";
import { TMediaResponse, TPeople } from "@/lib/types";
import { getMedia } from "@/lib/utils";
import React from "react";

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
