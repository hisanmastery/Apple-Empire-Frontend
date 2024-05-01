"use client";
import Input from "@/components/common/input";
import React from "react";
import { useForm, useFormContext } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
const address = ["jessore", "khulna", "dhaka"];
const ShippingAddress = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="border-[1px] border-gray-400 p-5">
      <h1 className="flex items-center text-lg font-semibold gap-4 border-b-[1px] border-gray-400 py-2">
        <button className="bg-_primary p-3 rounded-full">
          <CiLocationOn className="text-2xl text-white" />
        </button>
        Shipping address
      </h1>
      <div className="mt-5">
        <div>
          <Input
            type="text"
            placeholder="Name"
            rules={{ required: "" }}
            required
            label="Full Name"
            name="name"
            className="mt-2"
          />
        </div>
        <div className="mt-2">
          <Input
            placeholder="Address"
            label="Address"
            rules={{ required: "" }}
            required
            textArea={true}
            name="address"
            className="mt-2 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-full">
            <h1 className="mb-1">City</h1>
            <select
              {...register("city", { required: "" })}
              className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400"
            >
              {address?.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <h1 className="mb-1">PostCode</h1>
            <select
              {...register("city", { required: "" })}
              className="border-[1px] w-full p-2 rounded-md focus:outline-none border-gray-400"
            >
              {address?.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div>
            <Input
              type="text"
              label="Mobile number"
              rules={{ required: "" }}
              required
              placeholder="mobile number"
              name="number"
              className="mt-2"
            />
          </div>
          <div>
            <Input
              label="Email"
              type="email"
              rules={{ required: "" }}
              required
              name="email"
              placeholder="Email"
              className="mt-2"
            />
          </div>
        </div>
      </div>
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
