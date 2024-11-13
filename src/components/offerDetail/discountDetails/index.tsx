import Image from "next/image";
import React from "react";

const DiscountDetails = ({ image, description }: any) => {
  return (
    <div className="mt-2">
      {image && (
        <div className="">
          <Image
            src={image?.imageUrl}
            alt={image?.altText}
            width={800}
            height={200}
            className="w-full"
          />
        </div>
      )}
      <p className="mt-5">{description}</p>
    </div>
  );
};

export default DiscountDetails;
