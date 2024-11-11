import Forgot from "@/components/auth/forgot";
import React, { FC } from "react";
interface ForgotPageProps {
  searchParams: {
    token?: string;
  };
}
const ForgotPage: React.FC<ForgotPageProps> = ({ searchParams }) => {
  const token = searchParams?.token;
  return <Forgot token={token} />;
};

export default ForgotPage;
