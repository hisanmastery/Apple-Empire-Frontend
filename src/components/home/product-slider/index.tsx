"use client";
import React from "react";
import ProductCard from "@/components/common/product-card";
import MultiCarousel from "@/components/common/carousel";
import Loading from "@/components/common/loading";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import CustomSlider from "@/components/common/custom-slider";

const ProductSlider = () => {
  const { data: sliderProducts, isLoading }: any = useGetProductsListsQuery({});
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <CustomSlider sliderProducts={sliderProducts} />
    </div>
  );
};

export default ProductSlider;
