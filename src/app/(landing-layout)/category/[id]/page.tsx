import React from "react";
import ProductsSideBar from "@/components/products-sidebar";
import CategoryProducts from "@/components/category";
const Products = ({ params }: any) => {
  return (
    <div className='grid grid-cols-7 gap-5 container'>
      <div className='col-span-2'>
        <ProductsSideBar />
      </div>
      <div className='col-span-5'>
        <CategoryProducts category={params?.id} />
      </div>
    </div>
  );
};

export default Products;
