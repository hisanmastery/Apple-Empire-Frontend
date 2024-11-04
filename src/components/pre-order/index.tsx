"use client";
import useToaster from "@/hooks/useToaster";
import { uploadImage } from "@/lib/helpers/upload-image";
import { useCreatePreOrderMutation } from "@/store/features/pre-order/preOrderApi";
import React, { useState, ChangeEvent, FormEvent } from "react";

const PreOrder: React.FC = () => {
  const showTost = useToaster();
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [createPreOrder, { isLoading }] = useCreatePreOrderMutation();
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const value: any = e.target;
      const imageUrl = await uploadImage(image);
      const payload = {
        productName: value?.productName?.value,
        image: imageUrl,
        name: value?.name?.value,
        email: value?.email.value,
        phoneNumber: value?.phone?.value,
        address: value?.address?.value,
      };
      const res: any = await createPreOrder(payload);
      if (res?.data?.isSuccess) {
        showTost("success", res?.data?.message);
      } else {
        showTost("error", res?.error?.data?.message);
      }
    } catch (error: any) {
      showTost("error", error?.message);
    }
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gray-50">
      {/* pre-order content  */}
      <div className="container mx-auto px-4 py-8">
        {/* bangla content  */}
        <h1 className="text-3xl font-bold mb-6 text-center">
        প্রি-অর্ডার পলিসি
        </h1>

        <p className="text-lg text-gray-800 mb-4 text-center">
        আপনাদের সবার আস্থার জায়গা এ্যাপেল এম্পায়ারে এখন থেকে প্রি-অর্ডারের মাধ্যমে আপনি যেকোন প্রোডাক্ট নিতে পারবেন।
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
          আসুন প্রি-অর্ডার পলিসি গুলো দেখে নেই :
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-4">
            <li>আপনার যেকোন প্রি-অর্ডার নিতে আমাদের ফর্মটি ফিলাপ করুন।</li>
            <li>২৪ ঘন্টার মধ্যে আপনি আমাদের থেকে ফোন পাবেন।</li>
            <li>
              প্রি-অর্ডার এর জন্য এডভান্স করতে হবে <strong>২০%</strong>।
            </li>
            <li>৩ থেকে ৭ কর্মদিবসের মাঝে আপনার প্রোডাক্ট ডেলিভারি হবে।</li>
            <li>
              প্রি-অর্ডার এর এডভান্স নন রিফান্ডেবল কিন্তু যদি কোন কারণে আমরা
              দিতে ব্যর্থ হই তাহলে ৩ কর্মদিবসের মধ্যে রিফান্ড পাবেন।
            </li>
          </ol>
        </div>
        {/* englih content  */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Pre-Order Policy
        </h1>

        <p className="text-lg text-gray-800 mb-4 text-center">
        At Apple Empire, we now offer the convenience of pre-ordering any product. Let's take a look at the pre-order policies:
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          {/* <h2 className="text-2xl font-semibold mb-4">
            Pre-order Instructions:
          </h2> */}
          <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-4">
            <li>To place a pre-order, please fill out our pre-order form.</li>
            <li>You will receive a call from us within 24 hours.</li>
            <li>
              A <strong>**20% advance payment**</strong> is required for all
              pre-orders.
            </li>
            <li>
              Your product will be delivered within{" "}
              <strong>**3 to 7 working days**</strong>.
            </li>
            <li>
              The advance payment is <strong>**non-refundable**</strong>, but if we
              fail to deliver the product for any reason, you will receive a
              refund within 3 working days.
            </li>
          </ol>
        </div>
      </div>

      {/* form part  */}
      {/* Heading */}
      <h2 className="text-_orange text-2xl font-bold mb-2">
        Looking For Something Different ??
      </h2>
      <p className="text-gray-600 mb-6">Put Your Information in The Box...</p>

      {/* Form */}
      <div className="bg-_white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <form onSubmit={handleSubmit}>
          {/* Product Information */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Product Information <span className="text-_orange">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Product Name/URL"
              required
              name="productName"
              className="w-full px-3 py-2 border border-_gray/45 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Insert Image <span className="text-_orange">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full py-2 px-3 border border-_gray/45 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />

            {/* Preview */}
            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="h-20 w-20 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Name <span className="text-_orange">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              required
              className="w-full px-3 py-2 border border-_gray/45 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Phone and Email */}
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone <span className="text-_orange">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Phone No"
                required
                name="phone"
                className="w-full px-3 py-2 border border-_gray/45 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email <span className="text-_orange">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                required
                name="email"
                className="w-full px-3 py-2 border border-_gray/45 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Address <span className="text-_orange">*</span>
            </label>
            <textarea
              placeholder="Enter Address"
              required
              name="address"
              className="w-full px-3 py-2 border border-_gray/45 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              rows={3}
            ></textarea>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                required
                className="form-checkbox h-4 w-4 text-_blue"
              />
              <span className="ml-2 text-gray-700">
                I hereby accept the terms and conditions of pre-order and read
                the pre-order terms and conditions carefully.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full py-2 px-4 bg-_orange text-white rounded-lg hover:bg-_orange/80 focus:outline-none focus:ring focus:border-blue-300"
            >
              {isLoading ? "Loading........" : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* How to Pre-Order Section */}
      {/* <div className="mt-10 w-full max-w-lg">
        <h3 className="text-center text-xl font-semibold text-gray-700 mb-4">
          How to Pre-Order
        </h3>
        <p className="text-center text-gray-600 mb-4">
          Watch the video and learn more about the pre-order process
        </p>
        <div className="w-full">
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/7fkif715igA"
            title="How to Pre-Order"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}
    </div>
  );
};

export default PreOrder;
