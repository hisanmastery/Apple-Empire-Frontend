import { useState, useEffect, useCallback } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import { useCustomerInfoQuery } from "@/store/api/auth/authApi";

interface TokenPayload {
  exp: number;
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // New loading state
  const [decodedToken, setDecodedToken]: any = useState({});
  const router = useRouter();

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
          setLoading(false); // Stop loading when authenticated

          const timer = setTimeout(() => {
            logout();
          }, decoded.exp * 1000 - Date.now());

          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.error("Failed to decode token:", error);
        logout();
      }
    } else {
      setLoading(false); // Stop loading even if there's no token
    }
  });

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setLoading(false); // Stop loading when logged out
    router.push("/login");
  }, [router]);

  return {
    isAuthenticated,
    loading, // Return loading state
    decodedToken,
    customerInfo,
    logout,
  };
};

export default useAuth;
