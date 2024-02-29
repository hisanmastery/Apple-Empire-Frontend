import Image from "next/image";
import React from "react";
import Products from "..";
import productDatas from "@/../../public/product.json";
import ViewMoreTitle from "../../../common/ViewMoreTitle";
import ProductAds from "../../../common/productAds";
import ProductImage from "./image-viewer/index"
import { icons } from "@/constants/icons";
const ProductDetails = ({ product }:any) => {
  const datas = productDatas.products.slice(0, 4);
  return (
    <section className="container mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <img className="w-full" src={product?.image} />
          <ProductImage/>
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
          {/* add to card button */}
          <div className=" flex  bottom-1 mt-5 gap-1 left-1 right-1">
            <button className="bg-blue-400  text-white p-2">ADD TO CARD</button>
          </div>
        </div>
      </div>

      {/* description */}
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
          `https://d61s2hjse0ytn.cloudfront.net/images/content/highlight/Nokia_2660_Flip_Valentines_Day.webp`,
        ]}
        className=" mb-[60px] container mx-auto"
      />
    </section>
  );
};

export default ProductDetails;
