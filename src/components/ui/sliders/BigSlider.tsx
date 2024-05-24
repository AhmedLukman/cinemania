import { LegacyRef, PropsWithChildren } from "react";
import Slider from "react-slick";

const BigSlider = ({
  children,
  nav2,
  sliderRef1,
}: PropsWithChildren & {
  nav2: Slider;
  sliderRef1: LegacyRef<Slider>;
}) => {
  return (
    <Slider
      className="h-[85svh] md:h-[75svh]"
      lazyLoad="progressive"
      arrows={false}
      asNavFor={nav2}
      ref={sliderRef1}
    >
      {children}
    </Slider>
  );
};

export default BigSlider;
