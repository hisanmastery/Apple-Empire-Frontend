import Link from "next/link";
import React from "react";

const ViewMoreTitle = ({
  categoryTitle = "",
  className,
  children,
  seeMoreUrl = "",
  style,
}: any) => {
  return (
    <div
      style={{ marginTop: "30px" }}
      className={`section-wrapper w-full  ${className || ""}`}
    >
      <div className="container-x mx-auto">
        <div className=" section-title flex justify-between items-center mb-5 md:px-5">
          <div>
            <h1 className="text-xs msm:text-md sm:text-lg md:text-xlfont-600 text-black font-semibold uppercase leading-none font-inherit ">
              {categoryTitle}
            </h1>
          </div>
          <div>
            <Link href={seeMoreUrl}>
              <div className="flex space-x-2 items-center">
                <p className="text-xs msm:text-md sm:text-lg md:text-xl font-600 text-black underline hover:text-_primary font-bold font-inherit ">
                  View More
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="section-content">{children && children}</div>
      </div>
    </div>
  );
};

export default ViewMoreTitle;
