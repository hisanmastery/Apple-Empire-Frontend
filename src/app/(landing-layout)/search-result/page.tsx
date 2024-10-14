import SearchResult from "@/components/search-result";
import React from "react";

const SearchResultPage = ({ searchParams }: any) => {
  return <SearchResult query={searchParams?.query} />;
};

export default SearchResultPage;
