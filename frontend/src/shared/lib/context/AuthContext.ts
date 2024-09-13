import { createContext } from "react"

export interface IAuthContext {
  isAuth: boolean,
  login: (token: string) => void,
  logout: () => void,
}

export const AuthContext = createContext<IAuthContext | null>(null);