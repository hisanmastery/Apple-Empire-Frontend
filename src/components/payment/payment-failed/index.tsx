"use client";
import { icons } from "@/constants/icons";
import { usePaymentStatusUpdateMutation } from "@/store/features/checkout/checkoutApi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const PaymentFailed = () => {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("tranId");
  const [PaymentStatusUpdate] = usePaymentStatusUpdateMutation();
  useEffect(() => {
    const updatePaymentStatus = async () => {
      try {
        const payload = {
          paymentStatus: "failed",
          isPayment: false,
        };
        await PaymentStatusUpdate({ transactionId, payload });
      } catch (error) {
        console.error("Error updating payment status:", error);
      }
    };
    updatePaymentStatus();
  }, [transactionId, PaymentStatusUpdate]);
  return (
    <div className="w-[30%] mx-auto mt-10 mb-10 bg-_white p-5">
      <div className="w-28 h-28 mx-auto bg-red-200 flex justify-center items-center rounded-full mb-10">
        <div className="flex justify-center items-center bg-red-500 w-20 h-20 rounded-full">
          <icons.XmarkIcon className="text-5xl text-_white" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-red-400 mb-2">
          Payment Failed!!
        </h1>
        <p className="text-md font-medium">Please Try Again</p>
        <Link href={"/"}>
          <button className="text_white bg-red-500 px-5 font-medium rounded-sm py-2 text-_white mt-2">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentFailed;
