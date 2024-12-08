import CustomTabs from "@/components/common/custom-tab";
import React, { useState } from "react";
import SpecificationsTable from "./Specifications";

const ProductInfoTab = ({ product }: any) => {
  // eslint-disable-next-line no-unused-vars
  const [selectedTab, setSelectedTab] = useState("");
  const tabs = [
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
      value: "Specification",
      label: "Specification",
      content: product?.response?.specification?.groups ? (
        <SpecificationsTable
          specifications={product?.response?.specification}
        />
      ) : (
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: product?.response?.specification }}
        />
      ),
    },

    {
      value: "Warranty",
      label: "Warranty",
      content: (
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: product?.response?.warranty }}
        />
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
