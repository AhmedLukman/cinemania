import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from '@nextui-org/react';

export const SocialLink = ({
  id,
  baseUrl,
  icon,
  className = "text-black",
}: {
  id: string;
  baseUrl: string;
  icon: IconProp;
  className?: string;
}) => {
  return id ? (
    <Link
      isExternal
      className={className}
      href={`https://${
        baseUrl.includes("imdb") ? baseUrl + "/name" : baseUrl
      }/${id}`}
    >
      <FontAwesomeIcon size="lg" icon={icon} />
    </Link>
  ) : null;
};