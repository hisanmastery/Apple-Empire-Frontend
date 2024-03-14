import { Input } from "@/components/ui/input";
import React from "react";
import ViewMoreTitle from "./../../common/ViewMoreTitle/index";
import { Button } from "@/components/ui/button";

const EmailSubscribe = () => {
  return (
    <div className="bg-white py-12 w-3/4 mx-auto border shadow-md rounded">
      <div className="p-3">
        <h1 className="uppercase text-black text-center mb-3 text-2xl ">
          Get the latest deals and more
        </h1>
        <Button className="absolute right-[240px]" variant={"ghost"}>
          Subscribe
        </Button>
        <div className="flex w-full max-w-sm mx-auto items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
