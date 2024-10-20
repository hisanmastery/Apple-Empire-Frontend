import authBaseApi from "./authBaseAPI";
const order_url = "/order";
export const authApi = authBaseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    customerRegister: builder.mutation({
      query: (payload: any) => ({
        url: "/register",
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),
    customerLogin: builder.mutation({
      query: (payload: any) => ({
        url: "/login",
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),
    
    customerInfo: builder.query({
      query: (email: any) => ({
        url: `/get-single-customer/${email}`,
        method: "GET",
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});
export const {
  useCustomerRegisterMutation,
  useCustomerLoginMutation,
  useCustomerInfoQuery,
} = authApi;
