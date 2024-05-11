import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeSwitcher = () => {
    const [isLightTheme, setIsLightTheme] = useState(true);
 
    return (
        <button className="mx-4" onClick={() => setIsLightTheme(!isLightTheme)}>
            {isLightTheme ? <MdLightMode/> : <MdDarkMode/>}
        </button>
    )
}

export default ThemeSwitcher;