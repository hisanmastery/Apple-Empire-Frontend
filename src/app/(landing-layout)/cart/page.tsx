"use client";
import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addStoredCart,
  getStoredData,
} from "../../../store/features/cart/cartSlice";
import Link from "next/link";
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
import Image from "next/image";

const CartPage = ({ className }: any) => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  const [promoCode, setPromoCode] = useState("");
  const [discountPrice, setDiscountPrice] = useState(0);
  const dispatch = useDispatch();
  const [addToCartDelete] = useAddToCartDeleteMutation();

  // Constants
  const PROMO_CODE = "appleempire";
  const SHIPPING_RATE = 0.2;
  const DISCOUNT_RATE = 0.1;

  // Helper function to update quantity
  const updateQuantity = (index: number, newQuantity: number) => {
    const updatedCart = storedCart?.map((cartItem: any, idx: number) => {
      if (idx === index) {
        return { ...cartItem, quantity: Math.max(newQuantity, 1) };
      }
      return cartItem;
    });

    // Update cart in local storage and dispatch to Redux
    localStorage.setItem("cart_items", JSON.stringify(updatedCart));
    dispatch(getStoredData(updatedCart));
  };

  // Remove item from cart
  const removeCartItem = async (id: string) => {
    try {
      const res: any = await addToCartDelete({ id });
      if (res?.data?.isSuccess) {
        const updatedCart = storedCart.filter((item: any) => item._id !== id);
        dispatch(addStoredCart(updatedCart));
      }
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  // Handle promo code application
  const handlePromoCodeApply = () => {
    if (promoCode.toLowerCase() === PROMO_CODE) {
      setDiscountPrice(subTotal * DISCOUNT_RATE);
    } else {
      alert("Invalid promo code. Please try again.");
    }
  };

  // Calculating subtotal
  const subTotal = useMemo(() => {
    return storedCart?.reduce((acc: number, product: any) => {
      return acc + product.quantity * parseFloat(product.price);
    }, 0);
  }, [storedCart]);

  // Shipping cost based on subtotal
  const shippingCost = useMemo(() => subTotal * SHIPPING_RATE, [subTotal]);

  // Total price calculation
  const totalPrice = useMemo(() => {
    return subTotal + shippingCost - discountPrice;
  }, [subTotal, shippingCost, discountPrice]);

  return (
    <div className={`w-full msm:container mt-4 ${className || ""}`}>
      {storedCart?.length === 0 ? (
        <div className="h-[90vh] flex justify-center items-center">
          <Image
            src="https://cdn-icons-png.freepik.com/512/7835/7835563.png"
            alt="Empty cart"
            width={160}
            height={160}
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-6 grid-cols-3 gap-12 justify-center">
          {/* Cart items */}
          <div className="col-span-4">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-semibold">Shopping Cart</h4>
              <h4 className="text-xl font-semibold">
                {storedCart?.length} Items
              </h4>
            </div>
            <hr className="border mt-4" />

            {/* Cart Table */}
            <Table>
              <TableHeader className="bg-_white">
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {storedCart?.map((product: any, index: number) => (
                  <TableRow key={product._id} className="bg-_white">
                    <TableCell>
                      <p>{product.title}</p>
                      <div
                        className="mt-4 text-red-500 cursor-pointer"
                        onClick={() => removeCartItem(product._id)}
                      >
                        Remove
                      </div>
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        value={product.quantity}
                        min="1"
                        onChange={(e) => {
                          const quantity = parseInt(e.target.value);
                          if (!isNaN(quantity)) {
                            updateQuantity(index, quantity);
                          }
                        }}
                        className="w-20 border border-_primary"
                      />
                    </TableCell>
                    <TableCell>{product.price}$</TableCell>
                    <TableCell>
                      {parseFloat(product.price) * product.quantity}$
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Link href="/section/top-selling-product">
              <p className="text-blue-600 text-sm mt-4 hover:text-blue-800">
                Continue Shopping
              </p>
            </Link>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-2 col-span-4">
            <div className="w-full p-4 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold text-center">
                Order Summary
              </h4>
              <hr className="border mt-4" />

              {/* Summary details */}
              <div className="mt-4">
                <div className="flex justify-between">
                  <p>Items ({storedCart?.length})</p>
                  <p>$ {subTotal}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p>Discount</p>
                  <p>$ {discountPrice}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p>Shipping</p>
                  <p>$ {shippingCost}</p>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mt-4">
                <p className="mb-2 font-semibold">Promo Code</p>
                <Input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter your code"
                />
                <Button className="mt-3 w-full" onClick={handlePromoCodeApply}>
                  Apply
                </Button>
              </div>

              <hr className="mt-4" />

              {/* Total Amount */}
              <div className="flex justify-between items-center mt-6">
                <p>Total Amount</p>
                <p>$ {totalPrice}</p>
              </div>

              {/* Checkout Button */}
              <div className="mt-5">
                <Link href="/cart/checkout">
                  <Button className="w-full bg-blue-400 text-white">
                    Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
