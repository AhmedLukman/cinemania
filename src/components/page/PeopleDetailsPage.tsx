import React from "react";
import {
  PersonLink,
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
  personLink
}: {
  personDetails: TPersonDetails;
  personMovieCredits: TPersonMediaCredits<TMovie>;
  personTVShowCredits: TPersonMediaCredits<TTVShow>;
  personLink: PersonLink;
}) => {
  const { name, homepage, profile_path } = personDetails;
  return (
    <div className="flex flex-col md:flex-row gap-7 md:gap-10 md:mx-10 mt-20 mx-5 ">
      <ProfileCard
        links={personLink}
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
