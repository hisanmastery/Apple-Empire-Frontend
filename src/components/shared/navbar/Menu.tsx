"use client";
import React, { Fragment } from "react";
import { LeftSideMenu, RightSideMenu } from "./sideMenu";
import Link from "next/link";
import SearchInput from "./searchInput";
import { Gift, ShoppingCart, Store, UserRound } from "lucide-react";
import SubMenu from "./subMenu";
import { useSelector } from "react-redux";
function Menu(props: any) {
  const { storedCart } = useSelector((state: any) => state?.cart);
  return (
    <Fragment>
      <div className=" font-inter grid grid-cols-5 lg:grid-cols-12 items-center sticky top-0  gap-4  w-full z-[2]  shadow-md bg-black p-3">
        <div className="col-span-2 lg:hidden z-[10] ">
          <LeftSideMenu />
        </div>
        <div className="col-span-1 flex list-none text-white py-1 px-3">
          {/* Apple Empire */}
          <Link href={"/"}>
            <img
              className="w-14"
              src={
                "https://appleempire.hisanmastery.com/assets/images/Apple-Empire-Logo.svg"
              }
              alt="logo"
            />
          </Link>
        </div>
        <div className="col-span-5 lg:block hidden">
          <SearchInput />
        </div>

        <div className="col-span-6 lg:block hidden">
          <div className=" grid grid-flow-col justify-around ">
            <div className="flex text-white items-center">
              <div className="text-[#FF4C06]">
                <Gift size={34} />
              </div>
              <div className="ml-2">
                <h5 className="font-semibold text-sm">Offers</h5>
                <p className="text-xs font-light">latest offers</p>
              </div>
            </div>

            <div className="flex text-white items-center">
              <div className="text-[#FF4C06]">
                <ShoppingCart size={34} />
              </div>
              <div className="ml-2">
                <Link href={"/cart"}>
                  <h5 className="font-semibold text-sm">
                    Cart({storedCart?.length})
                  </h5>{" "}
                  <p className="text-xs font-light">Add Items</p>
                </Link>
              </div>
            </div>

            <div className="flex text-white items-center">
              <div className="text-[#FF4C06]">
                <Store size={34} />
              </div>
              <div className="ml-2">
                <h5 className="font-semibold text-sm">Pre-Order</h5>
                <p className="text-xs font-light">Order Today</p>
              </div>
            </div>

            <div className="flex text-white items-center">
              <div className="text-[#FF4C06]">
                <UserRound size={34} />
              </div>
              <div className="ml-2">
                <Link href="/offers">
                  <h5 className="font-semibold text-sm">Offers</h5>
                  <p className="text-xs font-light">latest offers</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:hidden text-white">
          <div className="float-right">
            <RightSideMenu />
          </div>
        </div>
      </div>
      <SubMenu />
      {/* <Radix.Root className=" font-inter items-center sticky top-0  w-full z-[1] flex justify-center shadow-md bg-white text-black p-2">
        <Radix.List className="flex list-none ">
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:text-[#FF4C06] text-sm rounded px-3">
              <Link href={'/'}>Phones & Tablets</Link>
            </Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:text-[#FF4C06] text-sm rounded px-3">
              Laptop & Desktop
            </Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:text-[#FF4C06] text-sm rounded px-3">
              Sound Equipment
            </Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:text-[#FF4C06] text-sm rounded px-3">
              Power & Accessories
            </Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:text-[#FF4C06] text-sm rounded px-3">
              Fitness & Wearable
            </Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:text-[#FF4C06] text-sm rounded px-3">
              Peripherals
            </Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:text-[#FF4C06] text-sm rounded px-3">
              Cover & Glass
            </Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:text-[#FF4C06] text-sm rounded px-3">
              Smart Electronics
            </Radix.Trigger>
          </Radix.Item>

          <Radix.Item>
            <Radix.Trigger className=" py-1 px-3  hover:text-[#FF4C06] text-sm">
              Used Device
            </Radix.Trigger>
            <Radix.Content className="absolute duration-300 delay-150 transition ease-out left-0 top-[47px] text-lg-center z-[2] w-full">
              <div className="bg-white grid grid-cols-4 gap-4 shadow-lg p-6 rounded-lg rounded-t-none">
                <div className="col-span-1 border-r-1 ">
                  <h3 className="font-semibold">Title 1</h3>
                  <ul className="p-3 px-1 border-r-2 border-gray-300">
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 1
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 2
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 3
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 4
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 5
                    </li>
                  </ul>
                </div>
                <div className="col-span-1 border-r-1 ">
                  <h3 className="font-semibold">Title 2</h3>
                  <ul className="p-3 px-1 border-r-2 border-gray-300">
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 1
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 2
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 3
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 4
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 5
                    </li>
                  </ul>
                </div>
                <div className="col-span-1 border-r-1 ">
                  <h3 className="font-semibold">Title 3</h3>
                  <ul className="p-3 px-1 border-r-2 border-gray-300">
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 1
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 2
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 3
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 4
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-[#FF4C06] px-5 py-2">
                      Item 5
                    </li>
                  </ul>
                </div>
                <div className="col-span-1  ">
                  <h3 className="font-semibold">Title 4</h3>
                  <ul className="py-1  ">
                    <img
                      src="https://www.shutterstock.com/image-photo/lahore-pakistan-may-13th-2021-600nw-1973343692.jpg"
                      alt="image"
                      className="h-full rounded-lg w-full"
                    />
                  </ul>
                </div>
              </div>
            </Radix.Content>
          </Radix.Item>
        </Radix.List>
      </Radix.Root> */}
    </Fragment>
  );
}

export default Menu;
