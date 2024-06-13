import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { TPersonImageResponse } from "@/lib/types";
import Image from "next/image";
import { dataUrl, getImageUrl } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { ImageSize } from "@/lib/constants";

const PersonImageModal = ({
  isOpen,
  onOpenChange,
  title,
  imageResponse,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  title: string;
  imageResponse: TPersonImageResponse;
}) => {
  const { profiles: images } = imageResponse;
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
              Images of {title}
            </ModalHeader>
            <ModalBody>
              <section>
                {images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <Image
                        unoptimized
                        key={index}
                        placeholder={dataUrl as PlaceholderValue}
                        alt=""
                        width={image.width}
                        height={image.height}
                        src={getImageUrl(image.file_path, ImageSize.Small)}
                        className="m-2"
                      />
                    ))}
                  </div>
                )}
              </section>
              {!(images.length > 0) && (
                <p>😢 Sorry, no images available at the moment</p>
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
  );
};

export default PersonImageModal;
