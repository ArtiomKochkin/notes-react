import { useRegisterMutation } from "@/entities/auth";
import { AuthContext } from "@/shared/lib/context";
import { IAuthRequest } from "@/shared/types";
import { Button, Error } from "@/shared/ui";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

interface SignUpProps {
  credentials: IAuthRequest
}

export const SignUp = ({ credentials }: SignUpProps) => {
  const [register, { isLoading, error }] = useRegisterMutation();
  const authContext = useContext(AuthContext);
  const nav = useNavigate();

  const handleClick = async () => {
    try {
      const response = await register(credentials).unwrap();
      authContext?.login(response.accessToken);
      nav("/");
    } catch (err) {
      console.error(`SignUp Error: ${err}`);
    }
  };
  
  return (
    <>
      <Button onClick={handleClick} disabled={isLoading}>
        Зарегистрироваться
      </Button>
      {error && <Error />}
    </>
  )
}