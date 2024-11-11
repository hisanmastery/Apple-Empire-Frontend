"use client";
import { images } from "@/constants/images";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  return (
    <div className="relative">
      <FloatingWhatsApp
        phoneNumber="+8801616436310"
        accountName="Apple Empire"
        avatar={images.NavbarLogo.src || ""}
      />
    </div>
  );
};

export default WhatsApp;
