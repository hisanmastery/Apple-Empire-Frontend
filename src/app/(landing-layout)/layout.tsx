"use client";
import { 
  useEffect,
  useState 
} from "react";
import { 
  useSelector,
  useDispatch
} from "react-redux";
import Carts from "@/components/carts";
import { 
  addStoredCart,
  getStoredData
} from "@/store/features/cart/cartSlice";
import axios from 'axios';
import { baseApiUrl } from "@/constants/endpoint";
import { get_store_data } from "@/utils/get_store_data";
import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar";
import NewNavbar from "@/components/shared/new-navbar";
import Middlebar from "@/components/shared/new-navbar/MiddleNavbar";
import useAuth from "@/hooks/useAuth";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch=useDispatch();
  const {isAuthenticated,customerInfo}=useAuth();
  const {token}=useSelector((state:any)=>state.user);

  useEffect(()=>{
    let email:any=localStorage.getItem("email");
    let tokenn:any=localStorage.getItem('token');
    // email=JSON.parse(email);
    // tokenn=JSON.parse(token);

    if(email && tokenn){
      inital_loading(email,tokenn);
    }else{
      let cart_items:any=localStorage.getItem("cart_items");
      cart_items=JSON.parse(cart_items);
  
      if(cart_items?.length){
        dispatch(getStoredData(cart_items));
      }else{
        dispatch(getStoredData([]));
      }
    }
  },[token,isAuthenticated]);

  const inital_loading=async(email:any,tokenn:any)=>{
    const data:any=await get_store_data();
    //console.log("Res Data",data);
    if(data?.length){
      dispatch(getStoredData(data));
    }else{
      dispatch(getStoredData([]));
    }
  }

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
    <main>
      {/* <Navbar /> */}
      <Middlebar/>
      <NewNavbar />
      {/* <Carts /> */}
      {/* children content */}
      <div className="overflow-auto col-span-4 p-1">{children}</div>
      <Footer />
    </main>
  );
};

export default DashboardLayout;
