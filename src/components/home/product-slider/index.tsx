import React from "react";
import ProductCard from "@/components/common/product-card";
import MultiCarousel from "@/components/common/carousel";

const ProductSlider = ({ productData }: any) => {
  return (
    <MultiCarousel
      settings={{
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
      }}
    >
      {productData?.map((product: any, index: number) => (
        <div key={index} className="aspect-w-16 aspect-h-9 lg:basis-1/6">
          <ProductCard key={product.id} datas={product}></ProductCard>
        </div>
      ))}
    </MultiCarousel>
  );
};

export default ProductSlider;
