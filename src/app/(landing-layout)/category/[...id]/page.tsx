import React from "react";
import ProductsSideBar from "@/components/products-sidebar";
import CategoryProducts from "@/components/category";
const Products = ({ params }: any) => {
  const categoryProps = params?.id;
  const subCategory = (categoryProps?.length > 1 && categoryProps?.[1]) || "";
  const category = (categoryProps?.length > 0 && categoryProps?.[0]) || "";
  return (
    <div className="grid grid-cols-7 gap-5 px-3 lsm:px-auto lsm:container">
      <div className="col-span-7 sm:col-span-2">
        <ProductsSideBar />
      </div>
      <div className="col-span-7 sm:col-span-5">
        <CategoryProducts category={category} subCategory={subCategory} />
      </div>
    </div>
  );
};

export default Products;
