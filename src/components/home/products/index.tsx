import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ProductCard from "../../common/product-card/index";
import { Slider } from "@/components/ui/slider";
const Products = ({ productData }: any) => {
  return (
    <div className="flex">
      <div className="w-1/4 border-2 rounded-md p-4">
        <div className="flex justify-between">
          <h4>Price Range</h4>
          <p>-</p>
        </div>
        <hr />

        <div>
          {/* <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]")}
          /> */}
          <Slider defaultValue={[33]} max={100} step={1} />


        </div>
        <div className="flex justify-between">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Display Type</AccordionTrigger>
              <AccordionContent>
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Ram</AccordionTrigger>
              <AccordionContent>
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Internal Storage</AccordionTrigger>
              <AccordionContent>
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Internal Storage</AccordionTrigger>
              <AccordionContent>
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Internal Storage</AccordionTrigger>
              <AccordionContent>
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
                <input
                  className="mr-2"
                  type="checkbox"
                  id="PLS_LCD"
                  name="display"
                  value="PLS LCD"
                />
                <label>PLS LCD</label> <br />
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
