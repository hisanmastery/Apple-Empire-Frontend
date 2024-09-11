import Link from "next/link";
import SearchInput from "../navbar/searchInput";
import { icons } from "@/constants/icons";
import Image from "next/image";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import useAuth from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

export default function Middlebar({ className, type }: any) {
  const { storedCart } = useSelector((state: any) => state?.cart);
  const { isAuthenticated, customerInfo } = useAuth();
  return (
    <div className={`w-full h-[70px] ssm:h-[86px] bg-slate-300 ${className}`}>
      <div className="container mx-auto px-3 xsm:px-5 ssm:px-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div className="cursor-pointer">
              <Link href="/">
                <Image
                  width={50}
                  height={50}
                  src={`https://appleempirebd.com/wp-content/uploads/2023/07/Apple-Empire-W-SVG-1.svg`}
                  alt="logo"
                  className="p-2 w-16 h-16 ssm:w-20 xsm:h-20"
                />
              </Link>
            </div>
            {/* <div className="lg:w-[517px] lg:h-[44px] w-[50%] hidden md:block">
                            <SearchInput />
                        </div> */}
            <div className="lg:w-[517px] lg:h-[44px] w-[50%] hidden md:block">
              <SearchBox type={type} className="search-com" />
            </div>
            <div className="flex space-x-6 items-center">
              <div className="compaire relative">
                <Link href="" passHref>
                  <p rel="noopener noreferrer">
                    <span>
                      <icons.FavoriteBorder className="text-xl ssm:text-2xl" />
                    </span>
                  </p>
                </Link>
                <span
                  className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                    type === 3 ? "bg-qh3-blue text-white" : "bg-qyellow"
                  }`}
                >
                  2
                </span>
              </div>
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="/cart">
                    <p rel="noopener noreferrer">
                      <span>
                        <icons.ShoppingBagSolid className="text-xl ssm:text-2xl" />
                      </span>
                    </p>
                  </Link>
                  <span
                    className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                      type === 3 ? "bg-qh3-blue text-white" : "bg-qyellow"
                    }`}
                  >
                    {storedCart?.length || 0}
                  </span>
                </div>
                <Cart
                  type={type}
                  className="absolute -right-[45px] top-11 z-50 hidden group-hover:block"
                />
              </div>

              {isAuthenticated ? (
                <div className="favorite relative">
                  <Link href="/profile" passHref>
                    <p rel="noopener noreferrer">
                      <span>
                        <icons.LuUser2 className="text-xl ssm:text-2xl" />
                      </span>
                    </p>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link href={"/login"}>
                    <p rel="noopener noreferrer">
                      <span>
                        <icons.FaUserIcons className="text-xl ssm:text-2xl" />
                      </span>
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
