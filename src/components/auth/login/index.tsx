"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useCustomerLoginMutation } from "@/store/api/auth/authApi";
import { updateUserToken } from "@/store/features/user/userSlice";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const dispatch=useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [customerLogin, { isLoading }] = useCustomerLoginMutation();
  const onSubmit = async (data: any) => {
    const loginData = {
      email: data.email,
      password: data.password,
      role: "customer",
    };
    try {
      // Add your signup logic here
      const res: any = await customerLogin(loginData);
      const loginResponse = res?.data;

      if (res?.data?.message) {
        alert(res?.data?.message);
      } else {
        alert(res?.error?.data?.message);
      }

      if (loginResponse.isSuccess) {
        const accessToken = loginResponse?.data?.accessToken;
        localStorage.setItem("token", accessToken);
        dispatch(updateUserToken(accessToken));
        router.push("/");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8">
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#f5edda] via-[#f7d5da] to-[#f9e8fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-md shadow-lg">
        <div>
          <div className="mt-6 text-center text-xl font-extrabold text-gray-900">
            <img
              className="w-14 mx-auto"
              src={
                "https://appleempire.hisanmastery.com/assets/images/Apple-Empire-Logo.svg"
              }
              alt="logo"
            />
            Log in Apple Empire
          </div>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Input
                id="email-address"
                {...register("email", { required: "Email is required" })}
                type="email"
                autoComplete="email"
                placeholder="Email address"
              />
              {errors.email?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.email.message)}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                id="password"
                {...register("password", { required: "Password is required" })}
                type="password"
                autoComplete="current-password"
                className="mt-5"
                placeholder="Password"
              />

              {errors.password?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.password.message)}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-_primary hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <div className="text-sm">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  className="font-medium text-_primary hover:text-indigo-500"
                  href={"/singup"}
                >
                  Sing-up
                </Link>
              </p>
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-_primary hover:bg-_primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {`${isLoading ? "loading..." : "Log in"}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
