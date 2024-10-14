import { baseApiUrl } from "@/constants/endpoint";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchBrandsSlice = createApi({
    reducerPath:"brand",
    baseQuery : fetchBaseQuery({
        baseUrl : `${baseApiUrl}/brand`
    }),
    tagTypes : ["brand"],
    endpoints : (builder) => ({})

})
export default fetchBrandsSlice;