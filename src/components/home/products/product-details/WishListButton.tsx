"use client";
import React, { useEffect, useState } from "react";
import { icons } from "@/constants/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { storedWishLists } from "@/store/features/cart/cartSlice";

import { baseApiUrl } from "@/constants/endpoint";
import { get_wish_lists } from "@/utils/get_store_data";
import { useRouter } from "next/navigation";

const WishListButton = ({ item, showToast, isText }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [wishItem, setWishItem] = useState<any>(null);
  const email = localStorage.getItem("email");
  const { wishLists } = useSelector((state: any) => state?.cart);

  const handleWishLists = async () => {
    const token = localStorage.getItem("token");
    if (wishItem) {
      try {
        const res = await axios.delete(
          `${baseApiUrl}/wishlist/delete-wishlist/${wishItem?._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res?.data?.isSuccess) {
          setWishItem(null);
          showToast("success", "Wish removed successfully");
          const updatedWishList = await get_wish_lists();
          dispatch(storedWishLists(updatedWishList));
        } else {
          showToast("error", "Could not remove wish");
        }
      } catch (error) {
        showToast("error", "Could not remove wish");
      }
    } else {
      if (!email) {
        return router.push("/login");
      }
      const postObject = {
        email,
        productId: item?._id,
        image: item?.image?.imageUrl,

        price: item?.variants?.price || item?.offerPrice || item?.price,
        quantity: 1,
        title: item?.name,
      };
      try {
        const res = await axios.post(
          `${baseApiUrl}/wishlist/create-wishlist`,
          postObject
        );
        if (res?.data?.isSuccess) {
          showToast("success", "Wish added successfully");
          const updatedWishList = await get_wish_lists();
          dispatch(storedWishLists(updatedWishList));
        } else {
          showToast("error", "Could not add wish");
        }
      } catch (error) {
        showToast("error", "Could not add wish");
      }
    }
  };

  useEffect(() => {
    if (wishLists?.length) {
      const filter = wishLists.filter((d: any) => {
        return d?.productId === item?._id;
      });

      if (filter?.length) {
        const data = filter[0];
        setWishItem(data);
      } else {
        setWishItem(null);
      }
    }
  }, [item, wishLists, setWishItem]);
  return (
    <div
      className="text-md font-medium flex items-center gap-3 hover:cursor-pointer"
      onClick={handleWishLists}
    >
      {wishItem ? (
        <icons.MdOutlineFavorite className="text-xl text-_primary" />
      ) : (
        <icons.FavoriteBorder className="text-sm md:text-xl" />
      )}
      {isText && (wishItem ? "Remove from Wishlist" : "Add to Wishlist")}
    </div>
  );
};

export default WishListButton;
