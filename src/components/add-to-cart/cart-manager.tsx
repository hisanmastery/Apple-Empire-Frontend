"use client";
import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getStoredData,
  storedWishLists,
} from "@/store/features/cart/cartSlice";
import useAuth from "@/hooks/useAuth";
import { useAddToCartMutation } from "@/store/features/cart/cartApi";
import { get_store_data, get_wish_lists } from "@/utils/get_store_data";

// CartSync component to handle cart and wishlist synchronization
const CartManager: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();
  const { token } = useSelector((state: any) => state.user);
  const [addToCartMutation] = useAddToCartMutation();

  // Function to load cart and wishlist data from backend
  const loadInitialData = useCallback(
    async (email: string, token: string) => {
      try {
        const cartData = await get_store_data();
        const wishlistData = await get_wish_lists();

        // Store cart data in Redux
        if (cartData?.length) {
          dispatch(getStoredData(cartData));
        } else {
          dispatch(getStoredData([]));
        }

        // Store wishlist data in Redux
        if (wishlistData?.length) {
          dispatch(storedWishLists(wishlistData));
        } else {
          dispatch(storedWishLists([]));
        }
      } catch (error) {
        console.error("Error loading initial cart or wishlist data:", error);
      }
    },
    [dispatch]
  );

  // Effect to sync local storage cart data with the backend if authenticated
  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    const userToken = localStorage.getItem("token");

    if (userEmail && userToken) {
      let localCartItems = JSON.parse(
        localStorage.getItem("cart_items") || "[]"
      );

      // Sync cart items from local storage to backend if they exist
      if (localCartItems?.length) {
        localCartItems = localCartItems.map((item: any) => ({
          ...item,
          email: userEmail,
        }));

        // Sync each local cart item to backend
        (async () => {
          try {
            await Promise.all(
              localCartItems.map(async (item: any) => {
                const payload = {
                  email: item.email,
                  title: item.title,
                  productId: item.productId,
                  price: item.price,
                  image: item.image,
                  quantity: item.quantity,
                };
                const response = await addToCartMutation({ payload });
                console.log("Cart item added:", response);
              })
            );
            localStorage.removeItem("cart_items"); // Clear local cart after sync
          } catch (error) {
            console.error("Error syncing cart items:", error);
          }
        })();
      } else {
        // If no local cart, load from backend
        loadInitialData(userEmail, userToken);
      }
    } else {
      // If no user is logged in, load cart data from local storage
      const localCartItems = JSON.parse(
        localStorage.getItem("cart_items") || "[]"
      );
      if (localCartItems?.length) {
        dispatch(getStoredData(localCartItems));
      } else {
        dispatch(getStoredData([]));
      }
    }
  }, [token, isAuthenticated, addToCartMutation, loadInitialData, dispatch]);

  return null; // only syncs cart and wishlist data
};

export default CartManager;
