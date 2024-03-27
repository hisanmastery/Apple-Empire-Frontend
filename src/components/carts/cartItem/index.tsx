import { TableRow } from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import InputQuantityCom from "../InputQuantityCom";
import { addStoredCart } from "@/store/features/cart/cartSlice";
import Link from "next/link";
import { icons } from "@/constants/icons";
import { Button } from "@/components/ui/button";
const CartItem = () => {
  const { storedCart } = useSelector((state: any) => state?.cart);
  // Using reduce to calculate the total price
  const totalPrice = storedCart?.reduce((acc: number, product: any) => {
    return acc + product?.quantity * parseInt(product?.offer_price);
  }, 0);

  const dispatch = useDispatch();

  // handle increment quantity
  const handleIncrement = (index: number, newQuantity: number) => {
    const updatedStoredCart = JSON.parse(JSON.stringify(storedCart));
    updatedStoredCart[index].quantity = newQuantity;
    dispatch(addStoredCart(updatedStoredCart));
  };

  // handle decrement quantity
  const handleDecrement = (index: number, newQuantity: number) => {
    const updatedStoredCart = JSON.parse(JSON.stringify(storedCart));
    updatedStoredCart[index].quantity = newQuantity;
    dispatch(addStoredCart(updatedStoredCart));
  };

  // handle remove  cart in right sidebar
  const removeCart = (id: any) => {
    const storedProduct = storedCart || [];
    const updatedCart = storedProduct.filter((item: any) => item.id !== id);
    dispatch(addStoredCart(updatedCart));
  };

  // calculate total price
  const subTotal = storedCart?.reduce((acc: number, product: any) => {
    console.log(acc, product);
    return acc + product?.quantity * parseInt(product?.offer_price);
  }, 0);
  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-semibold">Shopping Cart</h4>
        <h4 className="text-xl font-semibold">{storedCart?.length} Items</h4>
      </div>

      <div className="overflow-auto mb-10">
        {storedCart?.map((product: any, index: number) => (
          <div key={index} className="border p-1 mt-2">
            <div className="mt-4 flex justify-between items-center">
              <img src={product?.image} className="w-16" alt="" />
              <div className="font-medium w-2/3">
                <p>{product?.title.slice(0, 30)}...</p>
              </div>
              {/* pricing */}
              <div>
                {/* <div className="font-medium">{product?.quantity}</div> */}
                {/* <div className="font-medium">{product?.offer_price}</div> */}
                <div className="font-medium flex">
                  <p>{product?.offer_price * product?.quantity + "$"}</p>
                </div>
              </div>
              <div className="cursor-pointer  mx-2 font-bold text-red-500 hover:text-red-700">
                <p onClick={() => removeCart(product?.id)}>
                  <icons.crossIcon />
                </p>
              </div>
            </div>
            <div className="font-medium">
              <InputQuantityCom
                className={"border-none"}
                // buttonClass={"flex-col"}
                quantity={product.quantity ?? 1}
                onIncrement={(newQuantity: number) =>
                  handleIncrement(index, newQuantity)
                }
                onDecrement={(newQuantity: number) =>
                  handleDecrement(index, newQuantity)
                }
              />
            </div>
          </div>
        ))}
      </div>
      {/* footer */}
      <div className=" absolute bottom-0 left-0 right-0 flex">
        <Link href={"/cart"} className="w-full ">
          <button
            // onClick={() => handleCartClick()}
            className="bg-blue-400 text-white p-2 w-full "
          >
            Go to Checkout
          </button>
        </Link>
        <button className="bg-_primary text-white p-2 w-full ">
          Total: {subTotal} $
        </button>
      </div>
    </div>
  );
};

export default CartItem;
