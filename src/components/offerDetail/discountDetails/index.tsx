import React from 'react'

const DiscountDetails = () => {
  return (
    <div className="container mt-2">
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-4">
            <img src={"https://i.ibb.co/rGNj53L/offer1.webp"} alt="60 % discount"/>
            <img src={"https://i.ibb.co/80myTWJ/offer3.png"} alt="60 % discount"/>
            <img src={"https://i.ibb.co/tKkjPBV/offer2.png"} alt="60 % discount"/>
        </div>
        <div className="my-6">
            <h4 className="text-red-500 font-semibold text-xl">এই শীতজুড়ে APPLE EMPIRE এ আপনারা পছন্দের প্রিমিয়াম গ্যাজেটস এ পাচ্ছেন নিশিত মূল্যছাড় 😱😱</h4>
            <p className="text-sm font-semibold my-4">শীত উপলক্ষে বিশেষ ছাড় !!!!</p>
            <p className="text-sm">APPLE EMPIRE এ চলছে Winter ধামাকা অফার।</p>
            <p className="text-sm">UP To 60 %  পর্যন্ত বিশাল ডিসকাউন্ট । তাই দেরি না করে স্টক ফুরিয়ে যাবার আগেই অডার করুন আপনার পছন্দের প্রোডাক্টটি ।</p>
            <p className="my-4 text-sm">APPLE EMPIRE থেকে অডার করলেই সাথে পাচ্ছেন ৩৫ টি ব্যাংকের EMI এবং সহজ Home Delivery এর সুবিধা । এছাড়া ও আছে বসুন্ধ্ররা আউটলেট থেকে শপ পিকাপের শুব্যবস্থা ।</p>
            <h3 className="text-md font-semibold mb-4">নিয়মাবলি : </h3>
            <li className="text-sm">অনলাইনে বা ওয়েবসাইটে অডার বুকিং / কনফাম করে এই প্রাইসে আপনি প্রোডাক্ট নিতে পারবেন ।</li>

        </div>
    </div>
  )
}

export default DiscountDetails