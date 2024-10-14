import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="product-card-one w-full h-full max-h-[320px] text-nowrap bg-white relative group rounded-lg ease-in-out duration-700">
        {/* Skeleton for the Discount Badge */}
        <Skeleton className="absolute top-2 right-2 w-16 h-6 rounded-sm" />

        {/* Skeleton for the Product Image */}
        <Skeleton className="w-full h-48 rounded-md" />

        <div className="px-2 msm:px-3 sm:px-[30px] sm:pb-[30px] relative">
          {/* Skeleton for the Product Title */}
          <Skeleton className="h-5 w-3/4 mb-2 rounded" />

          {/* Skeleton for the Price */}
          <div className="flex gap-2 mb-4">
            <Skeleton className="h-4 w-1/4 rounded" />
            <Skeleton className="h-4 w-1/4 rounded" />
          </div>

          {/* Skeleton for the Buttons */}
          <div className="flex space-x-2 h-full mb-3">
            <Skeleton className="w-full h-8 rounded-sm" />
            <Skeleton className="w-full h-8 rounded-sm" />
          </div>
        </div>

        {/* Skeleton for the Quick Access Buttons */}
        <div className="quick-access-btns flex flex-col space-y-2 absolute right-4 top-20">
          {[...Array(2)].map((_, index) => (
            <Skeleton key={index} className="w-10 h-10 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
