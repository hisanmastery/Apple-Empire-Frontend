"use client";

import { useSelector } from "react-redux";
import CheckoutProduct from "../checkout/checkout-product/index";
import PaymentFrom from "../checkout/payment-from/index";

const Checkout = () => {
  const { storedCart } = useSelector((state) => state?.cart);
    // calculate sub total price
    const subTotal = storedCart?.reduce((acc, product) => {
        return acc + product?.quantity * parseInt(product?.offer_price);
      }, 0);
  return (
    <main>
      <div className="grid grid-cols-2 container mx-auto gap-5">
        <div>
          <CheckoutProduct subTotal={subTotal} storedCart={storedCart} />
        </div>
        <div>
          <PaymentFrom subTotal={subTotal} storedCart ={storedCart}/>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
