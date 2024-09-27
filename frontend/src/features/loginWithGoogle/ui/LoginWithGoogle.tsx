import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CredentialResponse, GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useLoginWithGoogleMutation } from '@/entities/auth';
import { AuthContext } from '@/shared/lib/context';
import { Error } from '@/shared/ui';

interface GoogleJwtPayload extends JwtPayload {
  name: string;
  email: string;
}

export const LoginWithGoogle = () => {
  const [loginUser] = useLoginWithGoogleMutation();
  const [error, setError] = useState<string | null>(null);
  const authContext = useContext(AuthContext);
  const nav = useNavigate();

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      const data = jwtDecode<GoogleJwtPayload>(credentialResponse.credential as string);
      const name = data.name;
      const response = await loginUser({name}).unwrap();
      
      authContext?.login(response.accessToken);
      setError(null);
      nav("/");
    } catch (err) {
      setError("Ошибка авторизации.");
      console.error(`Login Error: ${err}`);
    }
  };

  const handleError = () => {
    setError("Ошибка авторизации.");
    console.log("Ошибка авторизации.");
  };

  useGoogleOneTapLogin({
    onSuccess: credentialResponse => handleSuccess(credentialResponse),
    onError: () => handleError(),
  });

  return (
    <>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        type='icon'
        size='medium'
      />
      <Error
        isOAuth={true}
        isError={!!error}
      >
        {error}
      </Error>
    </>
  )
}