"use client";
import { icons } from "@/constants/icons";
import useAuth from "@/hooks/useAuth";
import {
  useAddToCartDeleteMutation,
  useUpdateCartMutation,
} from "@/store/features/cart/cartApi";
import { getStoredData } from "@/store/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { get_store_data } from "@/utils/get_store_data";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "@/hooks/useToaster";

interface Product {
  productId: string;
  _id: string;
  title: string;
  price: string | number;
  image: string;
  quantity: number;
}

export default function Cart({ className }: any) {
  const { storedCart } = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch();
  const [addToCartDelete] = useAddToCartDeleteMutation();
  const [updateCart] = useUpdateCartMutation();
  const { isAuthenticated } = useAuth();
  const showToast = useToaster();

  const refetchCartData = async () => {
    const data: any = await get_store_data();
    if (data?.length) {
      dispatch(getStoredData(data));
    }
  };

  const quantityUpdate = async (productData: Product, isIncrement: boolean) => {
    const quantity = isIncrement
      ? productData.quantity + 1
      : productData.quantity - 1;
    const unitPrice =
      typeof productData.price === "string"
        ? parseFloat(productData.price.replace(/,/g, ""))
        : productData.price;
    const newTotalPrice = unitPrice * quantity;

    const payload = {
      ...productData,
      quantity,
      totalPrice: newTotalPrice,
    };

    const res: any = await updateCart({ id: productData._id, payload });

    if (res?.data?.isSuccess) {
      showToast("success", res?.data?.message);
      await refetchCartData();
    } else {
      showToast("error", "Something went wrong, please try again");
    }
  };

  const handleIncrementQuantity = async (productData: Product) => {
    const token = localStorage.getItem("token");

    if (token && isAuthenticated) {
      await quantityUpdate(productData, true);
    } else {
      let product_items: Product[] = JSON.parse(
        localStorage.getItem("cart_items") || "[]"
      );

      const item_id = productData?.productId;
      if (item_id) {
        const updatedItems = product_items.map((item) => {
          if (item.productId === item_id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        localStorage.setItem("cart_items", JSON.stringify(updatedItems));
        dispatch(getStoredData(updatedItems));
      }
    }
  };

  const handleDecrementQuantity = async (item: Product) => {
    const token = localStorage.getItem("token");

    if (token && isAuthenticated) {
      await quantityUpdate(item, false);
    } else {
      const updatedCart = storedCart.map((cartItem: Product) => {
        if (cartItem.productId === item.productId) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });

      localStorage.setItem("cart_items", JSON.stringify(updatedCart));
      dispatch(getStoredData(updatedCart));
    }
  };

  const removeCart = async (product: Product) => {
    const id = product?.productId;
    const token = localStorage.getItem("token");

    if (token && isAuthenticated) {
      const res: any = await addToCartDelete({ id: product._id });

      if (res?.data?.isSuccess) {
        showToast("success", res.data.message);
        await refetchCartData();
      } else {
        showToast("error", res.error.data.message);
      }
    } else {
      const updatedCart = storedCart.filter(
        (item: Product) => item.productId !== id
      );
      localStorage.setItem("cart_items", JSON.stringify(updatedCart));
      dispatch(getStoredData(updatedCart));
    }
  };

  const ProductPrice = ({ product }: { product: Product }) => {
    if (!product?.price || !product.quantity) return null;

    const unitPrice =
      typeof product.price === "string"
        ? parseInt(product.price.replace(/,/g, ""), 10)
        : product.price;
    if (isNaN(unitPrice)) return null;

    const totalPrice = unitPrice * product.quantity;
    return <p>৳ {`${totalPrice}`}</p>;
  };

  const subTotal = storedCart?.reduce((acc: number, product: Product) => {
    if (!product?.price) return acc;

    const priceWithoutCommas =
      typeof product.price === "string"
        ? parseInt(product.price.replace(/,/g, ""), 10)
        : product.price;
    return acc + product.quantity * priceWithoutCommas;
  }, 0);

  return (
    <div
      style={{ boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)" }}
      className={`w-[90vw] ssm:w-[330px] bg-white border-t-[3px] ${
        className || ""
      }`}
    >
      <div className="w-full h-full">
        <div className="product-items h-[310px] overflow-y-scroll">
          <ul>
            {storedCart?.map((product: Product, index: number) => (
              <li
                key={index}
                className="px-2 py-3 border-[1px] mb-2 rounded-lg"
              >
                <div className="flex gap-3 justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <Image
                      height={50}
                      width={50}
                      src={product?.image}
                      className="w-12 h-12 object-cover rounded"
                      alt="products"
                    />
                    <div className="flex flex-col gap-1 max-w-[150px]">
                      <p className="text-sm truncate text-qblack">
                        {product?.title}
                      </p>
                      <ProductPrice product={product} />
                    </div>
                  </div>
                  <div
                    className="cursor-pointer mx-2 text-red-500 hover:text-red-700"
                    onClick={() => removeCart(product)}
                  >
                    <icons.crossIcon />
                  </div>
                </div>
                <div className="flex justify-center gap-4 items-center mt-2">
                  <button
                    onClick={() => handleDecrementQuantity(product)}
                    type="button"
                    className="text-base w-8 h-8 flex justify-center items-center rounded-full border border-qgray text-qblack"
                  >
                    -
                  </button>
                  <span className="text-qblack text-base">
                    {product?.quantity}
                  </span>
                  <button
                    onClick={() => handleIncrementQuantity(product)}
                    type="button"
                    className="text-base w-8 h-8 flex justify-center items-center rounded-full border border-qgray text-qblack"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full px-4 mt-4 mb-3">
          <div className="h-[1px] bg-[#F0F1F3]"></div>
        </div>
        <div className="px-5">
          <div className="total-equation flex justify-between items-center mb-5 px-5">
            <span className="text-[15px] font-semibold text-qblack">
              Subtotal
            </span>
            <span className="text-[15px] font-semibold text-qred ">
              TK. {subTotal || 0}
            </span>
          </div>
          <div className="w-full bg-_primary hover:bg-_secondary ease-in-out duration-300 transition-all rounded">
            <Link
              href="/cart"
              className="flex justify-center py-2 text-_white w-full"
            >
              View Cart
            </Link>
          </div>
          <div className="w-full bg-_primary hover:bg-_secondary ease-in-out duration-300 transition-all rounded mt-3">
            <Link
              href="/cart/checkout"
              className="flex justify-center w-full py-2 text-_white"
            >
              Checkout Now
            </Link>
          </div>
        </div>
        <div className="flex justify-center py-3">
          <p className="text-[13px] font-medium text-qgray">
            Get Return within <span className="text-qblack">30 days</span>
          </p>
        </div>
      </div>
    </div>
  );
}
