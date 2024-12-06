"use client";
import Input from "@/components/common/input";
import React from "react";
import { useFormContext } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
import { Address } from "@/data/address";

const ShippingAddress = ({ email }: any) => {
  const { register } = useFormContext();

  return (
    <div className="border border-gray-400 p-5 rounded-lg shadow-md">
      <h1 className="flex items-center text-lg font-semibold gap-4 border-b border-gray-400 py-2">
        <button className="bg-_primary p-3 rounded-full">
          <CiLocationOn className="text-2xl text-white" />
        </button>
        Shipping Address
      </h1>
      <div className="mt-5 space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Name"
            required
            label="Full Name"
            name="name"
            className="mt-2"
            rules={{ required: " " }}
          />
        </div>
        <div>
          <Input
            placeholder="Address"
            label="Address"
            required
            textArea={true}
            rules={{ required: " " }}
            name="address"
            className="mt-2 focus:outline-none"
          />
        </div>
        <div className="flex gap-4 mt-2">
          <div className="w-full">
            <h1 className="mb-1">City</h1>
            <select
              {...register("city", { required: "City is required" })}
              className="border w-full p-2 rounded-md focus:outline-none border-gray-400 mt-[5px]"
            >
              {Address?.map((item: any, index: number) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <Input
              placeholder="Post Code"
              label="Post Code"
              required
              name="postCode"
              rules={{ required: " " }}
              className="mt-2 focus:outline-none"
            />
          </div>
        </div>
        <Input
          label="Email"
          type="email"
          required
          name="email"
          defaultValue={email}
          placeholder="Email"
          className="mt-2"
          rules={{ required: " " }}
        />
        <Input
          type="text"
          label="Mobile Number"
          required
          placeholder="Mobile Number"
          name="number"
          className="mt-2"
          rules={{ required: " " }}
        />
      </div>
      <h1 className="flex items-center text-lg font-semibold gap-4 border-t border-gray-400 py-2 mt-5">
        <button className="bg-_primary p-3 rounded-full">
          <CiLocationOn className="text-2xl text-white" />
        </button>
        Billing Address
      </h1>
    </div>
  );
};

export default ShippingAddress;
