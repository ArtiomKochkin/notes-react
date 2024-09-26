export interface IAuthRequest {
  username: string,
  password: string 
}

export interface ITokenResponse {
  accessToken: string,
  refreshToken: string
}

export interface IAuthContext {
  isAuth: boolean,
  login: (token: string) => void,
  logout: () => void,
}

export interface IError {
  status: string,
  data: {
    message: string
  }
}