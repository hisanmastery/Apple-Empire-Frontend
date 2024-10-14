import CustomTabs from "@/components/common/custom-tab";
import React from "react";

const ProductInfoTab = ({ product }: any) => {
  const tabs = [
    {
      value: "Specification",
      label: "Specification",
      // content: <div>{data?.response?.specification}</div>,
      content: (
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: product?.response?.specification }}
        />
      ),
    },
    {
      value: "Description",
      label: "Description",
      content: (
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: product?.response?.description }}
        />
      ),
    },
    {
      value: "Warranty",
      label: "Warranty",
      content: (
        <div className="text-gray-600">{product?.response?.warranty}</div>
      ),
    },
  ];
  return (
    <div className="mt-10">
      <CustomTabs defaultValue={"Specification"} tabs={tabs} />
    </div>
  );
};

export default ProductInfoTab;
