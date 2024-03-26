import { Input } from "@/components/ui/input";
import React from "react";
import ViewMoreTitle from "./../../common/ViewMoreTitle/index";
import { Button } from "@/components/ui/button";
import { icons } from "@/constants/icons";

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
              <icons.loveHartIcon className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-20 h-20  p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" />
              <h5 className="mt-4">Online Support</h5>
            </div>
            <div className="text-center">
              <icons.giftIcon className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-20 h-20  p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" />
              <h5 className="mt-4">Official Product</h5>
            </div>
            <div className="text-center">
              <icons.truckDelivaryIcon className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-20 h-20  p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" />
              <h5 className="mt-4">Fastest Delivery</h5>
            </div>
            <div className="text-center">
              <icons.paymentIcon className="text-3xl  bg-slate-200 hover:bg-_primary text-_primary hover:text-_secondary-text w-20 h-20  p-5 mx-auto rounded-full flex justify-center items-center  ease-in-out duration-500 transition-all" />
              <h5 className="mt-4">Secure Payment</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
