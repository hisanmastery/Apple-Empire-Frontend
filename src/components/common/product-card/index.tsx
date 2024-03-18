"use client";
import { addStoredCart } from "@/store/features/cart/cartSlice";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const ProductCard = ({ datas }: any) => {
  const product = {
    id: datas?.id,
  };
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  // handle cart click
  const handleCartClick = () => {
    // get product data
    const existingCart = storedCart || [];
    const existingProduct = existingCart?.find(
      (item: any) => item.id === datas.id
    );
    // check existing product if not product it will be set
    if (!existingProduct) {
      const updatedCart = [...existingCart, product];
      dispatch(addStoredCart(updatedCart));
    }
  };
  // check already added cart
  const isInCart = storedCart.find((item: any) => item.id === datas.id);

  return (
    <div
      data-aos="fade-up"
      className="card  w-full mt-5  bg-base-100 shadow-md border"
    >
      <div
        className="cursor-pointer product-card-one w-full h-full bg-white rounded relative group overflow-hidden hover:scale-105 ease-in-out duration-500"
        style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <Link href={`/products/${datas?.id}`}>
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
        </Link>
        <div className="px-[10px] pb-[10px] ">
          {/* add to cart button */}
          <div className="absolute bottom-1  gap-1 left-1 right-1">
            <button
              disabled={isInCart}
              onClick={() => handleCartClick()}
              className={`bg-slate-800 uppercase ${
                !isInCart ? "  hover:bg-[#FF4C06]" : "bg-slate-500 opacity-40"
              } rounded ease-in-out duration-500 transition-all w-full text-white p-2 font-normal text-sm`}
            >
              {isInCart ? "Added to cart" : "ADD TO CART"}
            </button>
          </div>

          <Link href={`/products/${datas?.id}`}>
            <p className="title mb-2  text-[15px] font-600 text-qblack leading-[24px] font-semibold line-clamp-2 hover:text-qyellow cursor-pointer">
              {datas?.title}
            </p>
          </Link>

          {/* rating */}
          <div className="reviews flex space-x-[1px] mb-3"></div>
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
