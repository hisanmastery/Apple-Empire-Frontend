import React from "react";

const ExchangePolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
      Exchange Policy:
      </h1>

      {/* Introductory Paragraph */}
      <p className="mb-6 text-gray-700 text-center">
      অনেকে পছন্দের ফোনটি কিনতে পারেন না কারণ হাতে পর্যাপ্ত নগদ টাকা নেই বা পুরনো ফোনটি কী করবেন তা নিয়ে চিন্তিত। এজন্য আমরা এনেছি <strong>**এক্সচেঞ্জ সুবিধা**</strong> , যার মাধ্যমে আপনি পুরনো ফোন বদলিয়ে নতুন ফোন নিতে পারবেন।
      </p>

      {/* Exchange Conditions Section */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        ### শর্তাবলী:
      </h2>
      <ol className="list-decimal list-inside mb-6 text-gray-700 ml-6">
        <li className="mb-2">
          <strong>**ফোনটি আসল হতে হবে**</strong> এবং IMEI নম্বর বক্সের সাথে
          মিলতে হবে।
        </li>
        <li className="mb-2">
        iPhone ছাড়া অন্যান্য ফোন ২০২১ সালের পরের মডেল বা বাজারে চাহিদাসম্পন্ন হতে হবে।
        </li>
        <li className="mb-2">
          iPhone এর <strong>**ব্যাটারি হেলথ ৮৫%-১০০%**</strong> হতে হবে।
        </li>
        <li className="mb-2">
          ফোনটি <strong>**রিফারবিশড**</strong> বা বড় সমস্যা থাকা যাবে না।
        </li>
      </ol>

      {/* Exchange Process Section */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        ### প্রক্রিয়া:
      </h2>
      <p className="mb-4 text-gray-700">
        ফোনের কন্ডিশন দেখে মূল্য নির্ধারণ করা হবে, যা নতুন ফোন কেনার জন্য
        ব্যবহার করতে পারবেন। অবশিষ্ট টাকা <strong>**নগদ**</strong>,{" "}
        <strong>**ক্রেডিট কার্ড**</strong> বা <strong>***EMI***</strong>-এর মাধ্যমে
        পরিশোধ করা যাবে।
      </p>

      <p className="mb-6 text-gray-700">
        <strong>**ডিভাইস**</strong> এবং <strong>**NID**</strong> নিয়ে শপে আসুন এবং
        এক্সচেঞ্জের সুবিধা উপভোগ করুন!
      </p>

      {/* Optional Video Section */}
      {/* <div className="relative pb-[56.25%] h-0 overflow-hidden mb-8">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/C9cBrVJdMOY"
          title="YouTube video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div> */}

      {/* English Section */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Exchange Policy
      </h1>
      <p className="mb-6 text-gray-700 text-center">
        Many people can't buy their desired phone because they don't have
        enough cash on hand or are unsure what to do with their old phone.
        That's why we've introduced the <strong>**Exchange Offer**</strong>,
        allowing you to trade in your old phone for a new one.
      </p>

      {/* Terms and Conditions Section */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        ### Terms and Conditions:
      </h2>
      <ol className="list-decimal list-inside mb-6 text-gray-700 ml-6">
        <li className="mb-2">
          The <strong>**phone must be original**</strong>, and the IMEI number
          must match the one on the box.
        </li>
        <li className="mb-2">
          Except for iPhones, other phones must be models from{" "}
          <strong>**2021 or later**</strong> or have a good market demand.
        </li>
        <li className="mb-2">
          For iPhones, the <strong>**battery health must be between 85%-100%**</strong>.
        </li>
        <li className="mb-2">
          The phone cannot be <strong>**refurbished**</strong> or have any major issues.
        </li>
      </ol>

      {/* Exchange Process Section */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">### Process:</h2>
      <p className="mb-4 text-gray-700">
        The phone's condition will be assessed to determine its value, which can
        be applied toward purchasing a new phone. The remaining amount can be
        paid via <strong>**cash**</strong>, <strong>**credit card**</strong>, or{" "}
        <strong>**EMI**</strong>.
      </p>
      <p className="text-gray-700">
        Bring your <strong>**device**</strong> and <strong>**NID**</strong> to the store
        and enjoy the exchange offer!
      </p>
    </div>
  );
};

export default ExchangePolicy;
