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
} from "@/store/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart({ className }: any) {
  const { storedCart } = useSelector((state: any) => state?.cart);
  console.log({ storedCart });
  const dispatch = useDispatch();
  const [addToCartDelete] = useAddToCartDeleteMutation();
  const [updateCart] = useUpdateCartMutation();
  const { customerInfo } = useAuth();
  const { data, refetch }: any = useGetEmailCartQuery({
    email: customerInfo?.email,
  });
  useEffect(() => {
    dispatch(addStoredCart(data?.response));
    refetch();
  }, [data?.response, dispatch, refetch]);
  // increment
  const handleIncrementQuantity = async (product: any) => {
    dispatch(incrementQuantity(product));
    const quantity = product.quantity + 1;
    // Parse the price string to a number
    const unitPrice = parseFloat(product.price.replace(/,/g, ""));
    // Calculate the new total price
    const newTotalPrice = unitPrice * quantity;
    const payload = {
      ...product,
      quantity: quantity,
      totalPrice: newTotalPrice,
    };
    const res: any = await updateCart({ id: product._id, payload });
    if (res?.data?.isSuccess) {
      refetch();
    }
  };
  // decrement
  const handleDecrementQuantity = async (product: any) => {
    if (product.quantity > 1) {
      dispatch(decrementQuantity(product));
      const quantity = product.quantity - 1;
      // Parse the price string to a number
      const unitPrice = parseFloat(product.price.replace(/,/g, ""));
      const newTotalPrice = unitPrice * quantity;
      // Calculate the new total price
      const payload = {
        ...product,
        quantity: quantity,
        totalPrice: newTotalPrice,
      };
      const res: any = await updateCart({ id: product._id, payload });
      if (res?.data?.isSuccess) {
        refetch();
      }
    }
  };
  // handle remove  cart in right sidebar
  const removeCart = async (id: any) => {
    const res: any = await addToCartDelete({ id });
    if (res?.data?.isSuccess) {
      const storedProduct = storedCart || [];
      const updatedCart = storedProduct.filter((item: any) => item._id !== id);
      dispatch(addStoredCart(updatedCart));
    }
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
        className={`w-[330px] bg-white border-t-[3px]  ${className || ""}`}
      >
        <div className="w-full h-full">
          <div className="product-items h-[310px] overflow-y-scroll">
            <ul>
              {storedCart?.map((product: any, index: number) => (
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
                      <p onClick={() => removeCart(product?._id)}>
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
          <div className="px-5">
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
          </div>
        </div>
      </div>
    </>
  );
}
