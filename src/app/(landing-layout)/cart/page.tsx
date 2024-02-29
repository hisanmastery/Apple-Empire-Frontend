"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStoredCart } from "../../../store/features/cart/cartSlice";
import Link from "next/link";
import InputQuantityCom from "@/components/carts/InputQuantityCom";

import { getItemLocalStorage, setItemLocalstorage } from "@/utils/localstorage";

const CartPage = ({ className }: any) => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedProduct = getItemLocalStorage("carts") || [];
    dispatch(addStoredCart(storedProduct));
  }, [dispatch]);

  // handle increment quantity
  const handleIncrement = (index: number, newQuantity: number) => {
    const updatedStoredCart = JSON.parse(JSON.stringify(storedCart));
    updatedStoredCart[index].quantity = newQuantity;
    localStorage.setItem("carts", JSON.stringify(updatedStoredCart));
    // refetch
    const storedProduct = getItemLocalStorage("carts") || [];
    dispatch(addStoredCart(storedProduct));
  };

  // handle decrement quantity
  const handleDecrement = (index: number, newQuantity: number) => {
    const updatedStoredCart = JSON.parse(JSON.stringify(storedCart));
    updatedStoredCart[index].quantity = newQuantity;
    localStorage.setItem("carts", JSON.stringify(updatedStoredCart));
    // refetch
    const storedProduct = getItemLocalStorage("carts") || [];
    dispatch(addStoredCart(storedProduct));
  };

  // handle remove  cart in right sidebar
  const removeCart = (id: any) => {
    const storedProduct = getItemLocalStorage("carts") || [];
    const updatedCart = storedProduct.filter((item: any) => item.id !== id);
    setItemLocalstorage("carts", updatedCart);
    const storedProducts = getItemLocalStorage("carts") || [];

    dispatch(addStoredCart(storedProducts));
  };

  // calculate total price
  const subTotal = storedCart?.reduce((acc: number, product: any) => {
    return acc + product?.quantity * parseInt(product?.offer_price);
  }, 0);

  return (
    <div className={`w-full ${className || ""}`}>
      {storedCart.length == 0 ? (
        <div className="h-[90vh] w-full flex justify-center items-center">
          <div>
            <img
              className="w-40 mx-auto"
              src="https://cdn-icons-png.freepik.com/512/7835/7835563.png"
              alt=""
            />
          </div>
        </div>
      ) : (
        <>
          {storedCart?.map((product: any, index: number) => (
            <div
              key={index}
              className="relative w-full  backdrop-blur-md bg-stone-100 rounded p-1 mt-5"
            >
              {/* Product details */}
              <div className="flex items-center ">
                <div className="overflow-hidden flex-shrink-0">
                  <img
                    src={`${product?.image}`}
                    alt="product"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-[15px] text-qblack">{product?.title}</p>
                  <div className="flex space-x-1 items-center"></div>
                  <p className="text-[15px] font-normal">
                    {product?.offer_price} $
                  </p>
                </div>
              </div>

              {/* Quantity and total */}
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center">
                  <span className="text-[15px] font-normal">Quantity:</span>
                  <div className="ml-2">
                    <InputQuantityCom
                      quantity={product.quantity ?? 1}
                      onIncrement={(newQuantity: number) =>
                        handleIncrement(index, newQuantity)
                      }
                      onDecrement={(newQuantity: number) =>
                        handleDecrement(index, newQuantity)
                      }
                    />
                  </div>
                </div>
                <div className="text-[15px] font-normal">
                  {parseInt(product?.offer_price) * (product.quantity ?? 1)}$
                </div>
                <div className="cursor-pointer">
                  <span onClick={() => removeCart(product?.id)}>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                        fill="#AAAAAA"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {/* order place area */}

      {storedCart?.length !== 0 && (
        <div className="absolute  bottom-3 left-2 right-2">
          <div className=" flex gap-2">
            <Link href={"/cart/checkout"} className="w-full ">
              <button
                // onClick={() => handleCartClick()}
                className="bg-blue-400 text-white p-2 w-full "
              >
                Checkout
              </button>
            </Link>
            <button
              // onClick={() => handleCartClick()}
              className="bg-blue-500 text-white p-2 w-full "
            >
              Total Amount: {subTotal} $
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
