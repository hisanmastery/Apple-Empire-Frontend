"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStoredCart } from "../../../store/features/cart/cartSlice";
import Link from "next/link";
import InputQuantityCom from "@/components/carts/InputQuantityCom";

import { getItemLocalStorage, setItemLocalstorage } from "@/utils/localstorage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CartPage = ({ className }: any) => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  const [promoCode, setPromoCode] = useState("");
  const [discountPrice, setDiscountPrice] = useState(0);
  console.log(promoCode);
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
  // shipping charge
  const shippingCost = subTotal / 5; // shiping cost total price 5%
  // handle submit promocode
  const handlePromoCode = () => {
    const cuponCode = "appleempire";
    if (promoCode === cuponCode) {
      setDiscountPrice(subTotal / 10); // descrount 10%
      alert("apply successfull");
    } else {
      alert("opps promo code not correct");
    }
  };

  return (
    <div className={`w-full container mt-4 ${className || ""}`}>
      {storedCart?.length == 0 ? (
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
        <div className="grid grid-cols-6 gap-12 justify-center">
          {/* left side cart  */}
          <div className="col-span-4">
            <div className="flex justify-between items-center">
              <h4 className="text-2xl font-semibold">Shopping Cart</h4>
              <h4 className="text-2xl font-semibold">
                {storedCart?.length} Items
              </h4>
            </div>
            <hr className="border mt-4" />
            {storedCart?.map((product: any, index: number) => (
              <div
                key={index}
                className="relative w-full  backdrop-blur-md bg-white rounded p-3 mt-7 "
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

            <Link href={"/products"}>
              <p className="text-blue-600 text-sm cursor-pointer mt-4 hover:text-blue-800">
                Continue Shopping
              </p>
            </Link>
          </div>
          {/* order summary  */}
          <div className="col-span-2">
            {storedCart?.length !== 0 && (
              <div className="w-full">
                <h4 className="text-2xl font-semibold text-center">
                  Order Summary
                </h4>
                <hr className="border mt-4" />
                {/* summary */}
                <div>
                  {/* items */}
                  <div className="flex justify-between items-center mt-9">
                    <p className=" ">Items ({storedCart?.length})</p>
                    <p className="">{subTotal}$</p>
                  </div>
                  {/* discount */}
                  <div className="flex justify-between items-center mt-2">
                    <p className=" ">Discount</p>
                    <p className="">{discountPrice || 0}$</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className=" ">Shipping</p>
                    <p className="">{shippingCost}$</p>
                  </div>
                </div>

                {/* promo code for descount */}
                <div className=" mt-4">
                  <p className="mb-2 font-semibold">Promo Code</p>
                  <Input
                    onChange={(e: any) => setPromoCode(e.target.value)}
                    type="text"
                    placeholder="Enter your code"
                  />
                  <Button onClick={() => handlePromoCode()} className="mt-3">
                    Apply
                  </Button>
                </div>
                {/* sub total */}
                <hr />
                <div className="flex justify-between items-center mt-9">
                  <p>Total Amount</p>
                  <p className="">{subTotal + shippingCost - discountPrice}$</p>
                </div>
                <div className="mt-5">
                  <Link href={"/cart/checkout"} className="w-full ">
                    <button
                      // onClick={() => handleCartClick()}
                      className="bg-blue-400 text-white p-2 w-full "
                    >
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
