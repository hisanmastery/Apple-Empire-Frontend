"use client"
import React from "react";
import Link from "next/link";
import { icons } from "@/constants/icons";
import { useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth";

interface StickyFooterProps {
  className?: any;
  type?: any;
}

function StickyFooter({ className, type }: StickyFooterProps) {
  const { storedCart, wishLists } = useSelector((state: any) => state?.cart);
  const { isAuthenticated, customerInfo } = useAuth();
  return (
    <footer className="bg-black block lg:hidden text-white left-0 bottom-0 w-screen fixed h-16 z-30">
      <div className="flex justify-around items-center">

      <div className="cart-wrapper group relative py-4">
          <div className="cart relative cursor-pointer">
            <Link href="/offers">
              <p rel="noopener noreferrer">
                <span>
                  <icons.offerIcons className="mx-auto ssm:text-lg text-_white msm:text-xl lsm:text-2xl smd:text-2xl"/>
                  <span className="text-[9px]">Offers</span>
                </span>
              </p>
            </Link>
          </div>
        </div>

        <div className="cart-wrapper group relative py-4">
          <div className="cart relative cursor-pointer">
            <Link href="/cart">
              <p rel="noopener noreferrer">
                <span>
                  <icons.MdAddShoppingCart className="mx-auto ssm:text-lg text-_white msm:text-xl lsm:text-2xl smd:text-2xl"/>
                  <span className="text-[9px]">Cart</span>
                </span>
              </p>
            </Link>
            <span
                className={`w-[14px] h-[14px] rounded-full  absolute -top-2 -right-[4px] flex justify-center items-center text-[9px] ${
                    type === 3 ? "bg-qh3-blue text-white" : "bg-_orange"
                }`}
            >
              {storedCart?.length || 0}
            </span>
          </div>
        </div>

        <div className="cart-wrapper group relative py-4">
          <div className="cart relative cursor-pointer">
            <Link href="/pre-order">
              <p rel="noopener noreferrer">
                <span>
                  <icons.FaShop className="mx-auto ssm:text-lg text-_white msm:text-xl lsm:text-2xl smd:text-2xl"/>
                  <span className="text-[9px]">Pre-Order</span>
                </span>
              </p>
            </Link>
          </div>
        </div>

        <div className="cart-wrapper group relative py-4">
          <div className="cart relative cursor-pointer">
            <Link href="/compare">
              <p rel="noopener noreferrer">
                <span>
                  <icons.IoMdGitCompareIcon className="mx-auto ssm:text-lg text-_white msm:text-xl lsm:text-2xl smd:text-2xl"/>
                  <span className="text-[9px]">Compare</span>
                </span>
              </p>
            </Link>
          </div>
        </div>

        {isAuthenticated ? (
            <div className="favorite relative">
            <Link href="/profile" passHref>
              <p rel="noopener noreferrer">
                <span>
                  <icons.LuUser2 className="mx-auto ssm:text-lg msm:text-xl text-_white lsm:text-2xl smd:text-2xl"/>
                  <span className="text-[9px]">Profile</span>
                </span>
              </p>
            </Link>
            </div>
        ) : (
          <div>
            <Link href={"/login"}>
              <p rel="noopener noreferrer">
                <span>
                  <icons.FaUserIcons className="mx-auto ssm:text-lg text-_white msm:text-xl lsm:text-2xl smd:text-2xl"/>
                  <span className="text-[9px]">Profile</span>
                </span>
              </p>
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}

export default StickyFooter;
