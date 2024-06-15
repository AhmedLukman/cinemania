'use client'

import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import ImageModalSection from "./hero/ImageModalSection";
import { TCollectionImageResponse, TImageResponse } from "@/lib/types";

const ViewImages = <T extends TCollectionImageResponse | TImageResponse>({
  imageData,
  title,
}: {
  imageData: T;
  title: string;
}) => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  return (
    <>
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
                {imageData && (
                  <>
                    {imageData.backdrops.length > 0 && (
                      <ImageModalSection
                        images={imageData.backdrops}
                        title={title}
                        heading="Backdrops"
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
                {!imageData && (
                  <p>😢 Sorry, no images available at the moment</p>
                )}
                {/*
                {error && (
                  <p className="text-red-500">Oops, an error occurred</p>
                )} */}
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
      <Button
        onPress={onOpen}
        variant="ghost"
        endContent={<FontAwesomeIcon icon={faImage} />}
        className="text-white hover:text-black"
      >
        View images
      </Button>
    </>
  );
};

export default ViewImages;
