'use client';
import { AlignLeft, UserRound, X } from 'lucide-react';
import React from 'react';
import { Drawer } from 'vaul';

export const LeftSideMenu = (props: any) => {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger asChild>
        <button>
          <AlignLeft className="text-white" />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-black text-white flex flex-col rounded-t-[10px] z-[10] w-[300px] h-full  mt-24 fixed bottom-0 left-0">
          <div className="p-4 bg-black flex-1 mt-5 h-full">
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
  );
};

export const RightSideMenu = () => {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <button>
          <UserRound />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-black text-white flex flex-col rounded-t-[10px] z-[3] w-[300px] h-full  mt-24 fixed bottom-0 right-0">
          <div className="p-4 bg-black flex-1 h-full">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Apple Empire
                <Drawer.Trigger asChild>
                  <button className="float-right">
                    <X />
                  </button>
                </Drawer.Trigger>
              </Drawer.Title>
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <p className="text-zinc-600 mb-8">
                It uses{' '}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                >
                  Radix&rsquo;s Dialog primitive
                </a>{' '}
                under the hood and is inspired by{' '}
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
  );
};
