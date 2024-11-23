"use client";
import CustomSlider from "@/components/common/custom-slider";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import React from "react";

const RelatedProducts = ({ category }: any) => {
  const { data: sliderProducts, isLoading }: any = useGetProductsListsQuery({
    category: category,
  });
  return (
    <div>
      <CustomSlider sliderProducts={sliderProducts} isLoading={isLoading} />
    </div>
  );
};

export default RelatedProducts;
