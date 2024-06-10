import {
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
} from "@/lib/types";
import React from "react";

const CreditParagraph = ({
  name,
  value,
  tagline,
}: {
  name?: string;
  value?: string | ProductionCompany[] | ProductionCountry[] | SpokenLanguage[]
  tagline?: string;
}) => {
  const updatedValue =
    typeof value === "string"
      ? value
      : typeof value === "object"
      ? value.map((value: ProductionCompany | ProductionCountry | SpokenLanguage) => value.name).join(", ") + "."
      : "";

  return (
    <>
      {tagline === undefined && (
        <p>
          <span className="text-[#cecece] text-sm mr-3">{name}</span>
          {updatedValue || "-"}
        </p>
      )}
      {tagline && (
        <p className="italic text-sm text-[#cecece] pt-5 text-center">
          ~ {tagline}
        </p>
      )}
    </>
  );
};

export default CreditParagraph;
