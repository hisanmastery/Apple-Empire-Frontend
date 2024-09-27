"use client";
import { Input } from "@/components/ui/input";
import { useCustomerRegisterMutation } from "@/store/api/auth/authApi";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [customerRegister, { isLoading }] = useCustomerRegisterMutation();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const registerData = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      role: "customer",
    };
    try {
      const res: any = await customerRegister(registerData);
      if (res?.data?.message) {
        alert(res?.data?.message);
        router.push("/login");
      } else {
        alert(res?.error?.data?.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#f5edda] via-[#f7d5da] to-[#f9e8fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md space-y-8">
        <div className="mt-6 text-center text-xl font-extrabold text-gray-900">
          <Image
            className="w-14 mx-auto"
            src={
              "https://appleempire.hisanmastery.com/assets/images/Apple-Empire-Logo.svg"
            }
            height={56}
            width={56}
            alt="logo"
          />
          Create A New Account
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                type="text"
                className="mt-4"
                placeholder="Name"
              />
              {errors.name?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.name.message)}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                type="email"
                autoComplete="email"
                className="mt-4"
                placeholder="Email address"
              />
              {errors.email?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.email.message)}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Phone
              </label>
              <Input
                id="phone"
                {...register("phone", {
                  required: "Phone is required",
                  //   pattern: /^\S+@\S+$/i,
                })}
                type="number"
                autoComplete="phone"
                className="mt-4"
                placeholder="Phone Number"
              />
              {errors.phone?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.phone.message)}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: 6,
                })}
                type="password"
                autoComplete="new-password"
                className="mt-4"
                placeholder="Password"
              />
              {errors.password?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.password.message)}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="passwordConfirmation" className="sr-only">
                Confirm Password
              </label>
              <Input
                id="passwordConfirmation"
                {...register("passwordConfirmation", {
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
                type="password"
                autoComplete="new-password"
                className="mt-4"
                placeholder="Confirm Password"
              />
              {errors.passwordConfirmation?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.passwordConfirmation.message)}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-_primary hover:bg-_primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {`${isLoading ? "loading..." : " Sign Up"}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
