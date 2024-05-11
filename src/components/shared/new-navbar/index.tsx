"use client"
import CustomNavigationMenu from "@/components/common/navigation-menu";
import { icons } from "@/constants/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AccessroiesData } from "@/data/accessroies-menus";
export default function NewNavbar({ className, type }: any) {
    const [categoryToggle, setToggle] = useState(false);
    const [elementsSize, setSize] = useState("0px");
    const handler = () => {
        setToggle(!categoryToggle);
    };
    useEffect(() => {
        if (categoryToggle) {
            const getItems = document.querySelectorAll(`.categories-list li`).length;
            if (categoryToggle && getItems > 0) {
                setSize(`${42 * getItems}px`);
            }
        } else {
            setSize(`0px`);
        }
    }, [categoryToggle]);

    return (
        <div
            className={` w-full bg-_primary sticky top-0  h-[60px] z-30`}
        >
            <div className="container mx-auto h-full">
                <div className="w-full h-full relative">
                    <div className="w-full h-full flex justify-between items-center">
                        <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
                            <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                                <button
                                    onClick={handler}
                                    type="button"
                                    className="w-full h-full flex justify-between items-center"
                                >
                                    <div className="flex space-x-3 items-center">
                                        <span>
                                            <icons.barsIcon />
                                        </span>
                                        <span className="text-sm font-600 text-qblacktext">
                                            All Categories
                                        </span>
                                    </div>
                                    <div>
                                    </div>
                                </button>
                                {categoryToggle && (
                                    <div
                                        className="fixed top-0 left-0 w-full h-full -z-10"
                                        onClick={handler}
                                    ></div>
                                )}
                                <div
                                    className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden"
                                    style={{ height: `${elementsSize} ` }}
                                >
                                    <ul className="categories-list">
                                        <li className="category-item">
                                            <Link href="/all-products">
                                                <div
                                                    className={`flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack ${type === 3
                                                        ? "hover:bg-qh3-blue hover:text-white"
                                                        : "hover:bg-qyellow"
                                                        }`}
                                                >
                                                    <div className="flex items-center space-x-6">
                                                        <span>
                                                        </span>
                                                        <span className="text-xs font-400">
                                                            Mobile & Laptops
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-10">
                            <div className="text-_white font-medium text-lg">
                                <Link href={"/"}>Home</Link>
                            </div>
                            <div className="text-_white">
                                <CustomNavigationMenu title="Shop" data={AccessroiesData} />
                            </div>
                            <div className="text-_white">
                                <CustomNavigationMenu title="Pages" data={AccessroiesData} />
                            </div>
                            <div className="text-_white">
                                <CustomNavigationMenu title="Pages" data={AccessroiesData} />
                            </div>
                            <div className="text-_white">
                                <CustomNavigationMenu title="Pages" data={AccessroiesData} />
                            </div>
                        </div>
                        <div className="become-seller-btn">
                            <Link href="/become-saller">
                                <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                                    <div className="flex space-x-2 items-center text-_white bg-_black px-5 py-3 rounded-sm font-medium">
                                        <span className="text-sm font-600">Become a Seller</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
