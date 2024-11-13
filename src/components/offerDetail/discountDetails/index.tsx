import Image from "next/image";
import React from "react";

const DiscountDetails = ({ image }: any) => {
  return (
    <div className="mt-2">
      {image && (
        <div className="h-32 sm:h-44 md:h-72 w-full">
          <Image
            src={image?.imageUrl}
            alt={image?.altText}
            width={800}
            height={200}
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export default DiscountDetails;
