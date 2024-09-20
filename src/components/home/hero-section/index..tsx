"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import PopularProductCard from "../popularProducts/popularProductCard";
import Link from "next/link";

const HeroSection = () => {
  const plugin = React?.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const products = [
    {
      id: "62aefe9ad8b80d5234af625a",
      image: "https://i.ibb.co.com/jhpqHw6/IMG-20240919-WA0013.jpg",
      brand: "xioami",
      review: 3,
      quantity: 1,
      description:
          "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
      title: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
      offer_price: 18.73,
      price: 27.27,
      campaign_product: false,
      campaign_product_available: null,
      campaign_product_sale: null,
      product_type: null,
    },
    {
      id: "62aefe9ad8b80d5234af625a",
      image: "https://i.ibb.co.com/HhwkHPh/IMG-20240919-WA0002.jpg",
      brand: "xioami",
      review: 3,
      quantity: 1,
      description:
        "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
      title: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
      offer_price: 18.73,
      price: 27.27,
      campaign_product: false,
      campaign_product_available: null,
      campaign_product_sale: null,
      product_type: null,
    },
    {
      id: "62aefe9ad8b80d5234af625b",
      image: "https://i.ibb.co.com/4pJSrfm/IMG-20240919-WA0009.jpg",
      brand: "xioami",
      review: 4,
      quantity: 1,
      description:
          "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
      title: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
      offer_price: 18.73,
      price: 27.27,
      campaign_product: false,
      campaign_product_available: null,
      campaign_product_sale: null,
      product_type: null,
    },
    // {
    //   id: "62aefe9ad8b80d5234af625s",
    //   image: "https://i.ibb.co.com/86FZnTJ/IMG-20240919-WA0006.jpg",
    //   brand: "xioami",
    //   review: 4,
    //   quantity: 1,
    //   description:
    //       "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
    //   title: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
    //   offer_price: 18.73,
    //   price: 27.27,
    //   campaign_product: false,
    //   campaign_product_available: null,
    //   campaign_product_sale: null,
    //   product_type: null,
    // },
  ];
 /* const products = [
    {
      id: "62aefe9ad8b80d5234af625a",
      image: "https://i.ibb.co/4ZpZQSz/iPhone15.webp",
      brand: "xioami",
      review: 3,
      quantity: 1,
      description:
        "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
      title: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
      offer_price: 18.73,
      price: 27.27,
      campaign_product: false,
      campaign_product_available: null,
      campaign_product_sale: null,
      product_type: null,
    },
    {
      id: "62aefe9ad8b80d5234af625a",
      image: "https://i.ibb.co/VCHkXrr/Pixel-8-Series.webp",
      brand: "xioami",
      review: 3,
      quantity: 1,
      description:
        "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
      title: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
      offer_price: 18.73,
      price: 27.27,
      campaign_product: false,
      campaign_product_available: null,
      campaign_product_sale: null,
      product_type: null,
    },
    {
      id: "62aefe9ad8b80d5234af625b",
      image: "https://i.ibb.co/znZWNqy/Galazy.webp",
      brand: "xioami",
      review: 4,
      quantity: 1,
      description:
        "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
      title: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
      offer_price: 18.73,
      price: 27.27,
      campaign_product: false,
      campaign_product_available: null,
      campaign_product_sale: null,
      product_type: null,
    },
  ];*/

  const hotProducts = [
    {
      id: "62aefe9ad8b80d5234af625a",
      image: "https://i.ibb.co/S70JhGt/Galaxy-F23-Forest-Green.webp",
      brand: "xioami",
      review: 3,
      quantity: 1,
      description:
        "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
      title: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
      offer_price: 18.73,
      price: 27.27,
      campaign_product: false,
      campaign_product_available: null,
      campaign_product_sale: null,
      product_type: null,
    },
    {
      id: "62aefe9ad8b80d5234af625a",
      image: "https://i.ibb.co/0fx1P6Z/Galaxy-A34-Lime.webp",
      brand: "xioami",
      review: 3,
      quantity: 1,
      description:
        "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
      title: "Xoggle aute et pariatur adipisicing nostrud et excepteur",
      offer_price: 18.73,
      price: 27.27,
      campaign_product: false,
      campaign_product_available: null,
      campaign_product_sale: null,
      product_type: null, 
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {products.slice(0, 3).map((product, index) => (
          <CarouselItem key={index}>
            <div className="aspect-w-16 aspect-h-9">
              <Card className="h-full">
                <CardContent className="flex w-full  items-center justify-center  lg:h-[480px] h-full p-1">
                  <img
                    className="w-full"
                    src={product.image}
                    alt={`Carousel Image ${index + 1}`}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-2" />
      <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-2" />
    </Carousel>

    // <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:p-3 p-0 xl:container">
    //   <div className="md:col-span-12 xl:col-span-8">
    //     <Carousel
    //       plugins={[plugin.current]}
    //       className="w-full"
    //       onMouseEnter={plugin.current.stop}
    //       onMouseLeave={plugin.current.reset}
    //     >
    //       <CarouselContent>
    //         {products.slice(0, 3).map((product, index) => (
    //           <CarouselItem key={index}>
    //             <div className="aspect-w-16 aspect-h-9">
    //               <Card className="h-full">
    //                 <CardContent className="flex h-full">
    //                   <img
    //                     className=""
    //                     src={product.image}
    //                     alt={`Carousel Image ${index + 1}`}
    //                   />
    //                 </CardContent>
    //               </Card>
    //             </div>
    //           </CarouselItem>
    //         ))}
    //       </CarouselContent>

    //       <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-2" />
    //       <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-2" />
    //     </Carousel>
    //   </div>

    //   <div className="md:col-span-12 xl:col-span-4 bg-[#D6E6EC] border rounded-lg px-5 flex flex-col justify-center items-center">
    //     <h1 className="uppercase text-xl  font-semibold text-center mb-5">
    //       🔥 Hot deal of the day 🔥
    //     </h1>

    //     <div className="flex xl:flex-col flex-col md:flex-row gap-4">
    //       {hotProducts.map((datas, index) => (
    //         <div
    //           key={index}
    //           className="aspect-w-16 aspect-h-9 bg-white border border-primarygray px-5 py-5 mb-5 rounded-lg flex justify-center items-center gap-4"
    //         >
    //           <div className="w-[100px] h-[100px] relative">
    //             <img
    //               src={datas?.image}
    //               className="w-full h-full rounded-md object-cover"
    //               alt="product"
    //             />
    //           </div>
    //           <div className="flex-1 h-full flex flex-col justify-center">
    //             <Link href={`/products/${datas?.id}`}>
    //               <p className="font-semibold title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-qyellow cursor-pointer">
    //                 {datas?.title}
    //               </p>
    //             </Link>
    //             <p className="price">
    //               <span className="font-bold main-price text-qgray line-through font-600 text-[18px]">
    //                 {datas?.price}
    //               </span>
    //               <span className="font-bold text-red-500 offer-price text-qred font-600 text-[18px] ml-2">
    //                 {datas?.offer_price}
    //               </span>
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default HeroSection;
