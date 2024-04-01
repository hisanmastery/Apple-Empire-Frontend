"use client";
import { useSelector } from "react-redux";
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
const Carts = () => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  // Using reduce to calculate the total price
  const totalPrice = storedCart?.reduce((acc: number, product: any) => {
    return acc + product?.quantity * parseInt(product?.offer_price);
  }, 0);
  return (
    <Drawer>
      <DrawerTrigger className="z-50" asChild>
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
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-[300px] overflow-auto">
          <CartItem />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Carts;
