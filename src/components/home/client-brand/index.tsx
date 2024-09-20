import Image from "next/image";
import React from "react";

const ClientBrand = () => {
  const brandData = [
    {
      id: "1",
      title: "Hamko",
      image: "https://w7.pngwing.com/pngs/566/77/png-transparent-apple-logo-apple-watch-logo-apple-logo-heart-logo-computer-wallpaper.png",
    },
    {
      id: "2",
      title: "Hamko",
      image: "https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png",
    },
    {
      id: "3",
      title: "Hamko",
      image: "https://w7.pngwing.com/pngs/122/182/png-transparent-xiaomi-logo-xiaomi-mi-a1-smartphone-internet-business-smartphone-angle-electronics-text-thumbnail.png",
    },
    {
      id: "4",
      title: "Hamko",
      image: "https://e7.pngegg.com/pngimages/913/285/png-clipart-oneplus-5t-oneplus-6-oneplus-3-oneplus-logo-text-rectangle-thumbnail.png",
    },
    {
      id: "5",
      title: "Hamko",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEzILfgS_smfP3LHRUevoTO2iHkb731m1Dg&s",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://static.vecteezy.com/system/resources/previews/020/190/713/original/huawei-logo-huawei-icon-free-free-vector.jpg",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-oppo-logo-icon-download-in-svg-png-gif-file-formats--mobile-smartphone-technology-brand-company-major-brands-logos-pack-icons-8715832.png?f=webp&w=256",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://e7.pngegg.com/pngimages/908/26/png-clipart-logo-nokia-6-1-nokia-105-2017-brand-wireless-logo-blue-angle-thumbnail.png",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://e7.pngegg.com/pngimages/102/662/png-clipart-logo-sony-corporation-of-america-television-font-sony-television-angle.png",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://static.vecteezy.com/system/resources/previews/020/927/282/original/lenovo-logo-brand-phone-symbol-name-black-design-china-mobile-illustration-free-vector.jpg",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-vivo-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-17-pack-icons-285323.png?f=webp",
    },
    {
      id: "6",
      title: "Hamko",
      image:
        "https://www.citypng.com/public/uploads/preview/png-motorola-black-logo-icon-701751694968654ai1gvd1i3u.png",
    },
    {
      id: "7",
      title: "Hamko",
      image: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/lg-512.png",
    },
    {
      id: "4",
      title: "Hamko",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDNZdvfuPC9RwuzndN45eK_sj0vqTC9gggQ&s",
    },
    {
      id: "4",
      title: "Hamko",
      image: "https://pngtom.com/files/preview/960x960/317027462541cspkjlqfr3clkkidp2bx4cqvbhtc3mdwbmyfxwhtvybs4owlvxzjarvsufpsdgln7pivjdngaqbatbmodmwzvwiflhyb58e154n.png",
    },
    {
      id: "4",
      title: "Hamko",
      image: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052014/logo_1_0.png?itok=7EzWndZ6",
    },
  ];
  return (
    <section className=" px-1 md:container md:px-auto mx-auto md:mt-10 md:mb-10">
      <div className="grid lg:grid-cols-8 md:grid-cols-7 smd:grid-cols-6 lsm:grid-cols-5 ssm:grid-cols-4 grid-cols-3 lg:gap-5 gap-2">
        {brandData?.map((brand, index) => (
          <div key={index} className=" bg-white flex items-center justify-center shadow-sm rounded ">
            <Image className="w-28 h-28 p-1 mx-auto" height={100} width={100} src={brand.image} alt={'image'}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientBrand;
