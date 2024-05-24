"use client";

import React from "react";
import MiniSlider from "./MiniSlider";
import BigSlider from "./BigSlider";
import { useDoubleSlider } from "@/app/hooks/useDoubleSlider";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { TMovie, TTVShow } from "@/lib/types";
import { MediaType } from "@/lib/constants";
import PosterContent from "../hero/PosterContent";
import PosterContainer from "../hero/PosterContainer";

const DoubleSlider = ({
  type,
  popularMedia,
}:
  | { type: MediaType.Movie; popularMedia: TMovie[] }
  | { type: MediaType.TV; popularMedia: TTVShow[] }) => {
  const { nav1, nav2, sliderRef1, sliderRef2 } = useDoubleSlider();
  return (
    <>
      <ScrollToTop
        smooth
        component={<FontAwesomeIcon icon={faArrowUp} size="lg" />}
        className="hidden md:flex items-center justify-center !shadow-lg !shadow-slate-400 -mr-4"
      />
      <section className="slider-container">
        <BigSlider nav2={nav2!} sliderRef1={sliderRef1}>
          {popularMedia?.map((popularMedia) => (
            <PosterContainer key={popularMedia.id} media={popularMedia}>
              {type === MediaType.Movie && (
                <PosterContent type={type} media={popularMedia as TMovie} />
              )}
              {type === MediaType.TV && (
                <PosterContent type={type} media={popularMedia as TTVShow} />
              )}
            </PosterContainer>
          ))}
        </BigSlider>

        <MiniSlider
          popularMedia={popularMedia}
          nav1={nav1!}
          sliderRef2={sliderRef2}
        />
      </section>
    </>
  );
};

export default DoubleSlider;
