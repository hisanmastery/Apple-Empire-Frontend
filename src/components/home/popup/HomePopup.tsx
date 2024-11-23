"use client";
import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants/images";

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Link href={"/section/popular-products"}>
        <Image
          ref={popupRef}
          src={images.popup.src}
          alt="Popup"
          height={600}
          width={600}
          quality={100}
          className={"w-[90vw] max-w-[500px] rounded sm:w-[50vw] object-cover"}
        />
      </Link>
    </div>
  );
};

export default HomePopup;
