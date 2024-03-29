'use client'
import React from "react";
import ProductData from "../../../../../public/product.json";
import ProductDetails from "@/components/home/products/product-details";
const ProductsDetailsPage = ({ params }:any) => {
  const { id } = params;
  const product = ProductData?.products.find((pro) => pro?.id === id);
  console.log({prod: product})
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductsDetailsPage;
