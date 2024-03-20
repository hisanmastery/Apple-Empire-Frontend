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
// const ProductDetails = ({ product }: any) => {
const ProductDetails = () => {
  const datas = productDatas.products.slice(0, 5);
  const [selectedColor, setSelectedColor]: any = useState("");
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const product = {
    id: "62aefe9a6e662e77accd4cc4",
    image:
      "https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg",
    brand: "google",
    title: "Senmei ipsum dolore eiusmod dolor officia do nisi",
    description:
      "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
    price: "20.64",
    offer_price: "27.61",
    review: 5,
    quantity: 1,
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
    ],
  };

  const handleColorButtonClick = (color: any) => {
    setSelectedColor(color);
    setIsImageViewerOpen(true);
  };

  const handleImageViewerClose = () => {
    setIsImageViewerOpen(false);
  };

  const handleThumbnailClick = (index: any) => {
    setCurrentImage(index);
  };

  // const images = selectedColor
  //   ? product.variations.find((variant:any) => variant.color === selectedColor)
  //       .image
  //   : product.image;
  const images = selectedColor
    ? product.variations.find((variant: any) => variant.color === selectedColor)
        ?.image ?? product.image
    : product.image;

  return (
    <section className="container mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {/* <div>
          <img className="w-full" src={product?.image} />
          <ProductImage />
        </div> */}

        <div>
          <img className="w-full" src={images} />
          {/* <div className="flex justify-center mt-4 space-x-4">
            {product.variations.map((variant: any, index: any) => (
              <button
                key={index}
                style={{backgroundColor:`${variant.colorCode}`}}
                className={`w-8 h-8 rounded-full bg-[${variant.colorCode}] border border-gray-300`}
                onClick={() => handleColorButtonClick(variant.color)}
              ></button>
            ))}
          </div> */}
        </div>

        <div>
          <h2 className="text-2xl font-bold">{product?.title}</h2>
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
            {product.variations.map((variant: any, index: any) => (
              <button
                key={index}
                style={{ backgroundColor: `${variant.colorCode}` }}
                className={`w-8 h-8 rounded-full bg-[${variant.colorCode}] border border-gray-300`}
                onClick={() => handleColorButtonClick(variant.color)}
              ></button>
            ))}
          </div>
          {/* pricing */}
          <p className="price pb-5 mt-5">
            <span className="main-price text-qgray line-through font-600 font-semibold text-[18px] ">
              {product?.price}
            </span>
            <span className="offer-price text-qred font-600 text-[18px] ml-2 font-semibold text-red-500">
              {product?.offer_price}
            </span>
          </p>

          {/* spacification */}
          <div>
            <p> Category : Kitchen</p>
            <p>Tags : Beer, Foamer</p>
            <p>SKU: KE-91039</p>
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
