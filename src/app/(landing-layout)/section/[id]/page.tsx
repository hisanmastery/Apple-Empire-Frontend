import React from "react";
import AllProductsSection from "@/components/all-products";
import ProductsSideBar from "@/components/products-sidebar";
const Products = ({ params }: any) => {
   let productsType=""
  if (params?.id) {
    // Decode the URL component and format it
    const formattedCategory = decodeURIComponent(params?.id)
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
      productsType=formattedCategory
  }
  return (
    <div className='grid grid-cols-7 gap-5 container'>
      <div className='col-span-2'>
        <ProductsSideBar />
      </div>
      <div className='col-span-5'>
        <AllProductsSection productsType={productsType} />
      </div>
    </div>
  );
};

export default Products;
