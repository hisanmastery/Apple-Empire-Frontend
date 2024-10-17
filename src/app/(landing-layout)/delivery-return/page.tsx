import React from "react";

const DeliveryAndReturn: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center">Delivery & Return</h1>

      {/* Order Process & Delivery Options Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Order Process & Delivery Options Overview
        </h2>

        <p className="mb-4">
          অর্ডার প্রক্রিয়া এবং ডেলিভারি চার্জ সংক্রান্ত নিম্নলিখিত শর্তাবলি প্রযোজ্যঃ
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>৫,০০০/-</strong> এর কম মুল্যের এক্সেসরিজের ক্ষেত্রে : 
            <span className="text-gray-600"> ৩০৫/- টাকা (আউটসাইড ঢাকা সিটি)</span>
          </li>
          <li>
            <strong>৫,০০০/- থেকে ৫০,০০০/-</strong> মূল্যের যে কোনো প্রোডাক্টের এর জন্য :
            <span className="text-gray-600"> ১,০১৫/- টাকা।</span>
          </li>
          <li>
            <strong>৫০,০০০/- টাকার বেশি</strong> মূল্যের যে কোনো প্রোডাক্টের জন্য :
            <span className="text-gray-600"> ২,০৩০/- টাকা।</span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Inside Dhaka Metro (Cash on Delivery - COD)
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <span>Accessories: <strong>100 BDT</strong></span>
            <p className="text-gray-600">Delivery time: 24 to 72 hours</p>
          </li>
          <li>
            <span>Devices / Premium Accessories: <strong>250-500 BDT</strong></span>
            <p className="text-gray-600">Delivery time: 24 to 48 hours</p>
          </li>
          <li>
            <span>Express Delivery: <strong>500-1000 BDT</strong></span>
            <p className="text-gray-600">Delivery time: 3 to 6 hours (full payment required)</p>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          Outside Dhaka City (Standard Delivery)
        </h3>
        <p className="mb-4">
          If full payment is made, courier charges for any accessories or devices will be free.
        </p>
        <p className="mb-4">
          For cash on delivery of regular accessories within Dhaka City, delivery charge is BDT 100/- (may vary depending on distance). Courier charges outside Dhaka are BDT 120-200 depending on the product.
        </p>
      </section>

      {/* Delivery Time */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Delivery Time</h2>
        <p className="mb-4">
          Inside Dhaka: Delivery will be completed within 1 to 3 working days. Outside Dhaka: Delivery within 2 to 5 working days.
        </p>
        <p className="mb-4 text-gray-600">
          [Note: Orders must be placed before 5.30 PM. Orders placed after this time will be processed the next day.]
        </p>
      </section>

      {/* Return Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>
            Place your order and select your preferred delivery method during checkout.
          </li>
          <li>
            Track your product using the provided tracking number.
          </li>
          <li>
            Wait for your order to arrive at your destination.
          </li>
          <li>
            Collect your order from the specified pickup location during checkout.
          </li>
        </ol>
      </section>

      {/* Delivery & Return Options */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Delivery & Return Options</h2>

        <h3 className="text-xl font-semibold mb-2">Inside Dhaka</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Standard Delivery: Get it in 2-3 working days</li>
          <li>Express Delivery: 1-2 business days for urgent domestic orders.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Outside Dhaka</h3>
        <p className="mb-4">
          Delivery may take 3 to 7 working days. For online payments, it may take 7 to 10 business days for returns.
        </p>
      </section>
    </div>
  );
};

export default DeliveryAndReturn;
