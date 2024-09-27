import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { FaAnglesDown } from "react-icons/fa6";
import EmailSubscribe from "@/components/home/email-subscribe";
import Image from "next/image";

const NewFooter = () => {
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
              className="lg:w-[80px] md:w-20 w-14 my-3"
              src="https://appleempirebd.com/wp-content/uploads/2023/07/Apple-Empire-W-SVG-1.svg"
              alt=""
            />
          </div>

          <div className="font-normal">
            <h4 className="text-sm md:text-md">Contact Us</h4>
            <p className="text-[#EE3F0B] text-xs">support@appleempirebd.com</p>
          </div>

          <div>
            <Image
              width={80}
              height={80}
              className="lg:w-[80px] md:w-20 w-14 my-3"
              src="https://appleempirebd.com/wp-content/uploads/2023/07/Apple-Empire-W-SVG-1.svg"
              alt=""
            />
          </div>

          <div className="font-normal">
            <h4 className="text-sm md:text-md">Customer Service</h4>
            <p className="text-[#EE3F0B] text-xs">support@appleempirebd.com</p>
          </div>

          <div>
            <Image
              width={80}
              height={80}
              className="lg:w-[80px] md:w-20 w-14 my-3"
              src="https://appleempirebd.com/wp-content/uploads/2023/07/Apple-Empire-W-SVG-1.svg"
              alt=""
            />
          </div>

          <div className="font-normal">
            <h4 className="text-sm md:text-md">Customer Service</h4>
            <p className="text-[#EE3F0B] text-xs">support@appleempirebd.com</p>
          </div>

          {/*<div className="md:block hidden">
            <FaAnglesDown className="text-[#EE3F0B] h-14 w-14 rounded-full border-2 border-white s p-2 cursor-pointer " />
          </div>*/}
        </div>
        {/* row -2  */}

        <div className="grid grid-cols-12 gap-5 justify-between w-full items-center mt-16">
          <ul className=" flex flex-wrap justify-between items-center col-span-12 lg:col-span-8  font-normal cursor-pointer">
            <li className="w-1/2 md:w-auto mb-5 text-xs md:text-sm">
              <li className={"text-[#EE3F0B] md:text-lg text-sm"}>About Us</li>
              <li className={"text-white hover:text-[#EE3F0B] "}>About Us</li>
              <li className={"text-white hover:text-[#EE3F0B] "}>
                Shop Address
              </li>
              <li className={"text-white hover:text-[#EE3F0B] "}>Blog</li>
            </li>
            <li className="w-1/2 md:w-auto mb-5 text-xs md:text-sm">
              <li className="text-[#EE3F0B] md:text-lg text-sm">Policy</li>
              <Link
                href={"/privacy-policy"}
                className={"text-white hover:text-[#EE3F0B] "}
              >
                Privacy Policy
              </Link>
              <li className={"text-white hover:text-[#EE3F0B] "}>EMI Policy</li>
              <Link
                href={"/warranty-policy"}
                className={"text-white hover:text-[#EE3F0B] "}
              >
                <li className={"text-white hover:text-[#029293] "}>
                  Warranty Policy
                </li>
              </Link>
              <Link
                href={"/return-refund-policy"}
                className={"text-white hover:text-[#029293] "}
              >
                Return Refund policy
              </Link>
              <Link
                href={"/pre-order"}
                className={"text-white hover:text-[#029293] "}
              >
                <li>Pre Order</li>
              </Link>
              <Link
                href={"/terms-conditions"}
                className={"text-white hover:text-[#EE3F0B] block"}
              >
                Terms And Conditions
              </Link>
            </li>
            <li className="w-1/2 md:w-auto mb-5 text-xs md:text-sm">
              <li className="text-[#EE3F0B] md:text-lg text-sm">
                PRODUCT DELIVERY
              </li>
              <Link
                href={"/delivery-return"}
                className={"text-white hover:text-[#EE3F0B] "}
              >
                Delivery and Return
              </Link>

              <Link href={"/track-my-order"}>
                <li className={"text-white hover:text-[#EE3F0B] "}>
                  Order Tracking
                </li>
              </Link>
              <li className={"text-white hover:text-[#EE3F0B] "}>FAQ</li>
            </li>
            <li className="w-1/2 md:w-auto mb-5 text-xs md:text-sm">
              <li className="text-[#EE3F0B] md:text-lg text-sm">CATEGORY</li>
              <li className={"text-white hover:text-[#EE3F0B]"}>
                Phone and Tablets
              </li>
              <li className={"text-white hover:text-[#EE3F0B]"}>Macbook</li>
              <li className={"text-white hover:text-[#EE3F0B]"}>Sound</li>
            </li>
          </ul>
          <div className={"col-span-12 lg:col-span-4"}>
            <div className="flex justify-center mt-4 mx-auto space-x-4 leading-3 ">
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

            <div className="mt-5 lg:pl-12">
              <button className="bg-_primary w-full text-sm lg:text-lg text-white px-10 py-2 rounded-sm uppercase">
                Store Locator
              </button>
            </div>
          </div>
        </div>

        {/* row -3  */}

        <div className="flex flex-col md:flex-row md:text-md text-xs justify-between items-center mt-16 gap-4 text-center  md:text-start ">
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

export default NewFooter;
