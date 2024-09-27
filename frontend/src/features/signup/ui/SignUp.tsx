import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "@/entities/auth";
import { AuthContext } from "@/shared/lib/context";
import { IAuthRequest, IError } from "@/shared/types";
import { Button, Error } from "@/shared/ui";

interface SignUpProps {
  credentials: IAuthRequest
}

export const SignUp = ({ credentials }: SignUpProps) => {
  const [register, { isLoading }] = useRegisterMutation();
  const [error, setError] = useState<string | null>(null);
  const authContext = useContext(AuthContext);
  const nav = useNavigate();

  const handleClick = async () => {
    try {
      const response = await register(credentials).unwrap();

      authContext?.login(response.accessToken);
      setError(null);
      nav("/");
    } catch (err) {
      setError((err as IError).data.message);
      console.error(`SignUp Error: ${err}`);
    }
  };
  
  return (
    <div className="flex flex-col gap-2 flex-grow">
      <Button onClick={handleClick} disabled={isLoading}>
        Зарегистрироваться
      </Button>
      <Error isError={!!error}>{error}</Error>
    </div>
  )
}