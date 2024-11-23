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
  variants: object;
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
  showToast: (type: "success" | "error", message: string) => void,
  productsInfo: any
) => {
  const token = localStorage.getItem("token");
  console.log("hit");
  if (token && isAuthenticated && customerInfo) {
    // Authenticated user flow
    const payload: CartItem = {
      title: productData.name,
      email: customerInfo.email,
      productId: productData._id,
      variants: productsInfo,
      price:
        productData.variants?.[0]?.price ||
        productData.offerPrice ||
        productData.price ||
        0,
      image: productData.image?.imageUrl || "",
      quantity: 1,
    };

    try {
      const response = await addToCartItem({ payload });
      if (response?.data?.isSuccess) {
        showToast("success", "Added to cart successfully!");
        const updatedCart = await get_store_data();
        dispatch(getStoredData(updatedCart));
      } else {
        showToast("error", "Failed to add item to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart (authenticated):", error);
      showToast("error", "An error occurred while adding to the cart.");
    }
  } else {
    // Guest user flow
    try {
      const cartItems: CartItem[] = JSON.parse(
        localStorage.getItem("cart_items") || "[]"
      );

      const existingItemIndex = cartItems.findIndex(
        (item) => item.productId === productData._id
      );

      if (existingItemIndex !== -1) {
        // Update quantity for existing item
        cartItems[existingItemIndex].quantity += 1;
      } else {
        // Add new item to cart
        const newItem: CartItem = {
          title: productData.name,
          productId: productData._id,
          price:
            productData.variants?.[0]?.price ||
            productData.offerPrice ||
            productData.price ||
            0,
          image: productData.image?.imageUrl || "",
          quantity: 1,
          email: "", // For guest users, email is empty
          variants: productsInfo,
        };
        cartItems.push(newItem);
      }

      // Save to localStorage and update Redux state
      localStorage.setItem("cart_items", JSON.stringify(cartItems));
      dispatch(getStoredData(cartItems));
      showToast("success", "Added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart (guest):", error);
      showToast("error", "An error occurred while adding to the cart.");
    }
  }
};
