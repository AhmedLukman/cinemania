import React from "react";
import { Divider } from "@nextui-org/react";
import { TMovie, TPersonDetails, TTVShow } from "@/lib/types";
import ProfileDetailSection from "./ProfileDetailSection";
import ProfileInfoSection from "./ProfileInfoSection";
import ProfileBiographySection from "./ProfileBiographySection";

const ProfileDetails = ({
  personDetails,
  moviesCast,
  moviesCrew,
  tvShowsCast,
  tvShowsCrew,
}: {
  personDetails: TPersonDetails;
  moviesCast: TMovie[];
  moviesCrew: TMovie[];
  tvShowsCast: TTVShow[];
  tvShowsCrew: TTVShow[];
}) => {
  const { biography } = personDetails;
  return (
    <main className="basis-2/3 bg-white/10 p-5 rounded-lg text-white">
      <ProfileInfoSection personalDetails={personDetails} />
      <ProfileBiographySection biography={biography} />
      <ProfileDetailSection cast={moviesCast} crew={moviesCrew} />
      <ProfileDetailSection cast={tvShowsCast} crew={tvShowsCrew} />
    </main>
  );
};

export default ProfileDetails;
