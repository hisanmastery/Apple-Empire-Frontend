"use client";
import useToaster from "@/hooks/useToaster";
import { useRequestResetPasswordMutation } from "@/store/api/auth/authApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  email: string;
}

const ForgotRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const showTost = useToaster();
  const [requestResetPassword, { isLoading }] =
    useRequestResetPasswordMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res: any = await requestResetPassword(data);
      if (res?.data?.isSuccess) {
        showTost("success", res?.data?.message);
      } else {
        showTost("error", res?.error?.data?.message || "Request failed.");
      }
    } catch (error: any) {
      showTost("error", error?.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#f5edda] via-[#f7d5da] to-[#f9e8fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <Image
            src="https://i.ibb.co/qrVJBy8/Whats-App-Image-2024-09-20-at-22-00-34-82706a25.jpg"
            className="mx-auto mb-4"
            alt="logo"
            width={90}
            height={90}
          />
          <h2 className="text-3xl font-bold text-gray-800">Forgot Password</h2>
          <p className="text-gray-600 mt-2">
            Enter your details to reset your password
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full focus:outline-none px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
        {/* Link to the login page */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Remembered your password?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotRequest;
