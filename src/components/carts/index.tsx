"use client";
import { useDispatch, useSelector } from "react-redux";
import CartPage from "@/app/(landing-layout)/cart/page";
import { icons } from "@/constants/icons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import CartItem from "./cartItem";
import SheetDrawer from "../common/sheet-drawer/indext";
import { useEffect, useState } from "react";
import { useGetEmailCartQuery } from "@/store/features/cart/cartApi";
import { addStoredCart } from "@/store/features/cart/cartSlice";
import useAuth from "@/hooks/useAuth";
const Carts = () => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { customerInfo } = useAuth()
  console.log(customerInfo);
  const { data, refetch }: any = useGetEmailCartQuery(
    {
      email: "dalim@gmail.com",
    },
    { pollingInterval: 1000 }
  );
  useEffect(() => {
    dispatch(addStoredCart(data?.response));
    refetch();
  }, [data?.response, dispatch, refetch]);
  // Using reduce to calculate the total price
  const totalPrice = storedCart?.reduce((acc: number, product: any) => {
    return acc + product?.quantity * parseInt(product?.price);
  }, 0);
  return (
    <div>
      <div className="z-50" onClick={() => setIsOpen(!isOpen)}>
        <div className="top-[50%] right-0 fixed z-50 w-20">
          <div className="backdrop-blur-lg  shadow border cursor-pointer text-sm">
            <icons.AiOutlineShopping className="text-3xl text-center w-7 mx-auto text-blue-500" />
            <p className="text-center font-semibold">
              {storedCart?.length} Item
            </p>
            <p className="mt-4 bg-blue-400 p-1 text-white font-bold w-full text-center">
              {totalPrice?.toFixed(1)} $
            </p>
          </div>
        </div>
      </div>
      <SheetDrawer title={""} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="overflow-hidden">
          <div>
            {storedCart?.length > 0 ? (
              <CartItem />
            ) : (
              <div className="text-center h-screen flex flex-col justify-center items-center">
                <h1>Emptry cart</h1>{" "}
              </div>
            )}
          </div>
        </div>
      </SheetDrawer>
    </div>
  );
};

export default Carts;
