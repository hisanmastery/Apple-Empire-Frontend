"use client";
import React from "react";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import ProductCardSkeleton from "@/components/shared/skeleton/products-card-skeleton";
import ProductCard from "@/components/common/product-card";

const Products = () => {
  const { data: topSellingProducts, isLoading }: any = useGetProductsListsQuery(
    {
      productType: "Top Selling Products",
    }
  );
  // console.log({ topSellingProducts });
  if (isLoading) {
    return <ProductCardSkeleton />;
  }
  return (
    <div className="mt-4">
      
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 container mt-10 gap-5 ">
        {topSellingProducts?.product?.map((item: any) => (
          <ProductCard key={item?._id} datas={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
