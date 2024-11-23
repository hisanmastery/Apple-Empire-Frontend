"use client";
import { useGetSingleDynamicPageQuery } from "@/store/features/dynamic-page/dynamicPageApi";
import { usePathname } from "next/navigation";
import React from "react";

const ExchangePolicy: React.FC = () => {
  const path = usePathname();
  const { data } = useGetSingleDynamicPageQuery<any>({ slug: path });
  return (
    <div
      className="container mx-auto"
      dangerouslySetInnerHTML={{ __html: data?.page?.description }}
    />
  );
};

export default ExchangePolicy;
