"use client";
import { icons } from "@/constants/icons";
import {
  useAddToCartMutation,
  useGetEmailCartQuery,
} from "@/store/features/cart/cartApi";
import { addStoredCart } from "@/store/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const ProductCard = ({ datas }: any) => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  const { data, refetch }: any = useGetEmailCartQuery({
    email: "dalim@gmail.com",
  });
  const [addToCart]: any = useAddToCartMutation();
  // handle cart click
  const handleCartClick = async (data: any) => {
    const payload = {
      email: "dalim@gmail.com",
      title: data?.title,
      productId: data?._id,
      price: data?.price,
      image: data?.variations[0].image,
      quantity: 0,
    };
    const res: any = await addToCart({ payload });
    if (res?.data?.isSuccess) {
      refetch();
    }
    // get product data
    // const existingCart = storedCart || [];
    // const existingProduct = existingCart?.find(
    //   (item: any) => item._id === datas._id
    // );
    // // check existing product if not product it will be set
    // if (!existingProduct) {
    //   const updatedCart = [...existingCart, product];
    //   dispatch(addStoredCart(updatedCart));
    // }
  };
  useEffect(() => {
    dispatch(addStoredCart(data?.response));
  }, [data?.response, dispatch]);
  // check already added cart
  const isInCart = storedCart?.find(
    (item: any) => item.productId === datas?._id
  );
  return (
    <div
      data-aos="fade-up"
      className="card h-[240px] w-[190px] mt-5 mx-auto bg-base-100 shadow-md border"
    >
      <div
        className="cursor-pointer product-card-one w-full h-full bg-white rounded relative group overflow-hidden hover:scale-105 ease-in-out duration-500"
        style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <Link href={`/products/${datas?._id}`}>
          <div
            className="bg-slate-50 border-none  w-[134px] h-[134px] mx-auto mt-1"
            // className="product-card-img w-full h-[300px]"
            // style={{
            //   background: `url(${datas?.image}) no-repeat center`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   width: "131px",
            //   height: "131px",
            //   margin: "auto",
            //   backgroundColor:"#69B626",
            //   padding:'2px'
            // }}
          >
            <Image
              width={500}
              height={500}
              className="w-[131px] h-[131px] mx-auto "
              src={`${datas?.variations[0].image}`}
              alt={datas?.title}
            />
          </div>
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
              onClick={() => handleCartClick(datas)}
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

          <Link href={`/products/${datas?._id}`}>
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
