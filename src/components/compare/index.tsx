"use client";
import React, { useState } from "react";
import SelectBox from "../common/select-box";
import {
  useGetProductsListsQuery,
  useGetSingleProductsQuery,
} from "@/store/features/products/productsApi";
import Loading from "../common/loading";
import Image from "next/image";

const CompareComponent = ({ id }: any) => {
  const [selectedPhone, setSelectedPhone] = useState<any>(null);
  const [searchText, setSearchText] = useState("");
  const { data: singlePhoneData, isLoading }: any = useGetSingleProductsQuery({
    id,
  });
  const { data: allProducts, isLoading: isSingleLoading }: any =
    useGetProductsListsQuery({
      page: 1,
      limit: 10,
      searchText: searchText,
    });
  const phoneListData =
    allProducts?.product?.length > 0 &&
    allProducts?.product?.map((item: any) => {
      return {
        label: item?.name,
        value: { ...item },
      };
    });
  if (isLoading || isSingleLoading) {
    return <Loading />;
  }
  return (
    <div className="container mt-5 bg-_white rounded-md shadow-lg p-5">
      <div className="w-full">
        <h1 className="text-2xl font-semibold mb-4">Compare</h1>
        <div className="grid grid-cols-12 gap-4">
          {/* First column with label */}
          <div className="col-span-3 bg-_primary rounded-md text-_white flex items-center justify-center p-4">
            <span className="font-medium">Product</span>
          </div>

          {/* Search and Add Device buttons */}
          <div className="col-span-9 bg-_primary rounded-md p-4 flex items-center justify-center gap-5">
            <button className="bg-gray-100 text-gray-700 font-medium text-start w-full py-2 px-4 rounded hover:bg-gray-200">
              {singlePhoneData?.response?.name}
            </button>
            <SelectBox
              isMulti={false}
              name="phone"
              className="w-full"
              placeholder="Search and add device"
              onChange={(selectedOption) => setSelectedPhone(selectedOption)}
              valueOptions={phoneListData}
              setSearchText={setSearchText}
            />
          </div>
        </div>
      </div>
      {/* images  */}
      <div className="grid grid-cols-2 items-center gap-5 mt-5 mb-10">
        <div>
          <div className="flex gap-5 items-center">
            <Image
              src={singlePhoneData?.response?.image.imageUrl}
              alt=""
              width={200}
              height={200}
              className="w-48"
            />
            <div>
              <p className="mb-2">
                <strong>Ram:</strong>{" "}
                {singlePhoneData?.response?.ram?.join(",")}
              </p>
              <p className="mb-2">
                <strong>Rom:</strong>{" "}
                {singlePhoneData?.response?.internalStorage?.join(",")}
              </p>
              <p className="mb-2">
                <strong>Chipset:</strong> {singlePhoneData?.response?.chipset}
              </p>
              <p className="mb-2">
                <strong>Display:</strong>{" "}
                {singlePhoneData?.response?.displayType}
              </p>
              <p>
                <strong>Price:</strong> {singlePhoneData?.response?.price}
              </p>
            </div>
          </div>
          <h2 className="text-lg font-semibold">
            {singlePhoneData?.response?.name}
          </h2>
        </div>
        <div>
          <div className="flex gap-5 items-center justify-between">
            <div>
              <p className="mb-2">
                <strong>Ram:</strong> {selectedPhone?.value?.ram?.join(",")}
              </p>
              <p className="mb-2">
                <strong>Rom:</strong>{" "}
                {selectedPhone?.value?.internalStorage?.join(",")}
              </p>
              <p className="mb-2">
                <strong>Chipset:</strong> {selectedPhone?.value?.chipset}
              </p>
              <p className="mb-2">
                <strong>Display:</strong> {selectedPhone?.value?.displayType}
              </p>
              <p>
                <strong>Price:</strong> {selectedPhone?.value?.price}
              </p>
            </div>
            <Image
              src={selectedPhone?.value?.image.imageUrl}
              alt=""
              width={200}
              height={200}
              className="w-48"
            />
          </div>
          <h2 className="text-lg font-semibold text-end">
            {selectedPhone?.value?.title}
          </h2>
        </div>
      </div>

      {/* specification */}
      <div className="border-t-[1px] border-_primary pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <div className="break-words border-r-[1px] border-_primary">
            <p
              style={{ wordBreak: "break-word", whiteSpace: "normal" }}
              className="text-wrap break-words"
              dangerouslySetInnerHTML={{
                __html: singlePhoneData?.response?.specification,
              }}
            />
          </div>
          <div className="break-words">
            <p
              style={{ wordBreak: "break-word", whiteSpace: "normal" }}
              dangerouslySetInnerHTML={{
                __html: selectedPhone?.value?.specification,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareComponent;
