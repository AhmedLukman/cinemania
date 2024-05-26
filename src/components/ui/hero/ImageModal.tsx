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
import { dataUrl, getMedia, getImageUrl, getPath } from "@/lib/utils";
import Image from "next/image";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { ImageSize, MoviesUrl, TVShowsUrl } from "@/lib/constants";
import {
  TImageResponse,
  TMovieDetailsResponse,
  TTVShowDetailsResponse,
} from "@/lib/types";

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
  // const path = pathname.startsWith("/movie")
  //   ? `${MoviesUrl.Origin}`
  //   : `${TVShowsUrl.Origin}`;
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
                  <section>
                    {imageData?.backdrops && imageData.backdrops.length > 0 && (
                      <>
                        <h3 className="text-2xl font-bold">Backdrops</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {imageData.backdrops.map((image, index) => (
                            <Image
                              unoptimized
                              key={index}
                              placeholder={dataUrl as PlaceholderValue}
                              alt=""
                              width={500}
                              height={300}
                              src={getImageUrl(
                                image.file_path,
                                ImageSize.Small
                              )}
                              className="m-2"
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </section>
                  <section>
                    {imageData?.logos && imageData.logos.length > 0 && (
                      <>
                        <h3 className="text-2xl font-bold">Logos</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {imageData.logos.map((image, index) => (
                            <Image
                              unoptimized
                              key={index}
                              placeholder={dataUrl as PlaceholderValue}
                              alt=""
                              width={500}
                              height={320}
                              src={getImageUrl(
                                image.file_path,
                                ImageSize.Small
                              )}
                              className="m-2"
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </section>
                  <section>
                    {imageData?.posters && imageData.posters.length > 0 && (
                      <>
                        <h3 className="text-2xl font-bold">Posters</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {imageData.posters.map((image, index) => (
                            <Image
                              unoptimized
                              key={index}
                              placeholder={dataUrl as PlaceholderValue}
                              alt=""
                              width={500}
                              height={750}
                              src={getImageUrl(
                                image.file_path,
                                ImageSize.Small
                              )}
                              className="m-2"
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </section>
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
