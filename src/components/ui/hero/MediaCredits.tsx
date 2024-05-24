import { getDirector } from "@/lib/utils";
import React from "react";
import CreditParagraph from "./CreditParagraph";
import {
  TMediaCredits,
  TMediaCreditsResponse,
  TMovieDetailsResponse,
  TTVShowDetailsResponse,
} from "@/lib/types";
import { MediaType } from "@/lib/constants";

const MediaCredits = ({
  type,
  credits,
  media,
}:
  | {
      media: TMovieDetailsResponse;
      type: MediaType.MovieDetails;
      credits: TMediaCreditsResponse;
    }
  | {
      media: TTVShowDetailsResponse;
      type: MediaType.TVDetails;
      credits: TMediaCreditsResponse;
    }) => {
  const director = getDirector(credits);
  return (
    <div className="mt-5 hover:bg-white/10 transition-all duration-300  space-y-2 p-6 rounded-lg bg-gradient-to-b from-white/20 via-white/10 to-white/20">
      {type === MediaType.MovieDetails && (
        <>
          <CreditParagraph name="Directed by:" value={director?.name || ""} />
          <CreditParagraph
            name="Budget:"
            value={(media.budget !== 0 && media.budget.toLocaleString()) || "-"}
          />
          <CreditParagraph
            name="Revenue:"
            value={
              (media.revenue !== 0 && media.revenue.toLocaleString()) || "-"
            }
          />
        </>
      )}
      {type === MediaType.TVDetails && (
        <>
          <CreditParagraph
            name="Seasons:"
            value={media.number_of_seasons.toString()}
          />
          <CreditParagraph
            name="Episodes:"
            value={media.number_of_episodes.toString()}
          />
          <CreditParagraph name="Status:" value={media.status} />
        </>
      )}
      <CreditParagraph
        name="Production Companies:"
        value={media.production_companies}
      />
      <CreditParagraph
        name="Production Countries:"
        value={media.production_countries}
      />
      <CreditParagraph
        name="Spoken languages:"
        value={media.spoken_languages}
      />
      <CreditParagraph tagline={media.tagline} />
    </div>
  );
};

export default MediaCredits;
