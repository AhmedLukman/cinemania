import React from "react";
import { MediaUrl } from "@/lib/constants";
import {
  PersonLink,
  TMovie,
  TPersonDetails,
  TPersonMediaCredits,
  TTVShow,
} from "@/lib/types";
import { getMedia } from "@/lib/utils";
import PeopleDetailsPage from "@/components/page/PeopleDetailsPage";

const PeopleDetailsFetchPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const personDetails = (await getMedia(
    `${MediaUrl}person/${id}`
  )) as TPersonDetails;

  const personMovieCredits = (await getMedia(
    `${MediaUrl}person/${id}/movie_credits`
  )) as TPersonMediaCredits<TMovie>;

  const personTVShowCredits = (await getMedia(
    `${MediaUrl}person/${id}/tv_credits`
  )) as TPersonMediaCredits<TTVShow>;

  const personLink = (await getMedia(
    `${MediaUrl}person/${id}/external_ids`
  )) as PersonLink;

  return (
    <PeopleDetailsPage
      personDetails={personDetails}
      personMovieCredits={personMovieCredits}
      personTVShowCredits={personTVShowCredits}
      personLink={personLink}
    />
  );
};

export default PeopleDetailsFetchPage;
