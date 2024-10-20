import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialShare = () => {
  return (
    <div className="grid grid-cols-1 container lg:grid-cols-9 gap-10 mt-2">
      <div className="col-span-3 flex lg:justify-start mt-8 gap-2 leading-3 lg:col-span-4">
        {/* Scrolling text using CSS animation */}
        <div></div>
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
      <div className={"col-span-5"}>
        <h5 className="mb-3">Secure Payments</h5>
        <Image
          width={300}
          height={20}
          quality={100}
          src={images.paymentImage}
          alt="payment"
          className="w-full object-cover h-7 -mt-1"
        />
      </div>
      {/* Inline CSS styles for marquee effect */}
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          width: 80%;
          background-color: #f0f0f0; /* Optional: background color for better visibility */
          border: 1px solid #ccc; /* Optional: border for the marquee container */
          display: flex;
          align-items: center; /* Vertically center the text */
          height: 32px; /* Set a fixed height for the container */
        }
        .marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 50s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SocialShare;
