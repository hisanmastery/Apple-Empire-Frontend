import React, { Fragment } from 'react';
import { phoneMenusData } from '@/data/phone-menus';
import { tabletMenusData } from '@/data/tablet-menus';
import { SoundEquipmentData } from '@/data/sound-equipment-menus';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import SearchInput from './searchInput';
import Link from 'next/link';
import { PowerAccessoriesMenus } from '@/data/power-accessories-menus';
import { DesktopMenusData } from '@/data/desktop-menus';
import { SmartWatchData } from '@/data/smart-watch-menus';
import { AccessroiesData } from '@/data/accessroies-menus';
import { GadgetData } from '@/data/gadget-menus';
function SubMenu(props: any) {
  return (
    <Fragment>
      <div className="lg:hidden p-2 rounded-none text-black bg-white ">
        <SearchInput />
      </div>
      <div className="lg:block hidden">
        <Menubar className="p-2 rounded-none text-black bg-white ">
          <MenubarMenu>
            <MenubarTrigger>Phones & Tablets</MenubarTrigger>
            <MenubarContent className='h-screen mb-10 overflow-auto -z-0'>
              {
                phoneMenusData?.map((items: any, index: number) => <MenubarItem key={index}>
                  <Link href={""} className='hover:text-_dark-color text-md font-medium'>
                    {items?.label}
                  </Link>
                </MenubarItem>)
              }
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Laptop</MenubarTrigger>
            <MenubarContent className='-z-0'>
              {
                tabletMenusData?.map((items: any, index: number) => <MenubarItem key={index}>
                  <Link href={""} className='hover:text-_dark-color text-md font-medium'>
                    {items?.label}
                  </Link>
                </MenubarItem>)
              }
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Desktop</MenubarTrigger>
            <MenubarContent className='-z-0'>
              {
                DesktopMenusData?.map((items: any, index: number) => <MenubarItem key={index}>
                  <Link href={""} className='hover:text-_dark-color text-md font-medium'>
                    {items?.label}
                  </Link>
                </MenubarItem>)
              }
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Sound Equipment</MenubarTrigger>
            <MenubarContent className='-z-0'>
              {
                SoundEquipmentData?.map((items: any, index: number) => <MenubarItem key={index}>
                  <Link href={""} className='hover:text-_dark-color text-md font-medium'>
                    {items?.label}
                  </Link>
                </MenubarItem>)
              }
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Power & Accessories</MenubarTrigger>
            <MenubarContent className='-z-0'>
              {
                PowerAccessoriesMenus?.map((items: any, index: number) => <MenubarItem key={index}>
                  <Link href={""} className='hover:text-_dark-color text-md font-medium'>
                    {items?.label}
                  </Link>
                </MenubarItem>)
              }
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Smart Watch</MenubarTrigger>
            <MenubarContent className='h-screen mb-10 overflow-auto -z-0'>
              {
                SmartWatchData?.map((items: any, index: number) => <MenubarItem key={index}>
                  <Link href={""} className='hover:text-_dark-color text-md font-medium'>
                    {items?.label}
                  </Link>
                </MenubarItem>)
              }
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Accessories</MenubarTrigger>
            <MenubarContent className='-z-0'>
              {
                AccessroiesData?.map((items: any, index: number) => <MenubarItem key={index}>
                  <Link href={""} className='hover:text-_dark-color text-md font-medium'>
                    {items?.label}
                  </Link>
                </MenubarItem>)
              }
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Gadget</MenubarTrigger>
            <MenubarContent className='-z-0'>
              {
                GadgetData?.map((items: any, index: number) => <MenubarItem key={index}>
                  <Link href={""} className='hover:text-_dark-color text-md font-medium'>
                    {items?.label}
                  </Link>
                </MenubarItem>)
              }
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </Fragment>
  );
}

export default SubMenu;
