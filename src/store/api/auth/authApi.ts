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
    resetPassword: builder.mutation({
      query: (payload: any) => ({
        url: "/forgot-password",
        method: "post",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),
    requestResetPassword: builder.mutation({
      query: (payload: any) => ({
        url: "/request-forgot-password",
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
  useResetPasswordMutation,
  useRequestResetPasswordMutation,
} = authApi;
