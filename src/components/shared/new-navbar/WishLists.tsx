import { icons } from "@/constants/icons";
import useAuth from "@/hooks/useAuth";
import {
  useAddToCartDeleteMutation,
  useGetEmailCartQuery,
  useUpdateCartMutation,
} from "@/store/features/cart/cartApi";
import {
  addStoredCart,
  decrementQuantity,
  incrementQuantity,
  getStoredData,
  storedWishLists
} from "@/store/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {get_store_data, get_wish_lists} from "@/utils/get_store_data";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "@/hooks/useToaster";
import axios from "axios";
import {baseApiUrl} from "@/constants/endpoint";

export default function WishLists({ className }: any) {
  const { storedCart,wishLists } = useSelector((state: any) => state?.cart);
  // console.log('storedCart',storedCart, 'wishLists', wishLists);
  const dispatch = useDispatch();
  const [addToCartDelete] = useAddToCartDeleteMutation();
  const [updateCart] = useUpdateCartMutation();
  const { isAuthenticated, customerInfo } = useAuth();
  const showToast = useToaster();
  

  // refetch cart
  const refetchCartData = async () => {
    const data: any = await get_store_data();
    console.log({ data });
    if (data?.length) {
      dispatch(getStoredData(data));
    }
  };
  const quantityUpdate = async (productData: any, isIncrement: boolean) => {
    const quantity = isIncrement
      ? productData.quantity + 1
      : productData.quantity - 1;
    // Parse the price string to a number
    const unitPrice = parseFloat(productData.price.replace(/,/g, ""));
    // Calculate the new total price
    const newTotalPrice = unitPrice * quantity;
    const payload = {
      ...productData,
      quantity: quantity,
      totalPrice: newTotalPrice,
    };
    const res: any = await updateCart({ id: productData._id, payload });
    if (res?.data?.isSuccess) {
      showToast("success", res?.data?.message);
      // refetch cart data
      await refetchCartData();
    } else {
      showToast("success", "Something wrong please try again");
    }
  };

  const handleIncrementQuantity = async (productData: any) => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    const post_object={
      _id: productData?._id,
      email:email,
      productId:productData?._id,
      image:productData?.image?.viewUrl,
      price: productData?.price,
      quantity: parseFloat(productData?.quantity) + 1,
      title: productData?.title,
    }
    console.log(post_object);
    axios.patch(`${baseApiUrl}/wishlist/update-wishlist/${productData?._id}`,post_object).then(async(res)=>{
      if (res.data.isSuccess) {
        const data: any = await get_wish_lists();
        if (data?.length) {
          //console.log("Dataa:::",data);
          dispatch(storedWishLists(data));
        } else {
          dispatch(storedWishLists([]));
        }
      } else {
        showToast("error", "Wish can't Increment");
      }
    }).catch((error)=>{
      showToast("error", "Wish can't Increment");
    })
    /*if (token && isAuthenticated) {
      await quantityUpdate(productData, true);
    }
    else {
      let product_items: any = localStorage.getItem("cart_items");

      product_items = JSON.parse(product_items);

      if (product_items?.length) {
        const item_id = productData?.productId;

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
            const email=localStorage.getItem("email");
            const payload = {
              email: email,
              title: productData?.title,
              productId: productData?.productId,
              price: productData?.price,
              image: productData?.image,
              quantity: 1,
            };
            let cart_items: any = [...product_items];
            cart_items = [...cart_items, payload];
            console.log('cart_items',cart_items);
            localStorage.setItem("cart_items", JSON.stringify(cart_items));
            dispatch(getStoredData(cart_items));
          }
        } else {
          console.log("Product Id Not Found.");
        }
      }
    }*/
  };
  // Decrement function
  const handleDecrementQuantity = async (item: any) => {
    const new_data = item;
    console.log("decremenet");

    const post_object={
      quantity: parseFloat(new_data?.quantity) - 1,
    }
    console.log(post_object);

    if(post_object?.quantity <= 0){
      const token=localStorage.getItem("token");
      await axios.delete(`${baseApiUrl}/wishlist/delete-wishlist/${new_data?._id}`,{headers:{
          'Authorization':`Bearer ${token}`
        }}).then(async(res)=>{
        if (res.data.isSuccess) {
          showToast("success", "Wish remove successfully");
          const data: any = await get_wish_lists();
          if (data?.length) {
            //console.log("Dataa:::",data);
            dispatch(storedWishLists(data));
          } else {
            dispatch(storedWishLists([]));
          }
        } else {
          showToast("error", "Wish can't Decrement");
        }
      }).catch((error)=>{
        showToast("error", "Wish can't Decrement");
      })
    }
    else{
      axios.patch(`${baseApiUrl}/wishlist/update-wishlist/${new_data?._id}`,post_object).then(async(res)=>{
        if (res.data.isSuccess) {
          const data: any = await get_wish_lists();
          if (data?.length) {
            //console.log("Dataa:::",data);
            dispatch(storedWishLists(data));
          } else {
            dispatch(storedWishLists([]));
          }
        } else {
          showToast("error", "Wish can't Decrement");
        }
      }).catch((error)=>{
        showToast("error", "Wish can't Decrement");
      })
    }

    /*if (new_data?.productId) {
      const token = localStorage.getItem("token");
      if (token && isAuthenticated) {
        await quantityUpdate(item, false);
      } else {
        const filter: any = storedCart.filter((d: any) => {
          return d?.productId == new_data?.productId;
        });

        if (filter?.length) {
          let lists: any = [];
          storedCart.map((d: any) => {
            if (d?.productId == new_data?.productId) {
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
    }*/
  };
 
  // handle remove  cart in right sidebar
  const removeWish = async (product: any) => {
    const id = product?.productId;
    const cartId = product?._id;
    const token=localStorage.getItem("token");
    await axios.delete(`${baseApiUrl}/wishlist/delete-wishlist/${product?._id}`,{headers:{
        'Authorization':`Bearer ${token}`
      }}).then(async(res)=>{
      if (res.data.isSuccess) {
        showToast("success", "Wish remove successfully");
        const data: any = await get_wish_lists();
        if (data?.length) {
          //console.log("Dataa:::",data);
          dispatch(storedWishLists(data));
        } else {
          dispatch(storedWishLists([]));
        }
      } else {
        showToast("error", "Wish can't add");
      }
    }).catch((error)=>{
      showToast("error", "Wish can't add");
    })
  };
  const ProductPrice = ({ product }: any) => {
    // Handle case where product, price, or quantity is undefined
    if (!product || !product.price || !product.quantity) return null;

    // Parse the price string to an integer after removing commas
    const unitPrice = parseInt(product.price.replace(/,/g, ""), 10);

    // Handle potential invalid price after parsing
    if (isNaN(unitPrice)) return null;

    // Calculate the total price
    const totalPrice = unitPrice * product.quantity;

    return <p>{`${totalPrice}$`}</p>;
  };

  // Calculate total price
  const subTotal = storedCart?.reduce((acc: number, product: any) => {
    if (!product?.price) return acc; // Skip if price is undefined or null
    const priceWithoutCommas = parseInt(product.price.replace(/,/g, ""), 10);
    return acc + product.quantity * priceWithoutCommas;
  }, 0);
  return (
    <>
      <div
        style={{ boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)" }}
        className={`  w-[80vw] msm:w-[330px] bg-white border-t-[3px]  ${className || ""}`}
      >
        <div className="w-full h-full">
          <div className="product-items h-[310px] overflow-y-scroll">
            <ul>
              {wishLists?.map((product: any, index: number) => (
                <li key={index} className="px-2 border-[1px] mb-2">
                  <div className="flex gap-2 justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Image
                        height={50}
                        width={50}
                        src={product?.image}
                        className="w-16"
                        alt="products"
                      />
                      <div className="flex gap-5">
                        <p className="text-sm">
                          {product?.title?.slice(0, 20)}...
                        </p>
                        <ProductPrice product={product} />
                      </div>
                    </div>
                    <div className="cursor-pointer mx-2 font-bold text-red-500 hover:text-red-700">
                      <p onClick={() => removeWish(product)}>
                        <icons.crossIcon />
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full mb-2">
                    <button
                      onClick={() => handleDecrementQuantity(product)}
                      type="button"
                      className="text-base mr-2 border-[1px] size-7"
                    >
                      -
                    </button>
                    <span className="text-qblack">{product?.quantity}</span>
                    <button
                      onClick={() => handleIncrementQuantity(product)}
                      type="button"
                      className="text-base size-7 ml-2 border-[1px]"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full px-4 mt-[20px] mb-[12px]">
            <div className="h-[1px] bg-[#F0F1F3]"></div>
          </div>
          {/* <div className="px-5">
            <div className="total-equation flex justify-between items-center mb-[28px] px-5">
              <span className="text-[15px] font-500 text-qblack">Subtotal</span>
              <span className="text-[15px] font-500 text-qred ">
                TK. {subTotal || 0}
              </span>
            </div>
            <div className="w-full px-5 bg-_primary hover:bg-_secondary rounded">
              <Link
                href="/cart"
                className="flex justify-center py-2 text-_white w-full"
              >
                View Cart
              </Link>
            </div>
            <div className="w-full bg-_primary hover:bg-_secondary rounded  mt-3">
              <Link
                href="/cart/checkout"
                className="flex justify-center w-full py-2 text-_white"
              >
                Checkout Now
              </Link>
            </div>
          </div>
          <div className="flex justify-center py-[15px]">
            <p className="text-[13px] font-500 text-qgray">
              Get Return within <span className="text-qblack">30 days</span>
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}
