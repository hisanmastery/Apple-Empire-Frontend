import React from "react";
import AllProductsSection from "@/components/all-products";
import ProductsSideBar from "@/components/products-sidebar";
const Products = () => {
  return (
    <div className='grid grid-cols-7 gap-5 container'>
      <div className='col-span-2'>
        <ProductsSideBar />
      </div>
      <div className='col-span-5'>
        <AllProductsSection />
      </div>
    </div>
  );
};

export default Products;
