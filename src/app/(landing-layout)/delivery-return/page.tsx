import React from "react";

const DeleveryReturn = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center text-_orange mb-8">
        Delivery & Return / ডেলিভারি এবং রিটার্ন
      </h1>

      {/* Order Process & Delivery Options */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-_orange mb-4">
          Order Process & Delivery Options Overview / অর্ডার প্রক্রিয়া এবং
          ডেলিভারি অপশন
        </h2>
        <p className="mb-2">
          ◉ Amount of Advance Acceptance in case of taking order of any product:
          <br />◉ যেকোনো প্রোডাক্ট অর্ডার গ্রহণের ক্ষেত্রে অগ্রিম গ্রহণের
          পরিমাণ:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            Accessories worth less than 5,000/-: Tk 305/- (Outside Dhaka City)
          </li>
          <li>
            ৫,০০০/- এর কম মুল্যের এক্সেসরিজের ক্ষেত্রে ঃ ৩০৫/- টাকা (আউটসাইড
            ঢাকা সিটি)
          </li>

          <li>5,000/- to 50,000/-: Tk. 1,015/-</li>
          <li>৫,০০০/- থেকে ৫০,০০০/-: ১,০১৫/- টাকা</li>

          <li>Above 50,000/-: Tk. 2,030/-</li>
          <li>৫০,০০০ টাকার বেশি প্রোডাক্ট: ২,০৩০/- টাকা</li>
        </ul>
      </section>

      {/* Delivery Time & Charges */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-_orange mb-4">
          Delivery Information / ডেলিভারি তথ্য
        </h2>
        <p className="font-medium">Inside Dhaka (COD available):</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Accessories: 100 BDT | Delivery Time: 24-72 hours</li>
          <li>এক্সেসরিজ : ১০০ টাকা | সময়কাল: ২৪-৭২ ঘন্টা</li>

          <li>
            Devices/Premium Accessories: 250-500 BDT | Delivery Time: 24-48
            hours
          </li>
          <li>
            ডিভাইস / প্রিমিয়াম এক্সেসরিজ: ২৫০-৫০০ টাকা | সময়কাল: ২৪-৪৮ ঘন্টা
          </li>

          <li>
            Express Delivery: 500-1000 BDT | Delivery Time: 3-6 hours
            (Prepayment required)
          </li>
          <li>
            এক্সপ্রেস ডেলিভারি: ৫০০-১০০০ টাকা | সময়কাল: ৩-৬ ঘন্টা (পূর্ণ পেমেন্ট
            প্রযোজ্য)
          </li>
        </ul>
      </section>

      {/* Refund & Return Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-_orange mb-4">
          Refund and Return Policy / রিফান্ড এবং রিটার্ন নীতি
        </h2>
        <p className="mb-2">
          ◉ In-store purchases must be checked in front of the salesperson.
          <br />◉ শপে প্রোডাক্ট ক্রয় করার সময়, বিক্রয়কর্মীর সামনে প্রোডাক্ট
          চেক করতে হবে।
        </p>
        <p className="mb-2">
          ◉ For online orders, notify us within 24 hours with an unboxing video
          in case of a defect.
          <br />◉ অনলাইন অর্ডারের ক্ষেত্রে, প্রোডাক্টের ত্রুটি থাকলে ২৪ ঘন্টার
          মধ্যে আনবক্সিং ভিডিও সহ আমাদের জানাতে হবে।
        </p>
      </section>

      {/* FAQs */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-_orange mb-4">
          FAQs / সাধারণ জিজ্ঞাসা
        </h2>
        <ul className="list-disc list-inside ml-4">
          <li>
            What are the delivery options available? / ডেলিভারি অপশন কি কি?
          </li>
          <li>
            How long does it take for the delivery to arrive? / ডেলিভারি পৌঁছাতে
            কত সময় লাগে?
          </li>
          <li>
            Is there free delivery for certain orders? / কিছু অর্ডারের জন্য কি
            ফ্রি ডেলিভারি আছে?
          </li>
        </ul>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-2xl font-semibold text-_orange mb-4">
          Need Help? / সাহায্য দরকার?
        </h2>
        <p className="font-bold">Phone: +880 1616 436311</p>
        <p className="font-bold">WhatsApp: WhatsApp / Instagram</p>
      </section>
    </div>
  );
};

export default DeleveryReturn;
