import { baseApiUrl } from "@/constants/endpoint";
import axios from "axios";

export const get_store_data = async () => {
  let email: any = localStorage.getItem("email");
  let token: any = localStorage.getItem("token");
  let res: any = [];
  if (email && token) {
    res = await axios
      .get(`${baseApiUrl}/cart/get-cart-by-email?email=${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const data: any = response.data.response;
          if (data?.length) {
            return data;
          } else {
            return [];
          }
        }
      })
      .catch(() => {
        return [];
      });
  }
  return res;
};
export const get_wish_lists = async () => {
  let email: any = localStorage.getItem("email");
  let token: any = localStorage.getItem("token");
  let res: any = [];
  if (email && token) {
    res = await axios
      .get(`${baseApiUrl}/wishlist/get-all-wishlist?email=${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const data: any = response?.data?.wishlists;
          if (data?.length) {
            return data;
          } else {
            return [];
          }
        }
      })
      .catch(() => {
        return [];
      });
  }
  return res;
};
