"use client";
import React from "react";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import CustomSlider from "@/components/common/custom-slider";

const ProductSlider = () => {
  const { data: sliderProducts, isLoading }: any = useGetProductsListsQuery({});
  return (
    <div>
      <CustomSlider sliderProducts={sliderProducts} isLoading={isLoading} />
    </div>
  );
};

export default ProductSlider;
