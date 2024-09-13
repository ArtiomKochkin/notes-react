import { useNavigate } from "react-router-dom";
import { Button, Error } from "@/shared/ui";
import { useLoginMutation } from "@/entities/auth";
import { IAuthRequest } from "@/shared/types";
import { useContext } from "react";
import { AuthContext } from "@/shared/lib/context";

interface LoginProps {
  credentials: IAuthRequest
}

export const Login = ({ credentials }: LoginProps) => {
  const [loginUser, { isLoading, error }] = useLoginMutation();
  const authContext = useContext(AuthContext);
  const nav = useNavigate();

  const handleClick = async () => {
    try {
      const response = await loginUser(credentials).unwrap();
      authContext?.login(response.accessToken);
      nav("/");
    } catch (err) {
      console.error(`Login Error: ${err}`);
    }
  };
  
  return (
    <>
      <Button onClick={handleClick} disabled={isLoading}>
        Войти
      </Button>
      {error && <Error/>}
    </>
  )
}