import { Input } from "@/components/ui/input";
import React from "react";
import ViewMoreTitle from "./../../common/ViewMoreTitle/index";
import { Button } from "@/components/ui/button";
import { icons } from "@/constants/icons";
import Image from "next/image";
import { images } from "@/constants/images";

const EmailSubscribe = () => {
  return (
    <div className="bg-white py-5 w-4/5 mx-auto border shadow-md rounded">
      <div className="p-3">
        {/* <h1 className="uppercase text-black text-center mb-3 md:text-2xl text-sm sm:text-xl ">
          Get the latest deals and more
        </h1> */}
        <div>
          {/* <Input type="email" placeholder="Email" />
          <Button className="md:mt-0 mt-3" type="submit">Subscribe</Button> */}

          <div className="grid grid-cols-4 text-black">
            <div className="text-center">
              {/* <icons.loveHartIcon className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" /> */}
              <Image className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" src={images.onlineSupportIcon} alt="online support" width={50} height={50}/>
              <h5 className="mt-4">Online Support</h5>
            </div>
            <div className="text-center">
              {/* <icons.giftIcon className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" /> */}
              <Image className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" src={images.officialProductIcon} alt="online support" width={50} height={50}/>
              <h5 className="mt-4">Official Product</h5>
            </div>
            <div className="text-center">
              {/* <icons.truckDelivaryIcon className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" /> */}
              <Image className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" src={images.fastDeliveryIcon} alt="online support" width={50} height={50}/>
              <h5 className="mt-4">Fastest Delivery</h5>
            </div>
            <div className="text-center">
              <icons.paymentIcon className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" />
              {/* <Image className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" src={images.fastDeliveryIcon} alt="online support" width={50} height={50}/> */}
              
              <h5 className="mt-4">Secure Payment</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
