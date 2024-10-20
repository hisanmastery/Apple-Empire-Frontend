"use client";
import CustomSlider from "@/components/common/custom-slider";
import CustomTabs from "@/components/common/custom-tab";
import { useGetAllBrandQuery } from "@/store/features/brand/brandApi";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import React, { useState } from "react";

const TopBrandProducts = () => {
  const [selectedTab, setSelectedTab] = useState();
  const { data } = useGetAllBrandQuery<any>({
    page: 1,
    limit: 10,
  });

  const { data: productsData, isFetching } = useGetProductsListsQuery<any>({
    brand: selectedTab,
    page: 1,
    limit: 10,
  });

  const BrandTabData = data?.brands?.map((item: any) => ({
    label: item?.brandName,
    value: item?.brandName,
  }));

  return (
    <div className="md:container mb-10">
      <h3 className="text-center text-2xl my-3">Top Brand Products</h3>
      <div className="flex justify-center overflow-auto">
        <div className="flex flex-col w-full max-w-lg">
          <CustomTabs
            tabs={BrandTabData}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
      </div>
      {/* products */}
      <div className="mt-5">
        <CustomSlider sliderProducts={productsData} isLoading={isFetching} />
      </div>
    </div>
  );
};

export default TopBrandProducts;
