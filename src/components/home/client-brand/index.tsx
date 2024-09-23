import Image from "next/image";
import React from "react";

const ClientBrand = () => {
  const brandData = [
    {
      id: "1",
      title: "Hamko",
      image: "https://www.freeiconspng.com/uploads/apple-icon-4.png",
    },
    {
      id: "2",
      title: "Hamko",
      image:
        "https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png",
    },
    {
      id: "3",
      title: "Hamko",
      image:
        "https://i.ibb.co.com/XSW0DXm/png-transparent-xiaomi-logo-xiaomi-mi-a1-smartphone-internet-business-smartphone-angle-electronics-t.png",
    },
    {
      id: "4",
      title: "Hamko",
      image:
        "https://i.ibb.co.com/tm7xq5f/a83b5ddfc044104f35356c1a843e6d36-removebg-preview.png",
    },
    {
      id: "5",
      title: "Hamko",
      image:
        "https://i.ibb.co.com/Z81cDFV/nokia-logo-nokia-icon-free-free-vector-removebg-preview.png",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://i.ibb.co.com/f2WPQx5/png-clipart-logo-sony-corporation-of-america-television-font-sony-television-angle-removebg-preview.png",
    },
    {
      id: "7",
      title: "Hamko",
      image:
        "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/lg-512.png",
    },
    {
      id: "8",
      title: "Hamko",
      image: "https://i.ibb.co.com/Z8SKK3Z/asus-logo-0-removebg-preview.png",
    },
  ];
  return (
    <section className=" px-1 md:container md:px-auto mx-auto md:mt-10 md:mb-10">
      <div className="grid lg:grid-cols-8 md:grid-cols-7 smd:grid-cols-6 lsm:grid-cols-5 ssm:grid-cols-4 grid-cols-3 lg:gap-5 gap-2">
        {brandData?.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded "
          >
            <Image
              className="w-28 h-28 p-1 mx-auto"
              height={100}
              width={100}
              src={brand.image}
              alt={"image"}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientBrand;
