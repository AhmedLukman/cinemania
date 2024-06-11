import { TMovie, TTVShow } from "@/lib/types";
import { Divider } from "@nextui-org/react";
import React from "react";
import ProfileCreditList from "./ProfileCreditList";
import ViewMoreBtn from "./ViewMoreBtn";

const ProfileDetailSection = ({
  cast,
  crew,
  personId,
}: {
  cast: TMovie[] | TTVShow[];
  crew: TMovie[] | TTVShow[];
  personId: number;
}) => {
  const heading =
    "original_name" in (cast[0] || crew[0]) ? "TV Credits" : "Movie Credits";
  const path = "original_name" in (cast[0] || crew[0]) ? "tv" : "movie";
  return (
    <>
      {(cast.length > 0 || crew.length > 0) && (
        <>
          <Divider className="mt-5 bg-neutral-600" />
          <section>
            <div className="my-5 flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold  font-serif">
                {heading}
              </h2>
              {(crew.length || cast.length) > 9 && (
                <ViewMoreBtn path={`/people/${personId}/${path}/credits`} />
              )}
            </div>
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
