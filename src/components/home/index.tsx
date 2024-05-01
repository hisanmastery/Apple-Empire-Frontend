import React from "react";

import ClientBrand from "../home/client-brand/index";
import Products from "../home/products/index";
import ProductAds from "../common/productAds/index";
import ViewMoreTitle from "../common/ViewMoreTitle/index";
import TopSellingProducts from "../home/TopSellingProducts/index";
import PopularProducts from "../home/popularProducts/index";
import productDatas from "@/../../public/product.json";
import TopItems from "./top-items";
import MultiCarousel from "../common/carousel";
import ProductSlider from "./product-slider";

const Home = () => {
  const datas = productDatas.products.slice(0, 12);
  return (
    <main>
      <div className="lg:container mx-auto md:p-0 p-3">
        <TopItems />

        <ProductAds
          ads={[
            `https://d61s2hjse0ytn.cloudfront.net/vertical_image/3-2024/Galaxy_A55.webp`,
            `https://d61s2hjse0ytn.cloudfront.net/vertical_image/3-2024/Xiaomi_Pad_6.webp`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />
        {/* all products */}
        <Products />
        {/* ads banner */}
        <ProductAds
          ads={[
            `https://appleempire.hisanmastery.com/assets/images/ads-3.webp`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />
        {/* product caorusel */}
        <ProductSlider />

        {/* top selling product */}
        <ViewMoreTitle
          className="top-selling-product mb-[60px] lg:container"
          seeMoreUrl="/products"
          categoryTitle="Top Selling Products"
        >
          <TopSellingProducts />
        </ViewMoreTitle>

        {/* product ads banner */}
        <ProductAds
          ads={[
            `https://d61s2hjse0ytn.cloudfront.net/vertical_image/3-2024/Galaxy_A55.webp`,
            `https://d61s2hjse0ytn.cloudfront.net/vertical_image/3-2024/Galaxy_A55.webp`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />

        {/* popular products */}

        <ViewMoreTitle
          className="mb-[60px] lg:container"
          seeMoreUrl="/products"
          categoryTitle="Popular Products"
        >
          <PopularProducts />
        </ViewMoreTitle>

        {/* ads banner */}
        <ProductAds
          ads={[
            `https://appleempire.hisanmastery.com/assets/images/discount-banner-1.webp`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />
        {/* top selling product */}
        <ViewMoreTitle
          className="top-selling-product mb-[60px] lg:container"
          seeMoreUrl="/all-products"
          categoryTitle="Top Pricing Products"
        >
          <TopSellingProducts />
        </ViewMoreTitle>
        <ProductAds
          ads={[
            `https://d61s2hjse0ytn.cloudfront.net/horizontal_image/3-2024/Get_the_iPhone_15_Pro_Max.webp`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />
        {/* brand profile */}
        <ClientBrand />
      </div>
    </main>
  );
};

export default Home;
