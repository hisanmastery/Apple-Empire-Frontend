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
  selectProductsCategory,
  setProductsDisplayType,
  setProductsRam,
  setProductsInternalStorage,
  setProductsChipset,
  setProductsRegion,
} from "@/store/features/products/productsCategorySlice";
import { Accordion } from "@radix-ui/react-accordion";
import FilterSection from "./FilterSection";

// Filter options
const filterOptions = {
  displayType: [
    "PLS LCD",
    "TFT",
    "IPS",
    "AMOLED",
    "Super AMOLED",
    "OLED",
    "Dynamic AMOLED",
  ],
  ram: ["2GB", "3GB", "4GB", "6GB", "8GB", "12GB", "16GB", "24GB", "18GB"],
  internalStorage: ["32GB", "64GB", "128GB", "256GB", "512GB", "1TB"],
  chipset: [
    "Snapdragon",
    "MediaTek",
    "Exynos",
    "Bionic",
    "Tensor",
    "Kirin",
    "Unisoc",
    "Apple",
  ],
  region: ["BD", "AT", "CA", "IN", "ID", "JP", "KP", "PK", "SG", "UK", "US"],
};

// Reusable Filter Component

const ProductsSideBar = () => {
  const dispatch = useDispatch();
  const { min, max } = useSelector(selectPriceRange);
  const { displayType, ram, internalStorage, chipset, region } = useSelector(
    selectProductsCategory
  );

  // Price Range Handlers
  const handleMinPriceChange = (event: any) =>
    dispatch(setPriceRangeMin(parseInt(event.target.value)));
  const handleMaxPriceChange = (event: any) =>
    dispatch(setPriceRangeMax(parseInt(event.target.value)));
  const handleSliderChange = (values: any) => {
    dispatch(setPriceRangeMin(values[0]));
    dispatch(setPriceRangeMax(values[1]));
  };

  // Generic filter change handlers
  const handleDisplayTypeChange = (value: any) =>
    dispatch(setProductsDisplayType(value === displayType ? "" : value));
  const handleRamChange = (value: any) =>
    dispatch(setProductsRam(value === ram ? "" : value));
  const handleInternalStorageChange = (value: any) =>
    dispatch(
      setProductsInternalStorage(value === internalStorage ? "" : value)
    );
  const handleChipsetChange = (value: any) =>
    dispatch(setProductsChipset(value === chipset ? "" : value));
  const handleRegionChange = (value: any) =>
    dispatch(setProductsRegion(value === region ? "" : value));

  // Filters configuration
  const filters = [
    {
      title: "Display Type",
      options: filterOptions.displayType,
      selected: displayType,
      handler: handleDisplayTypeChange,
    },
    {
      title: "Ram",
      options: filterOptions.ram,
      selected: ram,
      handler: handleRamChange,
    },
    {
      title: "Internal Storage",
      options: filterOptions.internalStorage,
      selected: internalStorage,
      handler: handleInternalStorageChange,
    },
    {
      title: "Chipset",
      options: filterOptions.chipset,
      selected: chipset,
      handler: handleChipsetChange,
    },
    {
      title: "Region",
      options: filterOptions.region,
      selected: region,
      handler: handleRegionChange,
    },
  ];

  return (
    <div className="mt-5 bg-white border-[1px] border-[#dfedeb] p-5 rounded-md">
      {/* Price Range Filter */}
      <div className="border-[1px] border-[#dfedeb] rounded-md p-4 ">
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
            max={10000000}
            min={100000}
            step={1}
            onValueChange={handleSliderChange}
            className="cursor-pointer"
          />
          <div className="flex justify-center lg:gap-6 md:gap-4 gap-1 mt-4">
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
        {filters.map((filter, index) => (
          <FilterSection
            key={index}
            title={filter.title}
            options={filter.options}
            selectedOption={filter.selected}
            handleChange={filter.handler}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default ProductsSideBar;
