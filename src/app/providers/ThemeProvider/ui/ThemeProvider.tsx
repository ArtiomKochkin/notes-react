import { Theme } from "@/shared/const";
import { ThemeContext } from "@/shared/lib/context";
import { ReactNode, useState } from "react";

interface ThemeProviderProps {
    children: ReactNode,
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
 
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;