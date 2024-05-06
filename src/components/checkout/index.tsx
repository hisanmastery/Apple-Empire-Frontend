"use client";
import { useSelector } from "react-redux";
import ShippingAddress from "./shiping-address";
import ShippingMethod from "./shipping-method";
import OrderSummary from "./order-summary";
import { FormProvider, useForm } from "react-hook-form";
import { useGetEmailCartQuery } from "@/store/features/cart/cartApi";
import { useState } from "react";
import { useOrderCreateMutation } from "@/store/features/checkout/checkoutApi";
const Checkout = () => {
  const methods = useForm();
  const { storedCart } = useSelector((state: any) => state?.cart);
  const [shippingMethod, setShippingMethod] = useState(false);
  const [orderCreate] = useOrderCreateMutation()
  // calculate sub total price
  const subtotal =
    storedCart?.reduce(
      (sum: any, product: any) => sum + parseInt(product.price),
      0
    ) ?? 0;
  const cartDiscount = 5;
  const deliveryFee = 100;
  const totalPrice = subtotal - cartDiscount + deliveryFee;
  const onSubmit = async (data: any) => {
    const payload = {
      email: data.email,
      name: data?.name,
      phone: data?.number,
      isPayment: false,
      address: data?.address
    }
    const res: any = await orderCreate({ payload })
    if (res?.data?.isSuccess) {
            
    }
  };
  return (
    <main className=" container mx-auto mt-10">
      <div className="flex justify-between items-center">
        <div className="w-[60%]">
          <h2 className="uppercase text-2xl">Checkout</h2>
          <p>Please enter your details below to complete your purchase</p>
        </div>
        <div>
          <button className="border-2 border-_primary text-_primary  px-5 p-2 rounded-md hover:bg-_priborder-_primary hover:text-black transition-all ease-in-out duration-1000">
            BACK TO CART
          </button>
        </div>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="grid lg:grid-cols-3 grid-cols-1 justify-center gap-14 mt-10"
        >
          <div>
            <ShippingAddress />
          </div>
          <div>
            <ShippingMethod
              setShippingMethod={setShippingMethod}
              shippingMethod={shippingMethod}
            />
          </div>
          <div>
            <OrderSummary
              subtotal={subtotal}
              cartDiscount={cartDiscount}
              deliveryFee={deliveryFee}
              totalPrice={totalPrice}
              totalProducts={storedCart}
            />
            <button
              type="submit"
              className="bg-_primary text-white px-5 py-2 w-full mt-3 border-[1px] hover:bg-_secondary hover:text-black hover:border-_pribg-_primary hover:text-_pribg-_primary transition-all ease-in-out duration-300"
            >
              CONFIRM ORDER
            </button>
          </div>
        </form>
      </FormProvider>
    </main>
  );
};

export default Checkout;
