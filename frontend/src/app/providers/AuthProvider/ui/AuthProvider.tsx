import { LOCAL_STORAGE_AUTH_KEY } from "@/shared/const"
import { AuthContext } from "@/shared/lib/context";
import { ReactNode, useEffect, useState } from "react"

interface AuthProviderProps {
  children: ReactNode
}

const defaultValue = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY) || "false");

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(defaultValue);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY) || "false");
    if (storedAuth !== isAuth) {
      setIsAuth(storedAuth);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  )
}