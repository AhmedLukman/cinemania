import MediaCreditsPage from "@/components/page/MediaCreditsPage";
import { MediaUrl } from "@/lib/constants";
import {
  TPersonLink,
  TPersonDetails,
  TPersonMediaCredits,
  TTVShow,
  TPersonImageResponse,
} from "@/lib/types";
import { getMedia } from "@/lib/utils";
import React from "react";

const TVCreditsFetchPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const personDetails = (await getMedia(
    `${MediaUrl}person/${id}`
  )) as TPersonDetails;

  const personMovieCredits = (await getMedia(
    `${MediaUrl}person/${id}/tv_credits`
  )) as TPersonMediaCredits<TTVShow>;

  const personLink = (await getMedia(
    `${MediaUrl}person/${id}/external_ids`
  )) as TPersonLink;

  const imageResponse = (await getMedia(
    `${MediaUrl}person/${id}/images`
  )) as TPersonImageResponse;

  return (
    <MediaCreditsPage
      personDetails={personDetails}
      mediaCredits={personMovieCredits}
      personLink={personLink}
      imageResponse={imageResponse}
    />
  );
};

export default TVCreditsFetchPage;
