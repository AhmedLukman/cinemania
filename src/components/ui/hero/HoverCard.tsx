"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@nextui-org/react";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { dataUrl } from "@/lib/utils";

export const HoverCard = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
  isActive,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
  isActive?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [hoverDirection, setHoverDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("right");

  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    initial: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    exit: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    top: {
      y: -20,
      opacity: 1,
    },
    bottom: {
      y: 20,
      opacity: 1,
    },
    left: {
      x: -20,
      opacity: 1,
    },
    right: {
      x: 20,
      opacity: 1,
    },
  };

  const textVariants = {
    initial: {
      y: 0,
      x: 0,
      opacity: 0,
    },
    exit: {
      y: 0,
      x: 0,
      opacity: 0,
    },
    top: {
      y: -20,
      opacity: 1,
    },
    bottom: {
      y: 20,
      opacity: 1,
    },
    left: {
      x: -20,
      opacity: 1,
    },
    right: {
      x: 20,
      opacity: 1,
    },
  };

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    setHoverDirection(direction);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    switch (d) {
      case 0:
        return "top";
      case 1:
        return "right";
      case 2:
        return "top";
      case 3:
        return "right";
      default:
        return "right";
    }
  };

  return (
    <motion.div
      onMouseEnter={!isActive ? handleMouseEnter: () => {}}
      onMouseLeave={!isActive ? handleMouseLeave: () => {}}
      ref={ref}
      className={cn(
        "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          animate={isActive || isHovered ? hoverDirection : "initial"}
          exit="exit"
        >
          <motion.div
            className={cn(
              "absolute inset-0 w-full h-full z-10 transition bg-black/40 group-hover/card:block hidden duration-500",
              isActive || isHovered ? " block" : ""
            )}
          />
          <motion.div
            variants={variants}
            className="h-full w-full relative bg-gray-50 dark:bg-black"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <Image
              unoptimized
              placeholder={dataUrl as PlaceholderValue}
              alt="image"
              className={cn(
                "h-full w-full object-cover scale-[1.23]",
                imageClassName
              )}
              fill
              src={imageUrl}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn(
              "text-white absolute bottom-4 left-4 z-40",
              childrenClassName
            )}
            animate={isActive || isHovered ? hoverDirection : "initial"}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
