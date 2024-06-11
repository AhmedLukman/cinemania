import React from "react";
import { Divider, ScrollShadow } from "@nextui-org/react";
import { getAge, getGender } from "@/lib/utils";
import MediaCard from "../ui/MediaCard";
import { TMovie, TPersonDetails, TTVShow } from "@/lib/types";

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
    name,
    also_known_as,
    biography,
    birthday,
    deathday,
    gender,
    homepage,
    place_of_birth,
    popularity,
    profile_path,
  } = personDetails;
  return (
    <main className=" basis-2/3 bg-white/10 p-5 rounded-lg text-white ">
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
          {also_known_as.length > 0 ? also_known_as.join(", ") + "." : "-"}
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
      <Divider className="mt-5 bg-neutral-600" />
      <h2 className="text-2xl md:text-3xl font-bold my-5 font-serif">
        Biography
      </h2>
      {biography
        ? biography.split("\n").map((paragraph, index) => (
            <p key={index} className="text-gray-300 whitespace-normal mb-4">
              {paragraph}
            </p>
          ))
        : "-"}

      {(moviesCast.length > 0 || moviesCrew.length > 0) && (
        <>
          <Divider className="mt-5 bg-neutral-600" />
          <h2 className="text-2xl md:text-3xl font-bold my-5 font-serif">
            Movie credits
          </h2>
        </>
      )}

      {moviesCast.length > 0 && (
        <>
          <h3 className="text-xl md:text-2xl font-serif mb-5">Cast</h3>
          <ScrollShadow
            hideScrollBar
            className=" grid grid-cols-2 xl:grid-cols-3 gap-5 h-[30rem]"
          >
            {moviesCast.map((movieCast) => (
              <MediaCard
                key={movieCast.id}
                media={movieCast}
                path={`/movie/${movieCast.id}`}
              />
            ))}
          </ScrollShadow>
        </>
      )}

      {moviesCrew.length > 0 && (
        <>
          <h3 className="text-xl md:text-2xl font-serif my-5">Crew</h3>
          <ScrollShadow
            hideScrollBar
            className=" grid grid-cols-2 xl:grid-cols-3 gap-5 h-[30rem]"
          >
            {moviesCrew.map((movieCrew) => (
              <MediaCard
                key={movieCrew.id}
                media={movieCrew}
                path={`/movie/${movieCrew.id}`}
              />
            ))}
          </ScrollShadow>
        </>
      )}

      {(tvShowsCast.length > 0 || tvShowsCrew.length > 0) && (
        <>
          <Divider className="mt-5 bg-neutral-600" />
          <h2 className="text-2xl md:text-3xl font-bold my-5 font-serif">
            TV Show credits
          </h2>
        </>
      )}

      {tvShowsCast.length > 0 && (
        <>
          <h3 className="text-xl md:text-2xl font-serif my-5">Cast</h3>
          <ScrollShadow
            hideScrollBar
            className=" grid grid-cols-2 xl:grid-cols-3 gap-5 h-[30rem]"
          >
            {tvShowsCast.map((tvShowCast) => (
              <MediaCard
                key={tvShowCast.id}
                media={tvShowCast}
                path={`/movie/${tvShowCast.id}`}
              />
            ))}
          </ScrollShadow>
        </>
      )}

      {tvShowsCrew.length > 0 && (
        <>
          <h3 className="text-xl md:text-2xl font-serif my-5">Crew</h3>
          <ScrollShadow
            hideScrollBar
            className=" grid grid-cols-2 xl:grid-cols-3 gap-5 h-[30rem]"
          >
            {tvShowsCrew.map((tvShowCrew) => (
              <MediaCard
                key={tvShowCrew.id}
                media={tvShowCrew}
                path={`/movie/${tvShowCrew.id}`}
              />
            ))}
          </ScrollShadow>
        </>
      )}
    </main>
  );
};

export default ProfileDetails;
