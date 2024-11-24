import React from "react";
import AllProductsSection from "@/components/all-products";
import ProductsSideBar from "@/components/products-sidebar";
const formatCategory = (category: string): string => {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Products = ({ params }: any) => {
  let productsType = "";
  if (params?.id) {
    switch (params.id) {
      case "used":
        productsType = "Used";
        break;
      case "offers":
        productsType = "Offers";
        break;
      default:
        productsType = formatCategory(decodeURIComponent(params.id));
        break;
    }
  }
  return (
    <div className="container">
      <div className="grid grid-cols-7 gap-5">
        {/* Sidebar Column */}
        <div className="hidden md:block md:col-span-2">
          <ProductsSideBar />
        </div>
        {/* Products Section Column */}
        <div className="col-span-7 sm:col-span-4 md:col-span-5">
          <AllProductsSection productsType={productsType} />
        </div>
      </div>
    </div>
  );
};

export default Products;
