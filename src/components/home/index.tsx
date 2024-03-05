  import React from "react";

import ClientBrand from "../home/client-brand/index";
import Products from "../home/products/index";
import ProductAds from "../common/productAds/index";
import ViewMoreTitle from "../common/ViewMoreTitle/index";
import TopSellingProducts from "../home/TopSellingProducts/index";
import PopularProducts from "../home/popularProducts/index";
import productDatas from "@/../../public/product.json";

const Home = () => {
  const datas = productDatas.products.slice(0, 8);
  return (
    <main>
      <div className="container mx-auto md:p-0 p-3">
        {/* brand profile */}
        <ClientBrand />
        <ProductAds
          ads={[
            `https://d61s2hjse0ytn.cloudfront.net/images/content/highlight/Nokia_2660_Flip_Valentines_Day.webp`,
            `https://d61s2hjse0ytn.cloudfront.net/images/content/highlight/Nokia_2660_Flip_Valentines_Day.webp`,
          ]}
          className=" mb-[60px] container mx-auto"
        />
        {/* all products */}
        <Products productData={datas} />
        {/* ads banner */}
        <ProductAds
          ads={[
            `https://appleempire.hisanmastery.com/assets/images/ads-3.webp`,
          ]}
          className=" mb-[60px] container mx-auto"
        />

        {/* top selling product */}
        <ViewMoreTitle
          className="top-selling-product mb-[60px] container"
          seeMoreUrl="/all-products"
          categoryTitle="Top Selling Products"
        >
          <TopSellingProducts />
        </ViewMoreTitle>

        {/* product ads banner */}
        <ProductAds
          ads={[
            `https://appleempire.hisanmastery.com/assets/images/ads-1.webp`,
            `https://appleempire.hisanmastery.com/assets/images/ads-2.webp`,
          ]}
          className=" mb-[60px] container mx-auto"
        />

        {/* popular products */}

        <ViewMoreTitle
          className="top-selling-product mb-[60px] container"
          seeMoreUrl="/all-products"
          categoryTitle="Popular Products"
        >
          <PopularProducts />
        </ViewMoreTitle>

        {/* ads banner */}
        <ProductAds
          ads={[
            `https://appleempire.hisanmastery.com/assets/images/discount-banner-1.webp`,
          ]}
          className=" mb-[60px] container mx-auto"
        />
        <ProductAds
          ads={[
            `https://d61s2hjse0ytn.cloudfront.net/images/content/highlight/Nokia_2660_Flip_Valentines_Day.webp`,
          ]}
          className=" mb-[60px] container mx-auto"
        />
      </div>
    </main>
  );
};

export default Home;
