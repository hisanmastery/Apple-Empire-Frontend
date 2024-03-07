"use client"
import React from 'react';
import * as Radix from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import { Drawer } from 'vaul';

const NewManu = () => {
  return (
    <Radix.Root className="grid grid-cols-3  lg:grid-cols-7 gap-4 fixed w-full z-[2]  shadow-xl bg-white p-4" >
        <div className="col-span-1 lg:hidden z-[10] ">
        <Drawer.Root direction="left">
      <Drawer.Trigger asChild>
        <button>Open Drawer</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full  mt-24 fixed bottom-0 left-0">
          <div className="p-4 bg-white flex-1 h-full">
            <div className="max-w-md mx-auto">
              
      
              <Drawer.Title className="font-medium mb-4">
                Unstyled drawer for React.
                <Drawer.Trigger asChild>
        <button className='float-right'>X</button>
      </Drawer.Trigger>
              </Drawer.Title>
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <p className="text-zinc-600 mb-8">
                It uses{" "}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                >
                  Radix&rsquo;s Dialog primitive
                </a>{" "}
                under the hood and is inspired by{" "}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                >
                  this tweet.
                </a>
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
        </div>
        <div className="col-span-1 "><Radix.List className="flex list-none col-span-1">
          <Radix.Item>
            <Radix.Trigger className="text-gray-800 py-1 px-3">Apple Empire</Radix.Trigger>
          </Radix.Item>
        </Radix.List></div>
        <div className="col-span-5 lg:block hidden text-gray-800">
          <Radix.List className="flex list-none  col-span-2">
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:bg-gray-200 rounded px-3">Home</Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:bg-gray-200 rounded px-3">About</Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:bg-gray-200 rounded px-3">Services</Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:bg-gray-200 rounded px-3">Portfolio</Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 hover:bg-gray-200 rounded px-3">Contact</Radix.Trigger>
          </Radix.Item>
          <Radix.Item>
            <Radix.Trigger className=" py-1 px-3  hover:bg-gray-200">Mega Menu</Radix.Trigger>
            <Radix.Content className="absolute duration-300 delay-150 transition ease-out left-0 top-[47px] text-lg-center z-[2] w-full">
              <div className="bg-gray-100  grid grid-cols-4 gap-4 shadow-lg p-6 rounded-lg rounded-t-none" >
                <div className='col-span-1 border-r-1 '>
                  <h3 className='font-semibold'>Title 1</h3>
                  <ul className='p-3 px-1 border-r-2 border-gray-300'>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 1</li>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 2</li>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 3</li>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 4</li>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 5</li>
                  </ul>
                </div>
                <div className='col-span-1 border-r-1 '>
                  <h3 className='font-semibold'>Title 2</h3>
                  <ul className='p-3 px-1 border-r-2 border-gray-300'>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 1</li>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 2</li>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 3</li>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 4</li>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 5</li>
                  </ul>
                </div>
                <div className='col-span-1 border-r-1 '>
                  <h3 className='font-semibold'>Title 3</h3>
                  <ul className='p-3 px-1 border-r-2 border-gray-300'>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 1</li>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 2</li>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 3</li>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 4</li>
                    <li className='cursor-pointer rounded-md hover:bg-white px-5 py-2'>Item 5</li>
                  </ul>
                </div>
                <div className='col-span-1  '>
                  <h3 className='font-semibold'>Title 4</h3>
                  <ul className='py-1  '>
                    {/* <Image src={bgImage} alt='Image' /> */}
                    <img src="https://www.shutterstock.com/image-photo/lahore-pakistan-may-13th-2021-600nw-1973343692.jpg" alt="image" className='h-full rounded-lg w-full' />
                  </ul>
                </div>
              </div>
            </Radix.Content>
          </Radix.Item>
        </Radix.List>
        </div>
        <div className="col-span-1"><Radix.List className="flex text-gray-800 list-none float-right col-span-1">
          <Radix.Item>
            <Radix.Trigger className=" py-1 px-3">Items</Radix.Trigger>
          </Radix.Item>
        </Radix.List></div>
    </Radix.Root>
  );
}

export default NewManu;