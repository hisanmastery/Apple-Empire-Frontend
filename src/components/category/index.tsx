"use client";
import React, { useState } from "react";
import Loading from "../common/loading";
import ProductCard from "../common/product-card";
import ProductsNotFound from "../products-not-found";
import { useSelector } from "react-redux";
import { selectPriceRange } from "@/store/features/products/productsPriceRangeSlice";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import Pagination from "../common/pagination";
import { selectProductsVariant } from "@/store/features/products/productsCategorySlice";
import SubCategoryTabs from "../category-tabs/SubCategoryTab";
import { useSearchParams } from "next/navigation";
import ProductCardSkeleton from "../shared/skeleton/products-card-skeleton";
interface CategoryProductsProps {
  category: string;
  subCategory: string;
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({
  category,
  subCategory,
}) => {
  const searchParams = useSearchParams();
  const selectedSubCategory = searchParams.get("subcategory");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const { min, max } = useSelector(selectPriceRange);
  const { label, value } = useSelector(selectProductsVariant);
  // Fetching products using custom hooks
  const { data: allProducts, isLoading } = useGetProductsListsQuery<any>({
    category: decodeURIComponent(category),
    subCategory: selectedSubCategory,
    page: currentPage,
    limit: pageSize,
    minVariantPrice: min,
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
      <div className="bg-_white p-5 mb-3">
        <p className="text-2xl font-semibold mb-2">
          {decodeURIComponent(category)}
        </p>
        <SubCategoryTabs category={decodeURIComponent(category)} />
      </div>
      <div>
        {allProducts?.product?.length > 0 ? (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mx-auto mb-10">
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
    </div>
  );
};

export default CategoryProducts;
