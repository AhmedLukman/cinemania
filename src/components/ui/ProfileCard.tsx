import React from "react";
import {
  faFacebook,
  faImdb,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Card, CardBody, CardFooter, Image, Link, cn } from "@nextui-org/react";
import { getImageUrl } from "@/lib/utils";
import { PersonLink } from "@/lib/types";
import { SocialLink } from "./SocialLink";

const ProfileCard = ({
  profilePath,
  name,
  homepage,
  links: { twitter_id, facebook_id, instagram_id, youtube_id, imdb_id },
  className
}: {
  profilePath: string;
  name: string;
  homepage: string;
  links: PersonLink;
  className?: string;
}) => {
  return (
      <Card
        shadow="sm"
        className={cn("bg-white", className)}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            alt={""}
            className=" w-96 h-96 md:h-[60vh] object-cover"
            src={getImageUrl(profilePath)}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="space-x-3 flex items-center">
            <SocialLink
              id={twitter_id}
              baseUrl="www.twitter.com"
              icon={faXTwitter}
            />
            <SocialLink
              id={instagram_id}
              baseUrl="www.instagram.com"
              icon={faInstagram}
            />
            <SocialLink
              id={facebook_id}
              baseUrl="www.facebook.com"
              icon={faFacebook}
            />
            <SocialLink
              id={youtube_id}
              baseUrl="www.youtube.com"
              icon={faYoutube}
            />
            <SocialLink id={imdb_id} baseUrl="www.imdb.com" icon={faImdb} />
            {homepage && (
              <Link
                className="text-black/60 ml-2"
                title="Visit homepage"
                isExternal
                href={homepage}
                showAnchorIcon
              />
            )}
          </div>
        </CardFooter>
      </Card>
  );
};

export default ProfileCard;
