import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularProductCard = ({ className, data }: any) => {
  return (
    <div
      data-aos="fade-up"
      className={`product-card-row-two w-full  ${className || ""}`}
    >
      <div className="w-full h-[105px] bg-white border border-primarygray px-5 ">
        <div className="w-full h-full flex space-x-5 justify-center items-center">
          <div className="w-[75px] h-[75px] relative">
            {/* <Image layout='fill'
              src={`/assets/images/${datas?.image}`}
              alt=""
              className="w-full h-full object-cover"
            /> */}
            <Image
              width={100}
              height={100}
              src={data?.variations[0].image}
              className="w-full h-full object-cover"
              alt={data?.variations[0].altText}
            />
          </div>
          <div className="flex-1 h-full flex flex-col justify-center ">
            <Link href={`/products/${data?._id}`}>
              <p className=" font-bold text-_primary title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-qyellow cursor-pointer">
                {data?.title}
              </p>
            </Link>

            <p className="price">
              <span className=" font-semibold line-through font-600 text-sm">
                {data?.price}
              </span>
              <span className=" font-semibold text-red-500 text-qred font-600 text-sm ml-2">
                {data?.offer_price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
