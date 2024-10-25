"use client";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { images } from "@/constants/images";

const products = [
  {
    id:"54564565766782453467",
    image: images.banner1
  },
  {
    id: "2345678903456sdfsd",
    image:images.banner2
  },
  {
    id: "234567890fghjkwesd",
    image:images.banner3
  },
  {
    id: "dfghjk345678904sdf",
    image:images.banner4
  },
  {
    id: "sdfghjksdfert2345",
    image:images.banner5
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
    </div>
  );
};

export default HeroSection;
