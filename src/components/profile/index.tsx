"use client";
import React from "react";
import useAuth from "@/hooks/useAuth";
import { useCustomerOrdersQuery } from "@/store/features/checkout/checkoutApi";
import withAuth from "../hoc/with-auth-wrapper";
import ProfileCard from "./profile-card";
import OrderCard from "./OrderCard";
import ProfileField from "./ProfileField";

const Profile = () => {
  const { customerInfo } = useAuth();
  const { data, isLoading, error } = useCustomerOrdersQuery<any>(
    customerInfo?.email
  );
  const orders = data?.response;

  return (
    <div className="min-h-screen bg-gray-100 mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-0 p-4 md:p-0">
      {/* Sidebar */}
      <div className="col-span-1">
        <ProfileCard customerInfo={customerInfo} />
      </div>

      {/* Main Content */}
      <div className="md:col-span-5 col-span-1 p-4 md:p-6">
        <div className="mx-auto">
          {/* Profile Information */}
          <section
            id="profile"
            className="bg-white shadow-md rounded-lg p-4 md:p-6 mb-6 md:mb-10"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <ProfileField label="Full Name" value={customerInfo?.name} />
              <ProfileField label="Email Address" value={customerInfo?.email} />
              <ProfileField label="Phone Number" value={customerInfo?.phone} />
              <ProfileField label="Address" value="123 Main St, Anytown, USA" />
            </div>
          </section>

          {/* Order Information */}
          <section
            id="orders"
            className="bg-white shadow-md rounded-lg p-4 md:p-6 w-full"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              My Order Information
            </h2>
            {isLoading ? (
              <p>Loading orders...</p>
            ) : error ? (
              <p className="text-red-500">
                Failed to load orders. Please try again.
              </p>
            ) : (
              <div className="space-y-4 md:space-y-6">
                {orders?.length ? (
                  orders.map((order: any, index: number) => (
                    <OrderCard key={index} order={order} />
                  ))
                ) : (
                  <p>No orders found.</p>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Profile);
