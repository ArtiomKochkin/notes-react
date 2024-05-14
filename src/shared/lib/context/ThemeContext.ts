import { Theme } from "@/shared/const";
import { createContext } from "react";

interface IThemeContext {
    theme?: Theme,
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContext>({});