import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { icons } from "@/constants/icons";
import useAuth from "@/hooks/useAuth";
import useToaster from "@/hooks/useToaster";
import { useAddToCartMutation } from "@/store/features/cart/cartApi";
import { getStoredData } from "@/store/features/cart/cartSlice";
import { get_store_data } from "@/utils/get_store_data";

// Define the type for the datas prop (can adjust as per your model)
interface ProductData {
  _id: string;
  title: string;
  price: number;
  offer_price: number;
  image: { viewUrl: string };
  review: number;
}

interface ProductCardProps {
  datas: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ datas }) => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const [addToCartItem]: any = useAddToCartMutation();
  const { isAuthenticated, customerInfo }: any = useAuth();
  const showToast = useToaster();

  const handleAddToCart = async (productData: ProductData) => {
    const data = productData;
    const token = localStorage.getItem("token");

    if (token && isAuthenticated) {
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
        showToast("success", "Cart added successfully");
        const data: any = await get_store_data();
        if (data?.length) {
          dispatch(getStoredData(data));
        } else {
          dispatch(getStoredData([]));
        }
      } else {
        showToast("error", "Cart can't be added");
      }
    } else {
      let product_items: any = localStorage.getItem("cart_items");
      product_items = JSON.parse(product_items);

      if (product_items?.length) {
        const item_id = data?._id;

        if (item_id) {
          const lists: any = [...product_items];
          const filters = lists.filter((d: any) => d?.productId === item_id);

          if (filters.length === 1) {
            let new_lists: any = [];
            product_items.map((d: any) => {
              const obj = { ...d };
              if (d?.productId === item_id) {
                obj.quantity += 1;
              }
              new_lists = [...new_lists, obj];
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
            let cart_items: any = [...product_items, payload];
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
        let cart_items: any = [payload];
        localStorage.setItem("cart_items", JSON.stringify(cart_items));
        dispatch(getStoredData(cart_items));
      }
    }
  };

  // Calculate the offer percentage
  const parsePrice = (value: number | string) => {
    if (typeof value === 'number') return value;
    return parseFloat((value || '0').toString().replace(/[,৳]/g, ''));
  };

  // Parse and log prices
  const newPrice = parsePrice(datas?.price);
  const newOfferPrice = parsePrice(datas?.offer_price);
  const discountPercentage = newPrice ? Math.round(
    ((newPrice - newOfferPrice) / newPrice) * 100
  ) : 0;

  const isInCart = storedCart?.find(
    (item: any) => item.productId === datas?._id
  );

  return (
    <div
      className="overflow-hidden"
      // style={{ boxShadow: "0px 0px 1px 0px gray" }}
    >
      <>
        <div className="cursor-pointer product-card-one w-full h-full max-h-[320px] text-nowrap bg-white relative group hover:scale-105 rounded-lg ease-in-out  duration-700">
          {/* Display Offer Percentage */}
          {discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-_orange/80 text-white px-2 py-1 sm:text-sm rounded text-xs">
              {discountPercentage}% OFF
            </div>
          )}

          <Link href={`/products/${datas?._id}`}>
            <div
              className="product-card-img w-full min-h-[180px] xmd:h-48 sm:h-52 slg:h-[220px] object-contain"
              style={{
                backgroundImage: `url(${datas?.image?.viewUrl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                margin: "auto",
              }}
            ></div>
          </Link>
          <div className=" px-2 msm:px-3 sm:px-[30px] sm:pb-[30px] relative">
            <Link href={`/products/${datas?._id}`}>
             {/* <div className="reviews flex space-x-[1px] mb-3">
                {Array.from(Array(datas.review), () => (
                  <span key={datas.review + Math.random()}>
                    <div className="flex text-yellow-400 text-xs msm:text-md">
                      {<icons.FaStar />}
                    </div>
                  </span>
                ))}
              </div>*/}
              <p className="title mb-2 text-xs sm:text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-qyellow cursor-pointer">
                {datas.title.slice(0, 22)}...
              </p>
            </Link>
            <p className="price">
              <span className="main-price text-qgray line-through font-600 text-sm sm:text-[18px] text-red-500">
                {datas.price}
              </span>
              <span className="offer-price text-qred font-600 text-sm sm:text-[18px] ml-2">
                {datas.offer_price}
              </span>
            </p>

            {/* Add to Cart and Buy Now Buttons */}
            <div className="flex space-x-[2px] msm:space-x-2 h-full">
              <Button
                disabled={isInCart}
                onClick={() => handleAddToCart(datas)}
                className={`bg-_orange/90 uppercase mb-3 h-6 lsm:h-7 sm:h-8 py-2 px-[3px] msm:px-2 w-full lsm:px-3 text-[9px] rounded-sm ${
                  !isInCart
                    ? "hover:bg-_orange"
                    : "bg-slate-500 opacity-40"
                } `}
                type="button"
              >
                <div className="flex items-center mx-auto w-full">
                  <span className='mx-auto'>Add To Cart</span>
                </div>
              </Button>

              <Button
                variant={"outline"}
                onClick={isInCart ? () => {} : () => handleAddToCart(datas)}
                className="h-6 lsm:h-7 sm:h-8 uppercase  px-[1px] sm:px-2 py-2  hover:bg-_orange border-[#FF4C06] rounded ease-in-out duration-500 transition-all w-full text-black hover:text-white p-2 font-normal text-[9px]"
              >
                <Link href={"/cart/checkout"}>Buy Now</Link>
              </Button>
            </div>
          </div>

          {/* quick-access-btns */}
          <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20 transition-all duration-300 ease-in-out">
            <a href="#">
              <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                {<icons.FavoriteBorder className="text-xl" />}
              </span>
            </a>
            <a href="#">
              <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                {<icons.MdZoomOutMapIcon className="text-xl" />}
              </span>
            </a>
            <a href="#">
              <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                {<icons.LiaSyncSolidIcons className="text-xl" />}
              </span>
            </a>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductCard;
