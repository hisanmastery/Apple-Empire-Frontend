import React from "react";
import Link from "next/link";
import { emiPlans } from "../../../data/emi-policy";

const EMITable: React.FC = () => {
  return (
    <>
      {/* information EMI Policy  */}
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
          EMI POLICY
        </h1>

        <p className="mb-4 text-lg">
          স্মার্টফোন বা গ্যাজেট পছন্দ হয়েছে, কিনতেও চাচ্ছেন কিন্তু এই মুহূর্তে
          নগদ টাকা না থাকায় কিনতে পারছেন না?
        </p>

        <p className="mb-4 text-lg">
          <span className="font-bold">Apple Empire</span> আপনাদের জন্য নিয়ে
          এসেছে <span className="font-bold text-indigo-600">EMI</span>- এর
          সুবিধা। এখন নগদ টাকা হাতে না থাকলেও পছন্দের মোবাইল বা গ্যাজেট কেনা হবে
          আরো সহজ, আকর্ষণীয় EMI সুবিধার মাধ্যমে।
        </p>

        <p className="mb-4 text-lg">
          EMI-এর পূর্ণরূপ হচ্ছে{" "}
          <span className="font-bold">Equated Monthly Installments</span>। EMI
          এর সুবিধা নিতে, নিচের তালিকাভুক্ত ব্যাংকগুলোর মধ্যে যেকোনো একটির
          ক্রেডিট কার্ড থাকলেই আপনি EMI সুবিধা উপভোগ করতে পারবেন।
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-indigo-500">
          EMI সুবিধা গ্রহণের উপায়
        </h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li>
            ব্যাংকের ক্রেডিট কার্ড ব্যবহার করে আপনি EMI সুবিধার মাধ্যমে ডিভাইস
            কিনতে পারবেন।
          </li>
          <li>
            আপনার পছন্দের ডিভাইসের মূল্য ৩ থেকে সর্বোচ্চ ৩৬ মাসের কিস্তিতে
            পরিশোধ করতে পারবেন।
          </li>
          <li>
            EMI নিতে হলে অবশ্যই সংশ্লিষ্ট ব্যাংকের ক্রেডিট কার্ড থাকতে হবে।
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-indigo-500">উদাহরণ:</h3>
        <p className="mb-4 text-lg">
          ধরুন, আপনি iPhone 14 Pro Max মডেলের একটি ফোন কিনবেন যার নগদ মূল্য{" "}
          <span className="font-bold">৳ ১,২৬,০০০</span>। আপনি চাইলে পুরো{" "}
          <span className="font-bold">৳ ১,২৬,০০০</span> টাকাই EMI সুবিধার
          মাধ্যমে কিস্তিতে পরিশোধ করতে পারবেন। অথবা আপনি নগদ{" "}
          <span className="font-bold">৳ ২৬,০০০</span> পরিশোধ করে, বাকি{" "}
          <span className="font-bold">৳ ১,০০,০০০</span> টাকার ওপর EMI সুবিধা
          নিতে পারবেন।
        </p>

        <p className="mb-4 text-lg">
          লক্ষ্য করুন, EMI সুবিধার ক্ষেত্রে মূল্যের বাইরে কিছু অতিরিক্ত চার্জ
          যুক্ত হবে, যেহেতু আপনাকে ধাপে ধাপে পরিশোধ করার সুবিধা প্রদান করা
          হচ্ছে।
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-indigo-500">
          যেকোনো সহায়তা প্রয়োজন হলে
        </h2>
        <p className="mb-4 text-lg">
          EMI সংক্রান্ত যেকোনো বিভ্রান্তি, অভিযোগ বা পরামর্শের জন্য যোগাযোগ
          করুন:
        </p>
        <ul className="list-none mb-6 text-lg">
          <li>
            📞{" "}
            <a href="tel:01616436311" className="text-indigo-600 underline">
              01616436311
            </a>{" "}
            (Call & WhatsApp)
          </li>
          <li>
            📞{" "}
            <a href="tel:01616436318" className="text-indigo-600 underline">
              01616436318
            </a>{" "}
            (Call & WhatsApp)
          </li>
        </ul>

        <Link href="/contact">
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition">
            Contact Us
          </button>
        </Link>
      </div>
      {/* EMI Policy table  */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          EMI Policy Sheet
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Bank</th>
                <th className="border border-gray-300 px-4 py-2">
                  Min Transaction
                </th>
                {[
                  "3 months",
                  "6 months",
                  "9 months",
                  "12 months",
                  "18 months",
                  "24 months",
                  "30 months",
                  "36 months",
                ].map((period) => (
                  <th key={period} className="border border-gray-300 px-4 py-2">
                    {period}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {emiPlans.map((plan, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {plan.bank}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {plan.minTransaction}
                  </td>
                  {plan.rates.map((rate, idx) => (
                    <td key={idx} className="border border-gray-300 px-4 py-2">
                      {rate !== null ? `${rate}%` : "N/A"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EMITable;
