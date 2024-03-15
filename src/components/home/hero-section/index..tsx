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

const HeroSection = () => {
  const plugin = React?.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-8">
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

      <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1">
        <div>
          <img
            className="object-cover w-full h-full rounded-md"
            src="https://i.ibb.co/3hPNsm6/photo-2023-12-06-14-59-38.webp"
            alt=""
          />
        </div>
        <div className="md:mt-3 me-3">
          <img
            className="object-cover w-full h-r rounded-md"
            src="https://i.ibb.co/f0HKFHS/photo-2023-12-06-16-39-32.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
