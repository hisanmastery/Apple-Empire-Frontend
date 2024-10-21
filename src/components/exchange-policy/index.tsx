import React from "react";

const ExchangePolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">How to Exchange Any Device</h1>
      
      <p className="mb-4 text-gray-800">
        অনেককেই দেখেছি আশা করে বলছে “ফোনটা ভালো চলছে কিন্তু এই মুহূর্তে তো হাতে অত টাকা নেই, তাহলে বর্তমান সেই মোবাইলটি ব্যবহার করেই নতুন আরেকটি কিনলে বেচাকেনা তো হবে না।” তাই সামর্থ্য থাক বা না থাকলে আপনার জন্যই এসেছে Exchange সুবিধা।
      </p>

      <h2 className="text-2xl font-semibold mb-2">Exchange সুবিধা আসলে কী?</h2>
      
      <p className="mb-4 text-gray-800">
        মনে করুন, আপনি 14 Pro Max মডেলটি ব্যবহার করছেন এবং 15 Pro Max এই মডেলের পক্ষেই নতুন এক্সচেঞ্জ সুবিধা এসেছে। এই মডেলটি পছন্দ হয়েছে কিন্তু আপনার হাতে অত টাকা নেই? কোনো চিন্তা নেই, আপনার পুরনো মোবাইলটি Exchange করে নতুন অ্যাপল ডিভাইস কিনতে পারবেন।
      </p>

      <h2 className="text-2xl font-semibold mb-2">Exchange সুবিধা পাওয়ার জন্য কিছু শর্ত পূরণ করতে হবে:</h2>
      
      <ol className="list-decimal list-inside mb-6 text-gray-700">
        <li>মোবাইলটিকে অবশ্যই অরিজিনাল হতে হবে এবং এর IMEI ম্যাচিং ঠিক থাকতে হবে।</li>
        <li>iPhone ছাড়া Android ব্র্যান্ড গ্রহণযোগ্য নয়।</li>
        <li>iPhone এর ব্যাটারি লাইফ ৮০% বা তার কম হলে গ্রহণযোগ্য হবে না।</li>
        <li>মোবাইলটি রিফারবিসড (Refurbished) হলে গ্রহণযোগ্য হবে না।</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-2">Exchange আসলে কীভাবে করা হবে?</h2>

      <p className="mb-4 text-gray-800">
        প্রথমে আপনার মোবাইলটি দেখার পর ফাইনাল অনুমোদন সহ একটি মূল্য নির্ধারণ করা হবে। এরপর আপনি অতিরিক্ত টাকায় অন্য একটি ডিভাইস কিনতে পারবেন। তবে, আপনি চাইলে অল্পাংশের মূল্য নগদ দিতে পারেন এবং অন্য অংশ ইএমআই (EMI) সুবিধায় শোধ করতে পারেন।
      </p>

      <p className="mb-4 text-gray-800">
        <strong>বিঃদ্রঃ</strong> আপনার ডিভাইসটির মূল্য কম পাওয়া গেলে দয়া করে চুপ থাকবেন না, কারণ বেশির ভাগ সময় এটি সাময়িক কারণে হয়ে থাকে।
      </p>

      <p className="mb-4 text-gray-800">
        এক্সচেঞ্জ করতে হলে সময় অনুযায়ী আপনার এন আই ডি কার্ড অথবা ছবি সম্বলিত কোনও একটি পরিচয়পত্র নিয়ে আসবেন।
      </p>

      {/* <div className="relative pb-[56.25%] h-0 overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-[80%]"
          src="https://www.youtube.com/embed/C9cBrVJdMOY"
          title="YouTube video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default ExchangePolicy;
