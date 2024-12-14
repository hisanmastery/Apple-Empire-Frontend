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
import {
  useAddToCartMutation,
  useUpdateCartMutation,
} from "@/store/features/cart/cartApi";
import useAuth from "@/hooks/useAuth";
import useToaster from "@/hooks/useToaster";
import Emiplan from "@/components/emiplan";
import VariantDisplay from "./variant-display";
import ImageDisplay from "./image-display";
import ProductInfoTab from "./product-info-tab";
import ProductActionButtons from "./ProductActionButtons";
import { addToCart } from "./AddToCart";
import { handleIncrementQuantity } from "./quantity-update";
import QuantityController from "@/components/common/quantity-controller";
import { get_store_data } from "@/utils/get_store_data";
import ProductDetailsSkeleton from "@/components/shared/skeleton/products-details-skeleton";
import Breadcrumbs from "@/components/common/breadcrumbs";
import MarqueeTag from "./marquee-tag";
import RelatedProducts from "./Related-Products";

const ProductDetails = ({ id }: any) => {
  const showToast = useToaster();
  const [isOpen, setIsOpen] = useState(false);
  const { customerInfo, isAuthenticated } = useAuth();
  const [selectedVariant, setSelectedVariant] = useState<any>();
  const { data, isLoading }: any = useGetSingleProductsQuery({ id });
  const [selectedColor, setSelectedColor]: any = useState();
  const [viewImage, setViewImage] = useState<any>();
  const [selectedVariantOptions, setSelectedVariantOptions] =
    useState<any>(null);
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
          setThisItem(filter?.[0]);
        } else {
          setThisItem({});
        }
      }
    }
  }, [storedCart, data]);

  const handleImageVariant = (image: any) => {
    setViewImage(image);
  };

  // handle variations images
  const handleVariationsImage = (image: string, color: string) => {
    setSelectedColor(color);
    setViewImage(image);
  };

  // handle cart click
  const handleCartClick = async (productData: any) => {
    //products info
    const productsInfo = {
      ...selectedVariantOptions,
    };
    await addToCart(
      productData,
      dispatch,
      getStoredData,
      isAuthenticated,
      customerInfo,
      addToCartItem,
      showToast,
      productsInfo
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
      <div className="mb-5">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            {
              label: data?.response?.category?.parentCategory?.name,
              href: `/category/${data?.response?.category?.parentCategory?.slug}`,
            },
            {
              label: data?.response?.category?.subCategory?.name,
              href: `/category/${data?.response?.category?.subCategory?.slug}`,
            },
            {
              label: data?.response?.category?.subSubCategory?.name,
              href: `/category/${data?.response?.category?.subSubCategory?.slug}`,
            },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-10">
        <div className="col-span-3 flex mx-auto">
          <div>
            <ImageDisplay
              product={data}
              profileImageUrl={data?.response?.image?.imageUrl || ""}
              viewImage={viewImage}
              selectedVariant={selectedVariant}
            />
            <div className="flex gap-2 mt-2 md:w-[80%] mx-auto">
              {data?.response?.variations?.length > 0
                ? data?.response?.variations
                    ?.slice(0, 4)
                    .map((variant: any, index: number) => (
                      <div
                        key={index}
                        className="bg-white border rounded-md"
                        onClick={() =>
                          handleVariationsImage(
                            variant?.image[0],
                            variant?.color
                          )
                        }
                      >
                        <Image
                          width={100}
                          height={100}
                          className="transition-transform duration-300 transform cursor-pointer"
                          src={variant?.image[0] || " "}
                          alt={`Product Image - ${variant?.color}`}
                        />
                      </div>
                    ))
                : selectedVariant?.images
                    ?.slice(0, 4)
                    .map((image: any, index: number) => (
                      <div
                        key={index}
                        className="bg-white border rounded-md"
                        onClick={() => handleImageVariant(image)}
                      >
                        <Image
                          width={100}
                          height={100}
                          className="transition-transform duration-300 transform cursor-pointer"
                          src={image || " "}
                          alt={`Product Image - ${image}`}
                        />
                      </div>
                    ))}
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-white px-2 md:px-5 mt-5 md:mt-0">
          <div className="flex justify-between">
            <div className={"w-full"}>
              <h2 className="flex items-center gap-2 text-md md:text-xl font-medium mb-2">
                {data?.response?.name}
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
          {/* variant */}
          <div>
            <VariantDisplay
              product={data?.response}
              setVariantPrice={setSelectedVariant}
              setSelectedVariantOptions={setSelectedVariantOptions}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              setViewImage={setViewImage}
            />
          </div>
          {/* add to cart button */}
          <div className="flex gap-5 justify-start items-center mt-5">
            {/* Product Quantity  */}
            {/* {isInCart && (
           
            )} */}
            <QuantityController
              thisItem={thisItem}
              data={data?.response}
              handleInQuantityUpdate={handleInQuantityUpdate}
            />
            {(data?.response.preOrder != "Yes" ||
              selectedVariant?.preOrder !== "Yes") && (
              <Button
                onClick={() => handleCartClick(data?.response)}
                disabled={isInCart}
                className="bg-black hover:bg-_orange rounded ease-in-out duration-500 transition-all w-full text-white p-2 font-normal text-sm"
              >
                ADD TO CART
              </Button>
            )}
            <Button
              variant={"outline"}
              onClick={
                isInCart ? () => {} : () => handleCartClick(data?.response)
              }
              className="uppercase  hover:bg-_orange border-[#FF4C06] rounded ease-in-out duration-500 transition-all w-full text-black hover:text-white p-2 font-normal text-sm"
            >
              <Link href={"/cart/checkout"}>
                {data?.response.preOrder == "Yes" ||
                selectedVariant?.preOrder === "Yes"
                  ? "Pre Order Now"
                  : "Buy Now"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* social share */}
      <MarqueeTag />
      {/* Related products */}
      <ViewMoreTitle
        className="top-selling-product mt-14"
        seeMoreUrl="/products"
        categoryTitle="Related products"
      />
      <RelatedProducts
        category={data?.response?.category?.parentCategory?.slug}
        subCategory={data?.response?.category?.subCategory?.slug}
      />
      {/* products info */}
      <ProductInfoTab product={data} />
      <Emiplan
        price={selectedVariant?.price}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </section>
  );
};

export default ProductDetails;
