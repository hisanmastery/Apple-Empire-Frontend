"use client";

import useAuth from "@/hooks/useAuth";
import { useCustomerOrdersQuery } from "@/store/features/checkout/checkoutApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import withAuth from "../hoc/with-auth-wrapper";

const Profile = () => {
  const { isAuthenticated, customerInfo } = useAuth();
  const { data }: any = useCustomerOrdersQuery(customerInfo?.email);
  const orders = data?.response;
  const router = useRouter();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push("/");
  //   }
  // }, [isAuthenticated, router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    router.push("/");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 mx-auto md:mx-0 grid grid-cols-6 gap-0">
        {/* Sidebar */}
        <div className="bg-white mx-5 md:mx-0 md:w-64 p-6 md:col-span-2 col-span-6 shadow-md">
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="Profile Picture"
            />
            <h1 className="text-xl font-semibold mt-4">{customerInfo?.name}</h1>
            <p className="text-gray-600">{customerInfo?.email}</p>
          </div>
          <nav className="mt-10">
            <ul className="space-y-4">
              <li>
                <a
                  href="#profile"
                  className="block py-2 px-4 bg-blue-500 text-white rounded-md text-center"
                >
                  Profile Information
                </a>
              </li>
              <li>
                <a
                  href="#orders"
                  className="block py-2 px-4 bg-blue-500 text-white rounded-md text-center"
                >
                 My Order Information
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleLogout()}
                  className="block w-full py-2 px-4 bg-blue-500 text-white rounded-md text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {/* Main Content */}
        <div className="flex-1 p-6 md:col-span-4 col-span-6">
          <div className="max-w-4xl mx-auto">
            {/* Profile Information */}
            <section
              id="profile"
              className="bg-white shadow-md rounded-lg p-6 mb-10"
            >
              <h2 className="text-2xl font-semibold mb-4">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={customerInfo?.name || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={customerInfo?.email || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={customerInfo?.phone || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                    value="123 Main St, Anytown, USA"
                    readOnly
                  />
                </div>
              </div>
            </section>
            {/* Order Information */}
            <section id="orders" className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">My Order Information</h2>
              <div className="space-y-6">
                {orders?.map((order: any, index: number) => (
                  <div
                    key={index}
                    className={`${
                      order.deliveryStatus === "Delivered"
                        ? "bg-green-100"
                        : order.deliveryStatus === "Canceled"
                        ? "bg-red-100"
                        : "bg-gray-50"
                    } p-4 rounded-md shadow flex flex-col justify-between space-y-4 border`}
                  >
                    <div>
                      <h3 className="text-lg font-semibold">
                        Order #{order._id}
                      </h3>
                      <p className="text-gray-600">Date: {order.createdAt}</p>
                      <p className="text-gray-600">
                        Payment Status: {order.paymentStatus}
                      </p>
                      <p className="text-gray-600">
                        Transaction Id: {order.transactionId}
                      </p>
                      <p className="text-gray-600">
                        Delivery Status: {order.deliveryStatus}
                      </p>
                    </div>

                    {/* Order Tracking Section */}
                    <div>
                      <h4 className="text-md font-semibold mb-2">
                        Order Tracking:
                      </h4>
                      <div className="flex items-center justify-between">
                        {/* Order stages */}
                        <div className="w-full flex items-center justify-between">
                          <div className="flex-1">
                            <div
                              className={`w-full h-2 ${
                                order.deliveryStatus === "Order Placed" ||
                                order.deliveryStatus === "Processing" ||
                                order.deliveryStatus === "Shipped" ||
                                order.deliveryStatus === "Out for Delivery" ||
                                order.deliveryStatus === "Delivered"
                                  ? "bg-blue-500"
                                  : "bg-gray-300"
                              } rounded-full`}
                            ></div>
                            <p className="text-xs text-center mt-2">
                              Order Placed
                            </p>
                          </div>
                          <div className="flex-1">
                            <div
                              className={`w-full h-2 ${
                                order.deliveryStatus === "Processing" ||
                                order.deliveryStatus === "Shipped" ||
                                order.deliveryStatus === "Out for Delivery" ||
                                order.deliveryStatus === "Delivered"
                                  ? "bg-blue-500"
                                  : "bg-gray-300"
                              } rounded-full`}
                            ></div>
                            <p className="text-xs text-center mt-2">
                              Processing
                            </p>
                          </div>
                          <div className="flex-1">
                            <div
                              className={`w-full h-2 ${
                                order.deliveryStatus === "Shipped" ||
                                order.deliveryStatus === "Out for Delivery" ||
                                order.deliveryStatus === "Delivered"
                                  ? "bg-blue-500"
                                  : "bg-gray-300"
                              } rounded-full`}
                            ></div>
                            <p className="text-xs text-center mt-2">Shipped</p>
                          </div>
                          <div className="flex-1">
                            <div
                              className={`w-full h-2 ${
                                order.deliveryStatus === "Out for Delivery" ||
                                order.deliveryStatus === "Delivered"
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
                                order.deliveryStatus === "Delivered"
                                  ? "bg-blue-500"
                                  : "bg-gray-300"
                              } rounded-full`}
                            ></div>
                            <p className="text-xs text-center mt-2">
                              Delivered
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                      View Details
                    </button>
                  </div>
                ))}
                {/* More orders can be added similarly */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Profile);
