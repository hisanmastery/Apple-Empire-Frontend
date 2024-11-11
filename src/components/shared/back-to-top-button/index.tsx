"use client";
import React, { useState, useEffect } from "react";
import { icons } from "@/constants/icons";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-36 md:bottom-28 right-2 md:right-8 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-_orange p-3 rounded-full shadow-lg hover:bg-_orange-dark transition duration-300"
        >
          <icons.GoArrowUp className="text-white text-2xl" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
