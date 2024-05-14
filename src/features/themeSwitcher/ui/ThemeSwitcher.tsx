import { Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (setTheme) {
            (theme == Theme.LIGHT ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT))
        }
    }
 
    return (
        <button className="mx-4" onClick={toggleTheme}>
            {theme == Theme.LIGHT ? <MdLightMode/> : <MdDarkMode/>}
        </button>
    )
}

export default ThemeSwitcher;