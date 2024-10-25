"use client";
import React from "react";
import { useGetSingleOrderQuery } from "@/store/features/checkout/checkoutApi";
import Image from "next/image";
import OrderTracking from "../profile/OrderTracking";
import Link from "next/link";

const OrderDetails = ({ id }: any) => {
  // Fetch order data using the custom hook
  const { data, isLoading, error } = useGetSingleOrderQuery<any>(id);
  const order = data?.response;

  // Loading and Error States
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Failed to load order details.</p>;
  }

  // Render the Order Details component
  return (
    <div className="container mx-auto p-6 mt-10 bg-_white shadow rounded-lg min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Order Details</h1>

      {/* Order Summary */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <p className="text-gray-600">Order ID: {order?._id}</p>
          <p className="text-gray-600">
            Date: {new Date(order?.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-600">Total Price: ${order?.totalPrice}</p>
          <p className="text-gray-600">
            Payment Status: {order?.paymentStatus}
          </p>
          <p className="text-gray-600">
            Delivery Status: {order?.deliveryStatus}
          </p>
          <p className="text-gray-600">
            Transaction ID: {order?.transactionId}
          </p>
        </div>

        {/* Customer Details */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Customer Details</h2>
          <p className="text-gray-600">Name: {order?.name}</p>
          <p className="text-gray-600">Email: {order?.email}</p>
          <p className="text-gray-600">Phone: {order?.phone}</p>
          <p className="text-gray-600">Address: {order?.address}</p>
          <p className="text-gray-600">City: {order?.city}</p>
          <p className="text-gray-600">Post Code: {order?.postCode}</p>
        </div>
      </div>

      {/* Product Information */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Products</h2>
        <div className="space-y-4">
          {order?.productsInfo.map((product: any, index: number) => (
            <div
              key={index}
              className="flex items-center bg-gray-50 p-4 rounded-lg space-x-4"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={product?.image}
                  alt={product?.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div>
                <p className="text-gray-700 font-semibold">{product?.title}</p>
                <p className="text-gray-600">Quantity: {product?.quantity}</p>
                <p className="text-gray-600">Price: ${product?.price}</p>
                <div className="flex space-x-2 mt-1">
                  {Object.entries(product?.variants).map(
                    ([key, value]: [string, any]) => (
                      <span
                        key={key}
                        className="bg-gray-200 px-2 py-1 rounded text-sm"
                      >
                        {key}: {value}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Method */}
      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <h2 className="text-lg font-semibold">Shipping Method</h2>
        <p className="text-gray-600">
          Shipping Method: {order?.shippingMethod?.shippingMethod}
        </p>
        <p className="text-gray-600">
          Payment Method: {order?.shippingMethod?.paymentMethod}
        </p>
        <p className="text-gray-600">
          Order Notes: {order?.shippingMethod?.orderNotes || "N/A"}
        </p>
      </div>

      {/* Order Tracking */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Order Tracking</h2>
        <OrderTracking deliveryStatus={order?.deliveryStatus} />
        <p className="text-gray-600">Current Status: {order?.deliveryStatus}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6">
        <Link
          className="px-6 py-2 bg-_primary text-_white rounded-md mr-4"
          href={"/profile"}
        >
          Back to Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderDetails;
