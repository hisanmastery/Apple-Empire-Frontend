"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { icons } from "@/constants/icons";

const MultiCarousel = ({ children, settings, className }: any) => {
  const swiperRef = useRef<any>(null);
  const defaultSettings = {
    modules: [Navigation, Autoplay],
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
  };

  const mergedSettings = { ...defaultSettings, ...settings };

  return (
    <div className={`${className} relative`}>
      <Swiper {...mergedSettings} ref={swiperRef}>
        {children.map((child: any, index: number) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      <div style={{ textAlign: "center" }}>
        <button className="button swiper-button-prev absolute z-10 bg-_white-ice p-1 font-thin rounded-full left-9 top-[50%]">
          <icons.GoArrowLeft className="text-xl text-_orange" />
        </button>
        <button className="button swiper-button-next absolute z-10 bg-_white-ice p-1 font-thin rounded-full right-8 top-[50%]">
          <icons.GoArrowRight className="text-xl text-_orange" />
        </button>
      </div>
    </div>
  );
};

export default MultiCarousel;
