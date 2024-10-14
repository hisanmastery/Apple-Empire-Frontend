"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <section className="container mx-auto py-5 px-2 md:px-0 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-10">
        {/* Image Section Skeleton */}
        <div className="col-span-3 flex mx-auto">
          <div>
            <Skeleton className="w-full h-[400px] rounded-md" />
            <div className="flex gap-2 mt-2 md:w-[80%] mx-auto">
              {[...Array(4)].map((_, index) => (
                <Skeleton key={index} className="w-20 h-20 rounded-md border" />
              ))}
            </div>
          </div>
        </div>

        {/* Product Information Skeleton */}
        <div className="col-span-4 bg-white px-2 md:px-5">
          <div className="flex justify-between">
            <div className="w-full">
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-6 w-1/3 mb-4" />
            </div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex gap-5 mb-4">
            <Skeleton className="h-12 w-full rounded-md" />
            <Skeleton className="h-12 w-full rounded-md" />
          </div>

          {/* Color Selector Skeleton */}
          <div className="flex gap-3 mb-4">
            {[...Array(4)].map((_, index) => (
              <Skeleton key={index} className="h-10 w-10 rounded-full" />
            ))}
          </div>

          {/* Variant Selector Skeleton */}
          <div className="mb-4">
            <Skeleton className="h-8 w-2/3" />
          </div>

          {/* Quantity Controller Skeleton */}
          <div className="flex gap-5 mb-4">
            <Skeleton className="h-12 w-1/3 rounded-md" />
            <Skeleton className="h-12 w-2/3 rounded-md" />
          </div>
        </div>
      </div>

      {/* Related Products Section Skeleton */}
      <div className="mt-14">
        <Skeleton className="h-8 w-1/4 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="h-64 w-full rounded-md" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;
