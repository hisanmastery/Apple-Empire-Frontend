import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
const products = [
  {
    id: "62aefe9ad8b80d5234af625a",
    image:
      "https://maccity.com.my/image/cache/data/iphone/iphone%2014%20plus/starlight/iPhone_14_Plus_Starlight_PDP_Image_Position-1A_Starlight_Color_SEA-450x579.jpg",
    brand: "xioami",
    review: 3,
    quantity: 1,
    description:
      "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
    title: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
    offer_price: "18.73",
    price: 27.27,
    campaingn_product: false,
    cam_product_available: null,
    cam_product_sale: null,
    product_type: null,
  },
];
const OrderSummary = ({
  subtotal,
  cartDiscount,
  deliveryFee,
  totalPrice,
  totalProducts,
}: any) => {
  const [systemOn, setSystemOn] = useState(false);
  const toggleSystem = () => {
    setSystemOn(!systemOn);
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
          <div key={index} className="flex justify-between items-center gap-6">
            <div className="w-[75%] flex gap-5 items-center mb-2">
              <Image
                src={item?.image}
                alt="image"
                width={80}
                height={80}
                loading="lazy"
                className="rounded-md"
              />
              <div>
                <p className="text-sm mb-2">{item?.title.slice(0, 20)}..</p>
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
        <p className="flex justify-between items-center mb-2">
          <span>Cart Discount :</span>
          <span>TK . {cartDiscount}</span>
        </p>
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
              systemOn ? "bg-_primary" : "bg-white"
            }`}
          ></div>
          <p className="ml-2">Send as Gift</p>
        </label>
      </div>
      <p className="text-sm mt-8">
        By Clicking Confirm Order. You agree to your{" "}
        <Link href={""} className="underline">
          terms and condition
        </Link>
      </p>
    </div>
  );
};

export default OrderSummary;
