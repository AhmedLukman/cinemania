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
import { getMedia } from "@/lib/utils";
import { MoviesUrl, TVShowsUrl } from "@/lib/constants";
import { TImageResponse } from "@/lib/types";
import ImageModalSection from "../ImageModalSection";

const ImageModal = ({
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
  const [imageData, setImageData] = useState<TImageResponse | null>(null);
  const [error, setError] = useState("");
  const pathname = usePathname();

  const parts = pathname.split("/");
  const seriesId = parts[2];
  const seasonNumber = parts[4];

  const path = pathname.includes("season")
    ? `${TVShowsUrl.Origin}${seriesId}/season/${seasonNumber}/images`
    : pathname.startsWith("/movie")
    ? `${MoviesUrl.Origin}${mediaId}/images`
    : pathname.startsWith("/tv")
    ? `${TVShowsUrl.Origin}${mediaId}/images`
    : "";

  useEffect(() => {
    const fetchimageData = async () => {
      try {
        const imageRes = (await getMedia(path)) as TImageResponse;
        setImageData(imageRes);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchimageData();
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
              {title} images
            </ModalHeader>
            <ModalBody>
              {imageData && !error && (
                <>
                  {imageData.backdrops.length > 0 && (
                    <ImageModalSection
                      images={imageData.backdrops}
                      title={title}
                      heading="Backdrops"
                    />
                  )}
                  {imageData.logos.length > 0 && (
                    <ImageModalSection
                      images={imageData.logos}
                      title={title}
                      heading="Logos"
                    />
                  )}
                  {imageData.posters.length > 0 && (
                    <ImageModalSection
                      images={imageData.posters}
                      title={title}
                      heading="Posters"
                    />
                  )}
                </>
              )}
              {!error && !imageData && (
                <p>😢 Sorry, no images available at the moment</p>
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

export default ImageModal;
