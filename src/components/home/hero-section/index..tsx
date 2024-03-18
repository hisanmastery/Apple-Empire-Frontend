"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import PopularProductCard from "../popularProducts/popularProductCard";
import Link from "next/link";

const HeroSection = () => {
  const plugin = React?.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const products = [
    {
      id: "62aefe9ad8b80d5234af625a",
      image:
        "https://maccity.com.my/image/cache/data/iphone/iphone%2014%20plus/starlight/iPhone_14_Plus_Starlight_PDP_Image_Position-1A_Starlight_Color_SEA-450x579.jpg",
      brand: "xioami",
      review: 3,
      quantity: 1,
      description:
        "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
      title: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
      offer_price: 18.73,
      price: 27.27,
      campaign_product: false,
      campaign_product_available: null,
      campaign_product_sale: null,
      product_type: null,
    },
    {
      id: "62aefe9ad8b80d5234af625a",
      image:
        "https://maccity.com.my/image/cache/data/iphone/iphone%2014%20plus/starlight/iPhone_14_Plus_Starlight_PDP_Image_Position-1A_Starlight_Color_SEA-450x579.jpg",
      brand: "xioami",
      review: 3,
      quantity: 1,
      description:
        "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
      title: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
      offer_price: 18.73,
      price: 27.27,
      campaign_product: false,
      campaign_product_available: null,
      campaign_product_sale: null,
      product_type: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:p-3 p-0 xl:container">
      <div className="md:col-span-12 xl:col-span-8">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="aspect-w-16 aspect-h-9">
                  <Card className="h-full">
                    <CardContent className="flex h-full">
                      <img
                        className=""
                        src="https://d61s2hjse0ytn.cloudfront.net/images/web/slider/Bkash_S24_Ultra.webp"
                        alt=""
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-2" />
          <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-2" />
        </Carousel>
      </div>

      <div className="md:col-span-12 xl:col-span-4 bg-[#D6E6EC] border rounded-lg px-5 flex flex-col justify-center items-center">
        <h1 className="uppercase text-xl  font-semibold text-center mb-5">
          🔥 Hot deal of the day 🔥
        </h1>

        <div className="flex xl:flex-col flex-col md:flex-row gap-4">
          {products.map((datas, index) => (
            <div
              key={index}
              className="aspect-w-16 aspect-h-9 bg-white border border-primarygray px-5 py-5 mb-5 rounded-lg flex justify-center items-center gap-4"
            >
              <div className="w-[100px] h-[100px] relative">
                <img
                  src={datas?.image}
                  className="w-full h-full rounded-md object-cover"
                  alt="product"
                />
              </div>
              <div className="flex-1 h-full flex flex-col justify-center">
                <Link href={`/products/${datas?.id}`}>
                  <p className="font-semibold title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-qyellow cursor-pointer">
                    {datas?.title}
                  </p>
                </Link>
                <p className="price">
                  <span className="font-bold main-price text-qgray line-through font-600 text-[18px]">
                    {datas?.price}
                  </span>
                  <span className="font-bold text-red-500 offer-price text-qred font-600 text-[18px] ml-2">
                    {datas?.offer_price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
