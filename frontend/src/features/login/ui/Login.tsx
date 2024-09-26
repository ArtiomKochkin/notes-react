import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/entities/auth";
import { Button, Error } from "@/shared/ui";
import { IAuthRequest, IError } from "@/shared/types";
import { AuthContext } from "@/shared/lib/context";

interface LoginProps {
  credentials: IAuthRequest
}

export const Login = ({ credentials }: LoginProps) => {
  const [loginUser, { isLoading }] = useLoginMutation();
  const [error, setError] = useState<string | null>(null);
  const authContext = useContext(AuthContext);
  const nav = useNavigate();

  const handleClick = async () => {
    try {
      const response = await loginUser(credentials).unwrap();
      
      authContext?.login(response.accessToken);
      setError(null);
      nav("/");
    } catch (err) {
      setError((err as IError).data.message);
      console.error(`Login Error: ${err}`);
    }
  };
  
  return (
    <>
      <Button onClick={handleClick} disabled={isLoading}>
        Войти
      </Button>
      <Error isError={!!error}>{error}</Error>
    </>
  )
}