import { LOCAL_STORAGE_THEME_KEY, Theme } from "@/shared/const";
import { ThemeContext } from "@/shared/lib/context";
import { ReactNode, useState } from "react";

interface ThemeProviderProps {
    children: ReactNode,
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
 
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}