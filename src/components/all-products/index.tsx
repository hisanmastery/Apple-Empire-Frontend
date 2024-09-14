"use client"
import React, { useState } from "react";
import Loading from "@/components/common/loading";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import ProductCard from "../common/product-card";
import { useSelector } from "react-redux";
import { selectPriceRange } from "@/store/features/products/productsPriceRangeSlice";
import { selectProductsCategory } from "@/store/features/products/productsCategorySlice";
import ProductsNotFound from "../products-not-found";
import Pagination from "../common/pagination";

const AllProductsSection = ({ productsType}: any) => {
    const { min, max } = useSelector(selectPriceRange);
    const { displayType, ram, shape, internalStorage, chipset, region } = useSelector(selectProductsCategory);
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);
    const { data: allProducts, isLoading }: any = useGetProductsListsQuery({
        displayType: displayType,
        ram: ram,
        productsType:productsType,
        chipset: chipset,
        region: region,
        internalStorage: internalStorage,
        page: currentPage,
        limit: pageSize
    }, { pollingInterval: 1000 });

    // pagination 
    const lastPostIndex = currentPage * pageSize;
    const firstPostIndex = lastPostIndex - pageSize;
    const currentProducts = allProducts?.blogs?.slice(firstPostIndex, lastPostIndex);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="mt-5">
             <div className='mb-10 border-b-[1px] border-_blue'>
                <p className='text-2xl font-semibold mb-2'>{productsType}</p>
            </div>
            <div>
                {currentProducts?.length > 0 ? <>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xmd:grid-cols-2  mx-auto mb-10 gap-5 ssm:px-3 msm:px-8 lsm:px-12 xmd:px-0">
                        {currentProducts?.map((product: any) => (
                            <ProductCard key={product.id} datas={product}></ProductCard>
                        ))}
                    </div>
                   
                </> : <ProductsNotFound />}
                <Pagination
                     totalItems={currentProducts?.length}
                     pageSize={pageSize}
                     setCurrentPage={setCurrentPage}
                     currentPage={currentPage}
                    />
            </div>
        </div>
    );
};

export default AllProductsSection;