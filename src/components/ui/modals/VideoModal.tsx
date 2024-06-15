"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { getMedia, getPath } from "@/lib/utils";
import { TVideo, TVideoModal, TVideoResponse } from "@/lib/types";
import { MoviesUrl, TVShowsUrl } from "@/lib/constants";

const VideoModal = ({
  isOpen,
  onOpenChange,
  mediaId,
  title,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  mediaId: number;
  title: string;
}) => {
  const [videoData, setVideoData] = useState<TVideo[] | null>(null);
  const [error, setError] = useState("");
  const pathname = usePathname();

  const parts = pathname.split("/");
  const seriesId = parts[2];
  const seasonNumber = parts[4];

  const path = pathname.includes("season")
    ? `${TVShowsUrl.Origin}${seriesId}/season/${seasonNumber}/videos`
    : pathname.startsWith("/movie")
    ? `${MoviesUrl.Origin}${mediaId}/videos`
    : pathname.startsWith("/tv")
    ? `${TVShowsUrl.Origin}${mediaId}/videos`
    : "";

  // const path = pathname.startsWith('/movie') ? `${MoviesUrl.Origin}` : `${TVShowsUrl.Origin}`
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const videoRes = (await getMedia(path)) as TVideoResponse;
        setVideoData(videoRes?.results);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchVideoData();
  }, [path, mediaId]);

  return (
    <Modal
      scrollBehavior="outside"
      backdrop="blur"
      classNames={{
        body: "py-6",
        base: "border-[#292f46] bg-[#000]/40 text-white",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
      }}
      size="3xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-4xl font-serif">
              {title} videos
            </ModalHeader>
            <ModalBody>
              {videoData?.map((video) => (
                <iframe
                  key={video.id}
                  height="500"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  className=" rounded-lg"
                  title={video.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ))}
              {!error && videoData?.length === 0 && (
                <p>😢 Sorry, no clips available at the moment</p>
              )}
              {error && <p className="text-red-500">Oops, an error occurred</p>}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
