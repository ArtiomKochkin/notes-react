import { Theme } from "@/shared/const";
import { SidebarContext } from "@/shared/lib/context";
import { useTheme } from "@/shared/lib/hooks";
import { ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface SidebarItemProps {
    icon: ReactNode,
    name: string,
    link: string
}

const SidebarItem = ({ icon, name, link }: SidebarItemProps) => {
    const { showSidebar } = useContext(SidebarContext);
    const { theme } = useTheme();
    const nav = useNavigate();

    // const handleClick = () => nav(link);
 
    return (
        <div 
            onClick={() => nav(link)}
            className={`flex-center py-4 pl-3 sm:pl-6 pr-1 cursor-pointer transition-colors hover:bg-blue rounded-tr-3xl rounded-br-3xl ${theme == Theme.LIGHT ? "text-dark hover:text-light" : "text-light hover:text-dark"}`}
        >
            { icon }
            {showSidebar && <span className="ml-2 leading-5">{name}</span>}
        </div>
    )
}

export default SidebarItem;