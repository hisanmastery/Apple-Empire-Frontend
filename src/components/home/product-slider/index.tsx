"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/common/product-card";
import Autoplay from "embla-carousel-autoplay";
const ProductSlider = ({ productData }: any) => {
  const plugin = React?.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  return (
    <div>
      <div className="container">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        //   opts={{
        //     align: "start",
        //   }}
          className="w-full"
        >
          <CarouselContent className="p-4 flex gap-4">
            {productData?.map((product: any, index: number) => (
              <CarouselItem key={index} className=" aspect-w-16 aspect-h-9 lg:basis-1/6">
                <ProductCard key={product.id} datas={product}></ProductCard>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-2" />
          <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-2" />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductSlider;
