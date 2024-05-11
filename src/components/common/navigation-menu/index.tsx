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
                    <NavigationMenuTrigger className='text-lg font-medium'>{title}</NavigationMenuTrigger>
                    <NavigationMenuContent style={{ width: "200px" }} className='h-auto w-72'>
                        {
                            data?.map((items: any, index: number) => <Link key={index} href={""} className='mb-10 hover:text-_primary w-80'>
                                <p>{items.value}</p>
                            </Link>)
                        }
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    );
};

export default CustomNavigationMenu;
