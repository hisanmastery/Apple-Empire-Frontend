import Link from "next/link";
import React from "react";

const ProductAds = ({ className, ads = ["", ""], sectionHeight }: any) => {
  return (
    <>
      <div className={`w-full md:mt-10 ${className || ""}`}>
        <div className="container-x mx-auto">
          <div
            className={`${sectionHeight} ${ads.length > 1 && ads.length <= 2
              ? "sm:flex xl:space-x-[30px] sm:space-x-5"
              : ""
              } items-center w-full overflow-hidden`}
          >
            <div
              data-aos="fade-right"
              className={`overflow-hidden h-full sm:mb-0 mb-5 ${ads.length > 1 && ads.length <= 2 ? "sm:w-1/2 w-full" : "w-full"
                }  `}
            >
              <Link href="/single-product">
                <img src={ads[0]} alt="ads" className="w-full sm:h-full h-auto hover:scale-105 ease-in-out transition-all duration-1000" />
              </Link>
            </div>
            {ads.length > 1 && ads.length <= 2 && (
              <div data-aos="fade-left" className="flex-1 h-full overflow-hidden">
                <Link href="/single-product">
                  <img src={ads[1]} alt="ads" className="w-full h-full hover:scale-105 ease-in-out transition-all duration-1000" />
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
