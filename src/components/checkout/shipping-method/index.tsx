import { GrDeliver } from "react-icons/gr";
import React, { useState } from "react";
import { MdOutlinePayment } from "react-icons/md";
import { useFormContext } from "react-hook-form";
import Input from "@/components/common/input";

const ShippingMethod = ({ setShippingMethod }: any) => {
  const { register, setValue } = useFormContext();

  const [selectedShippingMethod, setSelectedShippingMethod] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  // Shipping options
  const shippingOptions = [
    {
      id: "OutSide Dhaka",
      label: "Outside Dhaka : Within 5-7 days",
      cost: "TK. 100",
    },
    {
      id: "Shop By Pick Up",
      label: "Shop By pick up",
      cost: "TK. 0",
    },
  ];

  // Handle the change in selected shipping method
  const handleMethodChange = (e: any) => {
    const selectedMethod = e.target.value;
    setSelectedShippingMethod(selectedMethod);
    setShippingMethod(selectedMethod);
  };

  // Handle payment method selection and deselection
  const handlePaymentMethodChange = (method: string) => {
    if (selectedPaymentMethod === method) {
      setSelectedPaymentMethod("");
      setValue("onlinePayment", "");
    } else {
      setSelectedPaymentMethod(method);
      setValue("onlinePayment", method);
    }
  };

  return (
    <div>
      {/* Shipping Method Section */}
      <div>
        <h1 className="flex items-center text-lg font-semibold gap-4">
          <button className="bg-_primary p-3 rounded-full">
            <GrDeliver className="text-2xl text-white" />
          </button>
          Shipping method
        </h1>

        {/* Map over shipping options to display them */}
        {shippingOptions.map((option) => (
          <div
            className="flex items-center space-x-2 mt-5 ml-3"
            key={option.id}
          >
            <input
              type="radio"
              id={option.id}
              value={option.id}
              onChange={handleMethodChange}
              checked={selectedShippingMethod === option.id}
              className="hidden"
            />
            <label
              htmlFor={option.id}
              className="inline-flex items-center cursor-pointer"
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center border-2 border-_primary ${
                  selectedShippingMethod === option.id
                    ? "bg-_primary"
                    : "bg-white"
                }`}
              ></div>
              <div className="flex justify-between ml-2 items-center gap-10">
                <span className="text-md">{option.label}</span>
                {option.cost && <span>{option.cost}</span>}
              </div>
            </label>
          </div>
        ))}

        {/* Payment Method Section */}
        <h1 className="flex items-center text-lg font-semibold gap-4 mt-14">
          <button className="bg-_primary p-3 rounded-full">
            <MdOutlinePayment className="text-2xl text-white" />
          </button>
          Payment method
        </h1>
        <div className="p-5">
          <div className="flex items-center space-x-2">
            <div
              className={`w-6 h-6 rounded-full cursor-pointer flex items-center justify-center border-2 border-_primary ${
                selectedPaymentMethod === "Debit-Cards-Online Payment"
                  ? "bg-_primary"
                  : "bg-white"
              }`}
              onClick={() =>
                handlePaymentMethodChange("Debit-Cards-Online Payment")
              }
            />
            <label htmlFor="r1" className="text-md mt-2 cursor-pointer">
              Debit & Cards / Online Payment
            </label>
          </div>
        </div>

        {/* Order Notes */}
        <div>
          <h1 className="text-md mb-2"></h1>
          <Input
            label="Order notes (optional)"
            placeholder="Add any notes for the order"
            name="orderNotes"
            textArea={true}
            className="mt-2 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
