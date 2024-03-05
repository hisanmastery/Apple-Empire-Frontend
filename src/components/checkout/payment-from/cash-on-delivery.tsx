import { Input } from "@/components/ui/input";
import React from "react";

const CashOnDelivery = ({ handleCashOnDeliverySubmit }: any) => {
  return (
    <div className="mb-4">
      <p className="text-gray-600">Cash on Delivery Information:</p>
      <form onSubmit={handleCashOnDeliverySubmit}>
        <div className="mt-2">
          <label
            htmlFor="paymentCode"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Full Name
          </label>
          <Input
            type="text"
            id="paymentCode"
            placeholder="Enter full name"
            className="input-field"
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="paymentCode"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Phone Number
          </label>
          <Input
            type="text"
            id="paymentCode"
            placeholder="Enter phone number"
            className="input-field"
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="paymentCode"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Delivery Address
          </label>
          <Input
            type="text"
            id="paymentCode"
            placeholder="Enter delivery address"
            className="input-field"
          />
        </div>
      </form>
    </div>
  );
};

export default CashOnDelivery;
