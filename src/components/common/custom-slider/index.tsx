"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../product-card";

import { icons } from "@/constants/icons";
import ProductCardSkeleton from "@/components/shared/skeleton/products-card-skeleton";

interface Product {
  _id: string;
  name: string;
  price: number;
  offerPrice: number;
  offer_price: number;
  image: { imageUrl: string };
  review: number;
  variants: any[];
  variations: any[];
  metaInformation:any
}

interface CustomSliderProps {
  sliderProducts: {
    product: Product[];
  };
  isLoading: boolean;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  sliderProducts,
  isLoading,
}) => {
  const swiperRef = useRef<any>(null);

  const breakpoints = {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
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

  // Skeleton UI for loading state
  if (isLoading) {
    return (
      <div className="container relative p-0">
        <Swiper
          onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)}
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={true}
          spaceBetween={12}
          breakpoints={breakpoints}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <ProductCardSkeleton />
            </SwiperSlide>
          ))}
        </Swiper>
        <div style={{ textAlign: "center" }}>
          <button className="swiper-button-prev">
            <icons.GoArrowLeft className="text-xl text-_orange" />
          </button>
          <button className="swiper-button-next">
            <icons.GoArrowRight className="text-xl text-_orange" />
          </button>
        </div>
      </div>
    );
  }

  // Render actual products when data is ready
  return (
    <div className={`container relative p-0`}>
      <Swiper
        onSwiper={(swiperInstance) => {
          swiperRef.current = swiperInstance;
          swiperInstance.navigation.update(); // Ensure navigation updates properly
        }}
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
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {sliderProducts?.product?.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard datas={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ textAlign: "center" }}>
        <button className="swiper-button-prev">
          <icons.GoArrowLeft className="text-xl text-_orange" />
        </button>
        <button className="swiper-button-next">
          <icons.GoArrowRight className="text-xl text-_orange" />
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
