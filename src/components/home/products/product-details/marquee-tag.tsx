import { images } from "@/constants/images";
import { useGetAllLogoQuery } from "@/store/features/ads-section/adsSectionApi";
import Image from "next/image";
import React from "react";

const MarqueeTag = () => {
  const { data: logo } = useGetAllLogoQuery<any>({});
  return (
    <div className="grid grid-cols-1 lg:grid-cols-9 gap-10 mt-2">
      {/* Marquee Section */}
      <div className="col-span-9 lg:col-span-4 flex lg:justify-start mt-8 gap-2 leading-3">
        <div className="marquee-container">
          <div className="marquee">
            সাপ্লাই চেইন, চাহিদা এবং মুদ্রার হার অনুযায়ী আন্তর্জাতিক পণ্যের দাম
            যেকোনো সময় পরিবর্তিত হতে পারে। স্টক প্রাপ্যতা এবং আপডেট মূল্য জানতে
            আমাদের হটলাইন নম্বরে যোগাযোগ করুন। International product prices may
            vary according to supply chain, demand and currency rate anytime.
            Please contact our hotline number to know the stock availability and
            update price
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="col-span-9 lg:col-span-5 mt-2 md:mt-8">
        <h5 className="mb-3">Secure Payments</h5>
        <Image
          width={300}
          height={20}
          quality={100}
          src={
            logo?.data?.productDetailsPagePayment?.imageUrl ||
            images.paymentImage
          }
          alt={logo?.data?.productDetailsPagePayment?.altText || "payment"}
          className="w-full object-cover h-7 -mt-1"
        />
      </div>

      {/* Marquee Styles */}
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          width: 90%; /* Full width */
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          display: flex;
          align-items: center;
          height: 32px;
        }

        .marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 50s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(10%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* Responsive Fixes */
        @media (max-width: 640px) {
          .marquee-container {
            width: 100%; /* Full width on screens smaller than 640px */
          }
          /* Faster marquee animation on smaller screens */
          .marquee {
            animation: marquee 30s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeTag;
