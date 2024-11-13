"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useGetAllOfferQuery } from "@/store/features/pre-order/preOrderOrOfferApi";
import { Skeleton } from "@/components/ui/skeleton";

const Offers = () => {
  const { data, isLoading } = useGetAllOfferQuery<any>({});
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-4">
      {isLoading
        ? // Render skeletons while loading
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="text-center border rounded-lg shadow bg-white p-4 relative"
            >
              <Skeleton className="w-full h-[250px] rounded-[8px]" />
              <div className="pt-4 px-4">
                <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                <Skeleton className="h-4 w-full mx-auto mb-2" />
                <Skeleton className="h-4 w-5/6 mx-auto mb-2" />
                <div className="absolute -bottom-20 left-0 right-0 px-4 w-full pb-24">
                  <Skeleton className="h-10 w-full rounded-[5px]" />
                </div>
              </div>
            </div>
          ))
        : // Render actual offer items once data is loaded
          data?.response?.map((offer: any) => (
            <div
              key={offer._id}
              className="text-center border rounded-lg shadow bg-white p-4 relative"
            >
              <Image
                src={offer.images?.imageUrl}
                alt={offer.images?.altText}
                width={200}
                height={250}
                className="w-full h-[250px] rounded-[8px]"
              />
              <div className="pt-4 px-4">
                <h4 className="text-xl md:text-2xl font-semibold text-center">
                  {offer?.name}
                </h4>
                <p className="text-sm font-normal text-center pt-3 pb-14">
                  {offer?.description?.slice(0, 100)}
                </p>
                <div className="absolute -bottom-20 left-0 right-0 px-4 w-full pb-24">
                  <button className="w-full bg-_primary/75 hover:bg-_black text-white text-lg font-normal py-2 px-4 rounded-[5px]">
                    <Link href={`/offer-details/${offer?._id}`}>
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Offers;
