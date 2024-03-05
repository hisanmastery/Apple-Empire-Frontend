"use client";
import { Button } from "@/components/ui/button";
// Add this to your imports
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import CashOnDelivery from "./cash-on-delivery";
import OnlinePayment from "./online-payment";

const PaymentForm = ({ storedCart }: any) => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [showCashOnDeliveryForm, setShowCashOnDeliveryForm] = useState(false);

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
    setShowCashOnDeliveryForm(method === "cashOnDelivery");
  };

  const handleCashOnDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle Cash on Delivery form submission
    // Add your logic here
  };

  return (
    <div className="mx-auto max-w-screen-lg px-6 py-4 bg-white rounded-lg shadow-md">
      <h1 className="text-center mb-10 text-xl">Payment Information</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Payment Method
        </label>
        <div className="flex">
          <button
            type="button"
            onClick={() => handlePaymentMethodChange("creditCard")}
            className={`flex-1 py-2 rounded-md ${
              paymentMethod === "creditCard"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Credit Card
          </button>
          <button
            type="button"
            onClick={() => handlePaymentMethodChange("cashOnDelivery")}
            className={`flex-1 py-2 rounded-md ${
              paymentMethod === "cashOnDelivery"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Cash on Delivery
          </button>
        </div>
      </div>

      {paymentMethod === "cashOnDelivery" ? (
        <CashOnDelivery />
      ) : (
        <OnlinePayment />
      )}

      {paymentMethod === "cashOnDelivery" ? (
        <Button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:border-teal-300"
        >
          Cash on delivery
        </Button>
      ) : (
        <Button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:border-teal-300"
        >
          Pay Online
        </Button>
      )}
    </div>
  );
};

export default PaymentForm;
