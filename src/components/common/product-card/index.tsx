"use client";
import { Button } from "@/components/ui/button";
import { icons } from "@/constants/icons";
import useAuth from "@/hooks/useAuth";
import useToaster from "@/hooks/useToaster";
import {
  useAddToCartMutation,
  useGetEmailCartQuery,
} from "@/store/features/cart/cartApi";
import { addStoredCart, getStoredData } from "@/store/features/cart/cartSlice";
import { get_store_data } from "@/utils/get_store_data";
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
  const [addToCartItem]: any = useAddToCartMutation();
  const { isAuthenticated, customerInfo }: any = useAuth();
  const showToast = useToaster();
  // const { data, refetch }: any = useGetEmailCartQuery({
  //   email: customerInfo?.email,
  // });
  const [addToCart]: any = useAddToCartMutation();
  // handle add to cart
  // const handleAddToCart = async (data: any) => {
  //   if (!isAuthenticated) {
  //     router.push("/login");
  //   } else {
  //     const payload = {
  //       email: customerInfo.email,
  //       title: data?.title,
  //       productId: data?._id,
  //       price: data?.offer_price,
  //       totalPrice: data?.offer_price,
  //       image: data?.image?.viewUrl,
  //       quantity: 0,
  //     };
  //     const res: any = await addToCart({ payload });
  //     if (res?.data?.isSuccess) {
  //       // refetch();
  //     }
  //   }
  // };

  const handleAddToCart = async (productData: any) => {
    const data = productData;
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (token && isAuthenticated) {
      const payload = {
        email: customerInfo.email,
        title: data?.title,
        productId: data?._id,
        price: data?.price,
        image: data?.image?.viewUrl,
        quantity: 0,
      };
      const res: any = await addToCartItem({ payload });
      if (res.data.isSuccess) {
        showToast("success", "Cart added successfull");
        const data: any = await get_store_data();
        if (data?.length) {
          dispatch(getStoredData(data));
        } else {
          dispatch(getStoredData([]));
        }
      } else {
        showToast("error", "Cart can't add");
      }
    } else {
      let product_items: any = localStorage.getItem("cart_items");

      product_items = JSON.parse(product_items);

      if (product_items?.length) {
        const data = productData;
        const item_id = data?._id;

        if (item_id) {
          const lists: any = [...product_items];

          const filters = lists.filter((d: any) => {
            return d?.productId == item_id;
          });

          if (filters.length == 1) {
            let new_lists: any = [];
            product_items.map((d: any) => {
              if (d?.productId == item_id) {
                const obj = { ...d };
                obj.quantity = d.quantity + 1;
                new_lists = [...new_lists, obj];
              } else {
                const obj = { ...d };
                new_lists = [...new_lists, obj];
              }
            });
            localStorage.setItem("cart_items", JSON.stringify(new_lists));
            dispatch(getStoredData(new_lists));
          } else {
            const payload = {
              email: "",
              title: data?.title,
              productId: data?._id,
              price: data?.price,
              image: data?.image?.viewUrl,
              quantity: 1,
            };
            let cart_items: any = [...product_items];
            cart_items = [...cart_items, payload];
            localStorage.setItem("cart_items", JSON.stringify(cart_items));
            dispatch(getStoredData(cart_items));
          }
        } else {
          console.log("Product Id Not Found.");
        }
      } else {
        const payload = {
          email: "",
          title: data?.title,
          productId: data?._id,
          price: data?.price,
          image: data?.image?.viewUrl,
          quantity: 1,
        };
        let cart_items: any = [];
        cart_items = [...cart_items, payload];
        localStorage.setItem("cart_items", JSON.stringify(cart_items));
        dispatch(getStoredData(cart_items));
      }
    }
  };

  // useEffect(() => {
  //   dispatch(addStoredCart(data?.response));
  // }, [data?.response, dispatch]);
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
            <div className="absolute w-full z-50 left-[155px] sm:left-14 px-[30px]  top-40 mx-auto group-hover:top-[47px] transition-all duration-300 ease-in-out">
              <Button
                disabled={isInCart}
                onClick={() => handleAddToCart(datas)}
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
