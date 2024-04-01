import React from "react";
import ProductCard from "../../common/product-card/index";
const Products = ({ productData }: any) => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6 lg:container mx-auto ">
      {productData?.map((product: any) => (
        <ProductCard key={product.id} datas={product}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
