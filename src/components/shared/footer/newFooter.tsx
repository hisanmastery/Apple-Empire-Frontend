import React from "react";
import Link from "next/link";
import { FaAnglesDown } from "react-icons/fa6";
import EmailSubscribe from "@/components/home/email-subscribe";
import Image from "next/image";
import { icons } from "@/constants/icons";

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
            <Link href={"/contact-us"} className="text-sm md:text-md">
              Contact Us
            </Link>
            <p className="text-_primary text-xs">support@appleempirebd.com</p>
          </div>

          <div className="font-normal">
            <h4 className="text-sm md:text-md">Customer Service</h4>
            <p className="text-_primary text-xs">support@appleempirebd.com</p>
          </div>

          {/* <div className="font-normal">
            <h4 className="text-sm md:text-md">Customer Service</h4>
            <p className="text-_primary text-xs">support@appleempirebd.com</p>
          </div> */}

          {/* <div className="md:block hidden">
            <FaAnglesDown className="text-_primary h-14 w-14 rounded-full border-2 border-white s p-2 cursor-pointer " />
          </div> */}
        </div>
        {/* row -2  */}

        <div className="grid grid-cols-12 gap-5 justify-between w-full items-center mt-8">
          <div className="flex flex-wrap justify-between items-center col-span-12 lg:col-span-8  font-normal cursor-pointer">
            <ul className="w-1/2 md:w-auto mb-5 text-xs md:text-sm">
              <li className={"text-_primary md:text-lg text-sm"}>About Us</li>
              <Link href={"/about-us"}>
                <li className={"text-white hover:text-_primary block"}>
                  About Us
                </li>
              </Link>
              <Link href={"shop-address"}>
                <li className={"text-white hover:text-_primary block"}>
                  Shop Address
                </li>
              </Link>
              <Link href={"/blog"}>
                <li className={"text-white hover:text-_primary block"}>
                  {" "}
                  Blog
                </li>
              </Link>
              <Link href={"/contact-us"}>
                <li className={"text-white hover:text-_primary block"}>
                  {" "}
                  Contact Us
                </li>
              </Link>
              <Link href={"/faq"}>
                <li className={"text-white hover:text-_primary block"}>
                  {" "}
                  FAQ
                </li>
              </Link>
            </ul>
            <ul className="w-1/2 md:w-auto mb-5 text-xs md:text-sm">
              <li className="text-_primary md:text-lg text-sm block">Policy</li>
              <Link
                href={"/privacy-policy"}
                className={"text-white hover:text-_primary block"}
              >
                Privacy Policy
              </Link>
              <Link
                href={"/emi-policy"}
                className={"text-white hover:text-_primary block"}
              >
                EMI Policy
              </Link>
              <Link
                href={"/warranty-policy"}
                className={"text-white hover:text-_primary-bg block"}
              >
                Warranty Policy
              </Link>
              <Link
                href={"/exchange-policy"}
                className={"text-white hover:text-_primary-bg block"}
              >
                Exchange Policy
              </Link>
              
            </ul>
            <ul className="w-1/2 md:w-auto mb-5 text-xs md:text-sm">
              <li className="text-_primary md:text-lg text-sm">
                PRODUCT DELIVERY
              </li>
              <Link
                href={"/delivery-return"}
                className={"text-white hover:text-_primary "}
              >
                Delivery and Return
              </Link>

              <Link href={"/return-refund-policy"}>
                <li className={"text-white hover:text-_primary "}>
                  Refund and Return Policy
                </li>
              </Link>

              <Link href={"/track-my-order"}>
                <li className={"text-white hover:text-_primary "}>
                  Order Tracking
                </li>
              </Link>
              <Link
                href={"/terms-conditions"}
                className={"text-white hover:text-_primary block"}
              >
                Terms And Conditions
              </Link>
            </ul>
            <ul className="w-1/2 md:w-auto mb-5 text-xs md:text-sm">
              <li className="text-_primary md:text-lg text-sm">CATEGORY</li>
              <li className={"text-white hover:text-_primary"}>
                Phone and Tablets
              </li>
              <li className={"text-white hover:text-_primary"}>Macbook</li>
              <li className={"text-white hover:text-_primary"}>Sound</li>
            </ul>
          </div>
          <div className={"col-span-12 lg:col-span-4"}>
            <div className="flex justify-center mt-4 mx-auto space-x-4 leading-3 ">
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.facebook.com/appleempireofficial"
              >
                <icons.FaFacebookIcons className="text-blue-500 w-8 h-8" />
              </Link>
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.youtube.com/channel/UCBgC5hXxkx99ALzMvnmyvHw"
              >
                <icons.FaYoutubeIcon className="text-_primary w-8 h-8" />
              </Link>

              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.linkedin.com/company/appleempireofficial"
              >
                <icons.FaLinkedinIcons className="text-blue-400 w-8 h-8" />
              </Link>
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.tiktok.com/@appleempireofficial"
              >
                <icons.FaTiktokIcon className="text-sky-300 w-8 h-8" />
              </Link>
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.instagram.com/appleempireofficial"
              >
                <icons.FaInstagramIcon className="text-pink-500 w-8 h-8" />
              </Link>
            </div>

            <div className="mt-5 lg:pl-12">
              <Link
                href="https://www.google.com/maps/dir/23.8342215,90.3941915/3+No,+Bashundhara+City+Shopping+Mall,+Basement-1,Shop+No-27,+West+Panthapath,+Dhaka+1215/@23.7506591,90.3083608,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755b995778e1b1d:0x223b86e15d877488!2m2!1d90.3907624!2d23.7506809?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
                rel="nofollow"
                target="_blank"
              >
                <button className="bg-_primary w-full text-sm lg:text-lg text-white px-10 py-2 rounded-sm uppercase">
                  Store Locator
                </button>
              </Link>
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
