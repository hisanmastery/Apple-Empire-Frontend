"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  variations: any[];
  metaInformation: any;
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
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextButton = carouselRef.current.querySelector(
          "[data-carousel-next]"
        ) as HTMLElement;

        if (nextButton) {
          nextButton.click();
        }
      }
    }, 300); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Render Skeleton Loader if data is loading
  if (isLoading) {
    return (
      <Carousel className="w-full" ref={carouselRef}>
        <CarouselContent className="-ml-1">
          {[...Array(5)].map((_, index) => (
            <CarouselItem key={index} className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="animate-pulse bg-gray-300 h-16 w-16 rounded-md"></div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }

  // Render Products when data is ready
  return (
    <Carousel className="w-full" ref={carouselRef} autoplay autoplayInterval={3000}>
      <CarouselContent className="-ml-1">
        {sliderProducts?.product?.map((product: any) => (
          <CarouselItem
            key={product._id}
            className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <div className="p-1">
              <ProductCard datas={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CustomSlider;
