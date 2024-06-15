import React from "react";
import MediaCategorySlider from "@/components/ui/sliders/MediaCategorySlider";
import DoubleSlider from "@/components/ui/sliders/DoubleSlider";
import { MediaType } from "@/lib/constants";
import { TTVShowPage } from "@/lib/types";
import MediaCategory from "../ui/MediaCategory";
import MediaCard from "../ui/MediaCard";

const TVShowsPage = ({
  popularTVShows,
  trendingDailyTVShows,
  topRatedTVShows,
  upcomingTVShows,
  airingTodayTVShows,
  latestTVShow,
}: TTVShowPage) => {
  return (
    <>
      <DoubleSlider type={MediaType.TV} popularMedia={popularTVShows} />

      <MediaCategory
        media={trendingDailyTVShows}
        path={`/tv/category/airing-today`}
        heading="Airing Today"
      >
        <MediaCategorySlider mediaLength={airingTodayTVShows.length}>
          {airingTodayTVShows.map((airingTodayTVShow) => (
            <MediaCard
              className="card-padding"
              key={airingTodayTVShow.id}
              media={airingTodayTVShow}
              path={`/tv/${airingTodayTVShow.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={trendingDailyTVShows}
        path={`/tv/category/trending`}
        heading="Trending"
      >
        <MediaCategorySlider mediaLength={trendingDailyTVShows.length}>
          {trendingDailyTVShows.map((trendingDailyTVShow) => (
            <MediaCard
              className="card-padding"
              key={trendingDailyTVShow.id}
              media={trendingDailyTVShow}
              path={`/tv/${trendingDailyTVShow.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={topRatedTVShows}
        path={`/tv/category/top-rated`}
        heading="Top Rated"
      >
        <MediaCategorySlider mediaLength={topRatedTVShows.length}>
          {topRatedTVShows.map((topRatedTVShow) => (
            <MediaCard
              className="card-padding"
              key={topRatedTVShow.id}
              media={topRatedTVShow}
              path={`/tv/${topRatedTVShow.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={upcomingTVShows}
        path={`/tv/category/upcoming`}
        heading="Upcoming"
      >
        <MediaCategorySlider mediaLength={upcomingTVShows.length}>
          {upcomingTVShows.map((upcomingTVShow) => (
            <MediaCard
              className="card-padding"
              key={upcomingTVShow.id}
              media={upcomingTVShow}
              path={`/tv/${upcomingTVShow.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory media={[latestTVShow]} heading="Latest">
        <MediaCategorySlider mediaLength={1}>
          <MediaCard
            className="card-padding"
            key={latestTVShow.id}
            media={latestTVShow}
            path={`/tv/${latestTVShow.id}`}
          />
        </MediaCategorySlider>
      </MediaCategory>
    </>
  );
};

export default TVShowsPage;
