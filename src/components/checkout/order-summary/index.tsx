import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
const OrderSummary = ({
  subtotal,
  deliveryFee,
  totalPrice,
  totalProducts,
  giftSend,
  setGiftSend,
}: any) => {
  const toggleSystem = () => {
    setGiftSend(!giftSend);
  };
  return (
    <div>
      <h1 className="flex items-center text-lg font-semibold gap-4">
        <button className="bg-_primary p-3 rounded-full">
          <FaFileAlt className="text-2xl text-white" />
        </button>
        Order summary
      </h1>
      <div className="mt-5 border-b-[1px] border-blue-500 pb-2">
        {totalProducts?.map((item: any, index: number) => (
          <div key={index} className="flex justify-between items-center gap-5">
            <div className="w-[75%] flex gap-2 items-center mb-3">
              <Image
                src={item?.image || ""}
                alt="image"
                width={80}
                height={80}
                loading="lazy"
                className="rounded-md w-16 h-16 object-cover"
              />
              <div>
                <p className="text-sm mb-2">{item?.title?.slice(0, 20)}..</p>
                <p className="font-semibold">{item?.brand}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold">TK . {item?.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 border-b-[1px] border-blue-500 pb-2">
        <p className="flex justify-between items-center mb-2">
          <span>Subtotal : </span>
          <span>TK . {subtotal}</span>
        </p>
        {/* <p className="flex justify-between items-center mb-2">
          <span>Cart Discount :</span>
          <span>TK . {cartDiscount}</span>
        </p> */}
        <p className="flex justify-between items-center mb-2">
          <span>Delivery Fee : </span> <span>TK . {deliveryFee}</span>
        </p>
      </div>
      <p className="flex justify-end font-semibold text-lg">
        Total : TK . {totalPrice}
      </p>
      <div className="flex items-center mt-5">
        <input
          type="checkbox"
          id="default"
          name="shippingMethod"
          className="hidden"
        />
        <label
          htmlFor="default"
          className="inline-flex items-center cursor-pointer"
          onClick={toggleSystem}
        >
          <div
            className={`w-6 h-6 flex items-center justify-center border-2 border-_pribg-_primary ${
              giftSend ? "bg-_primary" : "bg-white"
            }`}
          ></div>
          <p className="ml-2">Send as Gift</p>
        </label>
      </div>
      <p className="text-sm mt-8">
        By Clicking Confirm Order. You agree to your{" "}
        <Link href={"/terms-conditions"} className="underline">
          terms and condition
        </Link>
      </p>
    </div>
  );
};

export default OrderSummary;
