import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px]  rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
