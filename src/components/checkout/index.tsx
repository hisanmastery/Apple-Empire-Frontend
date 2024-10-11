"use client";
import { useSelector } from "react-redux";
import ShippingAddress from "./shiping-address";
import ShippingMethod from "./shipping-method";
import OrderSummary from "./order-summary";
import { FormProvider, useForm } from "react-hook-form";
import { useCreatePaymentMutation } from "@/store/features/checkout/checkoutApi";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { useCustomerRegisterMutation } from "@/store/api/auth/authApi";
import { generateUniquePassword } from "@/hooks/generateUniquePassword";
import PaymentAlert from "./payment-alert";

const Checkout = () => {
  const methods = useForm();
  const router = useRouter();
  const [customerRegister, { isLoading }] = useCustomerRegisterMutation();
  const { storedCart } = useSelector((state: any) => state?.cart);
  const [shippingMethod, setShippingMethod] = useState(false);
  const [giftSend, setGiftSend] = useState(false);
  const [createPayment] = useCreatePaymentMutation();
  const { customerInfo } = useAuth();
  const [userInfo, setUserInfo] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payload, setPayload] = useState<any>(null);

  // Calculate subtotal price
  const subtotal = storedCart?.reduce((acc: number, product: any) => {
    if (!product?.price) return acc;
    const priceAsString =
      typeof product.price === "string"
        ? product.price
        : product.price.toString();

    const priceWithoutCommas = parseFloat(priceAsString.replace(/,/g, ""));
    return acc + product.quantity * priceWithoutCommas;
  }, 0);

  const cartDiscount = 5;
  const deliveryFee = 100;
  const totalPrice = subtotal - cartDiscount + deliveryFee;

  const onSubmit = async (data: any) => {
    const uniquePassword = generateUniquePassword();
    const registerData = {
      name: data.name,
      email: data.email,
      password: uniquePassword,
      phone: data.number,
      role: "customer",
    };

    // Define the payload here
    const newPayload = {
      email: customerInfo?.email || data?.email,
      name: data?.name,
      phone: data?.number,
      postCode: data?.postCode,
      city: data?.city,
      isPayment: false,
      address: data?.address,
      productIds: storedCart?.map((item: any) => item.productId),
      shippingMethod: {
        shippingMethod: shippingMethod,
        paymentMethod: data?.onlinePayment,
        orderNotes: data?.orderNotes,
      },
      totalPrice: totalPrice,
    };

    if (newPayload?.email) {
      const res: any = await customerRegister(registerData);

      if (res?.data?.status_code === 200) {
        // Successful registration
        setPayload(newPayload);
        setUserInfo({
          email: registerData?.email,
          password: registerData.password,
        });
        setIsModalOpen(true);
      } else if (
        res?.data?.message === "Email already in use" ||
        customerInfo?.email
      ) {
        setUserInfo({
          email: registerData?.email,
          password: registerData.password,
        });
        handleConfirm();
      } else {
        alert(res?.error?.message || "Registration failed");
      }
    } else {
      alert("Email missing");
    }
  };
  const handleConfirm = async () => {
    if (!payload) {
      alert("Please try again.");
      return;
    }
    setIsModalOpen(false);
    const paymentRes: any = await createPayment({ payload });
    if (paymentRes?.data?.isSuccess) {
      router.push(paymentRes?.data?.response?.paymentInfo?.GatewayPageURL);
    } else {
      alert("Payment failed");
    }
  };

  return (
    <main className="container mx-auto mt-10">
      <div className="flex justify-between items-center">
        <div className="w-[60%]">
          <h2 className="uppercase text-2xl">Checkout</h2>
          <p>Please enter your details below to complete your purchase</p>
        </div>
        <div>
          <button className="border-2 border-_primary text-_primary px-5 p-2 rounded-md hover:bg-_border-_primary hover:text-black transition-all ease-in-out duration-1000">
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
            <ShippingMethod setShippingMethod={setShippingMethod} />
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
      <PaymentAlert
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        userInfo={userInfo}
      />
    </main>
  );
};

export default Checkout;
