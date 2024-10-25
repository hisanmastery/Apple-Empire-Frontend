import OrderDetails from "@/components/order-details";
import React from "react";

const OrderDetailsPage = ({ params }: any) => {
  return <OrderDetails id={params?.id} />;
};

export default OrderDetailsPage;
