"use client";
import { TableRow } from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import InputQuantityCom from "../InputQuantityCom";
import { addStoredCart } from "@/store/features/cart/cartSlice";
import Link from "next/link";
import { icons } from "@/constants/icons";
import { Button } from "@/components/ui/button";

import {
  useAddToCartDeleteMutation,
  useGetEmailCartQuery,
} from "@/store/features/cart/cartApi";

const CartItem = () => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  const [addToCartDelete] = useAddToCartDeleteMutation();
  // Using reduce to calculate the total price
  const totalPrice = storedCart?.reduce((acc: number, product: any) => {
    return acc + product?.quantity * parseInt(product?.offer_price);
  }, 0);

  const dispatch = useDispatch();

  // // handle increment quantity
  // const handleIncrement = (index: number, newQuantity: number) => {
  //   const updatedStoredCart = JSON.parse(JSON.stringify(storedCart));
  //   updatedStoredCart[index].quantity = newQuantity;
  //   dispatch(addStoredCart(updatedStoredCart));
  // };

  // // handle decrement quantity
  // const handleDecrement = (index: number, newQuantity: number) => {
  //   const updatedStoredCart = JSON.parse(JSON.stringify(storedCart));
  //   updatedStoredCart[index].quantity = newQuantity;
  //   dispatch(addStoredCart(updatedStoredCart));
  // };
  // CartItem.jsx

  // handle increment quantity for a specific product
  const handleIncrement = async (productId: string, newQuantity: number) => {
    const updatedStoredCart = storedCart.map((product: any) => {
      if (product._id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    await dispatch(addStoredCart(updatedStoredCart));
  };

  const handleDecrement = async (productId: string, newQuantity: number) => {
    // Get the current stored cart
    const storedProduct = storedCart || [];

    // Find the product to decrement and update its quantity
    const updatedStoredCart = storedProduct.map((item: any) => {
      if (item._id === productId) {
        // Ensure the quantity doesn't go below 1
        const updatedQuantity = Math.max(1, newQuantity);
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });

    // Update the cart in the Redux store
    dispatch(addStoredCart(updatedStoredCart));
  };

  // handle remove  cart in right sidebar
  const removeCart = async (id: any) => {
    const res: any = await addToCartDelete({ id });
    if (res?.data?.isSuccess) {
      const storedProduct = storedCart || [];
      const updatedCart = storedProduct.filter((item: any) => item._id !== id);
      dispatch(addStoredCart(updatedCart));
    }
  };

  // calculate total price
  const subTotal = storedCart?.reduce((acc: number, product: any) => {
    return acc + product?.quantity * parseInt(product?.price);
  }, 0);

  return (
    <div className="p-2">
      <div>
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-semibold">Shopping Cart</h4>
          <h4 className="text-xl font-semibold">{storedCart?.length} Items</h4>
        </div>

        <div className="overflow-auto mb-10">
          {storedCart?.map((product: any, index: number) => (
            <div key={index} className="border p-1 mt-2">
              <div className="mt-4 flex justify-between items-center">
                <img src={product?.image} className="w-16" alt="" />
                <div className="font-medium w-1/2">
                  <p>{product?.title?.slice(0, 30)}...</p>
                </div>
                <div className="font-medium flex">
                  <p>{parseInt(product?.price) * product?.quantity + "$"}</p>
                </div>
                <div className="cursor-pointer mx-2 font-bold text-red-500 hover:text-red-700">
                  <p onClick={() => removeCart(product?._id)}>
                    <icons.crossIcon />
                  </p>
                </div>
              </div>
              <div className="font-medium">
                <InputQuantityCom
                  className={"border-none"}
                  quantity={product?.quantity ?? 1}
                  onIncrement={(newQuantity: number) =>
                    handleIncrement(product?._id, newQuantity)
                  }
                  onDecrement={(newQuantity: number) =>
                    handleDecrement(product?._id, newQuantity)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <div className="sticky bottom-0 left-0 right-0 w-full flex">
        <Link href={"/cart"} className="w-full">
          <button className="bg-blue-400 text-white p-2 w-full">
            Go to Checkout
          </button>
        </Link>
        <button className="bg-_primary text-white p-2 w-full">
          Total: {subTotal} $
        </button>
      </div>
    </div>
  );
};

export default CartItem;
