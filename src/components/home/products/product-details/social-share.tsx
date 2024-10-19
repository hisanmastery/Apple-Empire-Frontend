import { icons } from "@/constants/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialShare = () => {
  return (
    <div className="grid grid-cols-1 container lg:grid-cols-9 gap-10 mt-2">
      <div className="col-span-3 flex lg:justify-start mt-8 gap-2 leading-3 lg:col-span-4">
        {/* Scrolling text using CSS animation */}
        <div className="marquee-container">
          <div className="marquee">
            This is a scrolling text using CSS animations.
          </div>
        </div>
      </div>
      <div className={"col-span-5"}>
        <h5 className="mb-3">Secure Payments</h5>
        <Image
          width={300}
          height={20}
          quality={100}
          src="https://i.ibb.co/FsWdHzy/Screenshot-2024-03-14-210457.png"
          alt="payment"
          className="w-full h-8 -mt-1"
        />
      </div>
      {/* Inline CSS styles for marquee effect */}
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
          background-color: #f0f0f0; /* Optional: background color for better visibility */
          border: 1px solid #ccc; /* Optional: border for the marquee container */
          display: flex;
          align-items: center; /* Vertically center the text */
          height: 32px; /* Set a fixed height for the container */
        }
        .marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
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
