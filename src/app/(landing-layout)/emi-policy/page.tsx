"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useGetSingleDynamicPageQuery } from "@/store/features/dynamic-page/dynamicPageApi";
const EMITable: React.FC = () => {
  const path = usePathname();
  const slug = path?.slice(1);
  const { data } = useGetSingleDynamicPageQuery<any>({ slug: slug });
  return (
    <div className="container mx-auto">
      <div dangerouslySetInnerHTML={{ __html: data?.page?.description }} />
    </div>
  );
};

export default EMITable;
