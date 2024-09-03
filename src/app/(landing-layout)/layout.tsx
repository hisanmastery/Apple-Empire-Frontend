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
  addStoredCart 
} from "@/store/features/cart/cartSlice";
import axios from 'axios';
import { baseApiUrl } from "@/constants/endpoint";
import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar";
import NewNavbar from "@/components/shared/new-navbar";
import useAuth from "@/hooks/useAuth";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch=useDispatch();
  const {isAuthenticated,customerInfo}=useAuth();
  const {token}=useSelector((state:any)=>state.user);

  useEffect(()=>{
    if(isAuthenticated && customerInfo?.email){
      inital_loading(customerInfo?.email);
    }
  },[token,isAuthenticated]);

  const inital_loading=async(email:any)=>{
    const data=await get_store_data(email);
  }

  const get_store_data=async(email:any)=>{
    console.log('caledddd')
    const res=await axios.get(`${baseApiUrl}/get-cart-by-email?email=${email}`).then((response)=>{
        if(response.status===200){
          console.log(response);
        }
        console.log(response);
    }).catch(()=>{
      //console.log("Get Cart lists error");
      return [];
    })
  }

  return (
    <main>
      {/* <Navbar /> */}
      <NewNavbar />
      {/* <Carts /> */}
      {/* children content */}
      <div className="overflow-auto col-span-4 p-1">{children}</div>
      <Footer />
    </main>
  );
};

export default DashboardLayout;
