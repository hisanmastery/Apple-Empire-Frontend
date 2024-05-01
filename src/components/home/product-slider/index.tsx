"use client";
import React from "react";
import ProductCard from "@/components/common/product-card";
import MultiCarousel from "@/components/common/carousel";
import Loading from "@/components/common/loading";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";

const ProductSlider = () => {
  const { data: sliderProducts, isLoading }: any = useGetProductsListsQuery({});
  if (isLoading) {
    return <Loading />;
  }
  return (
    <MultiCarousel
      settings={{
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
      }}
    >
      {sliderProducts?.blogs
        ?.slice(0, 12)
        ?.map((product: any, index: number) => (
          <div key={index} className="aspect-w-16 aspect-h-9 lg:basis-1/6">
            <ProductCard key={product._id} datas={product}></ProductCard>
          </div>
        ))}
    </MultiCarousel>
  );
};

export default ProductSlider;
