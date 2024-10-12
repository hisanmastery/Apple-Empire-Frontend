"use client";
import React, { useState, useMemo } from "react";
import Loading from "../common/loading";
import ProductCard from "../common/product-card";
import ProductsNotFound from "../products-not-found";
import { useSelector } from "react-redux";
import { selectPriceRange } from "@/store/features/products/productsPriceRangeSlice";
import { selectProductsCategory } from "@/store/features/products/productsCategorySlice";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import Pagination from "../common/pagination";
import CategoryTabs from "../category-tabs";
interface CategoryProductsProps {
  category: string;
  subCategory: string;
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({
  category,
  subCategory,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const { min, max } = useSelector(selectPriceRange);
  const { displayType, ram, internalStorage, chipset, region } = useSelector(
    selectProductsCategory
  );

  // Fetching products using custom hooks
  const { data: allProducts, isLoading } = useGetProductsListsQuery<any>({
    category: decodeURIComponent(category),
    subCategory: decodeURIComponent(subCategory),
    page: currentPage,
    limit: pageSize,
  });

  //Loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-5">
      <CategoryTabs category={category} />
      <div className="mb-10 border-b-[1px] border-_blue">
        <p className="text-2xl font-semibold mb-2">
          {decodeURIComponent(category)}
        </p>
      </div>
      <div>
        {allProducts?.product?.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 px-3 sm:px-14 mx-auto mb-10">
            {allProducts?.product?.map((product: any) => (
              <ProductCard key={product._id} datas={product} />
            ))}
          </div>
        ) : (
          <ProductsNotFound />
        )}
        <Pagination
          totalItems={allProducts.totalCount}
          pageSize={pageSize}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default CategoryProducts;
