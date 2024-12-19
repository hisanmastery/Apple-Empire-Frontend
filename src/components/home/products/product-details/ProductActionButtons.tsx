"use client";
import React from "react";
import Link from "next/link";
import { iconsData } from "@/data/prodcuts_details_icons";
import WishListButton from "./WishListButton";

interface ProductActionButtonsProps {
  product: any;
  id: string;
  showToast: (type: string, message: string) => void;
}

const ProductActionButtons: React.FC<ProductActionButtonsProps> = ({
  product,
  id,
  showToast,
}) => {
  return (
    <div className="grid grid-cols-2 gap-5 lg:max-w-[500px] mt-5">
      {iconsData.map((item: any, index: number) => {
        if (item?.label === "WISHLIST") {
          return (
            <WishListButton
              key={index}
              item={product}
              showToast={showToast}
              isText={true}
            />
          );
        } else if (item?.label === "EXCHANGE") {
          return (
            <Link
              href="/exchange-policy"
              key={index}
              className="text-sm md:text-md font-medium flex items-center gap-3"
            >
              {item.icon}
              {item.label}
            </Link>
          );
        } else if (item?.label === "DELIVERY PLAN") {
          <Link
            href="/delivery-return"
            key={index}
            className="text-sm md:text-md font-medium flex items-center gap-3"
          >
            {item.icon}
            {item.label}
          </Link>;
        } else {
          return (
            <Link
              href={item.link ? `/compare?p1=${id}` : ""}
              key={index}
              className="text-sm md:text-md font-medium flex items-center gap-3"
            >
              {item.icon}
              {item.label}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default ProductActionButtons;
