import React from "react";
import {
  TMovie,
  TPersonDetails,
  TPersonMediaCredits,
  TTVShow,
} from "@/lib/types";
import ProfileCard from "../ui/ProfileCard";
import ProfileDetails from "../ui/ProfileDetails";

const PeopleDetailsPage = ({
  personDetails,
  personMovieCredits: { cast: moviesCast, crew: moviesCrew },
  personTVShowCredits: { cast: tvShowsCast, crew: tvShowsCrew },
}: {
  personDetails: TPersonDetails;
  personMovieCredits: TPersonMediaCredits<TMovie>;
  personTVShowCredits: TPersonMediaCredits<TTVShow>;
}) => {
  const { name, homepage, profile_path } = personDetails;
  return (
    <div className="flex flex-col md:flex-row gap-7 md:gap-10 md:mx-10 mt-20 mx-5 ">
      <ProfileCard
        links={{
          imdb_id: "nm2858875",
          facebook_id: "",
          instagram_id: "sydney_sweeney",
          twitter_id: "sydney_sweeney",
          youtube_id: "",
        }}
        homepage={homepage}
        name={name}
        profilePath={profile_path}
      />
      <ProfileDetails
        moviesCast={moviesCast}
        moviesCrew={moviesCrew}
        personDetails={personDetails}
        tvShowsCast={tvShowsCast}
        tvShowsCrew={tvShowsCrew}
      />
    </div>
  );
};

export default PeopleDetailsPage;
