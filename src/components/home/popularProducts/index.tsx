"use client";
import React from "react";
import productData from "@/../../public/product.json";
import PopularProductCard from "./popularProductCard";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import Loading from "@/components/common/loading";
import CustomSlider from "@/components/common/custom-slider";

const PopularProducts = () => {
  const { data: popularProducts, isLoading }: any = useGetProductsListsQuery(
    { productType: "Popular Products" }
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <CustomSlider sliderProducts={popularProducts} />
    </div>
  );
};

export default PopularProducts;
