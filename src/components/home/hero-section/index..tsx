"use client";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useGetAllCarouselQuery } from "@/store/features/ads-section/adsSectionApi";
import Link from "next/link";

const HeroSection = () => {
  const swiperRef = useRef<any>(null);
  const { data } = useGetAllCarouselQuery<any>({ page: 1, limit: 10 });
  const breakpoints = {
    640: { slidesPerView: 1 },
  };
console.log(data);
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
        {data?.response?.length === 0 ? (
          <SwiperSlide>
            <p>No products available</p>
          </SwiperSlide>
        ) : (
          data?.response?.map((product: any) => (
            <SwiperSlide key={product.id}>
             <Link href={product?.canonicalUrl || " "}>
             <div className="aspect-w-16 aspect-h-9">
                <Card className="!h-full">
                  <CardContent className="flex w-full items-center justify-center lg:h-[590px] h-52">
                    <Image
                      width={1300}
                      height={700}
                      quality={100}
                      className="w-full h-full"
                      src={product.images?.imageUrl || ""}
                      alt={product?.images?.altText || ""}
                    />
                  </CardContent>
                </Card>
              </div>
             </Link>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default HeroSection;
