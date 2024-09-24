import React from "react";
import AllProductsSection from "@/components/all-products";
import ProductsSideBar from "@/components/products-sidebar";
import CategoryTabs from "@/components/category-tabs";
const Products = ({ params }: any) => {
  let productsType = "";
  if (params?.id) {
    // Decode the URL component and format it
    const formattedCategory = decodeURIComponent(params?.id)
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    productsType = formattedCategory;
  }
  if (params?.id == "used") {
    productsType = "used";
  }
  return (
    <div className="container">
      <div className="grid grid-cols-7 gap-5 ">
        <div className="col-span-7 sm:col-span-3 md:col-span-2">
          <ProductsSideBar />
        </div>
        <div className="col-span-7  sm:col-span-4 md:col-span-5">
          <AllProductsSection productsType={productsType} />
        </div>
      </div>
    </div>
  );
};

export default Products;
