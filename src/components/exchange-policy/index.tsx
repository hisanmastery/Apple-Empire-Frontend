"use client";
import { useGetSingleDynamicPageQuery } from "@/store/features/dynamic-page/dynamicPageApi";
import { usePathname } from "next/navigation";
import React from "react";

const ExchangePolicy: React.FC = () => {
 const path = usePathname();
  const slug = path?.slice(1);
  const { data } = useGetSingleDynamicPageQuery<any>({ slug: slug });
  return (
    <div
      className="container mx-auto"
      dangerouslySetInnerHTML={{ __html: data?.page?.description }}
    />
  );
};

export default ExchangePolicy;
