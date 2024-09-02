"use client";
import { Button } from "@/components/ui/button";
import { icons } from "@/constants/icons";
import useAuth from "@/hooks/useAuth";
import {
  useAddToCartMutation,
  useGetEmailCartQuery,
} from "@/store/features/cart/cartApi";
import { addStoredCart } from "@/store/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { title } from "process";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const ProductCard = ({ datas }: any) => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, customerInfo }: any = useAuth();
  const { data, refetch }: any = useGetEmailCartQuery({
    email: customerInfo?.email,
  });
  const [addToCart]: any = useAddToCartMutation();
  // handle cart click
  const handleCartClick = async (data: any) => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      const payload = {
        email: customerInfo.email,
        title: data?.title,
        productId: data?._id,
        price: data?.offer_price,
        totalPrice: data?.offer_price,
        image: data?.image?.viewUrl,
        quantity: 0,
      };
      const res: any = await addToCart({ payload });
      if (res?.data?.isSuccess) {
        refetch();
      }
    }
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
      className="overflow-hidden"
      style={{ boxShadow: "0px 0px 10px 0px gray" }}
    >
      <>
        <div className="cursor-pointer product-card-one w-full h-full max-h-[300px] text-nowrap bg-white relative group hover:scale-105 ease-in-out duration-700">
          <Link href={`/products/${datas?._id}`}>
            <div
              className="product-card-img w-full h-[300px]"
              style={{
                backgroundImage: `url(${datas?.image?.viewUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "200px",
                height: "200px",
                margin: "auto",
              }}
            ></div>
          </Link>
          <div className=" px-[30px] pb-[30px] relative">
            {/* add to card button */}
            <div className="absolute w-full z-50  px-[30px]  top-40 mx-auto group-hover:top-[50px] transition-all duration-300 ease-in-out">
              <Button
                disabled={isInCart}
                onClick={() => handleCartClick(datas)}
                className={`bg-_primary uppercase mb-52 ${
                  !isInCart
                    ? " hover:bg-_secondary hover:text-black"
                    : "bg-slate-500 opacity-40"
                } `}
                type="button"
              >
                <div className="flex items-center space-x-3 w-full">
                  <span></span>
                  <span>Add To Cart</span>
                </div>
              </Button>
            </div>
            <Link href={`/products/${datas?._id}`}>
              <div className="reviews flex space-x-[1px] mb-3">
                {Array.from(Array(datas.review), () => (
                  <span key={datas.review + Math.random()}>
                    {/* <Star /> */}
                    <div className="flex text-yellow-400">
                      {<icons.FaStar />}
                      {<icons.FaStar />}
                      {<icons.FaStar />}
                      {<icons.FaStar />}
                      {<icons.FaStar />}
                    </div>
                  </span>
                ))}
              </div>
              <p className="title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-qyellow cursor-pointer">
                {datas.title.slice(0, 22)}...
              </p>
            </Link>
            <p className="price">
              <span className="main-price text-qgray line-through font-600 text-[18px] text-red-500">
                {datas.price}
              </span>
              <span className="offer-price text-qred font-600 text-[18px] ml-2">
                {datas.offer_price}
              </span>
            </p>
          </div>
          {/* quick-access-btns */}
          <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20  transition-all duration-300 ease-in-out">
            <a href="#">
              <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                {<icons.FavoriteBorder className="text-xl" />}
              </span>
            </a>
            <a href="#">
              <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                {<icons.MdZoomOutMapIcon className="text-xl" />}
              </span>
            </a>
            <a href="#">
              <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                {<icons.LiaSyncSolidIcons className="text-xl" />}
                {/* comperr */}
              </span>
            </a>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductCard;
