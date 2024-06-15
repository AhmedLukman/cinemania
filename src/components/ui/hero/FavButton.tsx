"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { faHeart as faFilledHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "sonner";

const FavButton = () => {
  const { data, status, update } = useSession();
  const user = data?.user;
  const isLoading = status === "loading";

  const [isIconClicked, setIsIconClicked] = useState(false);

  const handleFavClick = () => {
    if (!user) {
      toast.info("Sign in in order to favorite films");
      return;
    }
    setIsIconClicked((prevState) => !prevState);
  };

  return (
    <Button
      variant="light"
      onPress={handleFavClick}
      className="text-white"
      startContent={
        <FontAwesomeIcon
          icon={isIconClicked ? faFilledHeart : faHeart}
          size="xl"
        />
      }
    >
      120
    </Button>
  );
};

export default FavButton;
