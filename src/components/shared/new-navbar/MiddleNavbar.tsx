import Link from "next/link";
import SearchInput from "../navbar/searchInput";
import { icons } from "@/constants/icons";
import Image from "next/image";
import Cart from "./Cart";
import WishLists from "./WishLists";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import useAuth from "@/hooks/useAuth";
import { images } from "@/constants/images";

export default function Middlebar({ className, type }: any) {
  const { storedCart,wishLists } = useSelector((state: any) => state?.cart);
  const { isAuthenticated, customerInfo } = useAuth();
  return (
    <div className={`w-full ssm:h-[75px] smd:h-[86px] bg-_black ${className} sticky top-0 z-50`}>
      <div className="px-3 xsm:px-4 smd:container smd:px-auto mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div className="cursor-pointer">
              <Link href="/">
                <Image
                  width={50}
                  height={50}
                  src={images.NavbarLogo}
                  alt="logo"
                  className="p-2 w-18 md:w-28"
                />
              </Link>
            </div>
            <div className="lg:w-[517px] lg:h-[44px] w-[50%] hidden md:block">
              <SearchBox type={type} className="search-com" />
            </div>
            <div className="flex space-x-6 items-center">
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="" passHref>
                    <p rel="noopener noreferrer">
                      <span>
                        <icons.FavoriteBorder className="ssm:text-lg text-_white msm:text-xl lsm:text-2xl smd:text-2xl" />
                      </span>
                    </p>
                  </Link>
                  <span
                    className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                      type === 3 ? "bg-qh3-blue text-_white" : "bg-_primary"
                    }`}
                  >
                    {wishLists?.length?wishLists?.length:0}
                  </span>
                </div>
                <WishLists
                type={type}
                className="absolute -right-[45px] top-11 z-50 hidden group-hover:block"
                />
              </div>
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="/cart">
                    <p rel="noopener noreferrer">
                      <span>
                        <icons.ShoppingBagSolid className="ssm:text-lg text-_white msm:text-xl lsm:text-2xl smd:text-2xl" />
                      </span>
                    </p>
                  </Link>
                  <span
                    className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                      type === 3 ? "bg-qh3-blue text-_white" : "bg-_primary"
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
                        <icons.userIcons className="ssm:text-lg msm:text-xl text-_white lsm:text-2xl smd:text-2xl" />
                      </span>
                    </p>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link href={"/login"}>
                    <p rel="noopener noreferrer">
                      <span>
                        <icons.userIcons className="ssm:text-lg text-_white msm:text-xl lsm:text-2xl smd:text-2xl" />
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
