import { Theme } from "@/shared/const";
import { SidebarContext } from "@/shared/lib/context";
import { useTheme, useWindowSize } from "@/shared/lib/hooks";
import { ISidebarItem } from "@/shared/types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const SidebarItem = ({ icon, name, link }: ISidebarItem) => {
    const { showSidebar, setShowSidebar } = useContext(SidebarContext);
    const { width } = useWindowSize();
    const { theme } = useTheme();
    const nav = useNavigate();
    
    const moveToAnotherPage = () => {
        if (width < 640 && setShowSidebar) {
            setShowSidebar(false);
        }
        nav(link);
    };

    return (
        <div 
            onClick={moveToAnotherPage}
            title={name}
            className={`
                flex-center py-4 pl-3 pr-1 cursor-pointer transition-colors sm:hover:bg-blue rounded-tr-3xl rounded-br-3xl sm:hover:shadow-custom 
                ${theme == Theme.LIGHT ? "text-dark sm:hover:text-light" : "text-light sm:hover:text-dark"}
            `}
        >
            { icon }
            {showSidebar && <span className="ml-2 leading-5">{name}</span>}
        </div>
    )
}