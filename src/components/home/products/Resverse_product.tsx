"use client"
import CustomSlider from '@/components/common/custom-slider';
import Loading from '@/components/common/loading';
import { useGetProductsListsQuery } from '@/store/features/products/productsApi';
import React from 'react';

const Resverse_product = () => {
    const { data: allProducts, isLoading }: any = useGetProductsListsQuery({
        page: 1,
        limit: 20,
      });
      if (isLoading) {
        return <Loading />;
      }
    
      // Reverse the products array to show the last item first
      const reversedProducts: any =
        allProducts && allProducts.product
          ? [...allProducts.product].reverse()
          : [];
    
      const reversedAllProducts = {
        product: reversedProducts,
      };
    return (
        <div className="mt-4">
        <CustomSlider
          sliderProducts={reversedAllProducts}
          isLoading={isLoading}
        />
      </div>
    );
};

export default Resverse_product;