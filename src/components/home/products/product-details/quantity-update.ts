// Define Product and Response types
interface Product {
  _id: string;
  productId: string;
  name: string;
  price: string | number;
  quantity: number;
}

interface UpdateCartResponse {
  data: {
    isSuccess: boolean;
    message: string;
  };
}

// Function to update the quantity of a product (increment or decrement)
const updateProductQuantity = async (
  productData: Product,
  isIncrement: boolean,
  updateCart: (params: {
    id: string;
    payload: Product;
  }) => Promise<UpdateCartResponse>,
  showToast: (type: "success" | "error", message: string) => void,
  refetchCartData: () => Promise<void>
) => {
  const quantity = isIncrement
    ? productData.quantity + 1
    : productData.quantity - 1;

  // Calculate unit price and total price
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
  try {
    const res: UpdateCartResponse = await updateCart({
      id: productData._id,
      payload,
    });

    if (res.data.isSuccess) {
      showToast("success", res.data.message);
      await refetchCartData();
    } else {
      showToast("error", "Something went wrong, please try again");
    }
  } catch (error) {
    showToast("error", "Error updating the cart");
  }
};

// Function to handle incrementing quantity, based on user authentication
export const handleIncrementQuantity = async (
  productData: Product,
  isIncrement: boolean,
  isAuthenticated: boolean,
  updateCart: any,
  showToast: (type: "success" | "error", message: string) => void,
  refetchCartData: () => Promise<void>,
  dispatch: any,
  getStoredData: (data: Product[]) => void
) => {
  const token = localStorage.getItem("token");

  if (token && isAuthenticated) {
    // Authenticated user case: Call reusable function
    await updateProductQuantity(
      productData,
      isIncrement,
      updateCart,
      showToast,
      refetchCartData
    );
  } else {
    // Non-authenticated user case: Update local storage
    let productItems: Product[] = JSON.parse(
      localStorage.getItem("cart_items") || "[]"
    );

    const itemId = productData.productId;
    if (itemId) {
      const updatedItems = productItems.map((item) => {
        if (item.productId === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      localStorage.setItem("cart_items", JSON.stringify(updatedItems));
      dispatch(getStoredData(updatedItems));
    }
  }
};
