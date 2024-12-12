"use client";
import React, { useState } from "react";
import SelectBox from "../common/select-box";
import {
  useGetProductsListsQuery,
  useGetSingleProductsQuery,
} from "@/store/features/products/productsApi";
import Loading from "../common/loading";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image from next/image

const CompareComponent = ({ firstPhoneId, secondPhoneId }: any) => {
  const [firstPhone, setFirstPhone] = useState<any>(null);
  const [secondPhone, setSecondPhone] = useState<any>(null);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const { data: singlePhoneData, isLoading: isFirstLoading }: any =
    useGetSingleProductsQuery({ id: firstPhoneId });

  const { data: secondPhoneData, isLoading: isSecondLoading }: any =
    useGetSingleProductsQuery({ id: secondPhoneId });

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

  const handleSecondPhone = (selectedOption: any) => {
    setSecondPhone(selectedOption);
    const queryParams = new URLSearchParams({
      p1: firstPhone?.value?._id || "",
      p2: selectedOption.value._id,
    }).toString();
    router.push(`?${queryParams}`);
  };

  if (isFirstLoading || isSecondLoading || isProductsLoading) {
    return <Loading />;
  }

  const specs1Groups = singlePhoneData?.response?.specification?.groups || [];
  const specs2Groups = secondPhoneData?.response?.specification?.groups || [];

  const renderGroup = (group1: any, group2: any) => {
    // Collect all unique feature names from both groups
    const allFeatures = Array.from(
      new Set([
        ...(group1?.details?.map((detail: any) => detail.name) || []),
        ...(group2?.details?.map((detail: any) => detail.name) || []),
      ])
    );

    return allFeatures.map((featureName: string, index: number) => {
      // Find details in both groups for this feature
      const feature1 =
        group1?.details?.find((item: any) => item.name === featureName) || {};
      const feature2 =
        group2?.details?.find((item: any) => item.name === featureName) || {};

      return (
        <tr key={`${featureName}-${index}`}>
          <td className="px-4 py-2 font-semibold text-gray-700 border">
            {featureName}
          </td>
          <td className="px-4 py-2 text-gray-700 border">
            {feature1.value || "----------"}
          </td>
          <td className="px-4 py-2 text-gray-700 border">
            {feature2.value || "----------"}
          </td>
        </tr>
      );
    });
  };

  const renderAllGroups = () => {
    // Merge groups from both products
    const allGroups = Array.from(
      new Set([
        ...specs1Groups.map((g: any) => g.group),
        ...specs2Groups.map((g: any) => g.group),
      ])
    );

    return allGroups.map((groupName: string, index: number) => {
      const group1 = specs1Groups.find((g: any) => g.group === groupName) || {
        details: [],
      };
      const group2 = specs2Groups.find((g: any) => g.group === groupName) || {
        details: [],
      };

      return (
        <React.Fragment key={`group-${index}`}>
          <tr className="bg-gray-200">
            <td
              colSpan={3}
              className="px-4 py-2 font-bold text-gray-800 border text-left"
            >
              {groupName}
            </td>
          </tr>
          {renderGroup(group1, group2)}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="container max-w-6xl mx-auto mt-8 p-6 bg-white rounded-md shadow-sm">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Product Comparison</h1>
        <p className="text-gray-500 mt-2">
          Find and select products to see the differences and similarities
          between them.
        </p>
      </div>

      {/* Phone Selection */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <SelectBox
          isMulti={false}
          name="firstPhone"
          className="w-full"
          placeholder="Search and Select Product"
          onChange={handleFirstPhone}
          value={firstPhone}
          valueOptions={phoneListData}
          setSearchText={setSearchText}
        />
        <SelectBox
          isMulti={false}
          name="secondPhone"
          className="w-full"
          placeholder="Search and Select Product"
          onChange={handleSecondPhone}
          value={secondPhone}
          valueOptions={phoneListData}
          setSearchText={setSearchText}
        />
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-center">
          {singlePhoneData?.response?.image ? (
            <Image
              src={singlePhoneData?.response?.image?.imageUrl || ""}
              alt={singlePhoneData?.response?.image?.altText || ""}
              width={192}
              height={192}
              className="mx-auto w-48 h-48 object-cover"
            />
          ) : (
            <p className="text-gray-400">No Image</p>
          )}
          <h3 className="mt-2 font-semibold">
            {singlePhoneData?.response?.name || "Select First Product"}
          </h3>
          <button
            onClick={() => setFirstPhone(null)}
            className="mt-2 text-orange-500 hover:underline"
          >
            Remove
          </button>
        </div>

        <div className="flex items-center justify-center relative">
          <div className="h-1 bg-gray-300 w-full absolute top-1/2 transform -translate-y-1/2"></div>
          <div className="flex justify-center items-center bg-orange-500 text-white font-bold rounded-full w-16 h-16 z-10 shadow-md">
            VS
          </div>
        </div>

        <div className="text-center">
          {secondPhoneData?.response?.image ? (
            <Image
              src={secondPhoneData?.response?.image?.imageUrl || ""}
              alt={secondPhoneData?.response?.image?.altText || ""}
              width={192}
              height={192}
              className="mx-auto w-48 h-48 object-cover"
            />
          ) : (
            <p className="text-gray-400">No Image</p>
          )}
          <h3 className="mt-2 font-semibold">
            {secondPhoneData?.response?.name || "Select Second Product"}
          </h3>
          <button
            onClick={() => setSecondPhone(null)}
            className="mt-2 text-orange-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-semibold border">
                Feature
              </th>
              <th className="px-4 py-2 text-left font-semibold border">
                {singlePhoneData?.response?.name || "Select First Product"}
              </th>
              <th className="px-4 py-2 text-left font-semibold border">
                {secondPhoneData?.response?.name || "Select Second Product"}
              </th>
            </tr>
          </thead>
          <tbody>{renderAllGroups()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CompareComponent;
