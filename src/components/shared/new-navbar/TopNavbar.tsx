import Link from "next/link";
import SearchInput from "../navbar/searchInput";
import { icons } from "@/constants/icons";
import Image from "next/image";

export default function TopNavbar({ className, type }: any) {
    return (
        <div className={`w-full h-[86px] bg-[#a0c1b1] ${className}`}>
            <div className="container mx-auto h-full">
                <div className="relative h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="cursor-pointer">
                            <Link href="/">
                                <Image
                                    width={50}
                                    height={50}
                                    src={`https://appleempirebd.com/wp-content/uploads/2023/07/Apple-Empire-W-SVG-1.svg`}
                                    alt="logo"
                                    className="p-2 w-24 h-24"
                                />
                            </Link>
                        </div>
                        <div className="lg:w-[517px] lg:h-[44px] w-[50%] hidden md:block">
                            <SearchInput />
                        </div>
                        <div className="flex space-x-6 items-center">
                            <div className="compaire relative">
                                <Link href="/products-compaire" passHref>
                                    <p rel="noopener noreferrer">
                                        <span>
                                            <icons.FavoriteBorder className="text-lg" />
                                        </span>
                                    </p>
                                </Link>
                                <span
                                    className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${type === 3 ? "bg-qh3-blue text-white" : "bg-qyellow"
                                        }`}
                                >
                                    2
                                </span>
                            </div>
                            <div className="favorite relative">
                                <Link href="/wishlist" passHref>
                                    <p rel="noopener noreferrer">
                                        <span>
                                            <icons.ShoppingBagSolid className="text-lg" />
                                        </span>
                                    </p>
                                </Link>
                                <span
                                    className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${type === 3 ? "bg-qh3-blue text-white" : "bg-qyellow"
                                        }`}
                                >
                                    1
                                </span>
                            </div>
                            <div className="cart-wrapper group relative py-4">
                                <div className="cart relative cursor-pointer">
                                    <Link href="/cart" passHref>
                                        <p rel="noopener noreferrer">
                                            <span>
                                                <icons.LuUser2 className="text-lg" />
                                            </span>
                                        </p>
                                    </Link>
                                    <span
                                        className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${type === 3 ? "bg-qh3-blue text-white" : "bg-qyellow"
                                            }`}
                                    >
                                        15
                                    </span>
                                </div>
                                {/* <Cart
                  type={type}
                  className="absolute -right-[45px] top-11 z-50 hidden group-hover:block"
                /> */}
                            </div>
                            <div>
                                <Link href="/profile#dashboard" passHref>
                                    <p rel="noopener noreferrer">
                                        <span>
                                            {/* <ThinPeople /> */}
                                        </span>
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
