"use client";
import React, { useState } from "react";

// Mock order data for demonstration
const mockOrderData = {
  _id: "1234567890",
  createdAt: "2024-09-25",
  paymentStatus: "Paid",
  transactionId: "TXN123456789",
  deliveryStatus: "Shipped", // Status can be: "Order Placed", "Processing", "Shipped", "Out for Delivery", "Delivered", "Canceled"
};

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("1234567890");
  const [orderData, setOrderData]: any = useState(null);

  // Handler to track the order based on order ID
  const handleTrackOrder = () => {
    // In a real-world application, you would fetch the order details from the API based on the order ID
    if (orderId === mockOrderData._id) {
      setOrderData(mockOrderData);
    } else {
      setOrderData(null); // Handle case where order is not found
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-_orange mb-8">
        Order Tracking
      </h1>

      {/* Input Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          Track Your Order
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="orderId"
          >
            Enter Order ID
          </label>
          <input
            id="orderId"
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your Order ID"
          />
        </div>
        <button
          onClick={handleTrackOrder}
          className="w-full px-4 py-2 bg-_orange text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Track Order
        </button>
      </div>

      {/* Order Tracking Information */}
      {orderData ? (
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Information</h2>
          <div className="space-y-6">
            <div
              className={`${
                orderData.deliveryStatus === "Delivered"
                  ? "bg-green-100"
                  : orderData.deliveryStatus === "Canceled"
                  ? "bg-red-100"
                  : "bg-gray-50"
              } p-4 rounded-md shadow-md flex flex-col space-y-4 border`}
            >
              <div>
                <h3 className="text-lg font-semibold">
                  Order #{orderData._id}
                </h3>
                <p className="text-gray-600">Date: {orderData.createdAt}</p>
                <p className="text-gray-600">
                  Payment Status: {orderData.paymentStatus}
                </p>
                <p className="text-gray-600">
                  Transaction ID: {orderData.transactionId}
                </p>
                <p className="text-gray-600">
                  Delivery Status: {orderData.deliveryStatus}
                </p>
              </div>

              {/* Order Tracking Progress */}
              <div>
                <h4 className="text-md font-semibold mb-2">Order Tracking:</h4>
                <div className="w-full flex items-center justify-between">
                  {/* Tracking Stages */}
                  <div className="w-full flex items-center justify-between">
                    <div className="flex-1">
                      <div
                        className={`w-full h-2 ${
                          orderData.deliveryStatus === "Order Placed" ||
                          orderData.deliveryStatus === "Processing" ||
                          orderData.deliveryStatus === "Shipped" ||
                          orderData.deliveryStatus === "Out for Delivery" ||
                          orderData.deliveryStatus === "Delivered"
                            ? "bg-blue-500"
                            : "bg-gray-300"
                        } rounded-full`}
                      ></div>
                      <p className="text-xs text-center mt-2">Order Placed</p>
                    </div>
                    <div className="flex-1">
                      <div
                        className={`w-full h-2 ${
                          orderData.deliveryStatus === "Processing" ||
                          orderData.deliveryStatus === "Shipped" ||
                          orderData.deliveryStatus === "Out for Delivery" ||
                          orderData.deliveryStatus === "Delivered"
                            ? "bg-blue-500"
                            : "bg-gray-300"
                        } rounded-full`}
                      ></div>
                      <p className="text-xs text-center mt-2">Processing</p>
                    </div>
                    <div className="flex-1">
                      <div
                        className={`w-full h-2 ${
                          orderData.deliveryStatus === "Shipped" ||
                          orderData.deliveryStatus === "Out for Delivery" ||
                          orderData.deliveryStatus === "Delivered"
                            ? "bg-blue-500"
                            : "bg-gray-300"
                        } rounded-full`}
                      ></div>
                      <p className="text-xs text-center mt-2">Shipped</p>
                    </div>
                    <div className="flex-1">
                      <div
                        className={`w-full h-2 ${
                          orderData.deliveryStatus === "Out for Delivery" ||
                          orderData.deliveryStatus === "Delivered"
                            ? "bg-blue-500"
                            : "bg-gray-300"
                        } rounded-full`}
                      ></div>
                      <p className="text-xs text-center mt-2">
                        Out for Delivery
                      </p>
                    </div>
                    <div className="flex-1">
                      <div
                        className={`w-full h-2 ${
                          orderData.deliveryStatus === "Delivered"
                            ? "bg-blue-500"
                            : "bg-gray-300"
                        } rounded-full`}
                      ></div>
                      <p className="text-xs text-center mt-2">Delivered</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* View Details Button */}
              <button className="px-4 py-2 bg-orange-500 text-white rounded-md">
                View Details
              </button>
            </div>
          </div>
        </section>
      ) : (
        orderId && (
          <div className="text-center text-red-500">
            Order not found. Please check your Order ID.
          </div>
        )
      )}
    </div>
  );
};

export default OrderTracking;
