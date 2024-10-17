"use client";
import React from "react";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import CustomSlider from "@/components/common/custom-slider";

const PopularProducts = () => {
  const { data: popularProducts, isLoading }: any = useGetProductsListsQuery({
    productType: "Popular Products",
  });

  return (
    <div>
      <CustomSlider sliderProducts={popularProducts} isLoading={isLoading} />
    </div>
  );
};

export default PopularProducts;
