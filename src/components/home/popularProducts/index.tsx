import React from "react";
import productData from "@/../../public/product.json";
import PopularProductCard from "./popularProductCard";

const PopularProducts = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {productData?.products?. slice(0,9)?.map((product) => (
        <PopularProductCard key={product?.id} datas={product} />
      ))}
    </div>
  );
};

export default PopularProducts;
