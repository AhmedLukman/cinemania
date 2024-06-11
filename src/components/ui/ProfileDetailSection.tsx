import { TMovie, TTVShow } from "@/lib/types";
import { Divider } from "@nextui-org/react";
import React from "react";
import ProfileCreditList from "./ProfileCreditList";

const ProfileDetailSection = ({
  cast,
  crew,
}: {
  cast: TMovie[] | TTVShow[];
  crew: TMovie[] | TTVShow[];
}) => {
  const heading =
    "original_name" in (cast[0] || crew[0]) ? "TV Credits" : "Movie Credits";
  return (
    <>
      {(cast.length > 0 || crew.length > 0) && (
        <>
          <Divider className="mt-5 bg-neutral-600" />
          <section>
            <h2 className="text-2xl md:text-3xl font-bold my-5 font-serif">
              {heading}
            </h2>
            {cast.length > 0 && (
              <ProfileCreditList mediaList={cast} title="Cast" />
            )}
            {crew.length > 0 && (
              <ProfileCreditList mediaList={crew} title="Crew" />
            )}
          </section>
        </>
      )}
    </>
  );
};

export default ProfileDetailSection;
