"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const withAuth = (WrappedComponent: any) => {
  const WithAuth = (props: any) => {
    const { isAuthenticated, loading, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.push("/login");
      }
    }, [isAuthenticated, loading, router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} logout={logout} />;
  };

  WithAuth.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithAuth;
};

export default withAuth;
