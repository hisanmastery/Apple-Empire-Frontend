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

const Storage = ["4GB", "256Gb", "1TB"];
const sim = ["singel", "dual", "usa"];
const region = ["global", "hk", "usa"];
const ProductDetails = ({ id }: any) => {
  const { data }: any = useGetSingleProductsQuery({ id });
  // const datas = data?.response?.slice(0, 5);
  const [selectedColor, setSelectedColor]: any = useState("");
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  const [updateCart] = useUpdateCartMutation()
  const { data:addToCart, refetch }: any = useGetEmailCartQuery(
    {
        email: "dalim@gmail.com",
    }
  );
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
  const images = selectedColor
    ? data?.response?.variations?.find(
      (variant: any) => variant?.color === selectedColor
    )?.image ?? data?.response?.variations[0]?.image
    : data?.response?.variations[0]?.image;

  // Extracting only the 'image' property from each object in the 'variations' array
  const variationImages = data?.response?.variations?.map(
    (variation: any) => variation?.image
  );
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
      content: <div className="text-gray-600">{data?.response?.description}</div>,
    },
    {
      value: "Warranty",
      label: "Warranty",
      content: (
        <div className="text-gray-600">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </div>
      ),
    },
  ];
  return (
    <section className="container mx-auto py-5 px-2 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
        <div className="col-span-3 flex">
        <div>
            {
              data?.response?.variations?.map((image: any, index: number) =>
                <div key={index} className="bg-_white"
                  onClick={() => handleColorButtonClick(image.color)}
                >
                  <Image
                    width={100}
                    height={100}
                    id="activeImage"
                    className=" transition-transform duration-300 transform cursor-pointer"
                    src={image?.image}
                    alt="Product Image"
                  />
                </div>)
            }
            </div>
          <div>
          <div
            className="relative overflow-hidden bg-_white"
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
          >
            <Image
              width={500}
              height={500}
              id="activeImage"
              className="transition-transform duration-300 transform cursor-pointer mx-auto"
              src={images}
              alt="Product Image"
            />
          </div>
          {/* <ProductImage variationImages={variationImages} /> */}
          <div className="flex gap-2 mt-2">
            {
              data?.response?.variations?.map((image: any, index: number) =>
                <div key={index} className="bg-_white"
                  onClick={() => handleColorButtonClick(image.color)}
                >
                  <Image
                    width={100}
                    height={100}
                    id="activeImage"
                    className=" transition-transform duration-300 transform cursor-pointer"
                    src={image?.image}
                    alt="Product Image"
                  />
                </div>)
            }
            </div>
          </div>
        </div>
        <div className="col-span-4  bg-white px-2 md:px-5">
          {/* <h2 className="text-2xl font-medium">{data?.response?.title}</h2> */}
          {/* pricing */}
          {/* <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-4 items-center text-center ">
            <h4 className=" mt-3 font-bold bg-blue-100 p-3 rounded-sm w-full ">
              Price:
              <span className="line-through text-gray-600">
                {data?.response.price} $
              </span>
              <span className="mx-2">{data?.response?.price}$</span>
            </h4>
            <h4 className="mt-3 font-bold bg-blue-100 p-3 rounded-sm w-full">
              Status:{data?.response?.status}
            </h4>
            <h4 className="mt-3 bg-blue-100 px-2 py-3 rounded-sm w-full ">
              <span className="font-bold text-lg">Code:</span>
              {data?.response?._id?.slice(0, 10)}
            </h4>
          </div> */}

          <div className="flex justify-between">
            <div>
            <h2 className="flex items-center gap-2 text-xl md:text-3xl font-medium mb-3"><icons.FaAppleIcons className="text-2xl md:text-5xl" /> {data?.response?.title}</h2>
            <span >{data?.response?.displayType}</span> |
              <span>{data?.response?.ram[0]}</span> |
              <span>{data?.response?.region[0]}</span>
            </div>
            <p>
              <span className="md:text-lg font-semibold">DisCount Price</span>
              <span className="text-[20px] md:text-[30px] font-semibold text-red-500 block">ট {data?.response.price}</span>
              <span className="line-through text-md font-semibold">ট { data?.response?.offer_price}</span>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            <p className="text-md font-medium flex items-center gap-3"><icons.GrCurrencyIcons className="text-xl"/> EMIPLAN</p>
            <p className="text-md font-medium flex items-center gap-3"><icons.FaCodeCompareIcons className="text-xl" />COMPARE</p>
            <p className="text-md font-medium flex items-center gap-3"><icons.TbExchangeIcons className="text-xl" />EXCHANGE</p>
            <p className="text-md font-medium flex items-center gap-3"><icons.FavoriteBorder className="text-xl" />WISHLIST</p>
            <p className="text-md font-medium flex items-center gap-3"><icons.FaWhatsappIcons className="text-xl" />MESSAGE</p>
            <p className="text-md font-medium flex items-center gap-3"><icons.truckDelivaryIcon className="text-xl"/>DELIVARY PLAN</p>
          </div>
          {/* whatsapp */}
          {/* <div className="bg-_green text-white rounded mt-5 flex gap-1 py-2 cursor-pointer items-center w-60">
            <span>
              <IoLogoWhatsapp className="text-2xl mx-3" />
            </span>
            <p>Message on Whatsapp</p>
          </div> */}
          {/* <h2 className="text-2xl mt-6 font-medium">
            Apple Store 1 Year Warranty Support
          </h2> */}
          <p className="mt-5 leading-8 mb-3 text-gray-600">
            {data?.response?.description.slice(0, 150)}..
          </p>
          {/* review star
          <div className="reviews flex space-x-[1px] mb-3">
            <span className="text-yellow-400">{<icons.FaStar />}</span>
            <span className="text-yellow-400">{<icons.FaStar />}</span>
            <span className="text-yellow-400">{<icons.FaStar />}</span>
            <span className="text-yellow-400">{<icons.FaStar />}</span>
          </div>
          <p>
            Manufacturer: <span className="text-blue-600">Apple</span>
          </p> */}
          <div className="flex items-center mt-5 space-x-4">
            <h4>
              Color :
            </h4>
            {data?.response?.variations?.map((variant: any, index: any) => (
              <button
                key={index}
                style={{ backgroundColor: `${variant?.colorCode}` }}
                className={`w-9 h-9 rounded-full bg-[${variant?.colorCode
                  }] border border-gray-300 ${selectedColor === variant?.color &&
                  "p-1  border-yellow-500 border-4"
                  }`}
                onClick={() => handleColorButtonClick(variant?.color)}
              ></button>
            ))}
          </div>
          {/* spacification */}
          <div className="mt-4">
            <div className="grid grid-cols-12 gap-[5rem] items-start">
              <span className="col-span-1">Storage:</span>
              <div className="col-span-11 flex flex-wrap gap-2">
                {Storage?.map((item: any, index: number) => (
                  <span key={index} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-12 gap-[5rem] items-start mt-5">
              <span className="col-span-1">Sim:</span>
              <div className="col-span-11 flex flex-wrap gap-2">
                {sim?.map((item: any, index: number) => (
                  <span key={index} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-12 gap-[5rem] items-start mt-5">
              <span className="col-span-1">Region:</span>
              <div className="col-span-11 flex flex-wrap gap-2">
                {region?.map((item: any, index: number) => (
                  <span key={index} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    {item}
                  </span>
                ))}
              </div>
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
      {/* product ads banner */}
      {/* <ProductAds
        ads={[
          `https://d61s2hjse0ytn.cloudfront.net/vertical_image/3-2024/Redmi_Note_13_Pro_EID.webp`,
        ]}
        className=" mb-[60px] container mx-auto"
      /> */}

      {/* products details */}
      <div className="mt-10">
        <CustomTabs defaultValue={"Specification"} tabs={tabs} />
      </div>
    </section>
  );
};

export default ProductDetails;
