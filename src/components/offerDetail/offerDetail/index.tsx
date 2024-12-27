"use client";
import React from "react";
import DiscountDetails from "../discountDetails";
import { useGetSingleOfferQuery } from "@/store/features/pre-order/preOrderOrOfferApi";
import ProductCard from "@/components/common/product-card";
import Loading from "@/components/common/loading";

const OfferDetail = ({ id }:any) => {
  const { data, isLoading } = useGetSingleOfferQuery<any>(id);
console.log({data,id});
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <DiscountDetails image={data?.data?.bannerImage} description={data?.data?.description}/>
      <div className="mt-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mt-10 gap-5 ">
          {data?.data?.products?.map((item: any) => (
            <ProductCard key={item?._id} datas={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferDetail;
