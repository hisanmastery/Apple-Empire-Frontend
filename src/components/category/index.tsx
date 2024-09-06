 "use client"
import React, { useState } from 'react';
import Loading from '../common/loading';
import ProductCard from '../common/product-card';
import ProductsNotFound from '../products-not-found';
import { useSelector } from 'react-redux';
import { selectPriceRange } from '@/store/features/products/productsPriceRangeSlice';
import { selectProductsCategory } from '@/store/features/products/productsCategorySlice';
import { useGetProductsListsQuery } from '@/store/features/products/productsApi';
import Pagination from '../common/pagination';

const CategoryProducts = ({ category,subCategory }: any) => {
    const { min, max } = useSelector(selectPriceRange);
    const { displayType, ram, shape, internalStorage, chipset, region } = useSelector(selectProductsCategory);
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);
    const { data: allProducts, isLoading }: any = useGetProductsListsQuery({
        displayType: displayType,
        category: decodeURIComponent(category),
        subCategory:decodeURIComponent(subCategory),
        ram: ram,
        chipset: chipset,
        region: region,
        internalStorage: internalStorage,
        page: currentPage,
        limit: pageSize
    }, { pollingInterval: 1000 });
    // pagination 
    const lastPostIndex = currentPage * pageSize;
    const firstPostIndex = lastPostIndex - pageSize;
    const filterProducts = allProducts?.blogs?.filter((product: any) => min >= parseInt(product?.price));
    const currentProducts = filterProducts?.slice(firstPostIndex, lastPostIndex);
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="mt-5">
            <div className='mb-10 border-b-[1px] border-_blue'>
                <p className='text-2xl font-semibold mb-2'>{decodeURIComponent(category) }</p>
            </div>
        <div>
            {currentProducts?.length > 0 ? <>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mx-auto mb-10 gap-5">
                    {currentProducts?.map((product: any) => (
                        <ProductCard key={product.id} datas={product}></ProductCard>
                    ))}
                </div>
                </> : <ProductsNotFound />}
                <Pagination
                    totalItems={ currentProducts?.length}
                pageSize={pageSize}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                    />
        </div>
    </div>
    );
};

export default CategoryProducts;