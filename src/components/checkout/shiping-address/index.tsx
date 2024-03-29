"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
const address = ["jessore", "khulna", "dhaka"];
const ShippingAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) =>{ 
    console.log(data)
  };

  return (
    <div className="border-[1px] border-gray-400 p-5">
      <h1 className="flex items-center text-lg font-semibold gap-4 border-b-[1px] border-gray-400 py-2">
        <button className="bg-_primary p-3 rounded-full">
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
            {...register("name", { required: "Name is required" })}
            name="name"
            className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400"
          />
        </div>
        <div className="mt-2">
          <h1 className="mb-1">Address</h1>
          <textarea
            placeholder="Address"
            {...register("address", { required: "Address is required" })}
            name="address"
            className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400"
          />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-full">
            <h1 className="mb-1">City</h1>
            <select  {...register("city", { required: "City is required" })} className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400">
              {address?.map((item, index) => (
                <option value={item} key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <h1 className="mb-1">PostCode</h1>
            <select  {...register("postCode", { required: "postCode is required" })} className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400">
              {address?.map((item, index) => (
                <option value={item} key={index}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div>
            <h1 className="mb-1">Mobile number</h1>
            <input
              type="text"
              {...register("mobile", { required: "Mobile is required" })}
              placeholder="mobile number"
              name="number"
              className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400"
            />
          </div>
          <div>
            <h1 className="mb-1">Email</h1>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              name="email"
              placeholder="email"
              className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400"
            />
          </div>
        </div>
      </form>
      <h1 className="flex items-center text-lg font-semibold gap-4 border-t-[1px] border-gray-400 py-2 mt-5">
        <button className="bg-_primary p-3 rounded-full">
          <CiLocationOn className="text-2xl text-white" />
        </button>
        Billing address
      </h1>
    </div>
  );
};

export default ShippingAddress;
