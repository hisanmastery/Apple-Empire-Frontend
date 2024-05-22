"use client";
import Image from "next/image";
import React, { useState } from "react";
import Products from "..";
import productDatas from "@/../../public/product.json";
import ViewMoreTitle from "../../../common/ViewMoreTitle";
import ProductAds from "../../../common/productAds";
import ProductImage from "./image-viewer/index";
import { icons } from "@/constants/icons";
import { Button } from "@/components/ui/button";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addStoredCart } from "@/store/features/cart/cartSlice";
import Link from "next/link";
import { useGetSingleProductsQuery } from "@/store/features/products/productsApi";
import ProductSlider from "../../product-slider";
import { Tabs } from "@/components/ui/tabs";
import CustomTabs from "@/components/common/custom-tab";

const Storage = ["4GB", "256Gb", "1TB"];
const sim = ["singel", "dual", "usa"];
const region = ["global", "hk", "usa"];
const ProductDetails = ({ id }: any) => {
  const { data }: any = useGetSingleProductsQuery({ id });
  // const datas = data?.response?.slice(0, 5);
  const [selectedColor, setSelectedColor]: any = useState("");
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  const handleColorButtonClick = (color: any) => {
    setSelectedColor(color);
  };

  const images = selectedColor
    ? data?.response?.variations?.find(
      (variant: any) => variant?.color === selectedColor
    )?.image ?? data?.response?.variations[0]?.image
    : data?.response?.variations[0]?.image;

  // Extracting only the 'image' property from each object in the 'variations' array
  const variationImages = data?.response?.variations?.map(
    (variation: any) => variation?.image
  );

  // handle cart click
  const handleCartClick = () => {
    // get product data
    const existingCart = storedCart || [];
    const existingProduct = existingCart?.find(
      (item: any) => item.id === data?.response?._id
    );
    // check existing product if not product it will be set
    if (!existingProduct) {
      const updatedCart = [...existingCart, data?.response];
      dispatch(addStoredCart(updatedCart));
    }
  };
  // check already added cart
  const isInCart = storedCart?.find(
    (item: any) => item.id === data?.response?._id
  );

  const handleImageMouseMove = (e: any) => {
    const img = e.target;
    img.style.transformOrigin = `${e.nativeEvent.offsetX}px ${e.nativeEvent.offsetY}px`;
    img.style.transform = "scale(3)";
  };

  const handleImageMouseLeave = (e: any) => {
    const img = e.target;
    img.style.transformOrigin = "center";
    img.style.transform = "scale(1)";
  };

  const tabs = [
    {
      value: "Specification",
      label: "Specification",
      // content: <div>{data?.response?.specification}</div>,
      content: (
        <div
          dangerouslySetInnerHTML={{ __html: data?.response?.specification }}
        />
      ),
    },
    {
      value: "Description",
      label: "Description",
      content: <div>{data?.response?.description}</div>,
    },
    {
      value: "Warranty",
      label: "Warranty",
      content: (
        <div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </div>
      ),
    },
  ];
  return (
    <section className="md:w-11/12 mx-auto mt-8 px-2 md:px-0">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div
            className="relative overflow-hidden bg-_white"
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
          >
            <Image
              width={500}
              height={500}
              id="activeImage"
              className="w-full transition-transform duration-300 transform cursor-pointer"
              src={images}
              alt="Product Image"
            />
          </div>
          <ProductImage variationImages={variationImages} />
        </div>

        <div className="col-span-3">
          <h2 className="text-2xl font-bold">{data?.response?.title}</h2>
          {/* pricing */}
          <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-4 items-center text-center ">
            <h4 className=" mt-3 font-bold bg-blue-100 p-3 rounded-sm w-full ">
              Price:
              <span className="line-through text-gray-600">
                {data?.response.price} $
              </span>
              <span className="mx-2">{data?.response?.price}$</span>
            </h4>
            <h4 className="mt-3 font-bold bg-blue-100 p-3 rounded-sm w-full">
              Status:{data?.response?.status}
            </h4>
            <h4 className="mt-3 bg-blue-100 px-2 py-3 rounded-sm w-full ">
              <span className="font-bold text-lg">Code:</span>
              {data?.response?._id}
            </h4>
          </div>

          {/* whatsapp */}
          <div className="bg-green-600 w-44 p-1  text-white   rounded mt-5 flex gap-3 items-center">
            <span>
              <IoLogoWhatsapp className="text-2xl mx-3" />
            </span>
            <p>Message on Whatsapp</p>
          </div>
          <h2 className="text-xl mt-6 font-bold">
            Apple Store 1 Year Warranty Support
          </h2>
          <p className="mt-5 leading-8 mb-3">
            {data?.response?.description.slice(0, 200)}
          </p>
          {/* review star */}
          <div className="reviews flex space-x-[1px] mb-3">
            <span className="text-yellow-400">{<icons.FaStar />}</span>
            <span className="text-yellow-400">{<icons.FaStar />}</span>
            <span className="text-yellow-400">{<icons.FaStar />}</span>
            <span className="text-yellow-400">{<icons.FaStar />}</span>
          </div>
          <p>
            Manufacturer: <span className="text-blue-600">Apple</span>
          </p>
          <div className="flex items-center mt-4 space-x-4">
            <h4 className="bg-gray-300 w-32 flex justify-center rounded-sm p-1">
              Color
            </h4>
            {data?.response?.variations?.map((variant: any, index: any) => (
              <button
                key={index}
                style={{ backgroundColor: `${variant?.colorCode}` }}
                className={`w-9 h-9 rounded-full bg-[${
                  variant?.colorCode
                }] border border-gray-300 ${
                  selectedColor === variant?.color &&
                  "p-1  border-yellow-500 border-4"
                }`}
                onClick={() => handleColorButtonClick(variant?.color)}
              ></button>
            ))}
          </div>

          {/* spacification */}
          <div className="mt-4">
            <p className="uppercase flex flex-wrap gap-5">
              {" "}
              <span className="bg-gray-300 p-1 w-32 flex justify-center rounded-sm">
                Storage{" "}
              </span>{" "}
              {Storage?.map((items: any, index: number) => (
                <span
                  key={index}
                  className="flex justify-center bg-gray-300 w-32 p-1 rounded-sm"
                >
                  {items}
                </span>
              ))}
            </p>
            <p className="uppercase flex flex-wrap gap-5 mt-5">
              {" "}
              <span className="bg-gray-300 p-1 w-32 flex justify-center rounded-sm">
                Sim{" "}
              </span>{" "}
              {sim?.map((items: any, index: number) => (
                <span
                  key={index}
                  className="flex justify-center bg-gray-300 w-32 p-1 rounded-sm"
                >
                  {items}
                </span>
              ))}
            </p>
            <p className="uppercase flex flex-wrap gap-5 mt-5">
              {" "}
              <span className="bg-gray-300 p-1 w-32 flex justify-center rounded-sm">
                Region{" "}
              </span>{" "}
              {region?.map((items: any, index: number) => (
                <span
                  key={index}
                  className="flex justify-center bg-gray-300 w-32 p-1 rounded-sm"
                >
                  {items}
                </span>
              ))}
            </p>
            {/* <p>CPU : CPU Name</p> */}
          </div>
          {/* add to cart button */}
          <div className="flex gap-5 mt-5">
            <Button
              onClick={() => handleCartClick()}
              disabled={isInCart}
              className="bg-slate-800 hover:bg-[#FF4C06] rounded ease-in-out duration-500 transition-all w-full text-white p-2 font-normal text-sm"
            >
              ADD TO CART
            </Button>
            <Button
              variant={"outline"}
              // onClick={() => handleCartClick()}
              className=" hover:bg-[#FF4C06] border-[#FF4C06] rounded ease-in-out duration-500 transition-all w-full text-black hover:text-white p-2 font-normal text-sm"
            >
              <Link href={"/cart/checkout"}> Buy Now</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Related products */}
      <ViewMoreTitle
        className="top-selling-product mt-14"
        seeMoreUrl="/products"
        categoryTitle="Related products"
      />
      {/* product caorusel */}
      <ProductSlider />
      {/* product ads banner */}
      {/* <ProductAds
        ads={[
          `https://d61s2hjse0ytn.cloudfront.net/vertical_image/3-2024/Redmi_Note_13_Pro_EID.webp`,
        ]}
        className=" mb-[60px] container mx-auto"
      /> */}

      {/* products details */}
      <div className="mt-10">
        <CustomTabs defaultValue={"Specification"} tabs={tabs} />
      </div>
    </section>
  );
};

export default ProductDetails;
