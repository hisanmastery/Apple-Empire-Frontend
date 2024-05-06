import { GrDeliver } from "react-icons/gr";
import React, { useState } from "react";
import { MdOutlinePayment } from "react-icons/md";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext } from "react-hook-form";
import Input from "@/components/common/input";
const ShippingMethod = ({
  setShippingMethod = () => {},
  shippingMethod,
}: any) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [selectedDhakaOutside, setSelectedDhakaOutside] = useState("default");
  const handleMethodChangeDhakaOutside = (e: any) => {
    setSelectedDhakaOutside(e.target.value);
  };

  const toggleSystem = () => {
    setShippingMethod(!shippingMethod);
  };
  const [selectedMethod, setSelectedMethod] = useState("default");

  const handleMethodChange = (method: any) => {
    setSelectedMethod(method);
  };
  return (
    <div>
      <div>
        <h1 className="flex items-center text-lg font-semibold gap-4">
          <button className="bg-_primary p-3 rounded-full">
            <GrDeliver className="text-2xl text-white" />
          </button>
          Shipping method
        </h1>
        <div className="flex items-center space-x-2 mt-5 ml-3">
          <input
            type="checkbox"
            id="default"
            className="hidden" // Hide the default checkbox
            {...register("shippingMethod", { required: "" })}
          />
          <label
            htmlFor="default"
            className="inline-flex items-center cursor-pointer"
            onClick={toggleSystem}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center border-2 border-_primary ${
                shippingMethod ? "bg-_primary" : "bg-white"
              }`}
            ></div>
            <div className="flex justify-between ml-2 items-center gap-10">
              <span className="text-md">Outside Dhaka : Within 5-7 days</span>
              <span>TK. 100</span>
            </div>
          </label>
        </div>
        <h1 className="flex items-center text-lg font-semibold gap-4 mt-14">
          <button className="bg-_primary p-3 rounded-full">
            <MdOutlinePayment className="text-2xl text-white" />
          </button>
          Payment method
        </h1>
        <div className="p-5">
          <RadioGroup
            {...register("onlinePayment", { required: "" })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Debit-Cards-Online Payment" id="r1" />
              <label htmlFor="r1" className="text-md mt-2">
                Debit & Cards / Online Payment
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Cash on Delivery" id="r2" />
              <label htmlFor="r2" className="text-lg mt-2">
                Cash on Delivery
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Cards on Delivery" id="r3" />
              <label htmlFor="r3" className="text-md mt-2">
                Cards on Delivery
              </label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <h1 className="text-md mb-2"></h1>
          <Input
            label="Order notes(options)"
            placeholder="order notes"
            name="order-notes"
            textArea={true}
            className="mt-2 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
