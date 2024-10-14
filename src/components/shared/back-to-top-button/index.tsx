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
    <div className="fixed bottom-28 right-10 z-50">
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
