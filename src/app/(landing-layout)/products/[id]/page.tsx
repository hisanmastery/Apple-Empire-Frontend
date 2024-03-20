import React from "react";
import ProductData from "../../../../../public/product.json";
import ProductDetails from "@/components/home/products/product-details";
const ProductsDetailsPage = ({ params }:any) => {
  const { id } = params;
  const product = ProductData?.products.find((pro) => pro?.id === id);
  return (
    <div>
      <ProductDetails products={product} />
    </div>
  );
};

export default ProductsDetailsPage;
