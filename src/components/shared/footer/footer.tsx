import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { FaAnglesDown } from "react-icons/fa6";
import EmailSubscribe from "@/components/home/email-subscribe";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-32 w-full relative">
      <div className="container mx-auto mt-20">
        <div className="absolute right-0 left-0 -top-24">
          <EmailSubscribe />
        </div>

        {/* row -1  */}

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <img
              className="w-[80px]"
              src="https://appleempirebd.com/wp-content/uploads/2023/07/Apple-Empire-W-SVG-1.svg"
              alt=""
            />
          </div>

          <div className="font-normal">
            <h4>Contact Us</h4>
            <p className="text-[#FE4C06]">support@appleempirebd.com</p>
          </div>

          <div className="font-normal">
            <h4>Customer Service</h4>
            <p className="text-[#FE4C06]">support@appleempirebd.com</p>
          </div>

          <div className="md:block hidden">
            <FaAnglesDown className="text-[#FE4C06] h-14 w-14 rounded-full border-2 border-white s p-2 cursor-pointer " />
          </div>
        </div>
        {/* row -2  */}

        <div className="flex flex-col md:flex-row justify-between items-center mt-16">
          <ul className="sm:flex items-center flex-wrap  gap-4 font-normal cursor-pointer">
            <li>About Us</li>
            <li>Order Tracking</li>
            <li>Return Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="flex justify-center mt-4 space-x-4">
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

          <div>
            <button className="bg-blue-400 w-full text-white px-10 py-2 rounded-sm uppercase">
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
            <img
              src="https://i.ibb.co/FsWdHzy/Screenshot-2024-03-14-210457.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
