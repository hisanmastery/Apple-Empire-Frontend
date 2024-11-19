"use client";
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
import { useGetAllAdsQuery } from "@/store/features/ads-section/adsSectionApi";
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
      className={`md:mb-[60px] mb-5 lg:container ${className}`}
      seeMoreUrl={seeMoreUrl}
      categoryTitle={title}
    >
      {children}
    </ViewMoreTitle>
    {ads && (
      <ProductAds
        ads={ads}
        className="mb-0 md:mb-[60px] lg:container mx-auto"
      />
    )}
  </>
);

const Home: React.FC = () => {
  const { data } = useGetAllAdsQuery<any>({});
  const bannerImageAll = data?.sections;
  const firstImage = bannerImageAll?.find(
    (item: any) => item?.sectionName === "first_section"
  );
  const second_section = bannerImageAll?.find(
    (item: any) => item?.sectionName === "second_section"
  );
  const third_section = bannerImageAll?.find(
    (item: any) => item?.sectionName === "third_section"
  );
  const fourth_section = bannerImageAll?.find(
    (item: any) => item?.sectionName === "fourth_section"
  );
  const fifth_section = bannerImageAll?.find(
    (item: any) => item?.sectionName === "fifth_section"
  );
  return (
    <main className="lg:container mx-auto md:p-0 mt-5">
      {/* Top Items and Popup */}
      <TopItems />
      <HomePopup />

      {/* Primary Ads */}
      <ProductAds
        ads={[
          firstImage?.images?.[0]?.imageUrl,
          firstImage?.images?.length > 1
            ? firstImage?.images?.[1]?.imageUrl
            : undefined,
        ].filter(Boolean)}
        className="lg:container mx-auto"
        sectionHeight="h-[100px] lg:h-[350px]"
      />

      {/* Top Selling Products */}
      <SectionWithTitleAndAds
        title="Top Selling Products"
        seeMoreUrl="/section/top-selling-products"
      >
        <TopSellingProducts />
      </SectionWithTitleAndAds>

      {/* Watch Ads */}
      <ProductAds
        ads={[
          second_section?.images?.[0]?.imageUrl,
          second_section?.images?.length > 1
            ? second_section?.images?.[1]?.imageUrl
            : undefined,
        ].filter(Boolean)}
        className="lg:container mx-auto"
        sectionHeight="h-[100px] md:h-[350px]"
      />

      {/* All Products */}
      <SectionWithTitleAndAds
        title="All Products"
        seeMoreUrl="/section/top-selling-products"
      >
        <Products />
      </SectionWithTitleAndAds>

      {/* Secondary Ads */}
      <ProductAds
        ads={[
          third_section?.images?.[0]?.imageUrl,
          third_section?.images?.length > 1
            ? third_section?.images?.[1]?.imageUrl
            : undefined,
        ].filter(Boolean)}
        className="mb-0 md:mb-[60px] lg:container mx-auto"
        sectionHeight="h-[100px] md:h-[350px]"
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
        ads={[
          fourth_section?.images?.[0]?.imageUrl,
          fourth_section?.images?.length > 1
            ? fourth_section?.images?.[1]?.imageUrl
            : undefined,
        ].filter(Boolean)}
        className="mb-0 md:mb-[60px] lg:container mx-auto"
        sectionHeight="h-[100px] lg:h-[350px]"
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
        ads={[
          fifth_section?.images?.[0]?.imageUrl,
          fifth_section?.images?.length > 1
            ? fifth_section?.images?.[1]?.imageUrl
            : undefined,
        ].filter(Boolean)}
        className="mb-0 md:mb-[60px] lg:container mx-auto"
        sectionHeight="h-[100px] lg:h-[350px]"
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
