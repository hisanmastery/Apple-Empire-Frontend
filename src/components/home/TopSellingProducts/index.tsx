"use client";
import React from "react";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import Loading from "@/components/common/loading";
import CustomSlider from "@/components/common/custom-slider";
const TopSellingProducts = () => {
  const { data: topSellingProducts, isLoading }: any = useGetProductsListsQuery(
    {
      productType: "Top Selling Products",
    }
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <CustomSlider sliderProducts={topSellingProducts} />
    </div>
  );
};

export default TopSellingProducts;
