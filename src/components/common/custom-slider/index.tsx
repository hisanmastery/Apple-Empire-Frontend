"use client";
import React from "react";
import ProductCard from "@/components/common/product-card";
import MultiCarousel from "@/components/common/carousel";
const CustomSlider = ({ sliderProducts }: any) => {
    return (
        <MultiCarousel
            className="mt-10 bg-slate-200 rounded-md    
            + p-5"
            settings={{
                dots: false,
                infinite: true,
                speed: 1000,
                autoplay: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            }}
        >
            {sliderProducts?.blogs
                ?.slice(0, 12)
                ?.map((product: any, index: number) => (
                    <div
                        key={index}
                        className="aspect-w-16 aspect-h-9 lg:basis-1/6"
                        style={{ margin: "0 10px" }}
                    >
                        <ProductCard key={product._id} datas={product}></ProductCard>
                    </div>
                ))}
        </MultiCarousel>
    );
};

export default CustomSlider;
