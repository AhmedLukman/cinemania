'use client'

import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

const MoreDetailsButton = ({ id }: { id: number }) => {
  const pathname = usePathname();
  return (
    <Button
      as={Link}
      href={`${pathname}/${id}`}
      variant="bordered"
      className="text-white"
      endContent={<FontAwesomeIcon icon={faCircleInfo} />}
    >
      More details
    </Button>
  );
};

export default MoreDetailsButton;
