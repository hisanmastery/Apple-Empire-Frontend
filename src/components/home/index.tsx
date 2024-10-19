import React from "react";
import dynamic from "next/dynamic";
import ClientBrand from "../home/client-brand";
const Products = dynamic(() => import("../home/products"));
import ProductAds from "../common/productAds";
import ViewMoreTitle from "../common/ViewMoreTitle";
const TopSellingProducts = dynamic(() => import("../home/TopSellingProducts"));
const PopularProducts = dynamic(() => import("../home/popularProducts"));
const CampaignsCountDown = dynamic(() => import("./campaigns-count-down"));
import HomePopup from "@/components/home/popup/HomePopup";
import { ADS_URLS } from "@/data/ads-url";
import TopBrandProducts from "./top-brand-products";
const TopItems = dynamic(() => import("./top-items"));

const SectionWithTitleAndAds = ({
  title,
  seeMoreUrl,
  children,
  ads,
  className = "",
}: {
  title: string;
  seeMoreUrl: string;
  children: React.ReactNode;
  ads?: string[];
  className?: string;
}) => (
  <>
    <ViewMoreTitle
      className={`mb-[60px] lg:container ${className}`}
      seeMoreUrl={seeMoreUrl}
      categoryTitle={title}
    >
      {children}
    </ViewMoreTitle>
    {ads && <ProductAds ads={ads} className="mb-0 md:mb-[60px] lg:container mx-auto" />}
  </>
);

const Home: React.FC = () => {
  return (
    <main className="lg:container mx-auto md:p-0 p-3">
      {/* Top Items and Popup */}
      <TopItems />
      <HomePopup />

      {/* Primary Ads */}
      <ProductAds ads={ADS_URLS.primaryAds} className="lg:container mx-auto" />

      {/* Top Selling Products */}
      <SectionWithTitleAndAds
        title="Top Selling Products"
        seeMoreUrl="/section/top-selling-products"
      >
        <Products />
      </SectionWithTitleAndAds>

      {/* Watch Ads */}
      <ProductAds
        ads={ADS_URLS.watchAds}
        className="mb-0 md:mb-[60px] lg:container mx-auto"
      />

      {/* All Products */}
      <SectionWithTitleAndAds
        title="All Products"
        seeMoreUrl="/section/top-selling-products"
      >
        <TopSellingProducts />
      </SectionWithTitleAndAds>

      {/* Secondary Ads */}
      <ProductAds
        ads={ADS_URLS.secondaryAds}
        className="mb-0 md:mb-[60px] lg:container mx-auto"
      />

      {/* Popular Products */}
      <SectionWithTitleAndAds
        title="Popular Products"
        seeMoreUrl="/section/popular-products"
      >
        <PopularProducts />
      </SectionWithTitleAndAds>

      {/* Popular Products Ads */}
      <ProductAds
        ads={ADS_URLS.popularProductsAds}
        className="mb-0 md:mb-[60px] lg:container mx-auto"
        sectionHeight="h-56 md:h-96"
      />

      {/* Top Pricing Products */}
      <SectionWithTitleAndAds
        title="Top Pricing Products"
        seeMoreUrl="/section/top-pricing-products"
      >
        <TopSellingProducts />
      </SectionWithTitleAndAds>

      {/* Top Pricing Ads */}
      <ProductAds
        ads={ADS_URLS.topPricingAds}
        className="mb-0 md:mb-[60px] lg:container mx-auto"
        sectionHeight="h-56 md:h-96"
      />
      <TopBrandProducts />
      {/* Shop By Brands */}
      <ClientBrand />
      {/* Campaigns Countdown */}
      <CampaignsCountDown lastDate="2024-06-22 4:00:00" />
    </main>
  );
};

export default Home;
