import Image from "next/image";
import React from "react";

const ImageDisplay = ({
  product,
  selectedVariant,
  viewImage,
  profileImageUrl,
}: any) => {
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

  const newPrice = parsePrice(selectedVariant?.price);
  const newOfferPrice = parsePrice(selectedVariant?.offer_price);
  const discountPercentage = newPrice
    ? Math.round(((newPrice - newOfferPrice) / newPrice) * 100)
    : 0;

  return (
    <div
      className="relative overflow-hidden bg-_white border w-[90%] md:w-[80%] mx-auto rounded-md"
      onMouseMove={handleImageMouseMove}
      onMouseLeave={handleImageMouseLeave}
    >
      {/* Zoom Container */}
      <div className="zoom-container transition-transform duration-300">
        <Image
          width={500}
          height={500}
          className="transform cursor-pointer mx-auto"
          src={viewImage || profileImageUrl}
          alt="Product Image"
        />
      </div>

      {/* Discount Badge */}
      {discountPercentage > 0 && selectedVariant?.offer_price && (
        <div className="absolute top-2 left-2 bg-orange-500 text-_white px-2 py-1 text-sm rounded">
          Save {discountPercentage}%
        </div>
      )}

      {/* Stock Out Overlay */}
      {selectedVariant?.stock === 0 && (
        <div className="absolute inset-0 bg-gray-900/35 flex items-center justify-center text-_white font-semibold text-xl">
          Stock Out
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
