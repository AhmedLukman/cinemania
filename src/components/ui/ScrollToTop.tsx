'use client'

import ScrollToTop from "react-scroll-to-top"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopUI = () => {
  return (
    <ScrollToTop
      smooth
      component={<FontAwesomeIcon icon={faArrowUp} size="lg" />}
      className="hidden md:flex items-center justify-center !shadow-lg !shadow-slate-400 -mr-4"
    />
  );
}

export default ScrollToTopUI