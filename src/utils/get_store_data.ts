import { baseApiUrl } from "@/constants/endpoint";
import axios from "axios";

export const get_store_data=async()=>{
    let email:any=localStorage.getItem("email");
    let tokenn:any=localStorage.getItem('token');
    let res:any=[];
    if(email && tokenn){
        res=await axios.get(`${baseApiUrl}/cart/get-cart-by-email?email=${email}`,{headers:{
            'Authorization':`Bearer ${tokenn}`
          }}).then((response)=>{
              if(response.status===200){
                const data:any=response.data.response;
                if(data?.length){
                  return data;
                }else{
                  return [];
                }
              }
          }).catch(()=>{
            return [];
        })
    }
    return res;
}