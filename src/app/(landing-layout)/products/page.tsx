import React from "react";
import productDatas from "@/../../public/product.json";
import Product from "@/components/home/products";
const Products = () => {
  const datas = productDatas.products;
  return (
    <div>
      <Product productData={datas} />
    </div>
  );
};

export default Products;
