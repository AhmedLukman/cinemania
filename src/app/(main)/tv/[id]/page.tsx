import TVShowDetailsPage from "@/components/page/TVShowDetailsPage";
import { TVShowsUrl } from "@/lib/constants";
import {
  TMediaCreditsResponse,
  TMediaLinks,
  TMediaResponse,
  TTVShow,
  TTVShowDetailsResponse,
  TWatchProvidersResponse,
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

  tvShow.images = await getMedia(TVShowsUrl.Origin + id + "/images");

  tvShow.videos = await getMedia(TVShowsUrl.Origin + id + "/videos");

  const credits = (await getMedia(
    TVShowsUrl.Origin + id + "/credits?language=en-US"
  )) as TMediaCreditsResponse;

  const { results: similarTVShows } = (await getMedia(
    TVShowsUrl.Origin + id + "/similar?language=en-US&page=1"
  )) as TMediaResponse<TTVShow>;

  const { results: recommendedTVShows } = (await getMedia(
    TVShowsUrl.Origin + id + "/recommendations?language=en-US&page=1"
  )) as TMediaResponse<TTVShow>;

  const tvLinks = (await getMedia(
    TVShowsUrl.Origin + id + "/external_ids"
  )) as TMediaLinks;

    const watchProviders = (await getMedia(
      TVShowsUrl.Origin + id + "/watch/providers"
    )) as TWatchProvidersResponse;

    tvShow.watchProviders = watchProviders;

  return (
    <TVShowDetailsPage
      tvShow={tvShow}
      credits={credits}
      recommendedTVShows={recommendedTVShows}
      similarTVShows={similarTVShows}
      tvLinks={tvLinks}
    />
  );
};

export default TVShowDetailsFetchPage;
