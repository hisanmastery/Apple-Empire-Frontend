import ProductsSideBar from '@/components/products-sidebar';
import React from 'react';

const ProductsLayout = ({ children }: any) => {
    return (
        <div className='grid grid-cols-7 gap-5 container'>
            <div className='col-span-2'>
                <ProductsSideBar />
            </div>
            <div className='col-span-5'>
                {children}
            </div>
        </div>
    );
};

export default ProductsLayout;