"use client";
import CustomSlider from "@/components/common/custom-slider";
import CustomTabs from "@/components/common/custom-tab";
import { useGetOrderWithBrandQuery } from "@/store/features/category/categoryApi";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import React, { useState, useEffect } from "react";

const TopBrandProducts = ({ title }: any) => {
  const [selectedTab, setSelectedTab] = useState<string | undefined>(undefined);
  const { data } = useGetOrderWithBrandQuery<any>({
    page: 1,
    limit: 10,
  });

  const { data: productsData, isFetching } = useGetProductsListsQuery<any>({
    brand: selectedTab,
    page: 1,
    limit: 10,
  });

  const BrandTabData = data?.data?.brands?.map((item: any) => ({
    label: item?.brandName,
    value: item?.brandName,
  }));

  // Set the first brand as the default selected tab
  useEffect(() => {
    if (BrandTabData?.length > 0 && !selectedTab) {
      setSelectedTab(BrandTabData[0].value);
    }
  }, [BrandTabData, selectedTab]);

  return (
    <div className="md:container mb-10">
      <h3 className="text-center text-lg md:text-2xl my-3">{title}</h3>
      <div className="flex justify-center overflow-auto">
        <div className="flex flex-col w-full max-w-lg">
          <CustomTabs
            tabs={BrandTabData}
            selectedTab={selectedTab}
            defaultValue={BrandTabData?.[0]?.value}
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
