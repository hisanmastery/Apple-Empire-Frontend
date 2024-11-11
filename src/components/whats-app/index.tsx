"use client";
import { images } from "@/constants/images";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="01616436310"
      accountName="Apple Empire"
      avatar={images.NavbarLogo.src || ""}
    />
  );
};

export default WhatsApp;
