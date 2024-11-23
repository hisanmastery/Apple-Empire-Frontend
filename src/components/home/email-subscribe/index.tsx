import React from "react";

import { icons } from "@/constants/icons";
import Image from "next/image";
import { images } from "@/constants/images";

const EmailSubscribe = () => {
  return (
    <div className="bg-white py-5 w-4/5 mx-auto border shadow-md rounded">
      <div className="p-3">
        <div>
          <div className="grid grid-cols-4 text-black">
            <div className="text-center">
              <Image
                className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all"
                src={images.onlineSupportIcon}
                alt="online support"
                width={50}
                height={50}
              />
              <h5 className="text-sm md:text-lg mt-4">Online Support</h5>
            </div>
            <div className="text-center">
              {/* <icons.giftIcon className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" /> */}
              <Image
                className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all"
                src={images.officialProductIcon}
                alt="online support"
                width={50}
                height={50}
              />
              <h5 className="text-sm md:text-lg mt-4">Official Product</h5>
            </div>
            <div className="text-center">
              {/* <icons.truckDelivaryIcon className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" /> */}
              <Image
                className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all"
                src={images.fastDeliveryIcon}
                alt="online support"
                width={50}
                height={50}
              />
              <h5 className="text-sm md:text-lg mt-4">Fastest Delivery</h5>
            </div>
            <div className="text-center">
              <icons.paymentIcon className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" />
              {/* <Image className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-14 h-14 lsm:w-20 lsm:h-20 p-3 lsm:p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" src={images.fastDeliveryIcon} alt="online support" width={50} height={50}/> */}

              <h5 className="text-sm md:text-lg mt-4">Secure Payment</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
