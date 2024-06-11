import { TPersonDetails } from "@/lib/types";
import { getAge, getGender } from "@/lib/utils";
import { Divider } from "@nextui-org/react";
import React from "react";

const ProfileInfoSection = ({
  personalDetails,
}: {
  personalDetails: TPersonDetails;
}) => {
  const {
    also_known_as,
    birthday,
    deathday,
    gender,
    place_of_birth,
    popularity,
  } = personalDetails;

  return (
    <>
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
    </>
  );
};

export default ProfileInfoSection;
