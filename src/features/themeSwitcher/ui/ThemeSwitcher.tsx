import { LOCAL_STORAGE_THEME_KEY, Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (setTheme) {
            const newTheme = (theme == Theme.LIGHT) ? Theme.DARK : Theme.LIGHT;
            
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        }
    }
 
    return (
        <button className="ml-4" onClick={toggleTheme}>
            {theme == Theme.LIGHT 
                ? <MdLightMode title="Светлая тема"/> 
                : <MdDarkMode title="Темная тема"/>
            }
        </button>
    )
}

export default ThemeSwitcher;