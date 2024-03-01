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
const Carts = () => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  // Using reduce to calculate the total price
  const totalPrice = storedCart?.reduce((acc: number, product: any) => {
    return acc + product?.quantity * parseInt(product?.offer_price);
  }, 0);
  return (

      <Drawer>
        <DrawerTrigger className="z-50" asChild>
          <div className="top-[50%] right-0 fixed z-50">
            <div className="backdrop-blur-lg  shadow border cursor-pointer">
              <icons.AiOutlineShopping className="text-3xl text-center w-7 mx-auto text-blue-500" />
              <p className="text-center font-semibold">
                {storedCart?.length} Item
              </p>
              <p className="mt-4 bg-blue-400  p-3 text-white font-bold w-full">
                {totalPrice?.toFixed(2)} $
              </p>
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
  );
};

export default Carts;
