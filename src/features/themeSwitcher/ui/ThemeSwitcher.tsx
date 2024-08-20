import React, { useCallback } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";

export const ThemeSwitcher = React.memo(() => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = useCallback(() => {
        if (setTheme) {
            const newTheme = (theme == Theme.LIGHT) ? Theme.DARK : Theme.LIGHT;
            
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        }
    }, [theme, setTheme]);
    
    return (
        <button className="ml-4" onClick={toggleTheme}>
            {theme == Theme.LIGHT 
                ? <MdLightMode title="Светлая тема"/> 
                : <MdDarkMode title="Темная тема"/>
            }
        </button>
    )
})