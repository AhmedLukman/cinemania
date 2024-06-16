import { ImageSize, MediaUrl } from "@/lib/constants";
import { ProductionCompany, TCompanyDetails, TMediaLinks } from "@/lib/types";
import { dataUrl, getImageUrl, getMedia } from "@/lib/utils";
import { Card, Link, Tooltip, cn } from "@nextui-org/react";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const CompanyCard = async ({
  company: { id, logo_path, name },
}: {
  company: ProductionCompany;
}) => {
  const companyDetails = (await getMedia(
    `${MediaUrl}company/${id}`
  )) as TCompanyDetails;
  return (
    <Tooltip key={id} content={name}>
      <Card
        isPressable
        as={Link}
        isExternal
        href={companyDetails.homepage}
        className="w-36 h-36 flex flex-shrink-0 justify-center items-center"
      >
        <Image
          fill
          alt=""
          className={cn("object-contain", {
            "p-2": logo_path,
          })}
          placeholder={dataUrl as PlaceholderValue}
          src={
            logo_path
              ? getImageUrl(logo_path, ImageSize.Small)
              : "/assets/images/avatar.jpeg"
          }
        />
      </Card>
    </Tooltip>
  );
};

export default CompanyCard;
