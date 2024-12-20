"use client";
import React from "react";
import Loading from "@/components/common/loading";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import CustomSlider from "@/components/common/custom-slider";
const Products = () => {
  const { data: allProducts, isLoading }: any = useGetProductsListsQuery({
    page: 1,
    limit: 20,
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <CustomSlider sliderProducts={allProducts} isLoading={isLoading} />
    </div>
  );
};

export default Products;
