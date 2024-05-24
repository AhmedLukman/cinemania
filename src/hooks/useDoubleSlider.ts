import { LegacyRef, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

export const useDoubleSlider = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return { nav1, nav2, sliderRef1, sliderRef2 };
};
