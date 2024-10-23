import fetchEmiSlice from "@/store/api/emi/emiSlice";

export const emiApi = fetchEmiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    //empaln api
    getEmiplan: builder.query({
      query: ({ bankName, price }: any) => ({
        url: `/get-all-emi`,
        method: "GET",
        params: { bankName, price },
      }),
    }),
    //emi list
    getAllEmiList: builder.query({
      query: ({ page, limit }: any) => ({
        url: `/get-all-emi-list`,
        method: "GET",
        params: { page, limit },
      }),
    }),
  }),
});
export const { useGetEmiplanQuery, useGetAllEmiListQuery } = emiApi;
