"use client";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { icons } from "@/constants/icons";

const products = [
  {
    id: "62aefe9ad8b80d5234af625a",
    image:
      "https://i.ibb.co/302jz8B/Whats-App-Image-2024-09-23-at-19-26-50-c27fd853.jpg",
  },
  {
    id: "62aefe9ad8b80d5234af625b",
    image:
      "https://i.ibb.co/nmPrV4g/Whats-App-Image-2024-09-23-at-19-26-52-a5f25037.jpg",
  },
  {
    id: "62aefe9ad8b80d5234af625c",
    image:
      "https://i.ibb.co/LCFVpc2/Whats-App-Image-2024-09-23-at-19-26-51-19eabe7d.jpg",
  },
];

const HeroSection = () => {
  const swiperRef = useRef<any>(null);
  const breakpoints = {
    640: { slidesPerView: 1 },
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination]}
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
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {products.length === 0 ? (
          <SwiperSlide>
            <p>No products available</p>
          </SwiperSlide>
        ) : (
          products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <div className="aspect-w-16 aspect-h-9">
                <Card className="h-full">
                  <CardContent className="flex w-full items-center justify-center lg:h-[580px] h-full">
                    <Image
                      width={500}
                      height={400}
                      className="w-full"
                      src={product.image}
                      alt={`Carousel Image ${index + 1}`}
                    />
                  </CardContent>
                </Card>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
      {/* <div style={{ textAlign: "center" }}>
        <button
          className="button swiper-button-prev absolute bg-[#eff1f0] z-30 p-1 font-thin rounded-full left-9 top-[50%]"
          onClick={() => swiperRef.current.swiper.slidePrev()}
          aria-label="Previous slide"
        >
          <icons.GoArrowLeft className="text-xl text-_orange" />
        </button>
        <button
          className="button swiper-button-next absolute bg-[#eff1f0] z-30 p-1 font-thin rounded-full right-8 top-[50%]"
          onClick={() => swiperRef.current.swiper.slideNext()}
          aria-label="Next slide"
        >
          <icons.GoArrowRight className="text-xl text-_orange" />
        </button>
      </div> */}
    </div>
  );
};

export default HeroSection;
