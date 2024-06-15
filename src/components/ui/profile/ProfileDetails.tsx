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
  const { biography, id: personId } = personDetails;
  return (
    <main
      className="basis-2/3 p-5 rounded-lg text-white bg-gradient-to-r from-gray-800 to-gray-900"
    >
      <ProfileInfoSection personalDetails={personDetails} />
      <ProfileBiographySection biography={biography} />
      <ProfileDetailSection cast={moviesCast} crew={moviesCrew} personId= {personId}/>
      <ProfileDetailSection cast={tvShowsCast} crew={tvShowsCrew} personId={personId} />
    </main>
  );
};

export default ProfileDetails;
