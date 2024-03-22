import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-menubar";
import React from "react";
import { GrDeliver } from "react-icons/gr";
const ShippingMethod = () => {
  return (
    <div>
      <h1 className="flex items-center text-lg font-semibold gap-4">
      <button className="bg-orange-500 p-3 rounded-full">
          <GrDeliver className="text-2xl text-white" />
        </button>
        Shipping method</h1>
        <RadioGroup>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label >Default</Label>
      </div> 
    </RadioGroup>
    </div>
  );
};

export default ShippingMethod;
