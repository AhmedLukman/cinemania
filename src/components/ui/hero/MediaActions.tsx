"use client";

import {
  faHeart as faFilledHeart,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import VideoModal from "./VideoModal";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { TMovie, TMovieDetailsResponse, TSingleTVSeasonResponse, TTVShow, TTVShowDetailsResponse } from "@/lib/types";
import ViewImages from "../ViewImages";
import { getMediaTitle } from "@/lib/utils";

const MediaActions = ({
  media,
}: {
  media:
    | TMovieDetailsResponse
    | TTVShowDetailsResponse
    | TMovie
    | TTVShow
    | (TSingleTVSeasonResponse & { season: string });
}) => {
  const [isIconClicked, setIsIconClicked] = useState(false);

  const { data, status, update } = useSession();
  const user = data?.user;
  const isLoading = status === "loading";

  const {
    isOpen: isVideoOpen,
    onOpen: onVideoOpen,
    onOpenChange: onVideoOpenChange,
  } = useDisclosure();

  const pathname = usePathname();

  const handleFavClick = () => {
    if (!user) {
      toast.info("Sign in in order to favorite films");
      return;
    }
    setIsIconClicked((prevState) => !prevState);
  };

  const title = getMediaTitle(media);

  return (
    <div className="mt-10 flex items-center justify-between gap-2 md:justify-start md:gap-5">
      <VideoModal
        mediaId={media.id}
        title={title}
        isOpen={isVideoOpen}
        onOpenChange={onVideoOpenChange}
      />
      <Button
        onPress={onVideoOpen}
        endContent={<FontAwesomeIcon icon={faPlay} />}
      >
        Watch Clips
      </Button>
      {"images" in media && (
        <ViewImages imageData={media.images} title={title} />
      )}
      {(pathname === "/tv" || pathname === "/movie") && (
        <Button
          as={Link}
          href={`${pathname}/${media.id}`}
          variant="bordered"
          className="text-white"
          endContent={<FontAwesomeIcon icon={faCircleInfo} />}
        >
          More details
        </Button>
      )}
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
    </div>
  );
};

export default MediaActions;
