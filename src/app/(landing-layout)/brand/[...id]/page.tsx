import React from "react";

import ProductsSideBar from "@/components/products-sidebar";
import BrandProducts from "@/components/brand";

const Brands = ({ params }: any) => {
  const brand = params?.id;

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-5 px-3 md:px-6 lg:px-8 container mx-auto">
      <div className="hidden md:block md:col-span-2">
        <ProductsSideBar />
      </div>
      <div className="col-span-1 md:col-span-5">
        <BrandProducts brand={brand} />
      </div>
    </div>
  );
};

export default Brands;
