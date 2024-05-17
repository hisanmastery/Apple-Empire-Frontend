import InputQuantityCom from "@/components/carts/InputQuantityCom";
import { icons } from "@/constants/icons";
import { useAddToCartDeleteMutation } from "@/store/features/cart/cartApi";
import { addStoredCart } from "@/store/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function Cart({ className, type }: any) {
    const { storedCart } = useSelector((state: any) => state?.cart);
    const [addToCartDelete] = useAddToCartDeleteMutation();
    // Using reduce to calculate the total price
    const totalPrice = storedCart?.reduce((acc: number, product: any) => {
        return acc + product?.quantity * parseInt(product?.offer_price);
    }, 0);

    const dispatch = useDispatch();

    // handle increment quantity
    // const handleIncrement = (_id: string, newQuantity: number) => {
    //   const updatedStoredCart = storedCart.map((product: any) => {
    //     if (product._id === _id) {
    //       // If the product's _id matches the _id passed to the function,
    //       // update its quantity
    //       return { ...product, quantity: newQuantity };
    //     } else {
    //       // Otherwise, return the product unchanged
    //       return product;
    //     }
    //   });

    //   console.log(updatedStoredCart); // Check the updated cart in the console

    //   // Dispatch the action to update the cart in the Redux store
    //   dispatch(addStoredCart(updatedStoredCart));
    // };

    // handle decrement quantity
    // const handleDecrement = (index: any, newQuantity: number) => {
    //   const updatedStoredCart = JSON.parse(JSON.stringify(storedCart));
    //   updatedStoredCart[index].quantity = newQuantity;
    //   dispatch(addStoredCart(updatedStoredCart));
    // };
    // CartItem.jsx

    // handle increment quantity for a specific product
    const handleIncrement = async (productId: string, newQuantity: number) => {
        const updatedStoredCart = storedCart.map((product: any) => {
            if (product._id === productId) {
                return { ...product, quantity: newQuantity };
            }
            return product;
        });
        await dispatch(addStoredCart(updatedStoredCart));
    };

    const handleDecrement = async (productId: string, newQuantity: number) => {
        // Get the current stored cart
        const storedProduct = storedCart || [];

        // Find the product to decrement and update its quantity
        const updatedStoredCart = storedProduct.map((item: any) => {
            if (item._id === productId) {
                // Ensure the quantity doesn't go below 1
                const updatedQuantity = Math.max(1, newQuantity);
                return { ...item, quantity: updatedQuantity };
            }
            return item;
        });

        // Update the cart in the Redux store
        dispatch(addStoredCart(updatedStoredCart));
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

    // calculate total price
    const subTotal = storedCart?.reduce((acc: number, product: any) => {
        return acc + product?.quantity * parseInt(product?.price);
    }, 0);
    return (
        <>
            <div
                style={{ boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)" }}
                className={`w-[300px] bg-white border-t-[3px] ${type === 3 ? 'border-qh3-blue' : 'cart-wrappwer'}  ${className || ""
                    }`}
            >
                <div className="w-full h-full">
                    <div className="product-items h-[310px] overflow-y-scroll">
                        <ul>
                            {storedCart?.map((product: any, index: number) => (
                                <li className="w-full h-full flex justify-between" key={index}>
                                    <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                                        <div className="w-[65px] h-full">
                                            <Image
                                                width={50}
                                                height={50}
                                                src={product?.image}
                                                alt="images"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-1 h-full flex flex-col justify-center ">
                                            <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                                                {product?.title?.slice(0, 30)}...
                                            </p>

                                            <p className="price">
                                                <span className="offer-price text-qred font-600 text-[15px] ml-2">
                                                    {product?.price}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer ">
                                        <icons.crossIcon />
                                    </span>
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
                            <span className="text-[15px] font-500 text-qred ">TK. {subTotal}</span>
                        </div>
                        <div className="w-full px-5 bg-_secondary">
                            <Link href="/cart" className="flex justify-center py-2 text-_white w-full">
                                View Cart
                            </Link>
                        </div>
                        <div className="w-full bg-_primary mt-3">
                            <Link href="/checkout" className="flex justify-center w-full py-2 text-_white">
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