"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ViewMoreTitle from "../../../common/ViewMoreTitle";
import { icons } from "@/constants/icons";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { getStoredData } from "@/store/features/cart/cartSlice";
import Link from "next/link";
import { useGetSingleProductsQuery } from "@/store/features/products/productsApi";
import ProductSlider from "../../product-slider";
import {
  useAddToCartMutation,
  useUpdateCartMutation,
} from "@/store/features/cart/cartApi";
import { get_store_data } from "@/utils/get_store_data";
import Loading from "@/components/common/loading";
import useAuth from "@/hooks/useAuth";
import useToaster from "@/hooks/useToaster";
import QuantityController from "@/components/common/quantity-controller";
import Emiplan from "@/components/emiplan";
import VariantDisplay from "./variant-display";
import ImageDisplay from "./image-display";
import ColorSelector from "./color-selector";
import SocialShare from "./social-share";
import ProductInfoTab from "./product-info-tab";
import ProductActionButtons from "./ProductActionButtons";

const ProductDetails = ({ id }: any) => {
  const showToast = useToaster();
  const [isOpen, setIsOpen] = useState(false);
  const { customerInfo } = useAuth();
  const { data, isLoading }: any = useGetSingleProductsQuery({ id });
  const [selectedColor, setSelectedColor]: any = useState(
    data?.response?.variations[0]?.color
  );
  const [thisItem, setThisItem] = useState<any>({});
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  const [addToCartItem]: any = useAddToCartMutation();
  const [updateCart] = useUpdateCartMutation();
  const [countQuantity, setCountQuantity] = useState(1);

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

  const handleColorButtonClick = (color: any) => {
    setSelectedColor(color);
  };

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

  if (isLoading) {
    return <Loading />;
  }

  // Increment function
  const handleIncrementQuantity = () => {
    setCountQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Decrement function
  const handleDecrementQuantity = (item: any) => {
    const new_data = item?.response;

    if (new_data?._id) {
      console.log("New Data: ", new_data);
      const token = localStorage.getItem("token");
      if (token) {
      } else {
        const filter = storedCart.filter((d: any) => {
          return d?.productId == new_data?._id;
        });
        let lists: any = [];
        storedCart.map((d: any) => {
          if (d?.productId == new_data?._id) {
            const obj = { ...d };
            obj.quantity = obj.quantity - 1;
            lists = [...lists, obj];
          } else {
            const obj = {
              ...d,
            };
            lists = [...lists, obj];
          }
        });
        localStorage.setItem("cart_items", JSON.stringify(lists));
        dispatch(getStoredData(lists));
      }
    }
  };

  return (
    <section className="container mx-auto py-5 px-2 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-10">
        <div className="col-span-3 flex mx-auto">
          <div>
            <ImageDisplay product={data} selectedColor={selectedColor} />
            <div className="flex gap-2 mt-2 md:w-[80%] mx-auto">
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
            <div className={"w-full"}>
              <h2 className="flex items-center gap-2 text-md md:text-xl font-medium ">
                {data?.response?.name?.slice(0, 50)}
              </h2>
              <div className="grid grid-cols-2 items-center lg:max-w-[500px]">
                <div
                  className={
                    "ml-2 text-md font-medium flex items-center gap-3 hover:cursor-pointer"
                  }
                >
                  <div
                    className="text-md font-medium text-_orange flex items-center gap-3 hover:cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    <icons.GrCurrencyIcons className="text-xl" />
                    EMIPLAN
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductActionButtons
            product={data?.response}
            id={id}
            showToast={showToast}
          />
          {/* color variant */}
          <div className="flex justify-between items-center mx-1 mt-8">
            <ColorSelector
              variations={data?.response?.variations}
              selectedColor={selectedColor}
              onColorSelect={handleColorButtonClick}
            />
          </div>
          {/* variant */}
          <div className="mt-2">
            <VariantDisplay product={data?.response} />
          </div>
          {/* add to cart button */}
          <div className="flex gap-5 justify-start items-center mt-14">
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
              disabled={isInCart}
              className="bg-black hover:bg-_orange rounded ease-in-out duration-500 transition-all w-full text-white p-2 font-normal text-sm"
            >
              ADD TO CART
            </Button>
            <Button
              variant={"outline"}
              // onClick={() => handleCartClick()}
              className="uppercase hover:bg-_orange border-[#FF4C06] rounded ease-in-out duration-500 transition-all w-full text-black hover:text-white p-2 font-normal text-sm"
            >
              <Link href={"/cart/checkout"}> Buy Now</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* social share */}
      <SocialShare />
      {/* Related products */}
      <ViewMoreTitle
        className="top-selling-product mt-14"
        seeMoreUrl="/products"
        categoryTitle="Related products"
      />
      <ProductSlider />
      {/* products info */}
      <ProductInfoTab product={data} />
      <Emiplan price={400} isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default ProductDetails;
