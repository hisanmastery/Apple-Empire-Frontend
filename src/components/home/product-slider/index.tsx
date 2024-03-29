import ProductCard from "@/components/common/product-card";
import { icons } from "@/constants/icons";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProductSlider = ({ productData }: any) => {
    let sliderRef: any = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    return (
        <div className="container relative">
            <Slider ref={slider => {
                sliderRef = slider;
            }} {...settings}>
                {productData?.map((product: any, index: number) => (
                    <div key={index} className="aspect-w-16 aspect-h-9 lg:basis-1/6">
                        <ProductCard key={product.id} datas={product}></ProductCard>
                    </div>
                ))}
            </Slider>

            <div style={{ textAlign: "center" }}>
                <button className="button absolute  left-8 top-[50%]" onClick={previous}>

                    <icons.previousIcon className="text-2xl text-_primary" />
                </button>
                <button className="button absolute  right-8 top-[50%]" onClick={next}>
                    <icons.nextIcon className="text-2xl text-_primary" />
                </button>
            </div>
        </div>
    );
};

export default ProductSlider;















// "use client";
// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import ProductCard from "@/components/common/product-card";
// import Autoplay from "embla-carousel-autoplay";
// const ProductSlider = ({ productData }: any) => {
//   const plugin = React?.useRef(
//     Autoplay({ delay: 1000, stopOnInteraction: true })
//   );
//   return (
//     <div>
//       <div className="container">
//         <Carousel
//           plugins={[plugin.current]}
//           onMouseEnter={plugin.current.stop}
//           onMouseLeave={plugin.current.reset}
//           //   opts={{
//           //     align: "start",
//           //   }}
//           className="w-full"
//         >
//           <CarouselContent className="p-4 flex gap-4">
//             {productData?.map((product: any, index: number) => (
//               <CarouselItem key={index} className=" aspect-w-16 aspect-h-9 lg:basis-1/6">
//                 <ProductCard key={product.id} datas={product}></ProductCard>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-2" />
//           <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-2" />
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default ProductSlider;
