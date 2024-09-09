import { createContext } from "react"

export interface IAuthContext {
  isAuth: boolean,
  setIsAuth: (auth: boolean) => void
}

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  setIsAuth: () => {}
});