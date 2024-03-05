import { Input } from "@/components/ui/input";
import React from "react";

const OnlinePayment = () => {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="cardType"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Full Name
        </label>
        <Input
          type="text"
          id="cardType"
          placeholder="Enter Full Name"
          className="input-field"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="cardHolder"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Mobile Number
        </label>
        <Input
          type="text"
          id="cardHolder"
          placeholder="Enter mobile number"
          className="input-field"
        />
      </div>

      <div className="mb-4 flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-2">
          <label
            htmlFor="expiryDate"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Expiration Date
          </label>
          <Input
            type="text"
            id="expiryDate"
            placeholder="MM/YY"
            className="input-field"
          />
        </div>
        <div className="md:w-1/2 pl-2">
          <label
            htmlFor="cvc"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            CVC
          </label>
          <Input
            type="text"
            id="cvc"
            placeholder="CVC"
            className="input-field"
          />
        </div>
      </div>
    </>
  );
};

export default OnlinePayment;
