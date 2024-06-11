import React from "react";
import { Divider } from "@nextui-org/react";
import { getAge, getGender } from "@/lib/utils";
import { TMovie, TPersonDetails, TTVShow } from "@/lib/types";
import ProfileParagraph from "./ProfileParagraph";
import ProfileDetailSection from "./ProfileDetailSection";

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
  const {
    also_known_as,
    biography,
    birthday,
    deathday,
    gender,
    place_of_birth,
    popularity,
  } = personDetails;

  return (
    <main className="basis-2/3 bg-white/10 p-5 rounded-lg text-white">
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-5 font-serif">
          Personal Info
        </h2>
        <p>
          Age:{" "}
          <span className="text-gray-300">
            {birthday ? getAge(birthday) : "-"}
          </span>
        </p>
        <p className="my-2">
          <span>Birthday: </span>
          <time className="text-gray-300" dateTime={birthday}>
            {birthday || "-"}
          </time>
        </p>
        {deathday && (
          <p className="my-2">
            <span>Deathday: </span>
            <time className="text-gray-300" dateTime={deathday}>
              {deathday}
            </time>
          </p>
        )}
        <p className="my-2">
          Also known as:{" "}
          <span className="text-gray-300">
            {also_known_as.length > 0 ? also_known_as.join(", ") : "-"}
          </span>
        </p>
        <p className="my-2">
          Gender:{" "}
          <span className="text-gray-300">
            {gender ? getGender(gender) : "-"}
          </span>
        </p>
        <p className="my-2">
          Place of birth:{" "}
          <span className="text-gray-300">{place_of_birth || "-"}</span>
        </p>
        <p>
          Popularity: <span className="text-gray-300">{popularity || "-"}</span>
        </p>
      </section>

      <Divider className="mt-5 bg-neutral-600" />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold my-5 font-serif">
          Biography
        </h2>
        {biography ? <ProfileParagraph biography={biography} /> : "-"}
      </section>

      {(moviesCast.length > 0 || moviesCrew.length > 0) && (
        <section>
          <Divider className="mt-5 bg-neutral-600" />
          <h2 className="text-2xl md:text-3xl font-bold my-5 font-serif">
            Movie Credits
          </h2>
          {moviesCast.length > 0 && (
            <ProfileDetailSection mediaList={moviesCast} title="Cast" />
          )}
          {moviesCrew.length > 0 && (
            <ProfileDetailSection mediaList={moviesCrew} title="Crew" />
          )}
        </section>
      )}

      {(tvShowsCast.length > 0 || tvShowsCrew.length > 0) && (
        <section>
          <Divider className="mt-5 bg-neutral-600" />
          <h2 className="text-2xl md:text-3xl font-bold my-5 font-serif">
            TV Show Credits
          </h2>
          {tvShowsCast.length > 0 && (
            <ProfileDetailSection mediaList={tvShowsCast} title="Cast" />
          )}
          {tvShowsCrew.length > 0 && (
            <ProfileDetailSection mediaList={tvShowsCrew} title="Crew" />
          )}
        </section>
      )}
    </main>
  );
};

export default ProfileDetails;
