"use client";
import { useSelector } from "react-redux";
import ShippingAddress from "./shiping-address";
import ShippingMethod from "./shipping-method";
import OrderSummary from "./order-summary";
import { FormProvider, useForm } from "react-hook-form";
import { useGetEmailCartQuery } from "@/store/features/cart/cartApi";
import { useState } from "react";
import { useCreatePaymentMutation } from "@/store/features/checkout/checkoutApi";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import withAuth from "../hoc/with-auth-wrapper";
const Checkout = () => {
  const methods = useForm();
  const router = useRouter();
  const { storedCart } = useSelector((state: any) => state?.cart);
  const [shippingMethod, setShippingMethod] = useState(false);
  const [giftSend, setGiftSend] = useState(false);
  const [createPayment] = useCreatePaymentMutation();
  const { isAuthenticated, customerInfo } = useAuth();
  // calculate sub total price

  const subtotal = storedCart?.reduce((acc: number, product: any) => {
    if (!product?.price) return acc; // Skip if price is undefined or null
    const priceWithoutCommas = parseInt(product.price.replace(/,/g, ""), 10);
    return acc + product.quantity * priceWithoutCommas;
  }, 0);

  const cartDiscount = 5;
  const deliveryFee = 100;
  const totalPrice = subtotal - cartDiscount + deliveryFee;
  const onSubmit = async (data: any) => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }
    const payload = {
      email: customerInfo?.email,
      name: data?.name,
      phone: data?.number,
      postCode: data?.postCode,
      city: data?.city,
      isPayment: false,
      address: data?.address,
      productIds: storedCart?.map((item: any) => item.productId),
      shippingMethod: {
        isOutesideDhaka: true,
        paymentMethod: data?.onlinePayment,
        orderNotes: data?.orderNotes,
      },
      // gift: giftSend,
      totalPrice: totalPrice,
    };
    if (payload?.email) {
      const res: any = await createPayment({ payload });
      if (res?.data?.isSuccess) {
        router.push(res?.data?.response?.paymentInfo?.GatewayPageURL);
      }
    } else {
      alert("Email missing");
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
          <button className="border-2 border-_primary text-_primary  px-5 p-2 rounded-md hover:bg-_border-_primary hover:text-black transition-all ease-in-out duration-1000">
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
            CONFIRM ORDER
            <OrderSummary
              subtotal={subtotal}
              cartDiscount={cartDiscount}
              deliveryFee={deliveryFee}
              totalPrice={totalPrice}
              totalProducts={storedCart}
              giftSend={giftSend}
              setGiftSend={setGiftSend}
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

export default withAuth(Checkout);
