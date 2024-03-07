"use client";
import React from "react";
import * as Radix from "@radix-ui/react-navigation-menu";
import { Drawer } from "vaul";
import { AlignLeft, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NewManu = () => {
  return (
    <Radix.Root className="  grid grid-cols-3 lg:grid-cols-7 items-center  gap-4 fixed w-full z-[2]  shadow-md bg-[#1e272e] p-3">
      <div className="col-span-1 lg:hidden z-[10] ">
        <Drawer.Root direction="left">
          <Drawer.Trigger asChild>
            <button>
              <AlignLeft className="text-white" />
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-[#1e272e] text-white flex flex-col rounded-t-[10px] z-[3] w-[300px] h-full  mt-24 fixed bottom-0 left-0">
              <div className="p-4 bg-[#1e272e] flex-1 mt-5 h-full">
                <div className="max-w-sm mx-auto">
                  <Drawer.Title className="font-medium mb-4">
                    Apple Empire
                    <Drawer.Trigger asChild>
                      <button className="float-right">
                        <X />
                      </button>
                    </Drawer.Trigger>
                  </Drawer.Title>
                </div>
                <div>
                  <ul className="p-3 px-1 text-white">
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 1
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 2
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 3
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 4
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 5
                    </li>
                  </ul>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
      <div className="col-span-1 ">
        <Radix.List className="flex list-none col-span-1">
          <Radix.Item>
            <Radix.Trigger className="text-white py-1 px-3">
              {/* Apple Empire */}
              <img
                className="w-14"
                src={
                  "https://appleempire.hisanmastery.com/assets/images/Apple-Empire-Logo.svg"
                }
                alt="logo"
              />
            </Radix.Trigger>
          </Radix.Item>
        </Radix.List>
      </div>
      <div className="col-span-5 lg:block hidden text-white">
        <Radix.List className="flex list-none font-medium col-span-2">
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:bg-slate-600 rounded px-3">
              Home
            </Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:bg-slate-600 rounded px-3">
              About
            </Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:bg-slate-600 rounded px-3">
              Services
            </Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:bg-slate-600 rounded px-3">
              Portfolio
            </Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:bg-slate-600 rounded px-3">
              Contact
            </Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 px-3  hover:bg-slate-600">
              Mega Menu
            </Radix.Trigger>
            <Radix.Content className="absolute duration-300 delay-150 transition ease-out left-0 top-[47px] text-lg-center z-[2] w-full">
              <div className="bg-[#1e272e]  grid grid-cols-4 gap-4 shadow-lg p-6 rounded-lg rounded-t-none">
                <div className="col-span-1 border-r-1 ">
                  <h3 className="font-semibold">Title 1</h3>
                  <ul className="p-3 px-1 border-r-2 border-gray-300">
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 1
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 2
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 3
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 4
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 5
                    </li>
                  </ul>
                </div>
                <div className="col-span-1 border-r-1 ">
                  <h3 className="font-semibold">Title 2</h3>
                  <ul className="p-3 px-1 border-r-2 border-gray-300">
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 1
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 2
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 3
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 4
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 5
                    </li>
                  </ul>
                </div>
                <div className="col-span-1 border-r-1 ">
                  <h3 className="font-semibold">Title 3</h3>
                  <ul className="p-3 px-1 border-r-2 border-gray-300">
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 1
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 2
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 3
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 4
                    </li>
                    <li className="cursor-pointer rounded-md hover:bg-slate-600 px-5 py-2">
                      Item 5
                    </li>
                  </ul>
                </div>
                <div className="col-span-1  ">
                  <h3 className="font-semibold">Title 4</h3>
                  <ul className="py-1  ">
                    {/* <Image src={bgImage} alt='Image' /> */}
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
      </div>
      <div className="col-span-1">
        <Radix.List className="flex text-white list-none float-right col-span-1">
          <Radix.Item>
            <Radix.Trigger className=" py-1 px-3">
              <Button className="bg-[#FF4C06] px-[30px]">Login</Button>
            </Radix.Trigger>
          </Radix.Item>
        </Radix.List>
      </div>
    </Radix.Root>
  );
};

export default NewManu;
