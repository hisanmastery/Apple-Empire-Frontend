"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { FiMinus } from "react-icons/fi";
import { Slider } from "@/components/ui/slider";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPriceRange,
  setPriceRangeMax,
  setPriceRangeMin,
} from "@/store/features/products/productsPriceRangeSlice";
import {
  selectProductsVariant,
  setProductsVariantType,
} from "@/store/features/products/productsCategorySlice";
import { Accordion } from "@radix-ui/react-accordion";
import FilterSection from "./FilterSection";
import { useGetAllFilterDataQuery } from "@/store/features/ads-section/adsSectionApi";

interface FilterOption {
  label: string;
  value: string;
}

const ProductsSideBar: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useGetAllFilterDataQuery<any>({});
  const { min, max } = useSelector(selectPriceRange);
  const { value } = useSelector(selectProductsVariant);

  // Price Range Handlers
  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (newValue >= 5000 && newValue <= max) {
      dispatch(setPriceRangeMin(newValue));
    }
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (newValue <= 500000 && newValue >= min) {
      dispatch(setPriceRangeMax(newValue));
    }
  };

  const handleSliderChange = (values: number[]) => {
    dispatch(setPriceRangeMin(values[0]));
    dispatch(setPriceRangeMax(values[1]));
  };

  const handleVariantTypeChange = (value: FilterOption) => {
    dispatch(setProductsVariantType(value));
  };

  const filters =
    data?.data?.map((filter: any) => ({
      title: filter.title,
      _id: filter?._id,
      options: filter.options,
      selected: value,
    })) || [];

  return (
    <div className="mt-5 bg-white border border-[#dfedeb] p-5 rounded-md">
      {/* Price Range Filter */}
      <div className="border border-[#dfedeb] rounded-md p-4">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-bold">Price Range</h4>
          <span>
            <FiMinus />
          </span>
        </div>
        <hr className="mt-2" />
        <div className="mt-5 mb-2">
          <Slider
            value={[min, max]}
            max={500000}
            min={0}
            step={1}
            onValueChange={handleSliderChange}
            className="cursor-pointer"
          />
          <div className="flex justify-center gap-4 mt-4">
            <Input
              className="focus:outline-none"
              type="text"
              value={min || 0}
              onChange={handleMinPriceChange}
            />
            <Input
              className="focus:outline-none"
              type="text"
              value={max || 0}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
      </div>
      {/* Filter Sections */}
      <Accordion type="single" collapsible className="w-full">
        {filters?.map((filter: any) => (
          <FilterSection
            key={filter?._id}
            title={filter.title}
            options={filter.options}
            selectedOption={filter.selected}
            handleChange={handleVariantTypeChange}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default ProductsSideBar;
