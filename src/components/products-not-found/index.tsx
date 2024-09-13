import React from 'react';
import EmptyImage from "../../../public/images/empty-bag.webp"
import Image from 'next/image';
const ProductsNotFound = () => {
    return (
        <div className='flex justify-center mt-10 mb-10'>
             <div className='bg-_white p-8 rounded-xl border-2 '>
            <Image className='mx-auto' src={EmptyImage} alt='not found product' width={100} height={100}/>
            <h3 className='text-center text-xl font-bold mb-2'>Product Not Found!</h3>
            <p className='text-center text-sm'>Oh no, it seems our product is playing hide and seek in the digital jungle, channeling its inner chameleon! 🦎🕵️‍♂️ Time to <br /> break out the virtual detective gear! 🕵️‍♀️🔍😄</p>
        </div>
       </div>
    );
};

export default ProductsNotFound;