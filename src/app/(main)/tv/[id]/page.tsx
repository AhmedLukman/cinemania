import TVShowDetailsPage from "@/components/page/TVShowDetailsPage";
import { TVShowsUrl } from "@/lib/constants";
import {
  TMediaCreditsResponse,
  TMediaResponse,
  TTVShow,
  TTVShowDetailsResponse,
} from "@/lib/types";
import { getMedia } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

const TVShowDetailsFetchPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const tvShow = (await getMedia(
    TVShowsUrl.Origin + id.toString() + "?language=en-US"
  )) as TTVShowDetailsResponse;

  if (!tvShow?.overview) return notFound();

  const credits = (await getMedia(
    TVShowsUrl.Origin + id + "/credits?language=en-US"
  )) as TMediaCreditsResponse;

  const { results: similarTVShows } = (await getMedia(
    TVShowsUrl.Origin + id + "/similar?language=en-US&page=1"
  )) as TMediaResponse<TTVShow>;

  const { results: recommendedTVShows } = (await getMedia(
    TVShowsUrl.Origin + id + "/recommendations?language=en-US&page=1"
  )) as TMediaResponse<TTVShow>;

  return (
    <TVShowDetailsPage
      tvShow={tvShow}
      credits={credits}
      recommendedTVShows={recommendedTVShows}
      similarTVShows={similarTVShows}
    />
  );
};

export default TVShowDetailsFetchPage;
