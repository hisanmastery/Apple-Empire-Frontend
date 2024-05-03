"use client"
import React, { useState } from "react";
import Pagination from "@/components/Pagination";
import Loading from "@/components/common/loading";
import { useGetProductsListsQuery } from "@/store/features/products/productsApi";
import ProductCard from "../common/product-card";
import { useSelector } from "react-redux";
import { selectPriceRange } from "@/store/features/products/productsPriceRangeSlice";
import { selectProductsCategory } from "@/store/features/products/productsCategorySlice";
import ProductsNotFound from "../products-not-found";

const AllProductsSection = () => {
    const { data: allProducts, isLoading }: any = useGetProductsListsQuery({});
    const { min, max } = useSelector(selectPriceRange);
    const { name } = useSelector(selectProductsCategory);
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);
    // pagination 
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const filterProducts = allProducts?.blogs?.filter((product: any) => min >= parseInt(product?.offer_price));
    const currentProducts = filterProducts?.slice(firstPostIndex, lastPostIndex);
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <div>
                {currentProducts?.length > 0 ? <>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto mb-10 gap-5">
                        {currentProducts?.map((product: any) => (
                            <ProductCard key={product.id} datas={product}></ProductCard>
                        ))}
                    </div>
                    <Pagination totalPosts={allProducts?.blogs?.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage} />
                </> : <ProductsNotFound />}
            </div>
        </div>
    );
};

export default AllProductsSection;