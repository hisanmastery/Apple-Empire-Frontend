import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';

const CustomNavigationMenu = ({ data, title }: any) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className='text-md hover:text-_white'>{title}</NavigationMenuTrigger>
                    <NavigationMenuContent style={{ width: "300px", height: "auto" }} className='py-5'>
                        {
                            data?.map((items: any, index: number) => <div key={index} className='mb-2'>
                                <Link href={""}
                                    className='hover:text-_blue hover:underline w-96 text-_gray'>
                                    <p>{items.value}</p>
                                </Link>
                            </div>)
                        }
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    );
};

export default CustomNavigationMenu;
