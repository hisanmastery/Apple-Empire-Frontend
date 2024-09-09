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
import {
  addStoredCart,
  decrementQuantity,
  incrementQuantity,
  getStoredData,
} from "@/store/features/cart/cartSlice";
import Link from "next/link";
import { useGetSingleProductsQuery } from "@/store/features/products/productsApi";
import ProductSlider from "../../product-slider";
import CustomTabs from "@/components/common/custom-tab";
import {
  useAddToCartMutation,
  useGetEmailCartQuery,
  useUpdateCartMutation,
} from "@/store/features/cart/cartApi";
import { get_store_data } from "@/utils/get_store_data";
import Loading from "@/components/common/loading";
import { useExtractUniqueAttributes } from "@/utils/Helpers/Attributes";
import Attributes from "@/components/common/attributes";
import { iconsData } from "@/data/prodcuts_details_icons";
import useAuth from "@/hooks/useAuth";
import useToaster from "@/hooks/useToaster";
import QuantityController from "@/components/common/quantity-controller";

const ProductDetails = ({ id }: any) => {
  const showToast = useToaster();
  const { customerInfo } = useAuth();
  const { data, isLoading }: any = useGetSingleProductsQuery({ id });
  const [selectedColor, setSelectedColor]: any = useState(
    data?.response?.variations[0]?.color
  );
  const [viewImage, setViewImages] = useState("");
  const [thisItem, setThisItem] = useState<any>({});
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();

  const [selectedRam, setSelectedRam] = useState<string>(""); // State for selected RAM
  const [selectedRegion, setSelectedRegion] = useState<string>(""); // State for selected Region
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedInternalStorage, setSelectedInternalStorage] =
    useState<string>("");
  const [matchedVariant, setMatchedVariant] = useState<any>(null); // State for matched variant
  const [addToCartItem]: any = useAddToCartMutation();
  const [updateCart] = useUpdateCartMutation();
  // Quantity
  const [countQuantity, setCountQuantity] = useState(1);

  const ram = useExtractUniqueAttributes(
    data?.response?.variants[0]?.variantList,
    "RAM"
  );
  const region = useExtractUniqueAttributes(
    data?.response?.variants[0]?.variantList,
    "Region"
  );
  const Size = useExtractUniqueAttributes(
    data?.response?.variants[0]?.variantList,
    "size"
  );
  const InternalStorage = useExtractUniqueAttributes(
    data?.response?.variants[0]?.variantList,
    "Storage"
  );

  useEffect(() => {
    if (storedCart?.length && data) {
      const new_data = data?.response;
      if (new_data?._id) {
        const filter = storedCart.filter((d: any) => {
          return d?.productId == new_data?._id;
        });

        if (filter?.length) {
          setThisItem(filter[0]);
        } else {
          setThisItem({});
        }
      }
    }
  }, [storedCart, data]);
  // useEffect(() => {
  //   dispatch(addStoredCart(addToCart?.response));
  //   refetch();
  // }, [addToCart?.response, dispatch, refetch]);
  const handleColorButtonClick = (color: any) => {
    setSelectedColor(color);
  };
  //================= color code image filter =========//
  const selectedImages = selectedColor
    ? data?.response?.variations?.find(
        (variant: any) => variant?.color === selectedColor
      )?.image
    : data?.response?.variations[0]?.image;
  // ================ handle color code view image show ========//
  const handleColorImageShow = (image: any) => {
    setViewImages(image);
  };
  //==========view image ==========//
  useEffect(() => {
    if (selectedImages?.length > 0) {
      setViewImages(selectedImages[0]);
    }
  }, [selectedImages]);
  // handle cart click
  const handleCartClick = async (productData: any) => {
    const data = productData?.response;
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (token) {
      const payload = {
        email: customerInfo.email,
        title: data?.title,
        productId: data?._id,
        price: data?.price,
        image: data?.image?.viewUrl,
        quantity: 0,
      };
      const res: any = await addToCartItem({ payload });
      if (res.data.isSuccess) {
        showToast("success", "Cart added successfull");
        const data: any = await get_store_data();
        if (data?.length) {
          dispatch(getStoredData(data));
        } else {
          dispatch(getStoredData([]));
        }
      } else {
        showToast("error", "Cart can't add");
      }
    } else {
      let product_items: any = localStorage.getItem("cart_items");

      product_items = JSON.parse(product_items);

      if (product_items?.length) {
        const data = productData?.response;
        const item_id = data?._id;

        if (item_id) {
          const lists: any = [...product_items];

          const filters = lists.filter((d: any) => {
            return d?.productId == item_id;
          });

          if (filters.length == 1) {
            let new_lists: any = [];
            product_items.map((d: any) => {
              if (d?.productId == item_id) {
                const obj = { ...d };
                obj.quantity = d.quantity + 1;
                new_lists = [...new_lists, obj];
              } else {
                const obj = { ...d };
                new_lists = [...new_lists, obj];
              }
            });
            localStorage.setItem("cart_items", JSON.stringify(new_lists));
            dispatch(getStoredData(new_lists));
          } else {
            const payload = {
              email: "",
              title: data?.title,
              productId: data?._id,
              price: data?.price,
              image: data?.image?.viewUrl,
              quantity: 1,
            };
            let cart_items: any = [...product_items];
            cart_items = [...cart_items, payload];
            localStorage.setItem("cart_items", JSON.stringify(cart_items));
            dispatch(getStoredData(cart_items));
          }
        } else {
          console.log("Product Id Not Found.");
        }
      } else {
        const payload = {
          email: "",
          title: data?.title,
          productId: data?._id,
          price: data?.price,
          image: data?.image?.viewUrl,
          quantity: 1,
        };
        let cart_items: any = [];
        cart_items = [...cart_items, payload];
        localStorage.setItem("cart_items", JSON.stringify(cart_items));
        dispatch(getStoredData(cart_items));
      }
    }
  };
  // check already added cart
  const isInCart = storedCart?.find((item: any) => {
    return item.productId === data?.response?._id;
  });
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
      content: (
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: data?.response?.description }}
        />
      ),
    },
    {
      value: "Warranty",
      label: "Warranty",
      content: <div className="text-gray-600">{data?.response?.warranty}</div>,
    },
  ];

  //=============== handle variants function =======//
  const handleVariants = () => {
    // Find the variant that matches selected RAM and Region
    const matchedVariant = data?.response?.variants[0]?.variantList.find(
      (variant: any) => {
        const ramMatch = variant.attributeValues.some(
          (attr: any) =>
            attr.label.toLowerCase() === "ram" &&
            attr.value.toLowerCase() === selectedRam.toLowerCase()
        );
        const regionMatch = variant.attributeValues.some(
          (attr: any) =>
            attr.label?.toLowerCase() === "region" &&
            attr.value.toLowerCase() === selectedRegion.toLowerCase()
        );
        const internalStorageMatch = variant.attributeValues.some(
          (attr: any) =>
            attr.label.toLowerCase() === "storage" &&
            attr.value.toLowerCase() === selectedInternalStorage?.toLowerCase()
        );
        return ramMatch && regionMatch && internalStorageMatch;
      }
    );

    if (matchedVariant) {
      setMatchedVariant(matchedVariant);
    } else {
      setMatchedVariant(null);
    }
  };

  // Call handleVariants initially to set default matchedVariant
  useEffect(() => {
    handleVariants();
  }, [selectedRam, selectedRegion, selectedColor]);

  //======== color default value set ========//
  useEffect(() => {
    setSelectedColor(data?.response?.variations[0]?.color);
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  // Increment function
  const handleIncrementQuantity = () => {
    setCountQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Decrement function
  const handleDecrementQuantity = (item:any) => {
      const new_data=item?.response;

      if(new_data?._id){
        console.log("New Data: ",new_data);
        const token=localStorage.getItem("token");
        if(token){

        }else{
          const filter=storedCart.filter((d:any)=>{return d?.productId==new_data?._id});
          let lists:any=[];
          storedCart.map((d:any)=>{
            if(d?.productId==new_data?._id){
              const obj={...d};
              obj.quantity=obj.quantity-1;
              lists=[...lists,obj];
            }else{
              const obj={
                ...d
              }
              lists=[...lists,obj];
            }
          })
          localStorage.setItem("cart_items",JSON.stringify(lists));
          dispatch(getStoredData(lists));
        }
      }
  };
  return (
    <section className="container mx-auto py-5 px-2 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-7 sm:gap-10">
        <div className="col-span-3 flex">
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
            <div className="flex gap-2 mt-2 md:w-[80%] mx-auto justify-around">
              {data?.response?.variations
                ?.slice(0, 4)
                ?.map((variant: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white border rounded-md"
                    onClick={() => handleColorButtonClick(variant.color)}
                  >
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
        <div className="col-span-4 bg-white px-2 md:px-5">
          <div className="flex justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-md md:text-xl font-medium ">
                {/* <icons.FaAppleIcons className="text-xl md:text-4xl" /> */}
                {data?.response?.title?.slice(0, 50)}
              </h2>
              <span className="text-sm text-md">{selectedRam}</span> |
              <span className="text-sm text-md">{selectedRegion}</span>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-[18px] md:text-[18px] font-semibold text-red-500 block">
                  ট {matchedVariant?.base_sell_price || 0}
                </span>
                <span className="line-through text-md font-semibold">
                  ট {data?.response?.offer_price}
                </span>
              </div>
            </div>
            {/* <p>
              <span className="text-sm md:text-lg">Discount Price:</span>
              <span className="text-[18px] md:text-[23px] font-semibold text-red-500 block">
                ট {matchedVariant?.base_sell_price || 0}
              </span>
              <span className="line-through text-md font-semibold">
                ট {data?.response?.offer_price}
              </span>
            </p> */}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {iconsData.map((item: any, index: number) => (
              <Link
                href={item.link?`/compare/${id}`:""}
               key={index}
                className="text-md font-medium flex items-center gap-3"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center mt-8">
            <span className="w-[20%]">Color :</span>
            <div className="flex gap-2">
              {data?.response?.variations?.map(
                (variant: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleColorButtonClick(variant.color)}
                    className={`w-8 h-8 rounded-full ${
                      variant.color === selectedColor
                        ? "border-2 border-blue-500"
                        : "border"
                    } transition-all duration-300`}
                    style={{ backgroundColor: variant.color }}
                  ></button>
                )
              )}
            </div>
          </div>
          {/* spacification */}
          <div className="mt-8  ">
            <div className="flex justify-between items-center mx-1">
              <Attributes
                label="Ram"
                items={(ram?.length > 0 && ram) || []}
                handleSelection={setSelectedRam}
                handleVariants={handleVariants}
              />
            </div>
            <div className="mt-8 flex justify-between items-center">
              <Attributes
                label="Storage"
                items={InternalStorage || []}
                handleSelection={setSelectedInternalStorage}
                handleVariants={handleVariants}
              />
              <div></div>
            </div>
            {Size?.length > 0 && (
              <div className="mt-8 flex justify-between items-center">
                <Attributes
                  label="Size"
                  items={Size || []}
                  handleSelection={setSelectedSize}
                  handleVariants={handleVariants}
                />
                <div></div>
              </div>
            )}
            <div className="mt-8 flex justify-between items-center ">
              <Attributes
                label="Region"
                items={(region?.length > 0 && region) || []}
                handleSelection={setSelectedRegion}
                handleVariants={handleVariants}
              />
            </div>
          </div>

          {/* add to cart button */}
          <div className="flex gap-5 items-center mt-14">
            {/* Product Quantity  */}
            <QuantityController
              countQuantity={countQuantity}
              thisItem={thisItem}
              data={data}
              handleIncrementQuantity={handleCartClick}
              handleDecrementQuantity={handleDecrementQuantity}
            />
            <Button
              onClick={() => handleCartClick(data)}
             // disabled={isInCart}
              className="bg-_primary hover:bg-_secondary rounded ease-in-out duration-500 transition-all w-full text-white p-2 font-normal text-sm"
            >
              ADD TO CART
            </Button>
            <Button
              variant={"outline"}
              // onClick={() => handleCartClick()}
              className="uppercase hover:bg-_primary border-[#FF4C06] rounded ease-in-out duration-500 transition-all w-full text-black hover:text-white p-2 font-normal text-sm"
            >
              <Link href={"/cart/checkout"}> Buy Now</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-center gap-10 items-center">
        <div className="flex flex-wrap lg:justify-center mt-8 gap-2 leading-3 col-span-4 lg:col-span-4">
          <Link
            href="#"
            className="rounded-full p-2 border-[1px] border-_black"
          >
            <icons.FaFacebookIcons className="text-_black text-lg" />
          </Link>
          <Link
            href="#"
            className="rounded-full p-2 border-[1px] border-_black"
          >
            <icons.FaXTwitterIcons className="text-_black text-lg" />
          </Link>
          <Link
            href="#"
            className="rounded-full p-2 border-[1px] border-_black"
          >
            <icons.FaWhatsappIcons className="text-_black text-lg" />
          </Link>
          <Link
            href="#"
            className="rounded-full p-2 border-[1px] border-_black"
          >
            <icons.FaPinterestIcons className="text-_black text-lg" />
          </Link>
          <Link
            href="#"
            className="rounded-full p-2 border-[1px] border-_black"
          >
            <icons.FaHandshakeSimple className="text-_black text-lg" />
          </Link>{" "}
          <Link
            href="#"
            className="rounded-full p-2 border-[1px] border-_black"
          >
            <icons.FaSkypeIcons className="text-_black text-lg" />
          </Link>
          <Link
            href="#"
            className="rounded-full p-2 border-[1px] border-_black"
          >
            <icons.FaEnvelopeIcons className="text-_black text-lg" />
          </Link>
          <Link
            href="#"
            className="rounded-full p-2 border-[1px] border-_black"
          >
            <icons.FaLinkedinIcons className="text-_black text-lg" />
          </Link>
          <Link
            href="#"
            className="rounded-full p-2 border-[1px] border-_black"
          >
            <icons.FaRedditIcons className="text-_black text-lg" />
          </Link>
          <Link
            href="#"
            className="rounded-full p-2 border-[1px] border-_black"
          >
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
