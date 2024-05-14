import { useContext } from "react"
import { ThemeContext } from "../context"

export const useTheme = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error("Theme context Error");
    }

    return themeContext;
}