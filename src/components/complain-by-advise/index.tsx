import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
    fullName: string;
    phone: string;
    email: string;
    type: "Advice" | "Complain";
    details: string;
  }

const ComplainByAdvise = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<IFormInput>();
    
      // সাবমিট হ্যান্ডলার টাইপ ডিফাইন করা
      const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log("Form Data:", data);
        alert("Thank you for your feedback!");
        reset(); // ফর্ম রিসেট করার জন্য
      };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Complain / Advice
        </h2>
        <p className="text-center text-gray-600 mb-4">
          We value your feedback! If you have any advice or complaints, please reach out to us.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block font-semibold text-gray-700">Full Name *</label>
            <input
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Phone No */}
          <div>
            <label className="block font-semibold text-gray-700">Phone No. *</label>
            <input
              type="text"
              {...register("phone", {
                required: "Phone Number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number must be numeric",
                },
              })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block font-semibold text-gray-700">Email Address *</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Select Type */}
          <div>
            <label className="block font-semibold text-gray-700">Select Type *</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Advice"
                  {...register("type", { required: "Please select an option" })}
                  className="mr-2"
                />
                Advice
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Complain"
                  {...register("type", { required: "Please select an option" })}
                  className="mr-2"
                />
                Complain
              </label>
            </div>
            {errors.type && (
              <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
            )}
          </div>

          {/* Details */}
          <div>
            <label className="block font-semibold text-gray-700">Details (Write your feedback) *</label>
            <textarea
              {...register("details", { required: "Feedback details are required" })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Write your feedback here..."
              rows={4}
            ></textarea>
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">{errors.details.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    );
};

export default ComplainByAdvise;