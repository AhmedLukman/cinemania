import React from "react";
import { getMedia } from "@/lib/utils";
import { TVShowsUrl } from "@/lib/constants";
import { TMediaResponse, TTVShow } from "@/lib/types";
import TVShowsPage from "@/components/page/TVShowsPage";
import { Metadata } from "next";

export const revalidate = 3600 // revalidate at most every hour

export const metadata: Metadata = {
  title: "Cinemania | TV Shows",
};

const TVShowsPageDataFetch = async () => {
  const { results: popularTVShows } = (await getMedia(
    TVShowsUrl.Popular + "?language=en-US&page=1"
  )) as TMediaResponse<TTVShow>;
  const { results: trendingDailyTVShows } = (await getMedia(
    TVShowsUrl.Trending + "/day?language=en-US"
  )) as TMediaResponse<TTVShow>;
  const { results: upcomingTVShows } = (await getMedia(
    TVShowsUrl.Upcoming + "?language=en-US&page=1"
  )) as TMediaResponse<TTVShow>;
  const { results: topRatedTVShows } = (await getMedia(
    TVShowsUrl.TopRated + "?language=en-US&page=1"
  )) as TMediaResponse<TTVShow>;
  const {results: airingTodayTVShows} = await getMedia(
    TVShowsUrl.AiringToday + "?language=en-US&page=1"
  ) as TMediaResponse<TTVShow>;
  const latestTVShow = await getMedia(TVShowsUrl.Latest) as TTVShow;

  return (
      <TVShowsPage
        popularTVShows={popularTVShows}
        trendingDailyTVShows={trendingDailyTVShows}
        topRatedTVShows={topRatedTVShows}
        upcomingTVShows={upcomingTVShows}
        airingTodayTVShows={airingTodayTVShows}
        latestTVShow={latestTVShow}
      />
  );
};

export default TVShowsPageDataFetch;
