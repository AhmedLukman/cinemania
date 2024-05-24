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

const MediaActions = ({
  mediaId,
  title,
  homepageURL,
}: {
  mediaId: number;
  title: string;
  homepageURL: string;
}) => {
  const [isIconClicked, setIsIconClicked] = useState(false);
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
      <div className="flex items-center gap-4">
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
        <div
          onClick={() => setIsIconClicked((prevState) => !prevState)}
          className="flex md:gap-2 cursor-pointer flex-col md:flex-row items-center md:ml-2"
        >
          <FontAwesomeIcon
            icon={isIconClicked ? faFilledHeart : faHeart}
            size="xl"
          />
          <span>168</span>
        </div>
        {homepageURL && (
          <Link
            className="text-white/60"
            title="Visit homepage"
            isExternal
            href={homepageURL}
            showAnchorIcon
          />
        )}
      </div>
    </div>
  );
};

export default MediaActions;
