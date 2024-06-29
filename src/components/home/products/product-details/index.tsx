"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ViewMoreTitle from "../../../common/ViewMoreTitle";
import ProductAds from "../../../common/productAds";
import ProductImage from "./image-viewer/index";
import { icons } from "@/constants/icons";
import { Button } from "@/components/ui/button";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addStoredCart, decrementQuantity, incrementQuantity } from "@/store/features/cart/cartSlice";
import Link from "next/link";
import { useGetSingleProductsQuery } from "@/store/features/products/productsApi";
import ProductSlider from "../../product-slider";
import CustomTabs from "@/components/common/custom-tab";
import { useGetEmailCartQuery, useUpdateCartMutation } from "@/store/features/cart/cartApi";
import Loading from "@/components/common/loading";
import { useExtractUniqueAttributes } from "@/utils/Helpers/Attributes";
import Attributes from "@/components/common/attributes";
import { iconsData } from "@/data/prodcuts_details_icons";



const ProductDetails = ({ id }: any) => {
  const { data,isLoading }: any = useGetSingleProductsQuery({ id });
  const [selectedColor, setSelectedColor]: any = useState(data?.response?.variations[0]?.color);
  const [viewImage,setViewImages]=useState("")
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();

  const [selectedRam, setSelectedRam] = useState<string>(""); // State for selected RAM
  const [selectedRegion, setSelectedRegion] = useState<string>(""); // State for selected Region
  const [selectedSize,setSelectedSize]=useState<string>("")
  
  const [matchedVariant, setMatchedVariant] = useState<any>(null); // State for matched variant

  const [updateCart] = useUpdateCartMutation()
  const { data:addToCart, refetch }: any = useGetEmailCartQuery(
    {
        email: "dalim@gmail.com",
    }
  );

const ram = useExtractUniqueAttributes(data?.response?.variants[0]?.variantList, "RAM");
const region =useExtractUniqueAttributes(data?.response?.variants[0]?.variantList, "Reign")
const Size =useExtractUniqueAttributes(data?.response?.variants[0]?.variantList, "size")


  useEffect(() => {
    dispatch(addStoredCart(addToCart?.response));
    refetch();
}, [addToCart?.response, dispatch, refetch]);
  const handleColorButtonClick = (color: any) => {
    setSelectedColor(color);

  };
  // increment
  const handleIncrementQuantity = async (product: any) => {
    dispatch(incrementQuantity(product));
    const quantity = parseFloat(product.quantity) + 1
    // Parse the price string to a number
    const unitPrice = parseFloat(product.price.replace(/,/g, ''));
    // Calculate the new total price
    const newTotalPrice = unitPrice * quantity;
    const payload = {
        ...product,
        quantity: quantity,
        totalPrice: newTotalPrice,

    }
    const res: any = await updateCart({ id: product._id, payload });
    if (res?.data?.isSuccess) {
        refetch()
    }
}
// decrement
  const handleDecrementQuantity = async (product: any) => {
    console.log(product);
    if (parseFloat(product.quantity) > 1) {
        dispatch(decrementQuantity(product));
        const quantity = parseFloat(product.quantity) - 1
        // Parse the price string to a number
        const unitPrice = parseFloat(product.price.replace(/,/g, ''));
        const newTotalPrice = unitPrice * quantity;
        // Calculate the new total price
        const payload = {
            ...product,
            quantity: quantity,
            totalPrice: newTotalPrice
        }
        const res: any = await updateCart({ id: product._id, payload });
        if (res?.data?.isSuccess) {
            refetch()
        }
    }
}

  //================= color code image filter =========//
const selectedImages = selectedColor
? data?.response?.variations?.find((variant: any) => variant?.color === selectedColor)?.image
    : data?.response?.variations[0]?.image;
  // ================ handle color code view image show ========//
  const handleColorImageShow = (image:any) => {
     setViewImages(image)
   }
  //==========view image ==========//
  useEffect(() => {
    if (selectedImages?.length>0) {
      setViewImages(selectedImages[0])
    }
 },[selectedImages])
  // handle cart click
  const handleCartClick = () => {
    // get product data
    const existingCart = storedCart || [];
    const existingProduct = existingCart?.find(
      (item: any) => item.id === data?.response?._id
    );
    // check existing product if not product it will be set
    if (!existingProduct) {
      const updatedCart = [...existingCart, data?.response];
      dispatch(addStoredCart(updatedCart));
    }
  };
  // check already added cart
  const isInCart = storedCart?.find(
    (item: any) => item.id === data?.response?._id
  );

  const handleImageMouseMove = (e: any) => {
    const img = e.target;
    img.style.transformOrigin = `${e.nativeEvent.offsetX}px ${e.nativeEvent.offsetY}px`;
    img.style.transform = "scale(3)";
  };

  const handleImageMouseLeave = (e: any) => {
    const img = e.target;
    img.style.transformOrigin = "center";
    img.style.transform = "scale(1)";
  };

  const tabs = [
    {
      value: "Specification",
      label: "Specification",
      // content: <div>{data?.response?.specification}</div>,
      content: (
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: data?.response?.specification }}
        />
      ),
    },
    {
      value: "Description",
      label: "Description",
      content: (<div
      className="text-gray-600"
      dangerouslySetInnerHTML={{ __html: data?.response?.description }}
    />),
    },
    {
      value: "Warranty",
      label: "Warranty",
      content: (
        <div className="text-gray-600">
           {data?.response?.warranty}
        </div>
      ),
    },
  ];

 //=============== handle variants function =======//
 const handleVariants = () => {
  // Find the variant that matches selected RAM and Region
  const matchedVariant = data?.response?.variants[0]?.variantList.find((variant:any) => {
    const ramMatch = variant.attributeValues.some((attr:any) => attr.label.toLowerCase() === 'ram' && attr.value.toLowerCase() === selectedRam.toLowerCase());
    const regionMatch = variant.attributeValues.some((attr: any) => attr.label?.toLowerCase() === 'region' && attr.value.toLowerCase() === selectedRegion.toLowerCase());
    const sizeMatch = variant.attributeValues.some((attr: any) => attr.label.toLowerCase() === 'size' && attr.value.toLowerCase() === selectedSize.toLowerCase());
    const colorMatch = variant.attributeValues.some((attr:any) => attr.label.toLowerCase() === 'color' && attr.value.toLowerCase() === selectedColor?.toLowerCase());
    return ramMatch && regionMatch && sizeMatch && colorMatch;
  });

  if (matchedVariant) {
    setMatchedVariant(matchedVariant); 
  } else {
    setMatchedVariant(null);
  }
};

// Call handleVariants initially to set default matchedVariant
useEffect(() => {
  handleVariants(); 
}, [selectedRam, selectedRegion,selectedColor]);

  //======== color default value set ========//
  useEffect(() => {
   setSelectedColor(data?.response?.variations[0]?.color)
  },[data])
  
   if (isLoading) {
    return <Loading/>
   }
  return (
    <section className="container mx-auto py-5 px-2 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
        <div className="col-span-3 flex">
          <div>
          {selectedImages?.slice(0,4)?.map((image: string, index: number) => (
                <div key={index} className="bg-white border mb-1 rounded-md" onClick={()=>handleColorImageShow(image)}>
                  <Image
                    width={100}
                    height={100}
                    className="transition-transform duration-300 transform cursor-pointer"
                    src={image}
                    alt={`Product Image - ${selectedColor}`}
                  />
                </div>
              ))}
            </div>
          <div>
          <div
            className="relative overflow-hidden bg-_white border w-[90%] md:w-[80%] mx-auto"
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
          >
            <Image
                width={500}
                height={500}
                className="transition-transform duration-300 transform cursor-pointer mx-auto"
                src={viewImage}
                alt="Product Image"
              />
          </div>
          <div className="flex gap-2 mt-2 md:w-[80%] mx-auto">
         

               {data?.response?.variations?.slice(0,4)?.map((variant: any, index: number) => (
              <div key={index} className="bg-white border rounded-md" onClick={() => handleColorButtonClick(variant.color)}>
                <Image
                  width={100}
                  height={100}
                  className="transition-transform duration-300 transform cursor-pointer"
                  src={variant?.image[0]}
                  alt={`Product Image - ${variant.color}`}
                />
              </div>
            ))}
            </div>
          </div>
        </div>
        <div className="col-span-4  bg-white px-2 md:px-5">
          <div className="flex justify-between">
            <div>
            <h2 className="flex items-center gap-2 text-md md:text-xl font-medium mb-3"><icons.FaAppleIcons className="text-xl md:text-4xl" /> {data?.response?.title?.slice(0,50)}</h2>
              <span  className="text-sm text-md">{selectedRam}</span> |
              <span  className="text-sm text-md">{selectedRegion}</span>
            </div>
            <p>
              <span className="text-sm md:text-lg">Discount Price:</span>
              <span className="text-[18px] md:text-[23px] font-semibold text-red-500 block">ট {matchedVariant?.base_sell_price}</span>
              <span className="line-through text-md font-semibold">ট { data?.response?.offer_price}</span>
            </p>
          </div>
          {/*  */}
           <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
      {iconsData.map((item:any, index:number) => (
        <p key={index} className="text-md font-medium flex items-center gap-3">
          {item.icon}
          {item.label}
        </p>
      ))}
    </div>
          <div className="flex items-center mt-8 space-x-4">
            <h4>
              Color :
            </h4>
            {data?.response?.variations?.map((variant: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleColorButtonClick(variant.color)}
                    className={`w-8 h-8 rounded-full ${variant.color === selectedColor ? "border-2 border-blue-500" : "border"} transition-all duration-300`}
                    style={{ backgroundColor: variant.color }}
                  ></button>
                ))}
          </div>
          {/* spacification */}
          <div className="mt-8">
            <Attributes label="Ram" items={ram} handleSelection={setSelectedRam} handleVariants={handleVariants} />
            <div className="mt-8">
              <Attributes label="Size" items={Size} handleSelection={setSelectedSize} handleVariants={ handleVariants} />
      </div>
      <div className="mt-8">
              <Attributes label="Region" items={region} handleSelection={setSelectedRegion} handleVariants={ handleVariants} />
      </div>
    </div>
          {/* add to cart button */}
          <div className="flex gap-5 mt-14">
          <div className="flex justify-center items-center w-full mb-2">
            <button
               onClick={() => handleDecrementQuantity(data?.response)}
                type="button"
                className="text-md mr-3 border-[1px] size-8" >- </button>
                <span className="text-qblack">{ data?.response?.quantity}</span>
                 <button
                  onClick={() => handleIncrementQuantity(data?.response)}
                   type="button"
                   className="text-base size-8 ml-3 border-[1px]"
                >
                   +
                </button>
                
               </div>
            <Button
              onClick={() => handleCartClick()}
              disabled={isInCart}
              className="bg-_blue hover:bg-_primary rounded ease-in-out duration-500 transition-all w-full text-white p-2 font-normal text-sm"
            >
              ADD TO CART
            </Button>
            <Button
              variant={"outline"}
              // onClick={() => handleCartClick()}
              className="uppercase hover:bg-[#FF4C06] border-[#FF4C06] rounded ease-in-out duration-500 transition-all w-full text-black hover:text-white p-2 font-normal text-sm"
            >
              <Link href={"/cart/checkout"}> Buy Now</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center gap-10 items-center">
      <div className="flex flex-wrap lg:justify-center mt-8 gap-2 leading-3 col-span-4 lg:col-span-4">
            <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
              <icons.FaFacebookIcons className="text-_black text-lg" />
            </Link>
            <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
              <icons.FaXTwitterIcons className="text-_black text-lg" />
          </Link>
          <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
              <icons.FaWhatsappIcons className="text-_black text-lg" />
          </Link>
          <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
              <icons.FaPinterestIcons className="text-_black text-lg" />
          </Link>
          <Link href="#"className="rounded-full p-2 border-[1px] border-_black">
              <icons.FaHandshakeSimple className="text-_black text-lg" />
            </Link>  <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
              <icons.FaSkypeIcons className="text-_black text-lg" />
            </Link>

            <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
              <icons.FaEnvelopeIcons className="text-_black text-lg" />
            </Link>
            <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
              <icons.FaLinkedinIcons className="text-_black text-lg" />
          </Link>
          <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
              <icons.FaRedditIcons className="text-_black text-lg" />
          </Link>
          <Link href="#" className="rounded-full p-2 border-[1px] border-_black">
              <icons.FaTelegramIcons className="text-_black text-lg" />
            </Link>
          </div>
        <div>
        <h5 className="mb-3">Secure Payments</h5>
            <img
              src="https://i.ibb.co/FsWdHzy/Screenshot-2024-03-14-210457.png"
            alt="payment"
            className="w-96 -mt-1"
            />
        </div>
      </div>
      {/* Related products */}
      <ViewMoreTitle
        className="top-selling-product mt-14"
        seeMoreUrl="/products"
        categoryTitle="Related products"
      />
      {/* product caorusel */}
      <ProductSlider />
      {/* products details */}
      <div className="mt-10">
        <CustomTabs defaultValue={"Specification"} tabs={tabs} />
      </div>
    </section>
  );
};

export default ProductDetails;
