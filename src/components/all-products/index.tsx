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

const AllProductsSection = ({ productsType }: any) => {
  const usedString = productsType === "used" ? "used" : "";
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
    page: currentPage,
    limit: pageSize,
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-5">
      <div className="bg-_white p-5 mb-5 rounded-md">
        <p className="text-2xl font-semibold mb-2">{productsType}</p>
        <CategoryTabs />
      </div>
      <div>
        {allProducts?.product?.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 xmd:grid-cols-2  mx-auto mb-10 gap-5 ssm:px-3 msm:px-8 lsm:px-12 xmd:px-0">
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
    </div>
  );
};

export default AllProductsSection;
