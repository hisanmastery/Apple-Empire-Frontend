"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
const address = ["jessore", "khulna", "dhaka"];
const ShippingAddress = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="border-2 border-gray-400 p-5">
      <h1 className="flex items-center text-lg font-semibold gap-4 border-b-2 border-gray-400 py-2">
        <button className="bg-orange-500 p-3 rounded-full">
          <CiLocationOn className="text-2xl text-white" />
        </button>
        Shipping address
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <div>
          <h1 className="mb-1">Full Name</h1>
          <input
            type="text"
            placeholder="Name"
            className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400"
          />
        </div>
        <div className="mt-2">
          <h1 className="mb-1">Address</h1>
          <textarea
            placeholder="Address"
            className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400"
          />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-full">
            <h1 className="mb-1">City</h1>
            <select className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400">
              {address?.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <h1 className="mb-1">PostCode</h1>
            <select className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400">
              {address?.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div>
            <h1 className="mb-1">Mobile number</h1>
            <input
              type="text"
              placeholder="Name"
              className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400"
            />
          </div>
          <div>
            <h1 className="mb-1">Email</h1>
            <input
              type="text"
              placeholder="Name"
              className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400"
            />
          </div>
        </div>
      </form>
      <h1 className="flex items-center text-lg font-semibold gap-4 border-t-[1px] border-gray-400 py-2 mt-5">
        <button className="bg-orange-500 p-3 rounded-full">
          <CiLocationOn className="text-2xl text-white" />
        </button>
        Shipping address
      </h1>
    </div>
  );
};

export default ShippingAddress;
