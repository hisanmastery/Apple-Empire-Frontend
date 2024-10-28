import Link from "next/link";
import React from "react";

const ShopAdress = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Shop Address</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
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
            <Link href="https://www.google.com/maps?ll=23.750681,90.390762&z=16&t=m&hl=en&gl=BD&mapclient=embed&cid=2466713523410400392" rel="nofollow" target="_blank">Show Map</Link>
            
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopAdress;
