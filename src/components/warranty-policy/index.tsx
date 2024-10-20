import React from 'react';

const WarrantyPolicy = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Warranty Policy Header */}
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Warranty Policy
        </h1>
        
        {/* English Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Terms & Conditions of Warranty Claim for Smart Devices & Accessories
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Sold products are non-refundable.</li>
            <li>
              Active/Inactive status of the device must be verified before purchase.
              No later objection in this regard is admissible.
            </li>
            <li>
              10 days Replacement Warranty (excluding display/touch issue) applicable only for:
              Smartphone/Tab/TV/MacBook.
            </li>
            <li>
              Get 1-year free service warranty for Smartphone/Tab/MacBook (Parts/Hardware excluded).
              For hardware issues, customers bear the parts cost, while Apple Empire covers the
              Service Charge.
            </li>
            {/* Add more points here... */}
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">Reasons for which warranty will not apply:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Physical Damage/Scratch on product and packaging</li>
            <li>Liquid damage</li>
            <li>Unauthorized software modification (Root/Brick/Jailbreak)</li>
            <li>Software/security update issues (Over-heating, Battery draining, etc.)</li>
            {/* Add more points here... */}
          </ul>

          <p className="text-gray-600 mb-4">
            Apple Empire reserves the right to modify any policy at any time without prior notice.
          </p>
        </div>

        {/* Bangla Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            স্মার্ট ডিভাইস এবং আনুষাঙ্গিকগুলির জন্য ওয়ারেন্টি দাবির শর্তাবলী
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>বিক্রিত পণ্য অফেরতযোগ্য।</li>
            <li>
              ডিভাইসের Active / Inactive স্ট্যাটাস অবশ্যই কেনার আগে যাচাই করে নিশ্চিত করে নিতে হবে।
            </li>
            <li>
              ১০ দিনের Replacement Warranty (ডিসপ্লে/টাচ ইস্যু ব্যতীত) শুধুমাত্র
              Smartphone/Tab/TV/MacBook এর জন্য প্রযোজ্য।
            </li>
            <li>
              Smartphone/Tab/MacBook এর জন্য ১ বছরের ফ্রি সার্ভিস ওয়ারেন্টি। 
              হার্ডওয়্যার ইস্যুতে পার্টসের খরচ ক্রেতাকে বহন করতে হবে। সার্ভিস চার্জ বহন করবে Apple Empire।
            </li>
            {/* Add more points here... */}
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">ওয়ারেন্টি প্রযোজ্য হবে নাঃ</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>প্রোডাক্ট এবং প্যাকেজিং-এ ফিজিক্যাল ড্যামেজ/স্ক্র্যাচ</li>
            <li>লিকুইড ড্যামেজ</li>
            <li>অবৈধ সফটওয়্যার পরিবর্তন (Root/Brick/Jailbreak)</li>
            <li>সফটওয়্যার আপডেট জনিত সমস্যা (Over-Heating, Battery Draining, ইত্যাদি)</li>
            {/* Add more points here... */}
          </ul>

          <p className="text-gray-600 mb-4">
            যেকোনো সময় পূর্বের কোনো ঘোষণা ছাড়াই Apple Empire যেকোনো পলিসি পরিবর্তন করতে পারে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPolicy;
