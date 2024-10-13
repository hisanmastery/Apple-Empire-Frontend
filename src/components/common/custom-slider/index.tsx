"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ProductCard from "../product-card";

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
    <Swiper
      modules={[Autoplay]}
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
  );
};

export default CustomSlider;
