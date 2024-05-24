"use client"
import React, { useState } from "react";
import ProductCard from "../../common/product-card/index";
import Pagination from "@/components/Pagination";
import Loading from "@/components/common/loading";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import Link from "next/link";
import CustomSlider from "@/components/common/custom-slider";
const Products = () => {
  const { data: allProducts, isLoading }: any = useGetProductsListsQuery({});
  if (isLoading) {
    return <Loading />;
  }
  return (
    // <div className="lg:container mt-10">
    //   <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 mx-auto mb-10 gap-5">
    //     {allProducts?.blogs?.map((product: any) => (
    //       <ProductCard key={product.id} datas={product}></ProductCard>
    //     ))}
    //   </div>
    //   <div className="flex justify-center">
    //     <Link href={"/products"}>
    //       <button className="bg-_white border-[1px] border-_primary hover:bg-_primary text-_primary hover:text-_white px-5 py-2 transition-all duration-1000 ease-in-out">See More</button>
    //     </Link>
    //   </div>
    // </div>
    <div>
      <CustomSlider sliderProducts={allProducts} />
    </div>
  );
};

export default Products;
