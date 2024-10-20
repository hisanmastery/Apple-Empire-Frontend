"use client";
import Link from "next/link";
import { icons } from "@/constants/icons";
import Image from "next/image";
import Cart from "./Cart";
import WishLists from "./WishLists";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import useAuth from "@/hooks/useAuth";
import { images } from "@/constants/images";
import React from "react";

import compareIcon from "../../../../public/icons/Compair.png";

export default function MiddleNavbar({ className, type }: any) {
  const { storedCart, wishLists } = useSelector((state: any) => state?.cart);
  const { isAuthenticated } = useAuth();

  return (
    <div
      className={`hidden md:block w-full ssm:h-[75px] smd:h-[86px] bg-_black ${className}`}
    >
      <div className="px-3 xsm:px-4 smd:container smd:px-auto mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo Section */}
            <div className="cursor-pointer">
              <Link href="/">
                <Image
                  width={50}
                  height={50}
                  src={images.NavbarLogo}
                  alt="logo"
                  className="p-2 w-16 ssm:w-20 smd:w-24 mmd:w-28"
                />
              </Link>
            </div>

            {/* Search Icon (Mobile Only) */}
            <div className="favorite relative md:hidden">
              <Link href="/profile" passHref>
                <p rel="noopener noreferrer">
                  <span>
                    <icons.IoMdSearch className="ssm:text-lg msm:text-xl text-_white lsm:text-2xl smd:text-2xl" />
                  </span>
                </p>
              </Link>
            </div>

            {/* Search Box */}
            <div className="lg:h-[44px] w-[50%] lg:w-[30%] 2xl:w-[40%] hidden md:block">
              <SearchBox />
            </div>

            {/* Navigation Items */}
            <div className="lg:flex hidden gap-10 items-center">
              {/* Wish List */}
              {/* <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer flex items-center">
                  <Link href="">
                    <div rel="noopener noreferrer">
                      <p className="flex justify-center">
                        <icons.FavoriteBorder className="text-3xl text-_primary" />
                      </p>
                      <span className="text-_white text-center">Wish List</span>
                    </div>
                  </Link>
                </div>
                <span className="w-5 h-5 bg-_primary rounded-full absolute top-2 right-[7px] flex items-center justify-center text-_white">
                  {wishLists?.length ? wishLists?.length : 0}
                </span>
                <WishLists
                  type={type}
                  className="absolute -right-[45px] top-20 z-50 hidden group-hover:block"
                />
              </div> */}
              {/* offer */}
              <Link href="/offers">
                <div rel="noopener noreferrer">
                  <p className="flex justify-center">
                    <icons.offerIcons className="text-3xl text-_primary" />
                  </p>
                  <span className="text-_white">Offers</span>
                </div>
              </Link>
              {/* Shopping Cart */}
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer flex items-center">
                  <Link href="/cart">
                    <div rel="noopener noreferrer">
                      <p>
                        <icons.MdAddShoppingCart className="text-3xl text-_primary" />
                      </p>
                      <span className="text-_white">Cart</span>
                    </div>
                  </Link>
                </div>
                <span className="w-5 h-5 bg-_primary rounded-full absolute top-1 -right-3 flex items-center justify-center text-_white">
                  {storedCart?.length || 0}
                </span>
                <Cart
                  type={type}
                  className="absolute -right-[45px] top-20 z-50 hidden group-hover:block"
                />
              </div>
              
              {/* Shop Link */}
              <Link href="/pre-order">
                <div rel="noopener noreferrer">
                  <p className="flex justify-center">
                    <icons.FaShop className="text-3xl text-_primary" />
                  </p>
                  <span className="text-_white">Pre-Order</span>
                </div>
              </Link>

               {/* compare Link */}
               <Link href="/compare">
                <div rel="noopener noreferrer">
                  <p className="flex justify-center">
                    {/* <icons.FaShop className="text-3xl text-_primary" /> */}
                    <Image src={compareIcon} alt="compaire icon" width={30} height={30}/>
                  </p>
                  <span className="text-_white">Compare</span>
                </div>
              </Link>
              {/* user  */}
              <Link href={isAuthenticated ? "/profile" : "/login"}>
                <div rel="noopener noreferrer">
                  <p className="flex justify-center">
                    <icons.LuUser2 className="text-3xl text-_primary" />
                  </p>
                  <span className="text-_white">Account</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
