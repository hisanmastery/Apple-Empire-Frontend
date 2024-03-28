"use client";
import { useSelector } from "react-redux";
import ShippingAddress from "./shiping-address";
import ShippingMethod from "./shipping-method";
import OrderSummary from "./order-summary";
const Checkout = () => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  // calculate sub total price
  const subTotal = storedCart?.reduce((acc: any, product: any) => {
    return acc + product?.quantity * parseInt(product?.offer_price);
  }, 0);
  return (
    <main className=" container mx-auto mt-10">
      <div className="flex justify-between items-center">
        <div className="w-[60%]">
          <h2 className="uppercase text-2xl">Checkout</h2>
          <p>Please enter your details below to complete your purchase</p>
        </div>
        <div>
          <button className="border-2 border-orange-500 text-orange-500 px-5 p-2 rounded-md hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-1000">
            BACK TO CART
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-center gap-14 mt-10">
        <div>
          <ShippingAddress />
        </div>
        <div>
          <ShippingMethod />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </main>
  );
};

export default Checkout;
