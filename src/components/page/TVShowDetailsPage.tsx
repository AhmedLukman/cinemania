import React from "react";
import MediaCard from "@/components/ui/MediaCard";
import MediaCategory from "@/components/ui/MediaCategory";
import MediaCategorySlider from "@/components/ui/sliders/MediaCategorySlider";
import DetailsPosterContent from "@/components/ui/hero/DetailsPosterContent";
import PosterContainer from "@/components/ui/hero/PosterContainer";
import { ImageSize, MediaType } from "@/lib/constants";
import {
  TMediaCreditsResponse,
  TMediaLinks,
  TTVShow,
  TTVShowDetailsResponse,
} from "@/lib/types";
import Image from "next/image";
import { dataUrl, getImageUrl } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import ScrollToTopUI from "../ui/ScrollToTop";

const TVShowDetailsPage = ({
  tvShow,
  credits,
  similarTVShows,
  recommendedTVShows,
  tvLinks,
}: {
  tvShow: TTVShowDetailsResponse;
  credits: TMediaCreditsResponse;
  similarTVShows: TTVShow[];
  recommendedTVShows: TTVShow[];
  tvLinks: TMediaLinks;
}) => {
  const { cast, crew } = credits;
  const { networks, seasons } = tvShow;
  return (
    <>
      <PosterContainer media={tvShow}>
        <DetailsPosterContent
          mediaLinks={tvLinks}
          type={MediaType.TVDetails}
          media={tvShow}
          credits={credits}
        />
      </PosterContainer>

      <MediaCategory media={networks} heading="Network">
        <MediaCategorySlider mediaLength={networks.length}>
          {networks.map((network) => (
            <div
              className="px-2 md:px-4 flex h-20 justify-center items-center"
              key={network.id}
            >
              <Image
                unoptimized
                placeholder={dataUrl as PlaceholderValue}
                className="w-full h-full object-contain"
                width={300}
                height={10}
                alt={network.name + " logo"}
                src={getImageUrl(network.logo_path, ImageSize.Small)}
              />
            </div>
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory media={seasons} heading="Seasons">
        <MediaCategorySlider mediaLength={seasons.length}>
          {seasons.map((season) => (
            <MediaCard
              className="card-padding"
              key={season.id}
              media={season}
              path={`/tv/${tvShow.id}/season/${season.season_number}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={cast}
        path={`/tv/${tvShow.id}/people/cast`}
        heading="Cast"
      >
        <MediaCategorySlider mediaLength={cast.length}>
          {cast.map((castMember) => (
            <MediaCard
              className="card-padding"
              key={castMember.id}
              media={castMember}
              path={`/people/${castMember.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={crew}
        path={`/tv/${tvShow.id}/people/crew`}
        heading="Crew"
      >
        <MediaCategorySlider mediaLength={crew.length}>
          {crew.map((crewMember) => (
            <MediaCard
              className="card-padding"
              key={crewMember.id}
              media={crewMember}
              path={`/people/${crewMember.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={recommendedTVShows}
        path={`/tv/${tvShow.id}/recommendations`}
        heading="Recommended"
      >
        <MediaCategorySlider mediaLength={recommendedTVShows.length}>
          {recommendedTVShows.map((recommendedTVShow) => (
            <MediaCard
              className="card-padding"
              key={recommendedTVShow.id}
              media={recommendedTVShow}
              path={`/tv/${recommendedTVShow.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={similarTVShows}
        path={`/tv/${tvShow.id}/similar`}
        heading="Similar"
      >
        <MediaCategorySlider mediaLength={similarTVShows.length}>
          {similarTVShows.map((similarTVShow) => (
            <MediaCard
              className="card-padding"
              key={similarTVShow.id}
              media={similarTVShow}
              path={`/tv/${similarTVShow.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <ScrollToTopUI />
    </>
  );
};

export default TVShowDetailsPage;
