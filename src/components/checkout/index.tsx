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
    <main className=" container mx-auto">
      <div>
        <h2 className="uppercase text-2xl">Checkout</h2>
        <p>Please enter your details below to complete your purchase</p>
      </div>
      <div className="grid grid-cols-3 justify-center gap-8 items-center mt-10">
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
