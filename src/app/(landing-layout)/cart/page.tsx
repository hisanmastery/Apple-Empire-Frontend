"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStoredCart } from "../../../store/features/cart/cartSlice";
import Link from "next/link";
import InputQuantityCom from "@/components/carts/InputQuantityCom";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAddToCartDeleteMutation } from "@/store/features/cart/cartApi";

const CartPage = ({ className }: any) => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  const [promoCode, setPromoCode] = useState("");
  const [discountPrice, setDiscountPrice] = useState(0);
  const dispatch = useDispatch();
  const [addToCartDelete] = useAddToCartDeleteMutation();
  // handle increment quantity
  const handleIncrement = (index: number, newQuantity: number) => {
    const updatedStoredCart = JSON.parse(JSON.stringify(storedCart));
    updatedStoredCart[index].quantity = newQuantity;
    dispatch(addStoredCart(updatedStoredCart));
  };

  // handle decrement quantity
  const handleDecrement = (index: number, newQuantity: number) => {
    const updatedStoredCart = JSON.parse(JSON.stringify(storedCart));
    updatedStoredCart[index].quantity = newQuantity;
    dispatch(addStoredCart(updatedStoredCart));
  };

  // handle remove  cart in right sidebar
  const removeCart = async (id: any) => {
    // const storedProduct = storedCart || [];
    // const updatedCart = storedProduct.filter((item: any) => item.id !== id);
    // dispatch(addStoredCart(updatedCart));
    const res: any = await addToCartDelete({ id });
    console.log(res);
  };

  // calculate total price
  const subTotal = storedCart?.reduce((acc: number, product: any) => {
    console.log(acc, product);
    return acc + product?.quantity * parseInt(product?.price);
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
    <div
      data-aos="fade-left"
      className={`w-full container mt-4 ${className || ""}`}
    >
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
        <div className="grid md:grid-cols-6 grid-cols-3 gap-12 justify-center">
          {/* left side cart  */}
          <div className="col-span-4">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-semibold">Shopping Cart</h4>
              <h4 className="text-xl font-semibold">
                {storedCart?.length} Items
              </h4>
            </div>
            <hr className="border mt-4" />
            {/* list of cart */}

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  {/* <TableHead></TableHead> */}
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-white">
                {storedCart?.map((product: any, index: number) => (
                  <TableRow key={index} className="mt-4">
                    <TableCell className="font-medium w-1/3">
                      <p>{product?.title}</p>

                      <div className="cursor-pointer mt-4 font-bold text-red-500 hover:text-red-700">
                        <p onClick={() => removeCart(product?._id)}>Remove</p>
                      </div>
                    </TableCell>
                    {/* <TableCell className="font-medium">
                      <InputQuantityCom
                        quantity={product.quantity ?? 1}
                        onIncrement={(newQuantity: number) =>
                          handleIncrement(index, newQuantity)
                        }
                        onDecrement={(newQuantity: number) =>
                          handleDecrement(index, newQuantity)
                        }
                      />
                    </TableCell> */}
                    <TableCell className="font-medium">
                      {product?.quantity}
                    </TableCell>
                    <TableCell className="font-medium">
                      {product?.price}
                    </TableCell>
                    <TableCell className="font-medium">
                      {parseInt(product?.price) * product?.quantity}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Link href={"/products"}>
              <p className="text-blue-600 text-sm cursor-pointer mt-4 hover:text-blue-800">
                Continue Shopping
              </p>
            </Link>
          </div>
          {/* order summary  */}
          <div className="md:col-span-2 col-span-4">
            {storedCart?.length !== 0 && (
              <div className="w-full">
                <h4 className="text-xl font-semibold text-center">
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
