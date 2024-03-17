"use client";
import { addStoredCart } from "@/store/features/cart/cartSlice";
import { getItemLocalStorage, setItemLocalstorage } from "@/utils/localstorage";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ datas }: any) => {
  const product = {
    id: datas?.id,
  };
  const dispatch = useDispatch();
  // handle cart click
  const handleCartClick = () => {
    // get product data
    const existingCart = getItemLocalStorage("carts") || [];
    const existingProduct = existingCart?.find(
      (item: any) => item.id === datas.id
    );
    // check existing product if not product it will be set
    if (!existingProduct) {
      const updatedCart = [...existingCart, product];
      console.log(updatedCart);
      // set updated cart into locastorage
      setItemLocalstorage("carts", updatedCart);
    }
    // get updated sotred cart product
    const storedProduct = getItemLocalStorage("carts") || [];
    // save stored car in redux reducer
    dispatch(addStoredCart(storedProduct));
  };

  return (
    <div
      data-aos="fade-up"
      className="card  w-full mt-5  bg-base-100 shadow-md border"
    >
      <div
        className="cursor-pointer product-card-one w-full h-full bg-white rounded relative group overflow-hidden hover:scale-105 ease-in-out duration-500"
        style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <div
          className="product-card-img w-full h-[300px]"
          style={{
            background: `url(${datas?.image}) no-repeat center`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "200px",
            margin: "auto",
          }}
        ></div>
        <div className="product-card-details px-[10px] pb-[10px] ">
          {/* add to card button */}
          <div className="absolute bottom-1  gap-1 left-1 right-1">
            <button
              onClick={() => handleCartClick()}
              className="bg-slate-800 hover:bg-[#FF4C06] rounded ease-in-out duration-500 transition-all w-full text-white p-2 font-normal text-sm"
            >
              ADD TO CART
            </button>
          </div>

          <Link href={`/products/${datas?.id}`}>
            <p className="title mb-2  text-[15px] font-600 text-qblack leading-[24px] font-semibold line-clamp-2 hover:text-qyellow cursor-pointer">
              {datas?.title}
            </p>
          </Link>
          <div className="reviews flex space-x-[1px] mb-3">
            {/* <span className="text-yellow-400">{<icons.FaStar />}</span>
            <span className="text-yellow-400">{<icons.FaStar />}</span>
            <span className="text-yellow-400">{<icons.FaStar />}</span>
            <span className="text-yellow-400">{<icons.FaStar />}</span> */}
          </div>
          <p className="price pb-10">
            <span className="main-price text-qgray line-through font-600 font-semibold text-[18px] ">
              {datas?.price}
            </span>
            <span className="offer-price text-qred font-600 text-[18px] ml-2 font-semibold text-red-500">
              {datas?.offer_price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
