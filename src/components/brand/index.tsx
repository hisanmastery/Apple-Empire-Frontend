"use client";
import React, { useState } from "react";
import ProductCard from "../common/product-card";
import ProductsNotFound from "../products-not-found";
import { useSelector } from "react-redux";
import { selectPriceRange } from "@/store/features/products/productsPriceRangeSlice";
import Pagination from "../common/pagination";
import { selectProductsVariant } from "@/store/features/products/productsCategorySlice";
import { useSearchParams } from "next/navigation";
import ProductCardSkeleton from "../shared/skeleton/products-card-skeleton";
import SmallDeviceProductsFilter from "../products-sidebar/smallDeviceProductsFilter";
import { icons } from "@/constants/icons";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import CategoryTabs from "../category-tabs/CategoryTab";
interface BrandProductsProps {
  brand: string;
}

const BrandProducts: React.FC<BrandProductsProps> = ({ brand }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [currentPage, setCurrentPage] = useState(1);
  const [openSheetDrawer, setOpenSheetDrawer] = useState(false);
  const [pageSize, setPageSize] = useState(12);
  const { min, max } = useSelector(selectPriceRange);
  const { label, value } = useSelector(selectProductsVariant);
  // Fetching products using custom hooks
  const { data: allProducts, isLoading } = useGetProductsListsQuery<any>({
    category: category,
    page: currentPage,
    limit: pageSize,
    minVariantPrice: min,
    brand: brand,
    maxVariantPrice: max,
    variantOptionName: label,
    variantOptionValue: value,
  });

  //Loading
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 xmd:grid-cols-2  mx-auto mb-10 mt-10 gap-5 ssm:px-3 msm:px-8 lsm:px-12 xmd:px-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-5">
      <div className="bg-_white p-5 mb-5 rounded-md">
        <p className="text-2xl font-semibold mb-2">{brand}</p>
        <CategoryTabs />
      </div>
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => setOpenSheetDrawer(true)}
          className="flex items-center gap-2 border px-5 py-1 border-_primary-text rounded-sm"
        >
          Filter <icons.RiFilter2FillIcons />
        </button>
      </div>
      <div>
        {allProducts?.product?.length > 0 ? (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 mx-auto mb-10">
            {allProducts?.product?.map((product: any) => (
              <ProductCard key={product._id} datas={product} />
            ))}
          </div>
        ) : (
          <ProductsNotFound />
        )}
        <Pagination
          totalItems={allProducts?.totalCount}
          pageSize={pageSize}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      {
        <SmallDeviceProductsFilter
          isOpen={openSheetDrawer}
          setIsOpen={setOpenSheetDrawer}
        />
      }
    </div>
  );
};

export default BrandProducts;
