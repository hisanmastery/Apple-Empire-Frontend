import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImageDisplay = ({ product, selectedColor, stock }: any) => {
  const [viewImage, setViewImage] = useState("");

  useEffect(() => {
    const selectedImages = product?.response?.variations.find(
      (variant: any) => variant?.color === selectedColor
    )?.image;
    if (selectedImages?.length > 0) {
      setViewImage(selectedImages?.[0]);
    }
  }, [selectedColor, product]);

  const handleImageMouseMove = (e: any) => {
    const zoomContainer = e.currentTarget.querySelector(".zoom-container");
    const { offsetX, offsetY } = e.nativeEvent;
    const { width, height } = e.target;

    // Calculate percentages for transform origin
    const posX = (offsetX / width) * 100;
    const posY = (offsetY / height) * 100;
    zoomContainer.style.transformOrigin = `${posX}% ${posY}%`;
    zoomContainer.style.transform = "scale(2.5)";
  };

  const handleImageMouseLeave = (e: any) => {
    const zoomContainer = e.currentTarget.querySelector(".zoom-container");
    zoomContainer.style.transform = "scale(1)";
    zoomContainer.style.transformOrigin = "center";
  };

  const parsePrice = (value: any) => {
    if (typeof value === "number") return value;
    return parseFloat((value || "0").toString().replace(/[,৳]/g, ""));
  };

  const newPrice = parsePrice(product?.response?.price);
  const newOfferPrice = parsePrice(product?.response?.offer_price);
  const discountPercentage = newPrice
    ? Math.round(((newPrice - newOfferPrice) / newPrice) * 100)
    : 0;

  return (
    <div
      className="relative overflow-hidden bg-white border w-[90%] md:w-[80%] mx-auto rounded-md"
      onMouseMove={handleImageMouseMove}
      onMouseLeave={handleImageMouseLeave}
    >
      {/* Zoom Container */}
      <div className="zoom-container transition-transform duration-300">
        <Image
          width={500}
          height={500}
          className="transform cursor-pointer mx-auto"
          src={viewImage}
          alt="Product Image"
        />
      </div>

      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-sm rounded">
          Save {discountPercentage}%
        </div>
      )}

      {/* Stock Out Overlay */}
      {stock === 0 && (
        <div className="absolute inset-0 bg-gray-900/35 flex items-center justify-center text-_white font-semibold text-xl">
          Stock Out
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
