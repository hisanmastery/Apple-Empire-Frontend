"use client";
import { useSelector } from "react-redux";
import PaymentFrom from "./payment-from/index";
const Checkout = () => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  // calculate sub total price
  const subTotal = storedCart?.reduce((acc: any, product: any) => {
    return acc + product?.quantity * parseInt(product?.offer_price);
  }, 0);
  return (
    <main>
      {/* <div className="grid grid-cols-2 container mx-auto gap-5"> */}
      <div>
        {/* <div>
          <CheckoutProduct subTotal={subTotal} storedCart={storedCart} />
        </div> */}
        <div>
          <PaymentFrom subTotal={subTotal} storedCart={storedCart} />
        </div>
      </div>
    </main>
  );
};

export default Checkout;
