'use client'

import React, { ReactNode } from "react";
import Slider from "react-slick";
import { generateMediaCategorySliderSettings } from "@/lib/utils";

const MediaCategorySlider = ({
  mediaLength,
  children,
}: {
  mediaLength: number;
  children: ReactNode;
}) => {
  return (
    <div className="slider-container md:px-10">
      <Slider {...generateMediaCategorySliderSettings(mediaLength)}>
        {children}
      </Slider>
    </div>
  );
};

export default MediaCategorySlider;
