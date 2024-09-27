import { ReactNode, useState } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from "@/shared/const";
import { AuthContext } from "@/shared/lib/context";

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

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      <GoogleOAuthProvider clientId="38790867897-6gclrhs92fhlj799pmsk5aimk3lvd66h.apps.googleusercontent.com">
        {children}
      </GoogleOAuthProvider>
    </AuthContext.Provider>
  )
}