"use client";
import React from "react";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import CustomSlider from "@/components/common/custom-slider";
const TopSellingProducts = () => {
  const { data: topSellingProducts, isLoading }: any = useGetProductsListsQuery(
    {
      productType: "Top Selling Products",
    }
  );

  return (
    <div>
      <CustomSlider sliderProducts={topSellingProducts} isLoading={isLoading} />
    </div>
  );
};

export default TopSellingProducts;
