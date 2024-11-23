"use client";
import { icons } from "@/constants/icons";
import { storedWishLists } from "@/store/features/cart/cartSlice";
import Image from "next/image";
import { get_wish_lists } from "@/utils/get_store_data";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "@/hooks/useToaster";
import axios from "axios";
import { baseApiUrl } from "@/constants/endpoint";

export default function WishLists({ className }: any) {
  const { wishLists } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  const showToast = useToaster();

  // refetch wishlist
  const refetchWishLists = async () => {
    const data: any = await get_wish_lists();
    dispatch(storedWishLists(data));
  };
  const handleIncrementQuantity = async (productData: any) => {
    const email = localStorage.getItem("email");
    const newQuantity = parseFloat(productData?.quantity);
    const post_object = {
      _id: productData?._id,
      email: email,
      productId: productData?.productId,
      image: productData?.image?.viewUrl,
      price: productData?.price,
      quantity: newQuantity + 1,
      title: productData?.title,
    };

    try {
      const res = await axios.patch(
        `${baseApiUrl}/wishlist/update-wishlist/${productData?._id}`,
        post_object
      );
      if (res?.data?.isSuccess) {
        await refetchWishLists();
      } else {
        showToast("error", "Wish can't be incremented");
      }
    } catch (error) {
      showToast("error", "Error while incrementing wish");
    }
  };

  const handleDecrementQuantity = async (item: any) => {
    const post_object = {
      quantity: item?.quantity - 1,
    };

    try {
      if (post_object?.quantity <= 0) {
        const token = localStorage?.getItem("token");
        await axios.delete(
          `${baseApiUrl}/wishlist/delete-wishlist/${item?._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        showToast("success", "Wish removed successfully");
        await refetchWishLists();
      } else {
        await axios.patch(
          `${baseApiUrl}/wishlist/update-wishlist/${item?._id}`,
          post_object
        );
        await refetchWishLists();
      }
    } catch (error) {
      showToast("error", "Error while decrementing wish");
    }
  };

  // handle removing a product from the wishlist
  const removeWish = async (product: any) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `${baseApiUrl}/wishlist/delete-wishlist/${product?._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      showToast("success", "Wish removed successfully");
      await refetchWishLists();
    } catch (error) {
      showToast("error", "Wish can't be removed");
    }
  };

  const ProductPrice = ({ product }: any) => {
    if (!product || !product.price || !product.quantity) return null;

    const unitPrice = parseInt(product.price.replace(/,/g, ""), 10);
    if (isNaN(unitPrice)) return null;

    const totalPrice = unitPrice * product.quantity;

    return <p>{`${totalPrice}$`}</p>;
  };

  return (
    <div
      style={{ boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)" }}
      className={`w-[80vw] msm:w-[330px] bg-white border-t-[3px]  ${
        className || ""
      }`}
    >
      <div className="w-full h-full">
        <div className="product-items h-[310px] overflow-y-scroll">
          <ul>
            {wishLists?.map((product: any, index: number) => (
              <li key={index} className="px-2 border-[1px] mb-2">
                <div className="flex gap-2 justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Image
                      height={50}
                      width={50}
                      src={product?.image}
                      className="w-16"
                      alt="products"
                    />
                    <div className="flex gap-5">
                      <p className="text-sm">
                        {product?.title?.slice(0, 20)}...
                      </p>
                      <ProductPrice product={product} />
                    </div>
                  </div>
                  <div className="cursor-pointer mx-2 font-bold text-red-500 hover:text-red-700">
                    <p onClick={() => removeWish(product)}>
                      <icons.crossIcon />
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full mb-2">
                  <button
                    onClick={() => handleDecrementQuantity(product)}
                    type="button"
                    className="text-base mr-2 border-[1px] size-7"
                  >
                    -
                  </button>
                  <span className="text-qblack">{product?.quantity}</span>
                  <button
                    onClick={() => handleIncrementQuantity(product)}
                    type="button"
                    className="text-base size-7 ml-2 border-[1px]"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
