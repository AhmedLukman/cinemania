import { TPeople } from "@/lib/types";
import React from "react";
import MediaCategory from "../ui/MediaCategory";
import MediaCategorySlider from "../ui/sliders/MediaCategorySlider";
import MediaCard from "../ui/MediaCard";

const PeoplePage = ({
  popularPeople,
  trendingPeople,
}: {
  popularPeople: TPeople[];
  trendingPeople: TPeople[];
}) => {
  return (
    <div className="pt-10">
      <MediaCategory
        media={popularPeople}
        path={"/people/category/popular"}
        heading="Popular People"
      >
        <MediaCategorySlider mediaLength={popularPeople.length}>
          {popularPeople.map((popularPerson) => (
            <MediaCard
              key={popularPerson.id}
              media={popularPerson}
              path={`/people/${popularPerson.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={trendingPeople}
        path={"/people/category/trending"}
        heading="Trending People"
      >
        <MediaCategorySlider mediaLength={trendingPeople.length}>
          {trendingPeople.map((trendingPerson) => (
            <MediaCard
              key={trendingPerson.id}
              media={trendingPerson}
              path={`/people/${trendingPerson.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>
    </div>
  );
};

export default PeoplePage;
