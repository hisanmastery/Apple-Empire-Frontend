import React from "react";
import productData from "@/../../public/product.json";
import TopSellingProductsCard from "./TopSellingProductsCard/index";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import Loading from "@/components/common/loading";
const TopSellingProducts = () => {
  const { data: topSellingProducts, isLoading }: any = useGetProductsListsQuery(
    {
      productType: "Top Selling Products"
    }
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
      {topSellingProducts?.blogs?.slice(0, 9).map((product: any, index: number) => (
        <TopSellingProductsCard key={index} datas={product} />
      ))}
    </div>
  );
};

export default TopSellingProducts;
