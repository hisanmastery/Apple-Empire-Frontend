import { GrDeliver } from "react-icons/gr";
import React, { useState } from "react";
import { MdOutlinePayment } from "react-icons/md";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
const ShippingMethod = () => {
  const [selectedDhakaOutside, setSelectedDhakaOutside] = useState("default");
  const [systemOn, setSystemOn] = useState(false);

  const handleMethodChangeDhakaOutside = (e: any) => {
    setSelectedMethod(e.target.value);
  };

  const toggleSystem = () => {
    setSystemOn(!systemOn);
  };
  const [selectedMethod, setSelectedMethod] = useState("default");

  const handleMethodChange = (method: any) => {
    setSelectedMethod(method);
  };
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // You can handle form submission here
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="flex items-center text-lg font-semibold gap-4">
          <button className="bg-orange-500 p-3 rounded-full">
            <GrDeliver className="text-2xl text-white" />
          </button>
          Shipping method
        </h1>
        <div className="flex items-center space-x-2 mt-5">
          <input
            type="checkbox"
            id="default"
            name="shippingMethod"
            className="hidden" // Hide the default checkbox
          />
          <label
            htmlFor="default"
            className="inline-flex items-center cursor-pointer"
            onClick={toggleSystem}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center border-2 border-orange-500 ${
                systemOn ? "bg-orange-500" : "bg-white"
              }`}
            ></div>
            <div className="flex justify-between items-center gap-10">
              <span className="ml-2 text-lg">
                Outside Dhaka : Within 5-7 days
              </span>
              <span>TK. 100</span>
            </div>
          </label>
        </div>
        <h1 className="flex items-center text-lg font-semibold gap-4 mt-14">
          <button className="bg-orange-500 p-3 rounded-full">
            <MdOutlinePayment className="text-2xl text-white" />
          </button>
          Payment method
        </h1>
        <div className="p-5">
          <RadioGroup defaultValue="Debit-Cards-Online Payment">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="default"
                {...register("onlinePayment")}
                id="r1"
              />
              <label htmlFor="r1" className="text-lg mt-2">
                Debit & Cards / Online Payment
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="comfortable"
                {...register("cashOnDelivery")}
                id="r2"
              />
              <label htmlFor="r2" className="text-lg mt-2">
                Cash on Delivery
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="compact"
                {...register("cardsOnDelivery")}
                id="r3"
              />
              <label htmlFor="r3" className="text-lg mt-2">
                Cards on Delivery
              </label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <h1 className="text-lg mb-2">Order notes(options)</h1>
          <textarea
            placeholder="order notes"
            name="order-notes"
            className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400"
          />
        </div>
      </div>
    </form>
  );
};

export default ShippingMethod;
