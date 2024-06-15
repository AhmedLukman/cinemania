'use client'

import { TVideo } from "@/lib/types";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
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

const ViewVideos = ({
    videoData,
    title,
    }: {
    videoData: TVideo[];
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
                {videoData?.length === 0 && (
                  <p className="text-red-500">😢 Sorry, no clips available at the moment</p>
                )}
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
      <Button onPress={onOpen} endContent={<FontAwesomeIcon icon={faPlay} />}>
        Watch Clips
      </Button>
    </>
  );
};

export default ViewVideos;
