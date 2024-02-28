import React from "react";
import productData from "@/../../public/product.json";
import TopSellingProductsCard from "./TopSellingProductsCard/index";
const TopSellingProducts = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
      {productData?.products.slice(0,4).map((product) => (
        <TopSellingProductsCard key={product?.id} datas={product} />
      ))}
    </div>
  );
};

export default TopSellingProducts;
