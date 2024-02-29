"use client";
import { useSelector } from "react-redux";
import CartPage from "@/app/(landing-layout)/cart/page";
import { icons } from "@/constants/icons";
const Carts = () => {
  const { storedCart } = useSelector((state:any) => state?.cart);
  // Using reduce to calculate the total price
  const totalPrice = storedCart?.reduce((acc: number, product: any) => {
    return acc + product?.quantity * parseInt(product?.offer_price);
  }, 0);
  return (
    <div>
      <div className="drawer drawer-end cursor-pointer">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button  top-[50%] right-0 fixed"
          >
            {/* Open drawer */}
            <div className="backdrop-blur-lg  shadow border cursor-pointer">
              <icons.AiOutlineShopping className="text-3xl text-center w-7 mx-auto text-blue-500" />
              <p className="text-center font-semibold">
                {storedCart?.length} Item
              </p>
              <p className="mt-4 bg-blue-400  p-3 text-white font-bold w-full">
                {totalPrice?.toFixed(2)} $
              </p>
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* carts */}
          <div className="menu p-4 w-80 min-h-full bg-white text-base-content relative">
            <CartPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
