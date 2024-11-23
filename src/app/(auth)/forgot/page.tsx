import Forgot from "@/components/auth/forgot";
import React from "react";

// Dynamic Metadata function
export async function generateMetadata() {
  return {
    title: "Forgot Password - Apple Empire",
    description:
      "Reset your password securely. Enter your new password and regain access to your account.",
    keywords: "forgot password, reset password, account recovery",
    openGraph: {
      title: "Forgot Password - Apple Empire",
      description:
        "Reset your password securely. Enter your new password and regain access to your account.",
      siteName: "Apple Empire",
      type: "website",
    },
  };
}

const ForgotPage = ({ searchParams }: any) => {
  const token = searchParams?.token ?? "";

  return <Forgot token={token} />;
};

export default ForgotPage;
