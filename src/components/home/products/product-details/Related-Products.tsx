"use client";
import CustomSlider from "@/components/common/custom-slider";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import React from "react";

const RelatedProducts = ({ category, subCategory }: any) => {
  const { data: sliderProducts, isLoading }: any = useGetProductsListsQuery({
    category: subCategory || category,
    page: 1,
    limit: 10,
  });
  return (
    <div>
      <CustomSlider sliderProducts={sliderProducts} isLoading={isLoading} />
    </div>
  );
};

export default RelatedProducts;
