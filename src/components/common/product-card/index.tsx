"use client";
import { icons } from "@/constants/icons";
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
      className="card h-[240px] w-[190px] mt-5 mx-auto bg-base-100 shadow-md border"
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
              width: "131px",
              height: "131px",
              margin: "auto",
            }}
          ></div>
        </Link>
        <div className="px-[10px] pb-[10px] ">
          {/* add to cart button */}
          <div className="absolute bottom-1  gap-1 left-1 right-1 flex justify-between items-center">
            {/* <button
              disabled={isInCart}
              onClick={() => handleCartClick()}
              className={`bg-_primary uppercase ${
                !isInCart ? "  hover:bg-[#FF4C06]" : "bg-slate-500 opacity-40"
              } rounded ease-in-out duration-500 transition-all w-full text-white p-2 font-normal text-sm`}
            >
              {isInCart ? "Added to cart" : "ADD TO CART"}
            </button> */}

            {/* rating */}
            {/* reviews */}
            <div className="flex items-center gap-1">
              {/* {Array.from(Array(datas?.review), () => (
                <span key={datas?.review + Math.random()}>
                  <icons.FaStar className="text-_secondary" />
                </span>
              ))} */}
              <icons.FaStar className="text-_secondary" />{" "}
              <span>{datas?.review}</span>
            </div>
            <button
              disabled={isInCart}
              onClick={() => handleCartClick()}
              className={`bg-_primary uppercase ${
                !isInCart ? "  hover:bg-[#FF4C06]" : "bg-slate-500 opacity-40"
              } rounded-full ease-in-out duration-500 transition-all w-8 h-8 text-white p-2 font-normal text-sm text-center flex  justify-center items-center`}
            >
              <span>
                {isInCart ? (
                  <icons.IoCheckmarkDoneCircleSharp className="text-lg text-center" />
                ) : (
                  <icons.plusIcon className="text-lg text-center  " />
                )}
              </span>
            </button>
          </div>

          <Link href={`/products/${datas?.id}`}>
            <p className="title  text-sm   line-clamp-2 hover:text-blue-600 cursor-pointer">
              {datas?.title}
            </p>
          </Link>

          <p className="price">
            <span className="main-price text-sm line-through font-600 font-semibold  ">
              {datas?.price}
            </span>
            <span className="offer-price text-sm font-600  ml-2 font-semibold text-red-500">
              {datas?.offer_price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
