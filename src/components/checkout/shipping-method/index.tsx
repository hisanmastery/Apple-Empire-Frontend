import { GrDeliver } from "react-icons/gr";
import React, { useState } from "react";
import { MdOutlinePayment } from "react-icons/md";
import { useFormContext } from "react-hook-form";
import Input from "@/components/common/input";
import { useGetAllShippingMethodsQuery } from "@/store/features/shipping-methods/ShippingMethodsApi";

const ShippingMethod = ({ setShippingMethod }: any) => {
  const { setValue } = useFormContext();
  const { data, isLoading } = useGetAllShippingMethodsQuery<any>({});
  const [selectedShippingMethod, setSelectedShippingMethod] = useState<string>(
    data?.data?.[0]?.title || ""
  );
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  // Handle the change in selected shipping method
  const handleMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = data?.data?.find(
      (option: any) => option.title === event.target.value
    );
    setSelectedShippingMethod(event.target.value);
    setShippingMethod(selectedOption); // Pass selected option to parent
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

  // Show loading state if data is not ready
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  // Show message if no shipping methods are available
  if (!data?.data?.length) {
    return <div className="text-center">No shipping methods available</div>;
  }

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
        <div className="mt-4 ml-3">
          {/* Dropdown for Shipping Methods */}
          <select
            value={selectedShippingMethod}
            onChange={handleMethodChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-_primary"
          >
            <option key={"6546456547"}>---Select Shipping Methods---</option>
            {data?.data?.map((option: any) => (
              <option key={option._id} value={option.title}>
                {option.title} - TK. {option.amount}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Payment Method Section */}
      <h1 className="flex items-center text-lg font-semibold gap-4 mt-8">
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

      {/* Order Notes Section */}
      <div>
        <h1 className="text-md mb-2">Order Notes</h1>
        <Input
          label="Order notes (optional)"
          placeholder="Add any notes for the order"
          name="orderNotes"
          textArea={true}
          className="mt-2 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ShippingMethod;
