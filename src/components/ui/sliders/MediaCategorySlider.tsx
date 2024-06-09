'use client'

import React, { ReactNode } from "react";
import Slider from "react-slick";
import { getMediaCategorySliderSettings } from "@/lib/utils";

const MediaCategorySlider = ({
  mediaLength,
  children,
}: {
  mediaLength: number;
  children: ReactNode;
}) => {
  return (
    <div className="slider-container md:px-10 cursor-grab">
      <Slider {...getMediaCategorySliderSettings(mediaLength)}>
        {children}
      </Slider>
    </div>
  );
};

export default MediaCategorySlider;
