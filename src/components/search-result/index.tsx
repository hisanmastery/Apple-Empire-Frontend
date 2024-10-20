"use client";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import React from "react";
import ProductCardSkeleton from "../shared/skeleton/products-card-skeleton";
import ProductCard from "../common/product-card";

const SearchResult = ({ query }: any) => {
  const { data: allProducts, isLoading }: any = useGetProductsListsQuery({
    searchText: query,
  });

  if (isLoading) {
    return <ProductCardSkeleton />;
  }
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 container mt-10 gap-5 ">
      {allProducts?.product?.map((item: any) => (
        <ProductCard key={item?._id} datas={item} />
      ))}
    </div>
  );
};

export default SearchResult;
