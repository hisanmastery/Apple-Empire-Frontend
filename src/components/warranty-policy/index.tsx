"use client";
import { useGetSingleDynamicPageQuery } from "@/store/features/dynamic-page/dynamicPageApi";
import { usePathname } from "next/navigation";
import React from "react";
const WarrantyPolicy: React.FC = () => {
  const path = usePathname();
  const slug = path?.slice(1);
  const { data } = useGetSingleDynamicPageQuery<any>({ slug: slug });
  return (
    <div className="container mx-auto">
      <div dangerouslySetInnerHTML={{ __html: data?.page?.description }} />
    </div>
  );
};

export default WarrantyPolicy;
