"use client";
import React, { useState } from "react";

const ReturnAndRefundPolicy = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  // Toggle function to open and close sections
  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Refund and Return Policy
      </h1>

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Iterate over policy data */}
        {policyData.map((item, index) => (
          <div key={index} className="border-b py-4">
            <button
              className="w-full flex justify-between items-center text-lg font-medium text-gray-700 focus:outline-none"
              onClick={() => toggleSection(index)}
            >
              {item.title}
              {/* Icon for expanding/collapsing */}
              <span className="text-xl">
                {openSection === index ? "−" : "+"}
              </span>
            </button>

            {/* Section content */}
            {openSection === index && (
              <div className="mt-4 text-gray-600">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Policy data for the sections
const policyData = [
  {
    title: "Shop Purchase Policy",
    description: (
      <>
        <p>
          ◉ In the case of purchasing products from the shop, you must check and
          buy in front of the salesperson at the shop. Later problems will be
          covered under the warranty if the product has a warranty.
        </p>
        <p>
          ◉ শপ থেকে পণ্য ক্রয়ের ক্ষেত্রে অবশ্যই শপে বিক্রয়কর্মীর সামনে চেক করে
          কিনবেন। পরবর্তীতে সমস্যা হলে যদি পণ্যে ওয়ারেন্টি থাকে তবে তা
          ওয়ারেন্টির আওতাভুক্ত হবে।
        </p>
      </>
    ),
  },
  {
    title: "Online Order Unboxing & Defects",
    description: (
      <>
        <p>
          ◉ In case of online order, after receiving the delivery of the
          product, an unboxing video of the product should be made. In case of
          manufacturing defect, you should report to our hotline within 24
          hours. Refund requests will not be accepted after this time.
        </p>
        <p>
          ◉ অনলাইন অর্ডারের ক্ষেত্রে পণ্য ডেলিভারি পাবার পর পণ্যের একটি আনবক্সিং
          ভিডিও করে মেনুফেকচারিং ত্রুটি থাকলে আমাদের হটলাইনে ২৪ ঘন্টার মধ্যে
          জানাতে হবে।
        </p>
      </>
    ),
  },
  {
    title: "Refund on Non-Availability",
    description: (
      <>
        <p>
          ◉ If the ordered product is unavailable in the market after order
          acceptance, we will refund your payment within 24 hours.
        </p>
        <p>
          ◉ অর্ডার গ্রহন এর পর মার্কেট এ প্রোডাক্ট না থাকার কারনে প্রোডাক্ট
          ডেলিভার করতে ব্যার্থ হলে কাস্টমার কে ২৪ ঘন্টা এর মধ্যে পেমেন্ট রিফান্ড
          করে দেওয়া হবে।
        </p>
      </>
    ),
  },
  {
    title: "Refund Timeline",
    description: (
      <>
        <p>
          ◉ Refunds may take 3 to 7 working days. For online payments, it may
          take a maximum of 7 to 10 business days after product return or valid
          reason acceptance.
        </p>
        <p>
          ◉ নির্দিষ্ট কারণে পণ্য রিটার্ন দেয়ার পর অথবা গ্রহণযোগ্য কারণে মূল্য
          রিফান্ড করতে ৩ থেকে ৭ কার্যদিবস এবং অনলাইন পেমেন্টের ক্ষেত্রে ৭ থেকে
          ১০ কার্যদিবস সময় লাগতে পারে।
        </p>
      </>
    ),
  },
  {
    title: "Refund Charges",
    description: (
      <>
        <p>
          ◉ Refund charges will be applicable for payments made through Mobile
          Financial Services/Online Gateways/POS. Only the displayed cash value
          on the website will be refunded.
        </p>
        <p>
          ◉ সকল প্রকার মোবাইল ফিন্যান্সিয়াল সার্ভিস/ অনলাইন গেটওয়ে / POS
          দ্বারা গৃহীত পেমেন্ট রিফান্ডের ক্ষেত্রে রিফান্ড চার্জ প্রযোজ্য হবে।
        </p>
      </>
    ),
  },
  {
    title: "Cashback Deduction",
    description: (
      <>
        <p>
          ◉ If cashback was applied during the payment, the same amount will be
          deducted from the refund.
        </p>
        <p>
          ◉ ক্রেতাগন যদি পেমেন্ট করার সময় কোন প্রকার ক্যাশব্যাক পেয়ে থাকেন
          তাহলে রিফান্ড করার সময় ক্যাশব্যাকের সমপরিমান টাকা কেটে রাখা হবে।
        </p>
      </>
    ),
  },
  {
    title: "Product Change after Courier",
    description: (
      <>
        <p>
          ◉ After the product is couriered, the customer cannot change the
          product.
        </p>
        <p>
          ◉ অর্ডারকৃত প্রোডাক্ট কুরিয়ার করার পর কাস্টমার প্রোডাক্ট পরিবর্তন
          করতে পারবেন না।
        </p>
      </>
    ),
  },
  {
    title: "Uncollected Product",
    description: (
      <>
        <p>
          ◉ If the customer does not collect the product after couriering, the
          advance payment will be deducted.
        </p>
        <p>
          ◉ অর্ডারকৃত প্রোডাক্ট কুরিয়ার করার পর সম্মানিত ক্রেতাগন প্রোডাক্ট যদি
          সংগ্রহ না করেন সেক্ষেত্রে তার করা অগ্রিম পেমেন্ট কর্তন করা হবে।
        </p>
      </>
    ),
  },
  {
    title: "Product Change before Courier",
    description: (
      <>
        <p>
          ◉ If the customer wants to change the product before it is couriered,
          they can do so if the desired product is in stock. No refund will be
          allowed in this case.
        </p>
        <p>
          ◉ যদি প্রোডাক্ট কুরিয়ার করার পূর্বে কাস্টমার প্রোডাক্ট পরিবর্তন করতে
          চান সেক্ষেত্রে তার কাঙ্ক্ষিত প্রোডাক্ট আমাদের স্টক এ থাকলে পরিবর্তন
          করতে পারবেন তবে পেমেন্ট রিফান্ড নিতে পারবেন না।
        </p>
      </>
    ),
  },
  {
    title: "SSLCOMMERZ Refund Policy",
    description: (
      <>
        <p>
          ◉ Refunds for payments made through SSLCOMMERZ will be processed
          according to their refund policy.
        </p>
        <p>
          ◉ ক্রেতাগন যদি SSLCOMMERZ অনলাইন গেটওয়ে এর মাধ্যমে পেমেন্ট সম্পন্য
          করে থাকেন সেক্ষেত্রে SSLCOMMERZ এর রিফান্ড পলিসি অনুযায়ী পেমেন্ট
          রিফান্ড করা হবে।
        </p>
      </>
    ),
  },
];

export default ReturnAndRefundPolicy;
