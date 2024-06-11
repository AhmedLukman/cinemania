import React from "react";

const ProfileBiographySection = ({ biography }: { biography: string }) => {
  return (
    <section>
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
    </section>
  );
};

export default ProfileBiographySection;
