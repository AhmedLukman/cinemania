import { getDirector } from "@/lib/utils";
import React from "react";
import CreditParagraph from "./CreditParagraph";
import {
  TMediaCredits,
  TMediaCreditsResponse,
  TMovieDetailsResponse,
  TMediaLinks,
  TTVShowDetailsResponse,
} from "@/lib/types";
import { MediaType } from "@/lib/constants";
import { Link } from "@nextui-org/react";
import { SocialLink } from "../SocialLink";
import {
  faImdb,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const MediaCredits = ({
  type,
  credits,
  media,
  mediaLinks: { imdb_id, instagram_id, twitter_id },
}:
  | {
      media: TMovieDetailsResponse;
      type: MediaType.MovieDetails;
      credits: TMediaCreditsResponse;
      mediaLinks: TMediaLinks;
    }
  | {
      media: TTVShowDetailsResponse;
      type: MediaType.TVDetails;
      credits: TMediaCreditsResponse;
      mediaLinks: TMediaLinks;
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
      <div className="flex justify-center gap-4 pt-2">
        <SocialLink
          className="text-neutral-500"
          id={twitter_id}
          baseUrl="www.x.com"
          icon={faXTwitter}
        />
        <SocialLink
          className="text-neutral-500"
          id={instagram_id}
          baseUrl="www.instagram.com"
          icon={faInstagram}
        />
        <SocialLink
          className="text-neutral-500"
          id={imdb_id}
          baseUrl="www.imdb.com"
          icon={faImdb}
        />
        {media.homepage && (
          <Link
            className="text-white/60"
            title="Visit homepage"
            isExternal
            href={media.homepage}
            showAnchorIcon
          />
        )}
      </div>
    </div>
  );
};

export default MediaCredits;
