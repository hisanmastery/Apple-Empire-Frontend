"use client";
import React from "react";
import Link from "next/link";
import EmailSubscribe from "@/components/home/email-subscribe";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useGetAllCategoryQuery } from "@/store/features/category/categoryApi";
import { useGetAllLogoQuery } from "@/store/features/ads-section/adsSectionApi";

const NewFooter = () => {
  const { data: logo } = useGetAllLogoQuery<any>({});
  const { data } = useGetAllCategoryQuery<any>({
    page: 1,
    limit: 4,
  });
  const categoryData = data?.data;
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
              src={logo?.data?.footerLogo?.imageUrl || images.NavbarLogo}
              alt={logo?.data?.footerLogo?.altText || ""}
            />
          </div>

          <div className="font-normal">
            <Link href={"/contact-us"} className="text-sm md:text-md">
              Contact Us
            </Link>
            <p className="text-_primary text-xs">support@appleempire.com</p>
          </div>

          <div className="font-normal">
            <h4 className="text-sm md:text-md">Customer Service</h4>
            <p className="text-_primary text-xs">support@appleempire.com</p>
          </div>
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
                <li className={"text-white hover:text-_primary block"}>Blog</li>
              </Link>
              <Link href={"/contact-us"}>
                <li className={"text-white hover:text-_primary block"}>
                  Contact Us
                </li>
              </Link>
              <Link href={"/complain-by-advise"}>
                <li className={"text-white hover:text-_primary block"}>
                  Complain By Advise
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
                className={"text-white hover:text-_primary block"}
              >
                Warranty Policy
              </Link>
              <Link
                href={"/exchange-policy"}
                className={"text-white hover:text-_primary block"}
              >
                Exchange Policy
              </Link>
              <Link href={"/faq"}>
                <li className={"text-white hover:text-_primary block"}> FAQ</li>
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
              <p className="text-_black mt-1">------</p>
            </ul>
            <ul className="w-1/2 md:w-auto mb-5 text-xs md:text-sm">
              <li className="text-_primary md:text-lg text-sm">CATEGORY</li>

              {categoryData?.map((item: any) => (
                <Link href={`/category/${item.slug}`} key={item.slug}>
                  <li className="text-white hover:text-_primary">
                    {item.categoryName}
                  </li>
                </Link>
              ))}
              <Link href={"/"}>
                <li className={"text-white hover:text-_primary"}>Used</li>
              </Link>
            </ul>
          </div>
          <div className={"col-span-12 lg:col-span-4"}>
            <div className="flex justify-center mt-4 mx-auto space-x-4 leading-3 ">
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.facebook.com/appleempireofficial"
              >
                <icons.FaFacebookSquareIcon className="text-blue-500 hover:text-_primary w-6 h-6" />
              </Link>
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.youtube.com/channel/UCBgC5hXxkx99ALzMvnmyvHw"
              >
                <icons.IoLogoYoutubeIcon className="text-red-500 hover:text-_primary w-6 h-6" />
              </Link>

              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.linkedin.com/company/appleempireofficial"
              >
                <icons.FaLinkedinIcons className="text-blue-400 hover:text-_primary w-6 h-6" />
              </Link>
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.tiktok.com/@appleempireofficial"
              >
                <icons.FaTiktokIcon className="text-sky-300 hover:text-_primary w-6 h-6" />
              </Link>
              <Link
                rel="nofollow"
                target="_blank"
                href="https://www.instagram.com/appleempireofficial"
              >
                <icons.FaInstagramIcon className="text-pink-500 hover:text-_primary w-6 h-6" />
              </Link>
            </div>

            <div className="mt-5 lg:pl-12">
              <Link
                href="https://www.google.com/maps/place/Apple+Empire/@23.750681,90.390762,16z/data=!4m6!3m5!1s0x3755b995778e1b1d:0x223b86e15d877488!8m2!3d23.7506809!4d90.3907624!16s%2Fg%2F11tjxrzt58?hl=en&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
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
        <div>
          <h5 className="mb-3">Secure Payments</h5>
          <Image
            src={logo?.data?.footerPayment?.imageUrl}
            alt={logo?.data?.footerPayment?.altText || "payment image"}
            width={864}
            height={16}
            className="w-full h-[36px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
