import React from "react";
import ClientBrand from "../home/client-brand/index";
import Products from "../home/products/index";
import ProductAds from "../common/productAds/index";
import ViewMoreTitle from "../common/ViewMoreTitle/index";
import TopSellingProducts from "../home/TopSellingProducts/index";
import PopularProducts from "../home/popularProducts/index";
const TopItems = dynamic(() => import("./top-items"));
import CampaignsCountDown from "./campaigns-count-down";
import HomePopup from "@/components/home/popup/HomePopup";
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <main>
      <div className="lg:container mx-auto md:p-0 p-3">
        {/* category */}
        <TopItems />
        <HomePopup />
        <ProductAds
          ads={[
            `https://i.ibb.co.com/t47YXtD/Whats-App-Image-2024-09-23-at-19-26-50-b279a680.jpg`,
            `https://i.ibb.co.com/vDXXCQd/Whats-App-Image-2024-09-23-at-19-26-52-a6936686.jpg`,
          ]}
          className=" lg:container mx-auto"
        />
        {/* all products */}
        <ViewMoreTitle
          className="top-selling-product mb-[60px] lg:container"
          seeMoreUrl="/section/top-selling-product"
          categoryTitle="Top Selling Products"
        >
          <Products />
        </ViewMoreTitle>
        {/* ads banner */}
        <ProductAds
          ads={[
            `https://d61s2hjse0ytn.cloudfront.net/images/content/highlight/watch.webp`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />
        {/* top selling product */}
        <ViewMoreTitle
          className="top-selling-product mb-[60px] px-0 lg:container"
          seeMoreUrl="/section/top-selling-product"
          categoryTitle="All Products"
        >
          <TopSellingProducts />
        </ViewMoreTitle>
        {/* product ads banner */}
        <ProductAds
          ads={[
            `https://i.ibb.co.com/DC779X0/Whats-App-Image-2024-09-23-at-19-26-51-a04698e0.jpg`,
            `https://i.ibb.co.com/HhwkHPh/IMG-20240919-WA0002.jpg`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />

        {/* popular products */}
        <ViewMoreTitle
          className="mb-[60px] lg:container"
          seeMoreUrl="/section/popular-products"
          categoryTitle="Popular Products"
        >
          <PopularProducts />
        </ViewMoreTitle>
        {/* ads banner */}
        <ProductAds
          ads={[
            `https://i.ibb.co.com/Fw2t2b2/Whats-App-Image-2024-09-23-at-19-26-52-41f7b11a.jpg`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />
        {/* top selling product */}
        <ViewMoreTitle
          className="top-selling-product mb-[60px] lg:container"
          seeMoreUrl="/section/top-pricing-products"
          categoryTitle="Top Pricing Products"
        >
          <TopSellingProducts />
        </ViewMoreTitle>
        <ProductAds
          ads={[
            `https://i.ibb.co.com/42Nsn06/Whats-App-Image-2024-09-23-at-19-26-50-499c19f7.jpg`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />
        {/* brand profile */}
        <ViewMoreTitle
          className="top-selling-product mb-[60px] lg:container"
          seeMoreUrl=""
          categoryTitle="SHOP BY BRANDS"
        >
          <ClientBrand />
        </ViewMoreTitle>
        {/* Campaigns Count Down */}

        <CampaignsCountDown lastDate="2024-06-22 4:00:00" />
      </div>
    </main>
  );
};

export default Home;
