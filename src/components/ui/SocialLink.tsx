import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link, Tooltip } from "@nextui-org/react";

export const SocialLink = ({
  id,
  baseUrl,
  icon,
  className = "text-black",
  type = "Media",
}: {
  id: string;
  baseUrl: string;
  icon: IconProp;
  className?: string;
  type?: "Media" | "Person";
}) => {
  const title = baseUrl.split(".")[1];
  const capitalizedTitle = title[0].toUpperCase() + title.slice(1);
  return id ? (
    <Link
      isExternal
      className={className}
      title={capitalizedTitle}
      href={`https://${
        baseUrl.includes("imdb")
          ? baseUrl + `${type === "Media" ? "/title" : "/name"}`
          : baseUrl
      }/${id}`}
    >
      <FontAwesomeIcon size="lg" icon={icon} />
    </Link>
  ) : null;
};
