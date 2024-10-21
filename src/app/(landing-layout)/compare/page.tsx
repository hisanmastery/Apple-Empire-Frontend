import CompareComponent from "@/components/compare";
import React from "react";

const ComparePage = ({ searchParams }: any) => {
  const firstPhoneId = searchParams?.p1;
  const secondPhoneId = searchParams?.p2;
  return (
    <CompareComponent
      firstPhoneId={firstPhoneId}
      secondPhoneId={secondPhoneId}
    />
  );
};

export default ComparePage;
