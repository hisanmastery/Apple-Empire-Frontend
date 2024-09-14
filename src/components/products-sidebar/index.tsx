"use client"
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input"
import { FiMinus } from "react-icons/fi";
import { Slider } from "@/components/ui/slider";
import { useDispatch, useSelector } from "react-redux";
import { selectPriceRange, setPriceRangeMax, setPriceRangeMin } from "@/store/features/products/productsPriceRangeSlice";
import { selectProductsCategory, setProductsChipset, setProductsDisplayType, setProductsInternalStorage, setProductsRam, setProductsRegion } from "@/store/features/products/productsCategorySlice";


const displays = [
    "PLS LCD",
    "TFT",
    "IPS",
    "AMOLED",
    "Super AMOLED",
    "OLED",
    "Dynamic AMOLED"
];
const rams = [
    "2GB",
    "3GB",
    "4GB",
    "6GB",
    "8GB",
    "12GB",
    "16GB",
    "24GB",
    "18GB"
];
const internalStorages = [
    "32GB",
    "64GB",
    "128GB",
    "256GB",
    "512GB",
    "1TB"
];
const chipsets = [
    "Snapdragon",
    "MediaTek",
    "Exynos",
    "Bionic",
    "Tensor",
    "Kirin",
    "Unisoc",
    "Apple"
];
const regions =  ["BD", "AT", "CA", "IN", "ID", "JP", "KP", "PK", "SG", "UK", "US"]
const ProductsSideBar = () => {
    const dispatch = useDispatch();
    const { min, max } = useSelector(selectPriceRange)
    const { displayType, ram, shape, internalStorage, chipset, region } = useSelector(selectProductsCategory);
    const handleMinPriceChange = (event: any) => {
        dispatch(setPriceRangeMin(parseInt(event.target.value)));
    };

    const handleMaxPriceChange = (event: any) => {
        dispatch(setPriceRangeMax(parseInt(event.target.value)));
    };

    const handleSliderChange = (values: any) => {
        dispatch(setPriceRangeMin(values[0]));
        dispatch(setPriceRangeMax(values[1]));
    };
    //============ handle display type ==========//
    const handleDisplayTypeChange = (value: any) => {
        if (displayType === value) {
            dispatch(setProductsDisplayType(""))
        }
        else {
            dispatch(setProductsDisplayType(value)) 
        }
    };

    // =========== handle ram ============//
    const handleRamChange = (value: any) => {
        if (ram === value) {
            dispatch(setProductsRam(""))
        }
        else {
            dispatch(setProductsRam(value)) 
        }
    };

    //============ Internal Storage =============//
    const handleInternalStorageChange = (value: any) => {
        if (internalStorage === value) {
            dispatch(setProductsInternalStorage(""))
        }
        else {
            dispatch(setProductsInternalStorage(value)) 
        }
    };
    //============== Chipset =============// 
    const handleChipsetChange = (value: any) => {
        if (chipset === value) {
            dispatch(setProductsChipset(""))
        }
        else {
            dispatch(setProductsChipset(value)) 
        }
    };

    // ============= Region ============//
    const handleRegionChange = (value: any) => {
        if (region === value) {
            dispatch(setProductsRegion(""))
        }
        else {
            dispatch(setProductsRegion(value)) 
        }
    };


    return (
        <div className="mt-5 bg-_white border-[1px] border-[#dfedeb] p-5 rounded-md">
            <div className="border-[1px] border-[#dfedeb] rounded-md p-4 ">
                <div className="flex justify-between items-center">
                    <h4 className="text-xl font-bold">Price Range</h4>
                    <span><FiMinus /></span>
                </div>
                <hr className="mt-2" />

                <div className="mt-5 mb-2">
                    <Slider value={[min, max]} max={10000000} min={100000} step={1} onValueChange={handleSliderChange} className="cursor-pointer" />
                    <div className="flex justify-center lg:gap-6 md:gap-4 gap-1 mt-4">
                        <Input className="focus:outline-none" type="text" defaultValue={min || 0} onChange={handleMinPriceChange} />
                        <Input className="focus:outline-none" type="text" defaultValue={max || 0} onChange={handleMaxPriceChange} />
                    </div>
                </div>
            </div>
            <div className="flex justify-between ">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-[1px] border-[#dfedeb] rounded-md px-2 my-3">
                        <AccordionTrigger>Display Type</AccordionTrigger>
                        <AccordionContent>
                            {displays.map((display, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        name="display"
                                        value={display}
                                        onClick={() => handleDisplayTypeChange(display)}
                                    />
                                    <label>{display}</label>
                                    <br />
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-[1px] border-[#dfedeb] rounded-md px-2 my-3">
                        <AccordionTrigger>Ram</AccordionTrigger>
                        <AccordionContent>
                            {rams.map((ram, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        name="ram"
                                        value={ram}
                                        onClick={() =>handleRamChange(ram)}
                                    />
                                    <label>{ram}</label>
                                    <br />
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-[1px] border-[#dfedeb] rounded-md px-2 my-3">
                        <AccordionTrigger>Internal Storage</AccordionTrigger>
                        <AccordionContent>
                            {internalStorages.map((internalStorage, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        name="internalStorage"
                                        value={internalStorage}
                                        onClick={() => handleInternalStorageChange(internalStorage)}
                                    />
                                    <label>{internalStorage}</label>
                                    <br />
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-[1px] border-[#dfedeb]rounded-md px-2 my-3">
                        <AccordionTrigger>Chipset</AccordionTrigger>
                        <AccordionContent>
                            {chipsets.map((chipset, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        name="chipset"
                                        value={chipset}
                                        onClick={() => handleChipsetChange(chipset)}
                                    />
                                    <label>{chipset}</label>
                                    <br />
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className="border-[1px] border-[#dfedeb] rounded-md px-2 my-3">
                        <AccordionTrigger>Region</AccordionTrigger>
                        <AccordionContent>
                            {regions.map((region, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        name="region"
                                        value={region}
                                        onClick={() => handleRegionChange(region)}
                                    />
                                    <label>{region}</label>
                                    <br />
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default ProductsSideBar;