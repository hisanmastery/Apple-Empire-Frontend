"use client";
import React, { useState } from "react";
import Loading from "@/components/common/loading";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import ProductCard from "../common/product-card";
import { useSelector } from "react-redux";
import { selectPriceRange } from "@/store/features/products/productsPriceRangeSlice";
import ProductsNotFound from "../products-not-found";
import Pagination from "../common/pagination";
import { selectProductsVariant } from "@/store/features/products/productsCategorySlice";
import CategoryTabs from "../category-tabs/CategoryTab";
import { useSearchParams } from "next/navigation";
import ProductCardSkeleton from "../shared/skeleton/products-card-skeleton";
import SmallDeviceProductsFilter from "../products-sidebar/smallDeviceProductsFilter";
import { icons } from "@/constants/icons";

const AllProductsSection = ({ productsType }: any) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const usedString = productsType === "used" ? "used" : "";
  const [openSheetDrawer, setOpenSheetDrawer] = useState(false);
  const offersString = productsType === "offers" ? "yes" : "";
  const { min, max } = useSelector(selectPriceRange);
  const { label, value } = useSelector(selectProductsVariant);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const { data: allProducts, isLoading }: any = useGetProductsListsQuery({
    productsType: productsType,
    type: usedString,
    offerType: offersString,
    minVariantPrice: min,
    maxVariantPrice: max,
    variantOptionName: label,
    variantOptionValue: value,
    category: category,
    page: currentPage,
    limit: pageSize,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto mb-10 mt-10 gap-5 ssm:px-3 msm:px-8 lsm:px-12 xmd:px-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }
  return (
    <div className="mt-5">
      <div className="bg-_white p-4 mb-5 rounded-md">
        <p className="text-xl md:text-2xl font-semibold mb-2">{productsType}</p>
        <CategoryTabs />
      </div>
      <div className="md:hidden flex justify-end mb-3">
        <button
          onClick={() => setOpenSheetDrawer(true)}
          className="flex items-center gap-2 border px-5 py-1 border-_primary-text rounded-sm"
        >
          Filter <icons.RiFilter2FillIcons />
        </button>
      </div>
      <div>
        {allProducts?.product?.length > 0 ? (
          <>
            <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto mb-10 gap-5">
              {allProducts?.product?.map((product: any) => (
                <ProductCard key={product.id} datas={product} />
              ))}
            </div>
          </>
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

export default AllProductsSection;
