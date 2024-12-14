import { useGetAllHeadlineQuery } from "@/store/features/ads-section/adsSectionApi";

const useHeadline = () => {
  const { data, isLoading } = useGetAllHeadlineQuery<any>({});

  return {
    data: data?.data,
    isLoading: isLoading,
  };
};

export default useHeadline;
