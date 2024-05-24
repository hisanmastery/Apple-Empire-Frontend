import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { icons } from "@/constants/icons";

const MultiCarousel = ({ children, settings, className }: any) => {
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const defaultSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const mergedSettings = { ...defaultSettings, ...settings };

  return (
    <div className={`${className} container relative`}>
      <Slider ref={sliderRef} {...mergedSettings}>
        {children}
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button
          className="button absolute  left-8 top-[50%]"
          onClick={previous}
        >
          <icons.previousIcon className="text-2xl text-_primary" />
        </button>
        <button className="button absolute  right-8 top-[50%]" onClick={next}>
          <icons.nextIcon className="text-2xl text-_primary" />
        </button>
      </div>
    </div>
  );
};

export default MultiCarousel;
