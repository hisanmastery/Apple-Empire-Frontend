"use client";
import React from "react";
import ProductData from "../../../../../public/product.json";
import ProductDetails from "@/components/home/products/product-details";
const ProductsDetailsPage = ({ params }: any) => {
  const { id } = params;
  return (
    <div className="bg-_white">
      <ProductDetails id={id} />
    </div>
  );
};

export default ProductsDetailsPage;
