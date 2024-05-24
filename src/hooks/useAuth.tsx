import { useState, useEffect, useCallback } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import { useCustomerInfoQuery } from "@/store/api/auth/authApi";

interface TokenPayload {
  exp: number;
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [decodedToken, setDecodedToken]: any = useState({});
  const router = useRouter();
  //   customer information
  const { data }: any = useCustomerInfoQuery(decodedToken?.email);
  const customerInfo = data?.user;
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwt.decode(token) as TokenPayload;
        const isTokenExpired = decoded.exp * 1000 < Date.now();
        setDecodedToken(decoded);
        if (isTokenExpired) {
          logout();
        } else {
          setIsAuthenticated(true);
          const timer = setTimeout(() => {
            logout();
          }, decoded.exp * 1000 - Date.now());

          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.error("Failed to decode token:", error);
        logout();
      }
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/login");
  }, [router]);

  return {
    isAuthenticated,
    decodedToken,
    customerInfo,
    logout,
  };
};

export default useAuth;
