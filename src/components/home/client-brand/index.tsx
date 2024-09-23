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
    <section className=" px-1 md:container md:px-auto mx-auto md:mt-10 md:mb-10">
      <div className="grid lg:grid-cols-8 md:grid-cols-7 smd:grid-cols-6 lsm:grid-cols-5 ssm:grid-cols-4 grid-cols-3 lg:gap-5 gap-2">
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
