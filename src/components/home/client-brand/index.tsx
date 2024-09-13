import Image from "next/image";
import React from "react";

const ClientBrand = () => {
  const brandData = [
    {
      id: "1",
      title: "Hamko",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "2",
      title: "Hamko",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "3",
      title: "Hamko",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "4",
      title: "Hamko",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "5",
      title: "Hamko",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "7",
      title: "Hamko",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
    {
      id: "4",
      title: "Hamko",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
    },
  ];
  return (
    <section className=" px-2 msm:px-8 lsm:px-12 smd:container smd:px-auto mx-auto mt-10 mb-10">
      <div className="grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 lg:gap-10 gap-7">
        {brandData?.map((brand, index) => (
          <div key={index} className=" bg-white flex items-center justify-center shadow-sm rounded ">
            <img className="w-28 h-16 p-1 mx-auto" src={brand.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientBrand;
