"use client";
import React from "react";
import dynamic from "next/dynamic";
const Products = dynamic(() => import("../home/products"));
const ProductAds = dynamic(() => import("../common/productAds"));
const ViewMoreTitle = dynamic(() => import("../common/ViewMoreTitle"));
const TopSellingProducts = dynamic(() => import("../home/TopSellingProducts"));
const PopularProducts = dynamic(() => import("../home/popularProducts"));
const CampaignsCountDown = dynamic(() => import("./campaigns-count-down"));
const HomePopup = dynamic(() => import("@/components/home/popup/HomePopup"));
import { useGetAllAdsQuery } from "@/store/features/ads-section/adsSectionApi";
import ClientBrand from "./client-brand";
import TopBrandProducts from "./top-brand-products";
import useHeadline from "@/hooks/useHeadline";
import Resverse_product from "./products/Resverse_product";
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
      className={`mb-5 lg:container ${className}`}
      seeMoreUrl={seeMoreUrl}
      categoryTitle={title}
    >
      {children}
    </ViewMoreTitle>
    {ads && <ProductAds ads={ads} className="lg:container mx-auto" />}
  </>
);

const Home: React.FC = () => {
  const { data } = useGetAllAdsQuery<any>({});
  const { data: headlineData } = useHeadline();
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
  const count_down_section = bannerImageAll?.find(
    (item: any) => item?.sectionName === "count_down_section"
  );
  return (
    <main className="lg:container mx-auto md:p-0 mt-5">
      {/* Top Items and Popup */}
      <TopItems title={headlineData?.top_categories} />
      <HomePopup />

      {/* Primary Ads */}
      <ProductAds
        ads={[
          firstImage?.images?.[0]?.imageUrl,
          firstImage?.images?.length > 1
            ? firstImage?.images?.[1]?.imageUrl
            : undefined,
        ].filter(Boolean)}
        link={firstImage?.canonicalUrl}
        className="lg:container mx-auto"
        sectionHeight="h-[120px] lg:h-[350px]"
      />
      {/* Top Selling Products */}
      <SectionWithTitleAndAds
        title={data?.popular_products || "Top Selling Products"}
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
        link={second_section?.canonicalUrl}
        className="lg:container mx-auto"
        sectionHeight="h-[120px] md:h-[350px]"
      />

      {/* All Products */}
      <SectionWithTitleAndAds
        title={headlineData?.all_products || "All Products"}
        seeMoreUrl="/section/top-selling-products"
      >
        <Products />
      </SectionWithTitleAndAds>
      <Resverse_product />
      {/* Secondary Ads */}
      <ProductAds
        ads={[
          third_section?.images?.[0]?.imageUrl,
          third_section?.images?.length > 1
            ? third_section?.images?.[1]?.imageUrl
            : undefined,
        ].filter(Boolean)}
        link={third_section?.canonicalUrl}
        className="lg:container mx-auto"
        sectionHeight="h-[120px] md:h-[350px]"
      />

      {/* Popular Products */}
      <SectionWithTitleAndAds
        title={headlineData?.popular_products || "Popular Products"}
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
        link={fourth_section?.canonicalUrl}
        className="lg:container mx-auto"
        sectionHeight="h-[120px] lg:h-[350px]"
      />

      {/* Top Pricing Products */}
      <SectionWithTitleAndAds
        title={headlineData?.top_pricing_products || "Top Pricing Products"}
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
        link={fifth_section?.canonicalUrl}
        className="lg:container mx-auto"
        sectionHeight="h-[120px] lg:h-[350px]"
      />
      <TopBrandProducts title={headlineData?.top_brand_products} />
      {/* Shop By Brands */}
      <ClientBrand title={headlineData?.shop_by_brand} />
      {/* Campaigns Countdown */}
      <CampaignsCountDown
        lastDate="2024-06-22 4:00:00"
        count_down_section={count_down_section}
      />
    </main>
  );
};

export default Home;
