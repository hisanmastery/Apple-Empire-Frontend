"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
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

  // Show skeletons if data is still loading
  if (isLoading) {
    return (
      <div className="container relative p-0">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          speed={3000}
          allowTouchMove={false}
          spaceBetween={12}
          breakpoints={breakpoints}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <ProductCardSkeleton />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  // Render the actual slider content once data is loaded
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
          className="button swiper-button-prev absolute z-10 p-1 font-thin rounded-full left-0 top-[50%]"
          onClick={() => swiperRef?.current?.swiper?.slidePrev()}
        >
          <icons.GoArrowLeft className="text-xl text-_orange" />
        </button>
        <button
          className="button swiper-button-next absolute z-10 p-1 font-thin rounded-full right-0 top-[50%]"
          onClick={() => swiperRef?.current?.swiper?.slideNext()}
        >
          <icons.GoArrowRight className="text-xl text-_orange" />
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;


// bg-[#eff1f0]
