import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProductAds = ({ className, ads = ["", ""], sectionHeight }: any) => {
  return (
    <>
      <div className={`w-full md:mt-10 ${className || ""}`}>
        <div className="container-x mx-auto">
          <div
            className={`flex space-x-2 ${sectionHeight} ${
              ads.length > 1 && ads.length <= 2
                ? "xl:space-x-[30px] sm:space-x-5"
                : ""
            } items-center w-full overflow-hidden`}
          >
            <div data-aos="fade-right" className={`h-full w-full`}>
              <Link href="/section/top-selling-products">
                <Image
                  width={1280}
                  height={350}
                  src={ads[0] || ""}
                  quality={100}
                  alt="ads"
                  className="w-full h-full hover:scale-105 ease-in-out transition-all duration-1000"
                />
              </Link>
            </div>
            {ads.length > 1 && ads.length <= 2 && (
              <div
                data-aos="fade-left"
                className="w-full h-full overflow-hidden"
              >
                <Link href="/section/top-selling-products">
                  <Image
                    width={1280}
                    height={350}
                    src={ads[1] || ""}
                    quality={100}
                    alt="ads"
                    className="w-full h-full hover:scale-105 ease-in-out transition-all duration-1000"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAds;
