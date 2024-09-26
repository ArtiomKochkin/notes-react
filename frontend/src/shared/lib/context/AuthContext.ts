import { createContext } from "react"
import { IAuthContext } from "@/shared/types";

export const AuthContext = createContext<IAuthContext | null>(null);