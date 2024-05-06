import { baseApiUrl } from "@/constants/endpoint";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fetchCheckoutSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseApiUrl}/order`,
    }),
    tagTypes: ["checkout"],
    reducerPath: "checkout",
    endpoints: (builder) => ({}),
});
export default fetchCheckoutSlice;