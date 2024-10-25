"use client";
import { useSelector } from "react-redux";
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
import { icons } from "@/constants/icons";
import useToaster from "@/hooks/useToaster";
import ShippingAddress from "./shiping-address";

const Checkout = () => {
  const methods = useForm();
  const router = useRouter();
  const showToast = useToaster();
  const [customerRegister, { isLoading }] = useCustomerRegisterMutation();
  const { storedCart } = useSelector((state: any) => state?.cart);
  const [shippingMethod, setShippingMethod] = useState<any>(null);
  const [giftSend, setGiftSend] = useState(false);
  const [createPayment, { isLoading: isPaymentLoading }] =
    useCreatePaymentMutation();
  const { customerInfo } = useAuth();
  const [userCredentials, setUserCredentials] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payload, setPayload] = useState<any>(null);

  // Clean the stored cart items by removing unnecessary fields
  const cleanedCart = storedCart.map((item: any) => {
    const { createdAt, updatedAt, __v, _id, ...cleanedItem } = item;
    return cleanedItem;
  });

  // Calculate subtotal price
  const subtotal = cleanedCart.reduce((acc: any, product: any) => {
    if (!product?.price) return acc;
    const priceAsString =
      typeof product.price === "string"
        ? product.price
        : product.price.toString();
    const priceWithoutCommas = parseFloat(priceAsString.replace(/,/g, ""));
    return acc + product.quantity * priceWithoutCommas;
  }, 0);

  const cartDiscount = 5;
  const deliveryFee = shippingMethod?.cost || 0;
  const totalPrice = subtotal - cartDiscount + deliveryFee;

  const onSubmit = async (data: any) => {
    // Check if the email is provided if customer is not logged in
    if (!customerInfo?.email) {
      if (!data?.email) {
        showToast("error", "Email is required.");
        return;
      }
    }

    const uniquePassword = generateUniquePassword();
    const registerData = {
      name: data.name,
      email: data.email,
      password: uniquePassword,
      phone: data.number,
      role: "customer",
    };

    // Define the payload for the payment
    const newPayload = {
      email: customerInfo?.email || data?.email,
      name: data?.name,
      phone: data?.number,
      postCode: data?.postCode,
      city: data?.city,
      isPayment: false,
      address: data?.address,
      productIds: cleanedCart.map((item: any) => item.productId),
      productsInfo: cleanedCart,
      shippingMethod: {
        shippingMethod: shippingMethod?.id,
        paymentMethod: data?.onlinePayment,
        orderNotes: data?.orderNotes,
      },
      totalPrice: totalPrice,
    };

    try {
      if (!customerInfo?.email) {
        const res: any = await customerRegister(registerData);
        if (res?.data?.status_code === 200) {
          // Successful registration
          setPayload(newPayload);
          setUserCredentials({
            email: registerData?.email,
            password: registerData.password,
          });
          setIsModalOpen(true);
        } else if (res?.error?.data?.message === "Email already in use") {
          handleConfirm();
          setPayload(newPayload);
        } else {
          showToast("error", res?.error?.message || "Registration failed");
        }
      } else {
        const paymentRes: any = await createPayment({ payload: newPayload });
        if (paymentRes?.data?.isSuccess) {
          router.push(paymentRes?.data?.response?.paymentInfo?.GatewayPageURL);
        } else {
          showToast("error", "Payment failed");
        }
      }
    } catch (error) {
      showToast(
        "error",
        "An error occurred during registration. Please try again."
      );
    }
  };

  const handleConfirm = async () => {
    if (!payload) {
      showToast("error", "Payload is missing. Please try again.");
      return;
    }
    setIsModalOpen(false);
    try {
      const paymentRes: any = await createPayment({ payload });
      if (paymentRes?.data?.isSuccess) {
        router.push(paymentRes?.data?.response?.paymentInfo?.GatewayPageURL);
      } else {
        showToast("error", "Payment failed");
      }
    } catch (error) {
      showToast(
        "error",
        "An error occurred during payment processing. Please try again."
      );
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
          <button className="border-2 border-_primary text-_primary px-5 p-2 rounded-md hover:bg-_border-_primary hover:text-black transition-all ease-in-out duration-1000 text-sm md:text-md">
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
            <ShippingAddress email={customerInfo?.email} />
          </div>
          <div>
            <ShippingMethod setShippingMethod={setShippingMethod} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">CONFIRM ORDER</h3>
            <OrderSummary
              subtotal={subtotal}
              cartDiscount={cartDiscount}
              deliveryFee={deliveryFee}
              totalPrice={totalPrice}
              totalProducts={cleanedCart}
              giftSend={giftSend}
              setGiftSend={setGiftSend}
            />
            <button
              type="submit"
              disabled={isLoading || isPaymentLoading}
              className="bg-_primary text-white px-5 py-2 w-full mt-3 border-[1px] hover:bg-_secondary hover:text-black hover:border-_pribg-_primary hover:text-_pribg-_primary transition-all ease-in-out duration-300"
            >
              {isPaymentLoading || isLoading ? (
                <p className="flex justify-center items-center gap-2">
                  <icons.ImSpinner3 className="animate-spin text-xl" />
                  Processing...
                </p>
              ) : (
                "CONFIRM ORDER"
              )}
            </button>
          </div>
        </form>
      </FormProvider>
      <PaymentAlert
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        userInfo={userCredentials}
      />
    </main>
  );
};

export default Checkout;
