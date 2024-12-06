"use client";
import React, { useRef } from "react";
import Loading from "@/components/common/loading";
import { useGetAllBrandQuery } from "@/store/features/brand/brandApi";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const breakpoints = {
  0: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 7,
    spaceBetween: 20,
  },
};

const ClientBrand = () => {
  const swiperRef = useRef<any>(null);
  const { data, isLoading }: any = useGetAllBrandQuery({
    limit: 20,
  });

  if (isLoading) return <Loading />;
  return (
    <div>
      <h3 className="text-center text-lg md:text-2xl mt-5 mb-3">Shop By Brand</h3>
      <div className="container relative">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={true}
          breakpoints={breakpoints}
          spaceBetween={12}
        >
          {data?.brands?.map((brand: any, index: any) => (
            <SwiperSlide key={index} className={`!h-auto !md:h-full`}>
              <div className="w-full !h-full flex items-center">
                <Link href={`/brand/${brand?.brandName}`}>
                  <Image
                    src={brand?.image?.viewUrl}
                    alt={brand?.brandName}
                    fill
                    width={100}
                    height={50}
                    className="w-auto h-[50px] mx-auto transition ease-in-out duration-300 hover:scale-110 hover:cursor-pointer"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientBrand;
