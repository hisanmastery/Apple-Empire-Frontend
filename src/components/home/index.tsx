import React from "react";

import ClientBrand from "../home/client-brand/index";
import Products from "../home/products/index";
import ProductAds from "../common/productAds/index";
import ViewMoreTitle from "../common/ViewMoreTitle/index";
import TopSellingProducts from "../home/TopSellingProducts/index";
import PopularProducts from "../home/popularProducts/index";
import TopItems from "./top-items";
import MultiCarousel from "../common/carousel";
import ProductSlider from "./product-slider";
import CampaignsCountDown from "./campaigns-count-down";

const Home = () => {
  return (
    <main>
      <div className="lg:container mx-auto md:p-0 p-3">
        {/* category */}
        <TopItems />

        <ProductAds
          ads={[
            `https://d61s2hjse0ytn.cloudfront.net/vertical_image/5-2024/asus-tuf-gaming.webp`,
            `https://d61s2hjse0ytn.cloudfront.net/vertical_image/5-2024/asus-tuf-gaming.webp`,
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
            `https://d61s2hjse0ytn.cloudfront.net/horizontal_image/7-2024/Amazfit_Banner.webp`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />
        {/* product caorusel */}
        {/* <ProductSlider /> */}

        {/* top selling product */}
        <ViewMoreTitle
          className="top-selling-product mb-[60px] lg:container"
          seeMoreUrl="/section/top-selling-product"
          categoryTitle="All Products"
        >
          <TopSellingProducts />
        </ViewMoreTitle>

        {/* product ads banner */}
        <ProductAds
          ads={[
            `https://d61s2hjse0ytn.cloudfront.net/vertical_image/5-2024/asus-tuf-gaming.webp`,
            `https://d61s2hjse0ytn.cloudfront.net/vertical_image/5-2024/asus-tuf-gaming.webp`,
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
            `https://d61s2hjse0ytn.cloudfront.net/horizontal_image/7-2024/Amazfit_Banner.webp`,
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
            `https://d61s2hjse0ytn.cloudfront.net/horizontal_image/7-2024/Amazfit_Banner.webp`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />
        {/* Campaigns Count Down */}

        <CampaignsCountDown lastDate="2024-06-22 4:00:00" />
      </div>
    </main>
  );
};

export default Home;
