"use client"
import React, { useState } from 'react';
import SelectBox from '../common/select-box';
import { useGetProductsListsQuery, useGetSingleProductsQuery } from '@/store/features/products/productsApi';
import Loading from '../common/loading';

const CompareComponent = ({id}:any) => {
    const [selectedPhone, setSelectedPhone] = useState<any>(null);
    const [searchText, setSearchText] = useState('')
    const { data:singlePhoneData, isLoading }: any = useGetSingleProductsQuery({ id });
    const { data: allProducts, isLoading:isSingleLoading }: any = useGetProductsListsQuery({
        page: 1,
        limit: 10,
        searchText:searchText
    })
    console.log(selectedPhone);
    const phoneListData = allProducts?.blogs?.length > 0 && allProducts?.blogs?.map((item: any) => {
        return {
            label:item?.title,
            value: {...item}
        }
    })
    if (isLoading || isSingleLoading) {
        return <Loading/>
    }
    return (
    <div className='container mt-5 mb-96'>
       <div className="bg-white p-6 rounded-lg shadow-lg w-full">
        <h1 className="text-2xl font-semibold mb-4">Compare</h1>
        <div className="grid grid-cols-12 gap-4">
          {/* First column with label */}
          <div className="col-span-3 bg-_primary rounded-md text-_white flex items-center justify-center p-4">
            <span className="font-medium">Product</span>
          </div>

          {/* Search and Add Device buttons */}
          <div className="col-span-9 bg-_primary rounded-md p-4 flex items-center justify-center gap-5">
          <button className="bg-gray-100 text-gray-700 font-medium w-full py-2 px-4 rounded hover:bg-gray-200">
              {singlePhoneData?.response?.title}
            </button>
            <SelectBox
            isMulti={false}
            name="phone"
            className='w-full'
            placeholder="Search and add device"
            onChange={(selectedOption) => setSelectedPhone(selectedOption)}
            valueOptions={phoneListData}
            setSearchText={setSearchText}
            />
          </div>
        </div>
        </div>
        {/* specification */}
        <div className='bg-white p-6 rounded-lg shadow-lg mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='w-[50%]'>
            <p className='text-wrap' dangerouslySetInnerHTML={{ __html: singlePhoneData?.response?.specification }} />
          </div>
          <div className='w-[50%]'>
            <p className='text-wrap' dangerouslySetInnerHTML={{ __html: selectedPhone?.value?.specification }} />
          </div>
        </div>
      </div>
    </div>
    );
};

export default CompareComponent;