import fetchEmiSlice from "@/store/api/emi/emiSlice";

export const emiApi = fetchEmiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //empaln api 
    getEmiplan: builder.query({
      query: ({ bankName,price }: any) => ({
        url: `/get-all-emi`,
        method: "GET",
        params:{bankName,price}
      }),
    }),
  }),
});
export const {
useGetEmiplanQuery
} = emiApi;
