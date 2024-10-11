"use client";
import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";

const HomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef: any = useRef(null);

  useEffect(() => {
    const hasSeenPopup = Cookies.get("hasSeenPopup");

    if (!hasSeenPopup) {
      // Show the popup if the cookie doesn't exist
      setIsOpen(true);

      // Set a cookie to remember that the popup has been shown
      Cookies.set("hasSeenPopup", "true", { expires: 1 / 24 });
    }

    // Function to handle clicks outside of the popup
    const handleClickOutside = (event: any) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false); // Close popup if click outside
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Link href={"/section/popular-products"}>
        <Image
          ref={popupRef}
          src={
            "https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571140235/mobile-offers.jpg"
          }
          alt="Image... "
          height={100}
          width={100}
          className={" w-[90vw] max-w-[800px] rounded sm:w-[80vw]"}
        />
      </Link>
    </div>
  );
};

export default HomePopup;
