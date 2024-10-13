"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ViewMoreTitle from "../../../common/ViewMoreTitle";
import { icons } from "@/constants/icons";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { getStoredData } from "@/store/features/cart/cartSlice";
import Link from "next/link";
import { useGetSingleProductsQuery } from "@/store/features/products/productsApi";
import ProductSlider from "../../product-slider";
import {
  useAddToCartMutation,
  useUpdateCartMutation,
} from "@/store/features/cart/cartApi";
import useAuth from "@/hooks/useAuth";
import useToaster from "@/hooks/useToaster";
import Emiplan from "@/components/emiplan";
import VariantDisplay from "./variant-display";
import ImageDisplay from "./image-display";
import ColorSelector from "./color-selector";
import SocialShare from "./social-share";
import ProductInfoTab from "./product-info-tab";
import ProductActionButtons from "./ProductActionButtons";
import { addToCart } from "./AddToCart";
import { handleIncrementQuantity } from "./quantity-update";
import QuantityController from "@/components/common/quantity-controller";
import { get_store_data } from "@/utils/get_store_data";
import ProductDetailsSkeleton from "@/components/shared/skeleton/products-details-skeleton";

const ProductDetails = ({ id }: any) => {
  const showToast = useToaster();
  const [isOpen, setIsOpen] = useState(false);
  const { customerInfo, isAuthenticated } = useAuth();
  const [variantPrice, setVariantPrice] = useState<any>();
  const { data, isLoading }: any = useGetSingleProductsQuery({ id });
  const [selectedColor, setSelectedColor]: any = useState();
  const [thisItem, setThisItem] = useState<any>({});
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  const [addToCartItem]: any = useAddToCartMutation();
  const [updateCart] = useUpdateCartMutation();

  useEffect(() => {
    if (storedCart?.length && data) {
      const new_data = data?.response;
      if (new_data?._id) {
        const filter = storedCart.filter((d: any) => {
          return d?.productId == new_data?._id;
        });

        if (filter?.length) {
          setThisItem(filter[0]);
        } else {
          setThisItem({});
        }
      }
    }
  }, [storedCart, data]);

  const handleColorButtonClick = (color: any) => {
    setSelectedColor(color);
  };

  // handle cart click
  const handleCartClick = async (productData: any) => {
    await addToCart(
      productData,
      dispatch,
      getStoredData,
      isAuthenticated,
      customerInfo,
      addToCartItem,
      showToast
    );
  };
  // check already added cart
  const isInCart = storedCart?.find((item: any) => item.productId === id);

  const refetchCartData = async () => {
    const data: any = await get_store_data();
    if (data?.length) {
      dispatch(getStoredData(data));
    }
  };

  // increment/Decrement function
  const handleInQuantityUpdate = async (value: any, isIncrement: boolean) => {
    const productData = storedCart?.find(
      (item: any) => item?.productId === value?._id
    );
    await handleIncrementQuantity(
      productData,
      isIncrement,
      isAuthenticated,
      updateCart,
      showToast,
      refetchCartData,
      dispatch,
      getStoredData
    );
  };

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }
  return (
    <section className="container mx-auto py-5 px-2 md:px-0 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-10">
        <div className="col-span-3 flex mx-auto">
          <div>
            <ImageDisplay
              product={data}
              selectedColor={
                selectedColor || data?.response?.variations?.[0]?.color
              }
            />
            <div className="flex gap-2 mt-2 md:w-[80%] mx-auto">
              {data?.response?.variations
                ?.slice(0, 4)
                ?.map((variant: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white border rounded-md"
                    onClick={() => handleColorButtonClick(variant.color)}
                  >
                    <Image
                      width={100}
                      height={100}
                      className="transition-transform duration-300 transform cursor-pointer"
                      src={variant?.image[0]}
                      alt={`Product Image - ${variant.color}`}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-white px-2 md:px-5">
          <div className="flex justify-between">
            <div className={"w-full"}>
              <h2 className="flex items-center gap-2 text-md md:text-xl font-medium mb-2">
                {data?.response?.name?.slice(0, 50)}
              </h2>
              <div className="grid grid-cols-2 items-center lg:max-w-[500px]">
                <div
                  className={
                    "ml-2 text-md font-medium flex items-center gap-3 hover:cursor-pointer"
                  }
                >
                  <div
                    className="text-md font-medium text-_orange flex items-center gap-3 hover:cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    <icons.GrCurrencyIcons className="text-xl" />
                    EMIPLAN
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductActionButtons
            product={data?.response}
            id={id}
            showToast={showToast}
          />
          {/* color variant */}
          <div className="flex justify-between items-center mx-1">
            <ColorSelector
              variations={data?.response?.variations}
              selectedColor={selectedColor}
              onColorSelect={handleColorButtonClick}
            />
          </div>
          {/* variant */}
          <div>
            <VariantDisplay
              product={data?.response}
              setVariantPrice={setVariantPrice}
            />
          </div>
          {/* add to cart button */}
          <div className="flex gap-5 justify-start items-center mt-5">
            {/* Product Quantity  */}
            {isInCart && (
              <QuantityController
                thisItem={thisItem}
                data={data?.response}
                handleInQuantityUpdate={handleInQuantityUpdate}
              />
            )}
            <Button
              onClick={() => handleCartClick(data?.response)}
              disabled={isInCart}
              className="bg-black hover:bg-_orange rounded ease-in-out duration-500 transition-all w-full text-white p-2 font-normal text-sm"
            >
              ADD TO CART
            </Button>
            <Button
              variant={"outline"}
              onClick={
                isInCart ? () => {} : () => handleCartClick(data?.response)
              }
              className="uppercase hover:bg-_orange border-[#FF4C06] rounded ease-in-out duration-500 transition-all w-full text-black hover:text-white p-2 font-normal text-sm"
            >
              <Link href={"/cart/checkout"}> Buy Now</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* social share */}
      <SocialShare />
      {/* Related products */}
      <ViewMoreTitle
        className="top-selling-product mt-14"
        seeMoreUrl="/products"
        categoryTitle="Related products"
      />
      <ProductSlider />
      {/* products info */}
      <ProductInfoTab product={data} />
      <Emiplan
        price={variantPrice?.price}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </section>
  );
};

export default ProductDetails;
