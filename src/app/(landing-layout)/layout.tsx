"use client";
import {useCallback, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Carts from "@/components/carts";
import {
    addStoredCart,
    getStoredData,
    storedWishLists
} from "@/store/features/cart/cartSlice";
import axios from "axios";
import {baseApiUrl} from "@/constants/endpoint";
import {get_store_data, get_wish_lists} from "@/utils/get_store_data";
import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar";
import NewNavbar from "@/components/shared/new-navbar";
import Middlebar from "@/components/shared/new-navbar/MiddleNavbar";
import useAuth from "@/hooks/useAuth";
import {useAddToCartMutation} from "@/store/features/cart/cartApi";
import {Toaster} from "react-hot-toast";
import {FloatingWhatsApp} from "react-floating-whatsapp";

const DashboardLayout = ({children}: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const {isAuthenticated, customerInfo} = useAuth();
    const {token} = useSelector((state: any) => state.user);
    const [addToCartItem]: any = useAddToCartMutation();
    const inital_loading = useCallback(async (email: any, tokenn: any) => {
        const data: any = await get_store_data();
        // call get wish lists apii
        const wish_lists = await get_wish_lists();
        //console.log("Res Data",data);
        if (data?.length) {
            dispatch(getStoredData(data));
        } else {
            dispatch(getStoredData([]));
        }

        // stored wish lists data
        if (wish_lists?.length) {
            dispatch(storedWishLists(wish_lists));
        } else {
            dispatch(storedWishLists([]));
        }
    }, [dispatch]);
    useEffect(() => {
        let email: any = localStorage.getItem("email");
        let tokenn: any = localStorage.getItem("token");
        // email=JSON.parse(email);
        // tokenn=JSON.parse(token);
        if (email && tokenn) {
            let cart_items: any = localStorage.getItem("cart_items");
            cart_items = JSON.parse(cart_items);

            if (cart_items?.length) {
                // Add the customer email to each cart item
                cart_items = cart_items.map((item: any) => ({
                    ...item,
                    email: email,
                }));
                // Send each cart item to the backend via the addToCartItem API
                try {
                    cart_items.map(async (item: any) => {
                        const payload = {
                            email: item.email,
                            title: item.title,
                            productId: item.productId,
                            price: item.price,
                            image: item.image,
                            quantity: item.quantity,
                        };
                        // Call the API to add each item to the cart in the database
                        const res: any = await addToCartItem({payload});
                        console.log("Added to cart:", res);
                    });

                    //clear the cart after successful sync
                    localStorage.removeItem("cart_items");
                } catch (error) {
                    console.error("Error syncing cart items:", error);
                }
            } else {
                inital_loading(email, tokenn);
            }
        } else {
            let cart_items: any = localStorage.getItem("cart_items");
            cart_items = JSON.parse(cart_items);
            console.log(cart_items);
            if (cart_items?.length) {
                dispatch(getStoredData(cart_items));
            } else {
                dispatch(getStoredData([]));
            }
        }
    }, [token, isAuthenticated, addToCartItem, inital_loading, dispatch]);


    // const get_store_data=async(email:any,tokenn:any)=>{
    //   //console.log('caledddd')
    //   const res=await axios.get(`${baseApiUrl}/cart/get-cart-by-email?email=${email}`,{headers:{
    //     'Authorization':`Bearer ${tokenn}`
    //   }}).then((response)=>{
    //       if(response.status===200){
    //         const data:any=response.data.response;
    //         if(data?.length){
    //           return data;
    //         }else{
    //           return [];
    //         }
    //       }
    //   }).catch(()=>{
    //     return [];
    //   })

    //   return res;
    // }

    return (
        <main style={{backgroundColor: '##e9f4ff6e'}}>
            <Toaster/>
            {/* <Navbar /> */}
            <div className={'sticky top-0 z-[6]'}>
                <Middlebar/>
                <NewNavbar/>
            </div>
            {/* <Carts /> */}
            {/* children content */}
            <div className=" overflow-auto col-span-4 p-1" >{children}</div>
            <Footer/>
            <FloatingWhatsApp phoneNumber="01907252606" accountName="Apple Empire" avatar="https://appleempire.hisanmastery.com/assets/images/Apple-Empire-Logo.svg" />
        </main>
    );
};

export default DashboardLayout;
