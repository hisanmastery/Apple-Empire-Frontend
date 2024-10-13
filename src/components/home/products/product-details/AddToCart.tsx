import { get_store_data } from "@/utils/get_store_data";

interface ProductVariant {
  price?: number;
}

interface ProductImage {
  imageUrl: string;
}

interface ProductData {
  _id: string;
  name: string;
  variants?: ProductVariant[];
  offerPrice?: number;
  price?: number;
  image?: ProductImage;
}

interface CartItem {
  title: string;
  productId: string;
  price: number;
  image: string;
  quantity: number;
  email: string;
}

interface AddToCartResponse {
  data: {
    isSuccess: boolean;
  };
}

interface CustomerInfo {
  email: string;
}

// Reusable function to add an item to the cart
export const addToCart = async (
  productData: ProductData,
  dispatch: any,
  getStoredData: (data: CartItem[]) => void,
  isAuthenticated: boolean,
  customerInfo: CustomerInfo | null,
  addToCartItem: (payload: { payload: CartItem }) => Promise<AddToCartResponse>,
  showToast: (type: "success" | "error", message: string) => void
) => {
  const data = productData;
  const token = localStorage.getItem("token");
  if (token && isAuthenticated && customerInfo) {
    const payload: CartItem = {
      title: data.name,
      email: customerInfo?.email,
      productId: data._id,
      price: data.variants?.[0]?.price || data.offerPrice || data.price || 0,
      image: data.image?.imageUrl || "",
      quantity: 1,
    };

    try {
      const res = await addToCartItem({ payload });
      if (res?.data?.isSuccess) {
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
    } catch (error) {
      showToast("error", "Error adding to cart");
    }
  } else {
    let productItems: CartItem[] = JSON.parse(
      localStorage.getItem("cart_items") || "[]"
    );

    if (productItems?.length) {
      const itemId = data?._id;

      if (itemId) {
        const updatedItems = productItems.map((item) => {
          if (item.productId === itemId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        localStorage.setItem("cart_items", JSON.stringify(updatedItems));
        dispatch(getStoredData(updatedItems));
      } else {
        console.log("Product Id Not Found.");
      }
    } else {
      const payload: any = {
        title: data.name,
        productId: data._id,
        price: data.variants?.[0]?.price || data.offerPrice || data.price || 0,
        image: data.image?.imageUrl || "",
        quantity: 1,
      };

      const cartItems = [payload];
      localStorage.setItem("cart_items", JSON.stringify(cartItems));
      dispatch(getStoredData(cartItems));
    }
  }
};
