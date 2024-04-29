"use client";
import React from "react";
import ProductCard from "../../common/product-card/index";
import Loading from "@/components/common/loading";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
const Products = () => {
  const { data: products, isLoading }: any = useGetProductsListsQuery({});
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6 lg:container mx-auto ">
      {products?.blogs?.slice(0, 12)?.map((product: any) => (
        <ProductCard key={product.id} datas={product}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
