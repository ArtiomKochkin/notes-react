import { AuthContext } from "@/shared/lib/context";
import { useContext } from "react";
import { LOCAL_STORAGE_AUTH_KEY } from "@/shared/const";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui";

export const SignUp = () => {
  const { isAuth, setIsAuth} = useContext(AuthContext);
  const nav = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = () => {
    const newIsAuth = !isAuth;
    
    setIsAuth(newIsAuth);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(newIsAuth));
    nav(from, { replace: true });
  }
  
  return (
    <Button onSubmit={handleSubmit}>
      Зарегистрироваться
    </Button>
  )
}