import Image from "next/image";
import React from "react";

const ClientBrand = () => {
  const brandData = [
    {
      id: "1",
      title: "Hamko",
      image: "https://appleempire.hisanmastery.com/assets/images/brand-2.webp",
    },
    {
      id: "2",
      title: "Hamko",
      image: "https://appleempire.hisanmastery.com/assets/images/brand-2.webp",
    },
    {
      id: "3",
      title: "Hamko",
      image: "https://appleempire.hisanmastery.com/assets/images/brand-2.webp",
    },
    {
      id: "4",
      title: "Hamko",
      image: "https://appleempire.hisanmastery.com/assets/images/brand-2.webp",
    },
    {
      id: "5",
      title: "Hamko",
      image: "https://appleempire.hisanmastery.com/assets/images/brand-2.webp",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://appleempire.hisanmastery.com/assets/images/Huawei-01.webp",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://appleempire.hisanmastery.com/assets/images/Huawei-01.webp",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://appleempire.hisanmastery.com/assets/images/Huawei-01.webp",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://appleempire.hisanmastery.com/assets/images/Huawei-01.webp",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://appleempire.hisanmastery.com/assets/images/Huawei-01.webp",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://appleempire.hisanmastery.com/assets/images/Huawei-01.webp",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://appleempire.hisanmastery.com/assets/images/Huawei-01.webp",
    },
  ];
  return (
    <section className="container mx-auto mt-10 mb-10">
      <h4 className="text-2xl mb-3 font-semibold">SHOP BY BRANDS</h4>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2  lg:gap-10 gap-7">
        {brandData?.map((brand, index) => (
          <div key={index}>
            <img className="max-h-28 mx-auto" src={brand.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientBrand;
