import React from "react";

import ProductsSideBar from "@/components/products-sidebar";
import BrandProducts from "@/components/brand";

const Brands = ({ params }: any) => {
  const categoryProps = params?.id;
  const subCategory = (categoryProps?.length > 1 && categoryProps?.[1]) || "";
  const category = (categoryProps?.length > 0 && categoryProps?.[0]) || "";

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-5 px-3 md:px-6 lg:px-8 container mx-auto">
      <div className="hidden md:block md:col-span-2">
        <ProductsSideBar />
      </div>
      <div className="col-span-1 md:col-span-5">
        <BrandProducts category={category} subCategory={subCategory} />
      </div>
    </div>
  );
};

export default Brands;