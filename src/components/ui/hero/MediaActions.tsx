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
import ImageModal from "./ImageModal";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

const MediaActions = ({
  mediaId,
  title,
}: {
  mediaId: number;
  title: string;
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

  const {
    isOpen: isImageOpen,
    onOpen: onImageOpen,
    onOpenChange: onImageOpenChange,
  } = useDisclosure();

  const pathname = usePathname();

  const handleFavClick = () => {
    if (!user) {
      toast.info("Sign in in order to favorite films");
      return;
    }
    setIsIconClicked((prevState) => !prevState);
  };

  return (
    <div className="mt-10">
      <VideoModal
        mediaId={mediaId}
        title={title}
        isOpen={isVideoOpen}
        onOpenChange={onVideoOpenChange}
      />
      {pathname !== "/tv" && pathname !== "/movie" && (
        <ImageModal
          mediaId={mediaId}
          title={title}
          isOpen={isImageOpen}
          onOpenChange={onImageOpenChange}
        />
      )}
      <div className="flex items-center justify-between gap-2">
        <Button
          onPress={onVideoOpen}
          endContent={<FontAwesomeIcon icon={faPlay} />}
        >
          Watch Clips
        </Button>
        {pathname !== "/tv" && pathname !== "/movie" && (
          <>
            <Button
              onPress={onImageOpen}
              variant="ghost"
              endContent={<FontAwesomeIcon icon={faImage} />}
              className="text-white hover:text-black"
            >
              View images
            </Button>
          </>
        )}
        {(pathname === "/tv" || pathname === "/movie") && (
          <Button
            as={Link}
            href={`${pathname}/${mediaId}`}
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
    </div>
  );
};

export default MediaActions;
