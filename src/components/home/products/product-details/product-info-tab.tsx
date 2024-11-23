import CustomTabs from "@/components/common/custom-tab";
import React, { useState } from "react";

const ProductInfoTab = ({ product }: any) => {
  const [selectedTab, setSelectedTab] = useState("");
  console.log(selectedTab);
  const tabs = [
    {
      value: "Specification",
      label: "Specification",
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
      <CustomTabs
        defaultValue={"Specification"}
        tabs={tabs}
        setSelectedTab={setSelectedTab}
      />
    </div>
  );
};

export default ProductInfoTab;
