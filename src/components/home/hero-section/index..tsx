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
    <Carousel
      plugins={[plugin.current]}
      className="w-full mt-20"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                {/* <CardContent className="flex w-full aspect-square items-center justify-center  lg:h-[600px] h-[230px] p-1"> */}
                <CardContent className="flex w-full aspect-[1920/850] items-center justify-center   p-1">
                  <img
                    className="h-full w-full rounded-sm"
                    src="https://d61s2hjse0ytn.cloudfront.net/images/web/slider/Bkash_S24_Ultra.webp"
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-[50%] left-2 "  />
      <CarouselNext className="absolute top-[50%] right-2 " />
    </Carousel>
  );
};

export default HeroSection;
