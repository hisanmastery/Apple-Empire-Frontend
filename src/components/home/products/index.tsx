"use client"
import React, {useState} from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ProductCard from "../../common/product-card/index";
import { Slider } from "@/components/ui/slider";

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
  const [value, setValue] = useState([33]); 

  const handleChange = ({newValue}:any) => {
    setValue(newValue);
  };

  return (
    <div className="flex">
      <div className="w-1/4 mx-auto lg:container border-2 rounded-md p-4">
        <div className="flex justify-between">
          <h4>Price Range</h4>
          <p>-</p>
        </div>
        <hr className="border border-gray-300 "/>

        <div className="mt-5 mb-2">
          <Slider  defaultValue={[33]} max={100} step={1} onValueChange={handleChange}/>
          <p className="mt-6">Current value: {value}</p>

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
      <div className="w-3/4 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6 lg:container mx-auto ">
        {productData?.map((product: any) => (
          <ProductCard key={product.id} datas={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
