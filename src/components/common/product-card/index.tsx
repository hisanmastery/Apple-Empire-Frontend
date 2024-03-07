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
      className="card  w-full mt-5  bg-base-100 shadow-md  "
    >
      <div
        className="cursor-pointer product-card-one w-full h-full bg-white rounded relative group overflow-hidden "
        style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <div
          className="product-card-img w-full h-[300px]"
          style={{
            background: `url(${datas?.image}) no-repeat center`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "250px",
            margin: "auto",
          }}
        ></div>
        <div className="product-card-details px-[10px] pb-[10px] ">
          {/* add to card button */}
          <div className=" flex absolute bottom-1  gap-1 left-1 right-1">
            <button
              onClick={() => handleCartClick()}
              className="bg-blue-400 w-full text-white p-2"
            >
              ADD TO CARD
            </button>
            <button className="bg-slate-100 p-2">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.339844 3.18947V5.71272H0.991007H1.64217V4.31815V2.91815L4.6538 5.92978L7.66543 8.94141L8.13752 8.46389L8.61504 7.99179L5.60341 4.98017L2.59178 1.96854H3.99178H5.38636V1.31737V0.66621H2.8631H0.339844V3.18947Z"
                    fill="black"
                  />
                  <path
                    d="M13.9592 1.31737V1.96854H15.3537H16.7537L13.7421 4.98017L10.7305 7.99179L11.208 8.46389L11.6801 8.94141L14.6917 5.92978L17.7033 2.91815V4.31815V5.71272H18.3545H19.0057V3.18947V0.66621H16.4824H13.9592V1.31737Z"
                    fill="black"
                  />
                  <path
                    d="M4.63752 14.0803L1.64217 17.0811V15.6811V14.2865H0.991007H0.339844V16.8098V19.333H2.8631H5.38636V18.6818V18.0307H3.99178H2.59178L5.60341 15.0191L8.61504 12.0074L8.1538 11.5462C7.90419 11.2911 7.68171 11.0849 7.66543 11.0849C7.64915 11.0849 6.28713 12.4361 4.63752 14.0803Z"
                    fill="black"
                  />
                  <path
                    d="M11.1917 11.5462L10.7305 12.0074L13.7421 15.0191L16.7537 18.0307H15.3537H13.9592V18.6818V19.333H16.4824H19.0057V16.8098V14.2865H18.3545H17.7033V15.6811V17.0811L14.7026 14.0803C13.0584 12.4361 11.6964 11.0849 11.6801 11.0849C11.6638 11.0849 11.4413 11.2911 11.1917 11.5462Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
            <button className="bg-slate-100 p-2">
              {" "}
              <span>
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.97214 0.0251923C3.71435 0.183434 2.6616 0.701674 1.7705 1.60365C0.970091 2.41068 0.489057 3.26519 0.213053 4.37683C-0.275867 6.30342 0.0789948 8.20232 1.25398 9.98649C2.00708 11.1298 2.98097 12.1781 4.76711 13.7764C5.90266 14.7931 9.36848 17.7601 9.53802 17.859C9.69574 17.954 9.75488 17.9658 10.09 17.9658C10.4252 17.9658 10.4843 17.954 10.642 17.859C10.8116 17.7601 14.2853 14.7891 15.413 13.7764C17.207 12.1702 18.173 11.1258 18.9261 9.98649C20.1011 8.20232 20.4559 6.30342 19.967 4.37683C19.691 3.26519 19.21 2.41068 18.4096 1.60365C17.6131 0.800575 16.7614 0.337719 15.6456 0.100357C15.0857 -0.0183239 14.0526 -0.0301933 13.5637 0.0805759C12.1995 0.377279 11.1546 1.06167 10.2004 2.28013L10.09 2.41859L9.98357 2.28013C9.04122 1.08541 8.01212 0.401016 6.69913 0.100357C6.30878 0.00936699 5.4098 -0.0301933 4.97214 0.0251923ZM6.28907 1.23178C7.40885 1.42958 8.37487 2.07837 9.13979 3.15046C9.26991 3.3364 9.43156 3.55793 9.49465 3.64892C9.78643 4.06035 10.3936 4.06035 10.6854 3.64892C10.7485 3.55793 10.9102 3.3364 11.0403 3.15046C12.0851 1.68673 13.5401 0.998377 15.1251 1.21596C16.8837 1.45728 18.2558 2.69156 18.7802 4.50738C19.1942 5.94342 19.0128 7.45067 18.2597 8.80759C17.6289 9.94298 16.5761 11.1337 14.7427 12.7834C13.8555 13.5786 10.1255 16.7988 10.09 16.7988C10.0506 16.7988 6.33638 13.5904 5.4374 12.7834C2.61823 10.2476 1.50633 8.66518 1.23821 6.8098C1.06472 5.61112 1.31312 4.32145 1.91639 3.30475C2.82326 1.77376 4.58968 0.935081 6.28907 1.23178Z"
                    fill="black"
                  />
                </svg>
              </span>{" "}
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
