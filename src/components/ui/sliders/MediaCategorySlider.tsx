'use client'

import React, { ReactNode } from "react";
import Slider from "react-slick";
import { getMediaCategorySliderSettings } from "@/lib/utils";
import { cn } from "@nextui-org/react";

const MediaCategorySlider = ({
  mediaLength,
  children,
}: {
  mediaLength: number;
  children: ReactNode;
}) => {
  return (
    <div className={cn("slider-container md:px-10", {
      'cursor-grab': mediaLength > 4,
    })}>
      <Slider {...getMediaCategorySliderSettings(mediaLength)}>
        {children}
      </Slider>
    </div>
  );
};

export default MediaCategorySlider;
