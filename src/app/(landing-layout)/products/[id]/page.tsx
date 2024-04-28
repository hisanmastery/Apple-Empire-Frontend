"use client";
import React from "react";
import ProductData from "../../../../../public/product.json";
import ProductDetails from "@/components/home/products/product-details";
const ProductsDetailsPage = ({ params }: any) => {
  const { id } = params;
  return (
    <div>
      <ProductDetails id={id} />
    </div>
  );
};

export default ProductsDetailsPage;
