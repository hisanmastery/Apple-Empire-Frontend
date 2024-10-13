"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../product-card";
import { icons } from "@/constants/icons";

interface Product {
  _id: string;
  name: string;
  price: number;
  offerPrice: number;
  offer_price: number;
  image: { imageUrl: string };
  review: number;
  variants: any[];
}

interface CustomSliderProps {
  sliderProducts: {
    product: Product[];
  };
}

const CustomSlider: React.FC<CustomSliderProps> = ({ sliderProducts }) => {
  const swiperRef = useRef<any>(null);

  const breakpoints = {
    0: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  };

  return (
    <div className={`container relative p-0`}>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        speed={3000}
        allowTouchMove={true}
        breakpoints={breakpoints}
        spaceBetween={12}
      >
        {sliderProducts?.product?.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard datas={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ textAlign: "center" }}>
        <button
          className="button swiper-button-prev absolute bg-_white-ice z-10 p-1 font-thin rounded-full left-9 top-[50%]"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <icons.GoArrowLeft className="text-xl text-_orange" />
        </button>
        <button
          className="button swiper-button-next absolute bg-_white-ice z-10 p-1 font-thin rounded-full right-8 top-[50%]"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <icons.GoArrowRight className="text-xl text-_orange" />
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
