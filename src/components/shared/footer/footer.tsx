"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { FaAnglesDown } from "react-icons/fa6";
import EmailSubscribe from "@/components/home/email-subscribe";
import Image from "next/image";
import { useGetAllLogoQuery } from "@/store/features/ads-section/adsSectionApi";

const Footer = () => {
  const { data } = useGetAllLogoQuery<any>({});
  console.log(data);
  return (
    <footer className="bg-black text-white py-10 mt-32 w-full relative">
      <div className="container mx-auto mt-20">
        <div className="absolute right-0 left-0 -top-24">
          <EmailSubscribe />
        </div>

        {/* row -1  */}

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <Image
              width={80}
              height={80}
              className="w-[80px]"
              src={data?.data?.navbar?.imageUrl}
              alt={data?.data?.navbar?.imageUrl || "logo"}
            />
          </div>

          <div className="font-normal">
            <h4>Contact Us</h4>
            <p className="text-[#EE3F0B]">support@appleempirebd.com</p>
          </div>

          <div className="font-normal">
            <h4>Customer Service</h4>
            <p className="text-[#EE3F0B]">support@appleempirebd.com</p>
          </div>

          <div className="md:block hidden">
            <FaAnglesDown className="text-[#EE3F0B] h-14 w-14 rounded-full border-2 border-white s p-2 cursor-pointer " />
          </div>
        </div>
        {/* row -2  */}

        <div className="grid grid-cols-12 gap-5 justify-between w-full items-center mt-5">
          <ul className="flex-wrap justify-center items-center mx-auto col-span-12 lg:col-span-6  gap-4 font-normal cursor-pointer">
            <li className="hover:text-[#EE3F0B]">About Us</li>
            <li className="hover:text-[#EE3F0B]">Order Tracking</li>
            <li className="hover:text-[#EE3F0B]">Return Policy</li>
            <li className="hover:text-[#EE3F0B]">Terms and Conditions</li>
            <li className="hover:text-[#EE3F0B]">Cookie Policy</li>
            <li className="hover:text-[#EE3F0B]">Privacy Policy</li>
          </ul>
          <div className="flex justify-center mt-4 mx-auto space-x-4 leading-3 col-span-12 lsm:col-span-4 lg:col-span-4">
            <Link href="#">
              <Facebook className="text-blue-500" />
            </Link>
            <Link href="#">
              <Twitter className="text-sky-300" />
            </Link>
            <Link href="#">
              <Instagram className="text-pink-500" />
            </Link>
            <Link href="#">
              <Linkedin className="text-blue-400" />
            </Link>
          </div>

          <div className="mt-5 col-span-12 sm:col-span-8 md:col-span-4 lg:col-span-2">
            <button className="bg-_primary w-full text-white px-10 py-2 rounded-sm uppercase">
              Store Locator
            </button>
          </div>
        </div>

        {/* row -3  */}

        <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-4 text-center  md:text-start ">
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            officia iure adipisci laborum dolore eos exercitationem quis est
            quod. Laborum incidunt sint aperiam asperiores sapiente recusandae.
          </div>

          <div>
            <h5 className="mb-3">Secure Payments</h5>
            <Image
              fill
              src={data?.data?.navbar?.imageUrl}
              alt={data?.data?.navbar?.imageUrl || "Secure Payments"}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
