import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from "@/shared/const"
import { AuthContext } from "@/shared/lib/context";
import { ReactNode, useEffect, useState } from "react"

interface AuthProviderProps {
  children: ReactNode
}

const defaultValue = !!localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(defaultValue);

  const login = (token: string) => {
    localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, token);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    setIsAuth(false);
  };

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    setIsAuth(!!token);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}