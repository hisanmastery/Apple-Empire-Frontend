import React from "react";
import Checkout from "./../../../../components/checkout/index";
import Breadcrumbs from "@/components/common/breadcrumbs";
const CheckoutPage = () => {
  return (
    <div className="container mt-5">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          {
            label: "Cart",
            href: "/cart",
          },
          {
            label: "Checkout",
            href: "/cart/checkout",
          },
        ]}
      />
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
