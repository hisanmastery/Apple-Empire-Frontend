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
import {
  useAddToCartDeleteMutation,
  useUpdateCartMutation,
} from "@/store/features/cart/cartApi";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { get_store_data } from "@/utils/get_store_data";
import useToaster from "@/hooks/useToaster";
import Breadcrumbs from "@/components/common/breadcrumbs";

interface Product {
  productId: string;
  _id: string;
  title: string;
  price: string | number;
  image: string;
  quantity: number;
}

const CartPage = ({ className }: any) => {
  const { isAuthenticated } = useAuth();
  const showToast = useToaster();
  const { storedCart } = useSelector((state: any) => state?.cart);
  const [promoCode, setPromoCode] = useState("");
  const [discountPrice, setDiscountPrice] = useState(0);
  const dispatch = useDispatch();
  const [updateCart] = useUpdateCartMutation();
  const [addToCartDelete] = useAddToCartDeleteMutation();

  const refetchCartData = async () => {
    const data: any = await get_store_data();
    dispatch(getStoredData(data));
  };

  // Constants
  const PROMO_CODE = "appleempire";
  const SHIPPING_RATE = 0.2;
  const DISCOUNT_RATE = 0.1;

  const quantityUpdate = async (productData: Product, isIncrement: boolean) => {
    const quantity = isIncrement
      ? productData.quantity + 1
      : productData.quantity - 1;
    const unitPrice =
      typeof productData.price === "string"
        ? parseFloat(productData.price.replace(/,/g, ""))
        : productData.price;
    const newTotalPrice = unitPrice * quantity;

    const payload = {
      ...productData,
      quantity,
      totalPrice: newTotalPrice,
    };
    const res: any = await updateCart({ id: productData._id, payload });

    if (res?.data?.isSuccess) {
      showToast("success", res?.data?.message);
      await refetchCartData();
    } else {
      showToast("error", "Something went wrong, please try again");
    }
  };

  const handleIncrementQuantity = async (productData: Product) => {
    const token = localStorage.getItem("token");

    if (token && isAuthenticated) {
      await quantityUpdate(productData, true);
    } else {
      let product_items: Product[] = JSON.parse(
        localStorage.getItem("cart_items") || "[]"
      );

      const item_id = productData?.productId;
      if (item_id) {
        const updatedItems = product_items.map((item) => {
          if (item.productId === item_id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        localStorage.setItem("cart_items", JSON.stringify(updatedItems));
        dispatch(getStoredData(updatedItems));
      }
    }
  };

  const handleDecrementQuantity = async (item: Product) => {
    const token = localStorage.getItem("token");

    if (token && isAuthenticated) {
      await quantityUpdate(item, false);
    } else {
      const updatedCart = storedCart.map((cartItem: Product) => {
        if (cartItem.productId === item.productId) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });

      localStorage.setItem("cart_items", JSON.stringify(updatedCart));
      dispatch(getStoredData(updatedCart));
    }
  };

  // Remove item from cart
  const removeCart = async (product: any) => {
    const id = product?.productId;
    const token = localStorage.getItem("token");

    if (token && isAuthenticated) {
      const res: any = await addToCartDelete({ id: product._id });

      if (res?.data?.isSuccess) {
        showToast("success", res.data.message);
        await refetchCartData();
      } else {
        showToast("error", res.error.data.message);
      }
    } else {
      const updatedCart = storedCart.filter(
        (item: any) => item.productId !== id
      );
      localStorage.setItem("cart_items", JSON.stringify(updatedCart));
      dispatch(getStoredData(updatedCart));
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
    <div className="container mt-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          {
            label: "Cart",
            href: "/cart",
          }
        ]}
      />
      <div className={`w-full mt-4 ${className || ""}`}>
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
                    <TableRow
                      key={product.productId}
                      className="bg-_white hover:bg-_white"
                    >
                      <TableCell>
                        <p>{product.title}</p>
                        <div
                          className="mt-4 text-red-500 cursor-pointer"
                          onClick={() => removeCart(product)}
                        >
                          Remove
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-start gap-4 items-center mt-2">
                          <button
                            onClick={() => handleDecrementQuantity(product)}
                            type="button"
                            className="text-base w-8 h-8 flex justify-center items-center rounded-full border border-qgray text-qblack"
                          >
                            -
                          </button>
                          <span className="text-qblack text-base">
                            {product?.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrementQuantity(product)}
                            type="button"
                            className="text-base w-8 h-8 flex justify-center items-center rounded-full border border-qgray text-qblack"
                          >
                            +
                          </button>
                        </div>
                      </TableCell>
                      <TableCell>{product.price}৳</TableCell>
                      <TableCell>
                        {parseFloat(product.price) * product.quantity}৳
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="pt-5">
                <Link href="/section/top-selling-product">
                  <Button className="bg-_primary text-white">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
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
                    <p>৳ {subTotal?.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p>Discount</p>
                    <p>৳ {discountPrice?.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p>Shipping</p>
                    <p>৳ {shippingCost?.toFixed(2)}</p>
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
                  <Button
                    className="mt-3 w-full"
                    onClick={handlePromoCodeApply}
                  >
                    Apply
                  </Button>
                </div>

                <hr className="mt-4" />

                {/* Total Amount */}
                <div className="flex justify-between items-center mt-6">
                  <p>Total Amount</p>
                  <p>৳ {totalPrice?.toFixed(2)}</p>
                </div>

                {/* Checkout Button */}
                <div className="mt-5">
                  <Link href="/cart/checkout">
                    <Button className="w-full bg-_primary text-white">
                      Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
