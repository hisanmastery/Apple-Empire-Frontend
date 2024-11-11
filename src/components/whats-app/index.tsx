"use client";
import React, { useEffect, useRef, useState } from "react";
import { images } from "@/constants/images"; // Make sure to set up your images or use a placeholder
import Image from "next/image";
import { icons } from "@/constants/icons";
import { usePathname } from "next/navigation";
import { envConfig } from "@/config/envConfig";

const CustomWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  const chatRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const path = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatRef.current &&
        !chatRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false); // Close the chat box whenever the page path changes
  }, [path]);

  useEffect(() => {
    // Update current time every minute
    const intervalId = setInterval(() => {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(time);
    }, 60000); // Update every minute

    // Set initial time
    setCurrentTime(
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );

    return () => clearInterval(intervalId);
  }, []);

  // Function to open WhatsApp
  const handleChat = () => {
    const countryCode = "880";
    const phoneNumber = "1616436310";
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;
    const message = `${envConfig.frontend_url}${path}`;
    const whatsappUrl = `https://wa.me/${fullPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  const handleOpenChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* WhatsApp Floating Button with Animation */}
      <button
        ref={buttonRef}
        onClick={handleOpenChat}
        className="fixed bottom-20 md:bottom-6 right-1 md:right-5 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all focus:outline-none z-50"
      >
        {/* Animated WhatsApp Icon */}
        <icons.whatsappIcons className="text-2xl" />
      </button>

      {/* WhatsApp Chat Box */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-20 right-5 w-80 h-96 bg-white shadow-2xl rounded-lg border border-gray-300 overflow-hidden z-50"
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between bg-green-600 text-white p-[5px] rounded-t-lg">
            <div className="flex items-center space-x-3">
              <Image
                src={images.NavbarLogo}
                alt="Logo"
                width={40}
                height={40}
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h3 className="text-base font-bold">Apple Empire</h3>
                <p className="text-xs opacity-80">
                  Typically replies within 1 hour
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl font-bold focus:outline-none"
            >
              &times;
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 space-y-3 overflow-y-auto h-64 bg-gray-50">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <p className="text-sm">Hello there! 👋 How can we help?</p>
              <span className="text-xs text-gray-400 block text-right">
                {currentTime}
              </span>
            </div>
          </div>

          {/* Message Input */}
          <div className="flex items-center p-3 border-t bg-white">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-full outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <button
              onClick={handleChat}
              className="ml-2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all focus:outline-none"
            >
              <icons.sendIcons />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomWhatsApp;
