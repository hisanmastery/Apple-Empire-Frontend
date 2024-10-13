// import Image from "next/image";
// import React from "react";

// const ClientBrand = () => {
//   const brandData = [
//     {
//       id: "1",
//       title: "Hamko",
//       image: "https://www.freeiconspng.com/uploads/apple-icon-4.png",
//     },
//     {
//       id: "2",
//       title: "Hamko",
//       image:
//         "https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png",
//     },
//     {
//       id: "3",
//       title: "Hamko",
//       image:
//         "https://i.ibb.co.com/XSW0DXm/png-transparent-xiaomi-logo-xiaomi-mi-a1-smartphone-internet-business-smartphone-angle-electronics-t.png",
//     },
//     {
//       id: "4",
//       title: "Hamko",
//       image:
//         "https://i.ibb.co.com/tm7xq5f/a83b5ddfc044104f35356c1a843e6d36-removebg-preview.png",
//     },
//     {
//       id: "5",
//       title: "Hamko",
//       image:
//         "https://i.ibb.co.com/Z81cDFV/nokia-logo-nokia-icon-free-free-vector-removebg-preview.png",
//     },
//     {
//       id: "6",
//       title: "Hamko",
//       image:
//         "https://i.ibb.co.com/f2WPQx5/png-clipart-logo-sony-corporation-of-america-television-font-sony-television-angle-removebg-preview.png",
//     },
//     {
//       id: "7",
//       title: "Hamko",
//       image:
//         "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/lg-512.png",
//     },
//     {
//       id: "8",
//       title: "Hamko",
//       image: "https://i.ibb.co.com/Z8SKK3Z/asus-logo-0-removebg-preview.png",
//     },
//   ];
//   return (
//     <section className=" px-1 md:container md:px-auto mx-auto md:mt-10 md:mb-10">

//       <div className="grid lg:grid-cols-8 md:grid-cols-7 smd:grid-cols-6 lsm:grid-cols-5 ssm:grid-cols-4 grid-cols-3 lg:gap-5 gap-2">
//         {brandData?.map((brand, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-center rounded "
//           >
//             <Image
//               className="w-28 h-28 p-1 mx-auto"
//               height={100}
//               width={100}
//               src={brand.image}
//               alt={"image"}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ClientBrand;

"use client";
import React from "react";
import Loading from "@/components/common/loading";
import { useGetAllBrandQuery } from "@/store/features/brand/brandApi";
import Image from "next/image";
import "./style.css";

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 7,
    spaceBetween: 20,
  },
};

const ClientBrand = () => {
  const { data, isLoading }: any = useGetAllBrandQuery({
    limit: 20,
  });
  console.log("brand data", data?.brands);
  if (isLoading) return <Loading />;
  return (
    <div className="container">
      {/* ==================== swiper slider ================ */}
      <Swiper
        className="relative"
        modules={[Navigation, Autoplay]}
        loop={true}
        navigation
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        speed={3000}
        allowTouchMove={false}
        breakpoints={breakpoints}
        spaceBetween={12}
      >
        {data?.brands?.map((brand: any, index: any) => (
          <SwiperSlide key={index} className={`!h-auto !md:h-full`}>
            <div className="w-full !h-full flex items-center">
              <Image
                src={brand?.image?.viewUrl}
                alt={brand?.brandName}
                width={100}
                height={50}
                className="w-[100px] h-[50px] mx-auto transition ease-in-out duration-300 hover:scale-110 hover:cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientBrand;
