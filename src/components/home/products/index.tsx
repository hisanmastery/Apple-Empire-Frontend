"use client"
import React, {useState} from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input"
import { FiMinus } from "react-icons/fi";
import ProductCard from "../../common/product-card/index";
import { Slider } from "@/components/ui/slider";
import Pagination from "@/components/Pagination";

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
const regions = [
  "Indian",
  "UK",
  "USE",
  "Japan",
  "International",
  "Singapore",
  "China",
  "Vietnam",
  "Canada",
  "Hong Kong"
]

const Products = ({ productData }: any) => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  // slider range 
  const [priceRangeMin, setPriceRangeMin] = useState(50);
  const [priceRangeMax, setPriceRangeMax] = useState(100);

  const handleMinPriceChange = (event: any) => {
    setPriceRangeMin(parseInt(event.target.value));
  };

  const handleMaxPriceChange = (event: any) => {
    setPriceRangeMax(parseInt(event.target.value));
  };

  const handleSliderChange = (values: number[]) => {
    setPriceRangeMin(values[0]);
    setPriceRangeMax(values[1]);
  };

  // pagination 
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = productData?.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="flex lg:container mx-auto gap-6">
      <div className="w-1/4 mt-5">
        <div className="border-2 rounded-md p-4 ">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-bold">Price Range</h4>
          <span><FiMinus /></span>
        </div>
        <hr className="border border-gray-300 mt-2"/>

        <div className="mt-5 mb-2">
          <Slider value={[priceRangeMin, priceRangeMax]} max={100} min={50} step={1} onValueChange={handleSliderChange} />
          <div className="flex justify-center lg:gap-6 md:gap-4 gap-1 mt-4">
            <Input type="text" value={priceRangeMin} onChange={handleMinPriceChange} />
            <Input type="text" value={priceRangeMax} onChange={handleMaxPriceChange} />
          </div>
        </div>
        </div>
        <div className="flex justify-between ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-2 rounded-md px-2 my-3">
              <AccordionTrigger>Display Type</AccordionTrigger>
              <AccordionContent>
                {displays.map((display, index) => (
                  <div key={index}>
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="display"
                      value={display}
                    />
                    <label>{display}</label>
                    <br />
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-2 rounded-md px-2 my-3">
              <AccordionTrigger>Ram</AccordionTrigger>
              <AccordionContent>
              {rams.map((ram, index) => (
                  <div key={index}>
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="ram"
                      value={ram}
                    />
                    <label>{ram}</label>
                    <br />
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-2 rounded-md px-2 my-3">
              <AccordionTrigger>Internal Storage</AccordionTrigger>
              <AccordionContent>
              {internalStorages.map((internalStorage, index) => (
                  <div key={index}>
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="internalStorage"
                      value={internalStorage}
                    />
                    <label>{internalStorage}</label>
                    <br />
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-2 rounded-md px-2 my-3">
              <AccordionTrigger>Internal Storage</AccordionTrigger>
              <AccordionContent>
              {chipsets.map((chipset, index) => (
                  <div key={index}>
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="chipset"
                      value={chipset}
                    />
                    <label>{chipset}</label>
                    <br />
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-2 rounded-md px-2 my-3">
              <AccordionTrigger>Internal Storage</AccordionTrigger>
              <AccordionContent>
              {regions.map((region, index) => (
                  <div key={index}>
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="region"
                      value={region}
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
      <div className="w-3/4 grid lg:container mx-auto lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6  ">
        {currentPosts?.map((product: any) => (
          <ProductCard key={product.id} datas={product}></ProductCard>
        ))}
        
        <Pagination totalPosts={productData?.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />
        
      </div>
        
    </div>
    
    
  );
};

export default Products;
