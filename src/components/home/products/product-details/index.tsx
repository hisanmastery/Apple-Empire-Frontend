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
// const ProductDetails = ({ product }: any) => {
const ProductDetails = ({products}:any) => {
  const datas = productDatas.products.slice(0, 5);
  const [selectedColor, setSelectedColor]: any = useState("");
  const product = {
    id: "62aefe9a6e662e77accd4cc4",
    image:
      "https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg",
    brand: "google",
    title: "I Phone 15 Pro Max",
    description:
      "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
    price: "20.64",
    offer_price: "27.61",
    review: 5,
    quantity: 1,
    status: "In Stock",
    productCode: "ABH73HG",
    campaingn_product: true,
    cam_product_available: 48,
    cam_product_sale: 12,
    product_type: null,
    variations: [
      {
        color: "Purple",
        colorCode: "#A020F0",
        image: "https://www.peacocks.com.bd/storage/2218/iPhone-12-64GB-1.jpg",
      },
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-black-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202741000",
      },
      {
        color: "White",
        colorCode: "#FFFFFF",
        image:
          "https://adminapi.applegadgetsbd.com/storage/media/large/1533-33734.jpg",
      },
      {
        color: "Blue",
        colorCode: "#0000FF",
        image:
          "https://www.coolmod.com/images/product/large/apple-iphone-12-61-5g-128gb-libre-azul-smartphone-mavil-001.jpg",
      },
    ],
  };

  const handleColorButtonClick = (color: any) => {
    setSelectedColor(color);
  };

  const images = selectedColor
    ? product.variations.find((variant: any) => variant.color === selectedColor)
        ?.image ?? product.image
    : product.image;

  // Extracting only the 'image' property from each object in the 'variations' array
  const variationImages = product.variations.map(
    (variation) => variation.image
  );
  console.log(selectedColor);
  return (
    <section className="w-11/12 mx-auto mt-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <img className="w-full" src={images} />
          <ProductImage variationImages={variationImages} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">{product?.title}</h2>
          {/* pricing */}
          <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-4 items-center text-center ">
            <h4 className=" mt-3 font-bold bg-blue-100 p-3 rounded-sm w-full ">
              Price:
              <span className="line-through text-gray-600">
                {product?.price} $
              </span>
              <span className="mx-2">{product?.offer_price}$</span>
            </h4>
            <h4 className=" mt-3 font-bold bg-blue-100 p-3 rounded-sm w-full">
              Status:{product?.status}
            </h4>
            <h4 className=" mt-3 font-bold bg-blue-100 p-3 rounded-sm w-full ">
              Code:{product?.productCode}
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
          <p className="mt-5 leading-8 mb-3">{product?.description}</p>
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
            <h4>Color:</h4>{" "}
            {product.variations.map((variant: any, index: any) => (
              <button
                key={index}
                style={{ backgroundColor: `${variant.colorCode}` }}
                className={`w-9 h-9 rounded-lg bg-[${
                  variant.colorCode
                }] border border-gray-300 ${
                  selectedColor === variant.color &&
                  "p-1  border-yellow-500 border-4"
                }`}
                onClick={() => handleColorButtonClick(variant.color)}
              ></button>
            ))}
          </div>

          {/* spacification */}
          <div className="mt-4">
            <p> Storage : 4GB, 256Gb</p>
            <p>CPU : CPU Name</p>
          </div>
          {/* add to cart button */}
          <div className="flex gap-5 mt-5">
            <Button
              // onClick={() => handleCartClick()}
              className="bg-slate-800 hover:bg-[#FF4C06] rounded ease-in-out duration-500 transition-all w-full text-white p-2 font-normal text-sm"
            >
              ADD TO CART
            </Button>
            <Button
              variant={"outline"}
              // onClick={() => handleCartClick()}
              className=" hover:bg-[#FF4C06] border-[#FF4C06] rounded ease-in-out duration-500 transition-all w-full text-black hover:text-white p-2 font-normal text-sm"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      description
      <p className="leading-8 mt-10">
        With fifth-generation Intel Core processors, the latest graphics, and
        faster flash storage, the incredibly advanced MacBook Pro with Retina
        display moves even further ahead in performance and battery life.*
        *Compared with the previous generation. Retina display with 2560-by-1600
        resolution Fifth-generation dual-core Intel Core i5 processor Intel Iris
        Graphics Up to 9 hours of battery life1 Faster flash storage2 802.11ac
        Wi-Fi Two Thunderbolt 2 ports for connecting high-performance devices
        and transferring data at lightning speed Two USB 3 ports (compatible
        with USB 2 devices) and HDMI FaceTime HD camera Pages, Numbers, Keynote,
        iPhoto, iMovie, GarageBand included OS X, the world's most advanced
        desktop operating system
      </p>
      {/* Related products */}
      <ViewMoreTitle
        className="top-selling-product mb-[60px] mt-10"
        seeMoreUrl="/products"
        categoryTitle="Related products"
      >
        <Products productData={datas} />
      </ViewMoreTitle>
      {/* product ads banner */}
      <ProductAds
        ads={[
          `https://d61s2hjse0ytn.cloudfront.net/vertical_image/3-2024/Redmi_Note_13_Pro_EID.webp`,
        ]}
        className=" mb-[60px] container mx-auto"
      />
    </section>
  );
};

export default ProductDetails;
