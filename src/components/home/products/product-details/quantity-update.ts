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

// Function to update the quantity of a product (increment or decrement) for authenticated users
const updateProductQuantity = async (
  productData: Product,
  isIncrement: boolean,
  updateCart: any,
  showToast: (type: "success" | "error", message: string) => void,
  refetchCartData: () => Promise<void>
) => {
  const currentQuantity = productData?.quantity ?? 1;
  const quantity = isIncrement
    ? currentQuantity + 1
    : Math.max(1, currentQuantity - 1);

  // Calculate unit price and new total price
  const unitPrice =
    typeof productData?.price === "string"
      ? parseFloat(productData?.price.replace(/,/g, ""))
      : productData?.price;
  const newTotalPrice = unitPrice * quantity;
  const payload = {
    ...productData,
    quantity,
    totalPrice: newTotalPrice,
  };
  try {
    const response: UpdateCartResponse = await updateCart({
      id: productData._id,
      payload,
    });

    if (response?.data?.isSuccess) {
      showToast("success", response?.data?.message);
      await refetchCartData(); // Refresh cart data after successful update
    } else {
      showToast("error", "Something went wrong, please try again");
    }
  } catch (error: any) {
    showToast(
      "error",
      error?.response?.data?.message || "Error updating the cart"
    );
  }
};

// Function to handle quantity updates, both for authenticated and guest users
export const handleIncrementQuantity = async (
  productData: Product,
  isIncrement: boolean,
  isAuthenticated: boolean,
  updateCart: any,
  showToast: (type: "success" | "error", message: string) => void,
  refetchCartData: () => Promise<void>,
  dispatch: (action: any) => void,
  getStoredData: (data: Product[]) => void
) => {
  const token = localStorage.getItem("token");
  if (token && isAuthenticated) {
    // Authenticated user: Use the API to update quantity
    await updateProductQuantity(
      productData,
      isIncrement,
      updateCart,
      showToast,
      refetchCartData
    );
  } else {
    // Guest user: Update quantity locally
    try {
      const productItems: Product[] = JSON.parse(
        localStorage.getItem("cart_items") || "[]"
      );

      const itemId = productData.productId;
      if (itemId) {
        // Update the product's quantity locally
        const updatedItems = productItems.map((item) => {
          if (item.productId === itemId) {
            const updatedQuantity = isIncrement
              ? item.quantity + 1
              : Math.max(1, item.quantity - 1); // Enforce minimum quantity of 1
            return { ...item, quantity: updatedQuantity };
          }
          return item;
        });

        // Save updated items to local storage and update Redux store
        localStorage.setItem("cart_items", JSON.stringify(updatedItems));
        dispatch(getStoredData(updatedItems));
      }
    } catch (error: any) {
      showToast("error", "An error occurred while updating your cart");
    }
  }
};
