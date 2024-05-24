import authBaseApi from "./authBaseAPI";

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
  overrideExisting: false, // Ensure existing endpoints are not overridden
});
export const {
  useCustomerRegisterMutation,
  useCustomerLoginMutation,
  useCustomerInfoQuery,
} = authApi;
