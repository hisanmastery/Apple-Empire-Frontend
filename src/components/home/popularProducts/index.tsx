"use client";
import React from "react";
import productData from "@/../../public/product.json";
import PopularProductCard from "./popularProductCard";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import Loading from "@/components/common/loading";

const PopularProducts = () => {
  const { data: popularProducts, isLoading }: any = useGetProductsListsQuery(
    {}
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {popularProducts?.blogs
        ?.slice(0, 9)
        ?.map((product: any, index: number) => (
          <PopularProductCard key={index} data={product} />
        ))}
    </div>
  );
};

export default PopularProducts;
