import React from "react";
import ProductDetails from "@/components/home/products/product-details";
const ProductsDetailsPage = ({ params }: any) => {
  const id = params?.id as string;
  return (
    <div className="bg-_white">
      <ProductDetails id={id} />
    </div>
  );
};

export default ProductsDetailsPage;
