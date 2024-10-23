"use client";
import React, { useState } from "react";
import SelectBox from "../common/select-box";
import {
  useGetProductsListsQuery,
  useGetSingleProductsQuery,
} from "@/store/features/products/productsApi";
import Loading from "../common/loading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { icons } from "@/constants/icons";

const CompareComponent = ({ firstPhoneId, secondPhoneId }: any) => {
  const [firstPhone, setFirstPhone] = useState<any>(null);
  const [secondPhone, setSecondPhone] = useState<any>(null);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const { data: singlePhoneData, isLoading: isFirstLoading }: any =
    useGetSingleProductsQuery({
      id: firstPhoneId,
    });
  const { data: secondPhoneData, isLoading: isSecondLoading }: any =
    useGetSingleProductsQuery({
      id: secondPhoneId,
    });
  const { data: allProducts, isLoading: isProductsLoading }: any =
    useGetProductsListsQuery({
      page: 1,
      limit: 10,
      searchText: searchText,
    });

  const phoneListData =
    allProducts?.product?.length > 0 &&
    allProducts?.product?.map((item: any) => ({
      label: item?.name,
      value: { ...item },
    }));

  const handleFirstPhone = (selectedOption: any) => {
    setFirstPhone(selectedOption);
    const queryParams = new URLSearchParams({
      p1: selectedOption.value._id,
      p2: secondPhone?.value?._id || "",
    }).toString();
    router.push(`?${queryParams}`);
  };

  const handleSceondPhone = (selectedOption: any) => {
    setSecondPhone(selectedOption);
    const queryParams = new URLSearchParams({
      p1: firstPhone?.value?._id || "",
      p2: selectedOption.value._id,
    }).toString();
    router.push(`?${queryParams}`);
  };

  const handleRemoveFirstPhone = () => {
    setFirstPhone(null);
    const queryParams = new URLSearchParams({
      p1: "",
      p2: secondPhone?.value?._id || "",
    }).toString();
    router.push(`?${queryParams}`);
  };

  const handleRemoveSecondPhone = () => {
    setSecondPhone(null);
    const queryParams = new URLSearchParams({
      p1: firstPhone?.value?._id || "",
      p2: "",
    }).toString();
    router.push(`?${queryParams}`);
  };

  if (isFirstLoading || isSecondLoading || isProductsLoading) {
    return <Loading />;
  }

  return (
    <div className="container overflow-auto mx-auto mt-8 p-6 bg-white rounded-sm shadow-sm">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Compare Products</h1>
        <p className="text-gray-500 mt-2">
          Compare two products side by side to see their specifications.
        </p>
      </div>

      {/* Phone Selection */}
      <div className="grid grid-cols-2 gap-2 md:gap-6 mb-8">
        <div className="col-span-1">
          <SelectBox
            isMulti={false}
            name="firstPhone"
            className="w-full placeholder:text-sm"
            placeholder="Select the first product"
            onChange={handleFirstPhone}
            value={firstPhone}
            valueOptions={phoneListData}
            setSearchText={setSearchText}
          />
        </div>
        <div className="col-span-1">
          <SelectBox
            isMulti={false}
            name="secondPhone"
            className="w-full"
            placeholder="Select the second product"
            onChange={handleSceondPhone}
            value={secondPhone}
            valueOptions={phoneListData}
            setSearchText={setSearchText}
          />
        </div>
      </div>

      {/* Product Images and Names */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 items-center mb-8">
        <div className="text-center">
          <div className="relative bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <Image
              src={
                singlePhoneData?.response?.image?.imageUrl || "/placeholder.png"
              }
              alt={singlePhoneData?.response?.name || "First product"}
              width={220}
              height={220}
              className="w-[140px] md:w-[220px] h-[140px] md:h-[220px] mx-auto rounded-lg object-cover"
            />
            <h2 className="mt-2 md:mt-4 text-sm md:text-xl font-semibold text-gray-800">
              {singlePhoneData?.response?.name || "Select the first product"}
            </h2>
            {firstPhone && (
              <button
                className="absolute top-0 right-3 mt-2 text-red-600 rounded-full border border-_primary p-1"
                onClick={handleRemoveFirstPhone}
              >
                <icons.crossIcon />
              </button>
            )}
          </div>
        </div>
        <div className="text-center">
          <div className="relative bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
            <Image
              src={
                secondPhoneData?.response?.image?.imageUrl || "/placeholder.png"
              }
              alt={secondPhoneData?.response?.name || "Second product"}
              width={220}
              height={220}
              className="w-[140px] md:w-[220px] h-[140px] md:h-[220px] mx-auto rounded-lg object-cover"
            />
            <h2 className="mt-2 md:mt-4 text-sm md:text-xl font-semibold text-gray-800">
              {secondPhoneData?.response?.name || "Select the second product"}
            </h2>
            {secondPhone && (
              <button
                className="absolute top-0 right-3 rounded-full border border-_primary mt-2 text-red-600 p-1"
                onClick={handleRemoveSecondPhone}
              >
                <icons.crossIcon />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Specifications Comparison */}
      <div className="border-t border-gray-300 pt-6">
        <div className="grid grid-cols-2 gap-2 md:gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-4">
              {singlePhoneData?.response?.name || "First product"}
              Specifications
            </h3>
            <p
              className="text-gray-700 text-sm"
              dangerouslySetInnerHTML={{
                __html:
                  singlePhoneData?.response?.specification ||
                  "No specifications available",
              }}
            />
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-4">
              {secondPhoneData?.response?.name || "Second product"}
              Specifications
            </h3>
            <p
              className="text-gray-700 text-sm"
              dangerouslySetInnerHTML={{
                __html:
                  secondPhoneData?.response?.specification ||
                  "No specifications available",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareComponent;
