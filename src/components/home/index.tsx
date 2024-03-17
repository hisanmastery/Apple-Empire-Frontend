import React from "react";

import ClientBrand from "../home/client-brand/index";
import Products from "../home/products/index";
import ProductAds from "../common/productAds/index";
import ViewMoreTitle from "../common/ViewMoreTitle/index";
import TopSellingProducts from "../home/TopSellingProducts/index";
import PopularProducts from "../home/popularProducts/index";
import productDatas from "@/../../public/product.json";
import TopItems from "./top-items";

const Home = () => {
  const datas = productDatas.products.slice(0, 8);
  return (
    <main>
      <div className="lg:container mx-auto md:p-0 p-3">
        <TopItems />
        {/* brand profile */}
        <ClientBrand />
        <ProductAds
          ads={[
            `https://d61s2hjse0ytn.cloudfront.net/vertical_image/3-2024/Redmi_Note_13_Pro_EID.webp`,
            `https://d61s2hjse0ytn.cloudfront.net/vertical_image/3-2024/Honor_X9B_EID.webp`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />
        {/* all products */}
        <Products productData={datas} />
        {/* ads banner */}
        <ProductAds
          ads={[
            `https://appleempire.hisanmastery.com/assets/images/ads-3.webp`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />

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
            `https://d61s2hjse0ytn.cloudfront.net/vertical_image/3-2024/Redmi_Note_13_Pro_EID.webp`,
            `https://d61s2hjse0ytn.cloudfront.net/vertical_image/3-2024/Honor_X9B_EID.webp`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />

        {/* popular products */}

        <ViewMoreTitle
          className="top-selling-product mb-[60px] lg:container"
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
          seeMoreUrl="/products"
          categoryTitle="Top Pricing Products"
        >
          <TopSellingProducts />
        </ViewMoreTitle>
        <ProductAds
          ads={[
            `https://d61s2hjse0ytn.cloudfront.net/horizontal_image/3-2024/iPhone_15_Pro_Max_International.webp`,
          ]}
          className=" mb-[60px] lg:container mx-auto"
        />
      </div>
    </main>
  );
};

export default Home;
