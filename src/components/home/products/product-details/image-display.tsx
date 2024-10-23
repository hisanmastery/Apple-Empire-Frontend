import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImageDisplay = ({ product, selectedColor }: any) => {
  const [viewImage, setViewImage] = useState("");

  useEffect(() => {
    const selectedImages = product?.response?.variations.find(
      (variant: any) => variant?.color === selectedColor
    )?.image;
    if (selectedImages?.length > 0) {
      setViewImage(selectedImages[0]);
    }
  }, [selectedColor, product]);

  const handleImageMouseMove = (e: any) => {
    const img = e.target;
    img.style.transformOrigin = `${e.nativeEvent.offsetX}px ${e.nativeEvent.offsetY}px`;
    img.style.transform = "scale(3)";
  };

  const handleImageMouseLeave = (e: any) => {
    const img = e.target;
    img.style.transformOrigin = "center";
    img.style.transform = "scale(1)";
  };

  // Calculate the offer percentage
  const parsePrice = (value: number | string) => {
    if (typeof value === "number") return value;
    return parseFloat((value || "0").toString().replace(/[,৳]/g, ""));
  };
  // Parse and log prices
  const newPrice = parsePrice(product?.response?.price);
  const newOfferPrice = parsePrice(product?.response?.offer_price);
  const discountPercentage = newPrice
    ? Math.round(((newPrice - newOfferPrice) / newPrice) * 100)
    : 0;

  console.log({ product });

  return (
    <div
      className="relative overflow-hidden bg-white border w-[90%] md:w-[80%] mx-auto rounded-md"
      onMouseMove={handleImageMouseMove}
      onMouseLeave={handleImageMouseLeave}
    >
      <Image
        width={500}
        height={500}
        className="transition-transform duration-300 transform cursor-pointer mx-auto"
        src={viewImage}
        alt="Product Image"
      />
      {discountPercentage > 0 && (
        <div className="absolute top-2 right-2 bg-_orange/80 text-white px-2 py-1 text-sm rounded">
          {discountPercentage}% OFF
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
