import { Input } from "@/components/ui/input";
import React from "react";
import ViewMoreTitle from "./../../common/ViewMoreTitle/index";
import { Button } from "@/components/ui/button";

const EmailSubscribe = () => {
  return (
    <div className="bg-white md:py-12 w-3/4 mx-auto border shadow-md rounded">
      <div className="p-3">
        <h1 className="uppercase text-black text-center mb-3 md:text-2xl text-sm sm:text-xl ">
          Get the latest deals and more
        </h1>
        <div className="flex flex-col md:flex-row w-full max-w-sm mx-auto items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button className="md:mt-0 mt-3" type="submit">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
