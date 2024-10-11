import { icons } from "@/constants/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialShare = () => {
  return (
    <div className="grid grid-cols-1 container lg:grid-cols-9 gap-10">
      <div className="col-span-3 flex lg:justify-start mt-8 gap-2 leading-3 lg:col-span-4">
        <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
          <icons.FaFacebookIcons className="text-_black text-lg" />
        </Link>
        <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
          <icons.FaXTwitterIcons className="text-_black text-lg" />
        </Link>
        <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
          <icons.FaLinkedinIcons className="text-_black text-lg" />
        </Link>
        <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
          <icons.FaLinkedinIcons className="text-_black text-lg" />
        </Link>
        <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
          <icons.FaLinkedinIcons className="text-_black text-lg" />
        </Link>
        <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
          <icons.FaLinkedinIcons className="text-_black text-lg" />
        </Link>
        <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
          <icons.FaLinkedinIcons className="text-_black text-lg" />
        </Link>
      </div>
      <div className={"col-span-5"}>
        <h5 className="mb-3">Secure Payments</h5>
        <Image
          width={300}
          height={20}
          quality={100}
          src="https://i.ibb.co/FsWdHzy/Screenshot-2024-03-14-210457.png"
          alt="payment"
          className="w-96 -mt-1"
        />
      </div>
    </div>
  );
};

export default SocialShare;
