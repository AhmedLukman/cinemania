"use client";

import React, { LegacyRef, useState } from "react";
import { HoverCard } from "../hero/HoverCard";
import { MINI_SLIDER_OPTIONS } from "@/lib/constants";
import Slider from "react-slick";
import { getImageUrl, getMediaTitle } from "@/lib/utils";
import { TMovie, TTVShow } from "@/lib/types";

const MiniSlider = ({
  nav1,
  sliderRef2,
  popularMedia,
}: {
  nav1: Slider;
  sliderRef2: LegacyRef<Slider>;
  popularMedia: TMovie[] | TTVShow[];
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleAfterChange = (current: number) => {
    setActiveSlide(current);
  };

  const isActive = (index: number) => index === activeSlide;

  return (
    <Slider
      {...MINI_SLIDER_OPTIONS}
      ref={sliderRef2}
      asNavFor={nav1}
      afterChange={handleAfterChange}
    >
      {popularMedia?.map((popularMedia: TMovie | TTVShow, index: number) => (
        <div key={popularMedia.id} className=" h-[25svh] p-2 rounded-md">
          <HoverCard
            isActive={isActive(index)}
            className="!h-full !w-full cursor-pointer"
            imageUrl={getImageUrl(popularMedia.backdrop_path)}
          >
            <p className="font-bold text-xl max-w-lg">
              {getMediaTitle(popularMedia)}
            </p>
          </HoverCard>
        </div>
      ))}
    </Slider>
  );
};

export default MiniSlider;
