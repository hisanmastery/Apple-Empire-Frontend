import { createSlice } from "@reduxjs/toolkit";
import { 
    userSliceInterface 
} from "@/interfaces/store/userSlice";

const initialState:userSliceInterface={
    token:""
}

const userSlice=createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        updateUserToken:(state,action)=>{
            state.token=action.payload
        }
    }
})

export const {
    updateUserToken
}=userSlice.actions;

export default userSlice.reducer;
