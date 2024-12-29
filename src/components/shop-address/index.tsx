"use client";
import { useGetSingleDynamicPageQuery } from "@/store/features/dynamic-page/dynamicPageApi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const ShopAdress = () => {
  const path = usePathname();
  const slug = path?.slice(1);
  const { data } = useGetSingleDynamicPageQuery<any>({ slug: slug });
  const description = data?.page?.description;

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container flex flex-col items-center justify-center h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Shop Address</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Apple Empire</h2>
        <p className="text-gray-600 mb-4">
          Basement-1, Shop No-27, Bashundhara City Shopping Mall, Panthapath,
          Dhaka, Bangladesh
        </p>

        <h3 className="text-lg font-semibold">Contact Information</h3>
        <p className="text-gray-600 mb-2">
          Email:{" "}
          <a
            href="mailto:support@appleempire.com"
            className="text-blue-600 hover:underline"
          >
            support@appleempire.com
          </a>
        </p>

        <h4 className="font-semibold">For Queries:</h4>
        <p className="text-gray-600 mb-2">01616436311, 01616436310</p>

        <h4 className="font-semibold">For Complaints or Advice:</h4>
        <p className="text-gray-600 mb-2">0196307230</p>

        <h4 className="font-semibold">For Exchange:</h4>
        <p className="text-gray-600 mb-2">01616436313, 01616436315</p>

        <h4 className="font-semibold">For After Sale Service:</h4>
        <p className="text-gray-600 mb-4">01711072663</p>

        <h3 className="text-lg font-semibold">Business Hours</h3>
        <p className="text-gray-600 mb-2">
          Wednesday - Monday: 10:00 AM - 9:00 PM
        </p>
        <p className="text-gray-600">Tuesday: Closed</p>

        <div className="flex mt-4 space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <Link
              href="https://www.google.com/maps?ll=23.750681,90.390762&z=16&t=m&hl=en&gl=BD&mapclient=embed&cid=2466713523410400392"
              rel="nofollow"
              target="_blank"
            >
              Show Map
            </Link>
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </div>

        {showDetails && description && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <h4 className="text-lg font-semibold">Details:</h4>
            <div
             className="overflow-hidden"
             dangerouslySetInnerHTML={{ __html: data?.page?.description }}
           />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopAdress;
