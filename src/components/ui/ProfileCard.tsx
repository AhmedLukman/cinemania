import React from "react";
import {
  faFacebook,
  faImdb,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
import { getImageUrl } from "@/lib/utils";
import { PersonLink } from "@/lib/types";
import { SocialLink } from "./SocialLink";

const ProfileCard = ({
  profilePath,
  name,
  homepage,
  links: { twitter_id, facebook_id, instagram_id, youtube_id, imdb_id },
}: {
  profilePath: string;
  name: string;
  homepage: string;
  links: PersonLink;
}) => {
  return (
    <aside className="flex justify-center basis-1/3">
      <Card
        shadow="sm"
        className=" w-96 md:sticky md:top-16 self-start bg-white"
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            alt={""}
            className=" w-96 h-96 md:h-[65vh] object-cover"
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
    </aside>
  );
};

export default ProfileCard;
