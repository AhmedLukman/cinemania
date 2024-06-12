import MediaCreditsPage from "@/components/page/MediaCreditsPage";
import { MediaUrl } from "@/lib/constants";
import {
  PersonLink,
  TMovie,
  TPersonDetails,
  TPersonMediaCredits,
} from "@/lib/types";
import { getMedia } from "@/lib/utils";
import React from "react";

const MovieCreditsFetchPage = async ({
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

  const personLink = (await getMedia(
    `${MediaUrl}person/${id}/external_ids`
  )) as PersonLink;

  return (
    <MediaCreditsPage
      personDetails={personDetails}
      mediaCredits={personMovieCredits}
      personLink={personLink}
    />
  );
};

export default MovieCreditsFetchPage;
