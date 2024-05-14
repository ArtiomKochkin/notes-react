import { Theme } from "@/shared/const";
import { SidebarContext } from "@/shared/lib/context";
import { useTheme } from "@/shared/lib/hooks";
import { ReactNode, useContext } from "react";

interface SidebarItemProps {
    icon: ReactNode,
    name: string
}

const SidebarItem = ({ icon, name }: SidebarItemProps) => {
    const { showSidebar } = useContext(SidebarContext);
    const { theme } = useTheme();
 
    return (
        <div className={`flex-center py-4 pl-3 sm:pl-6 pr-1 cursor-pointer transition-colors hover:bg-blue rounded-tr-3xl rounded-br-3xl ${theme == Theme.LIGHT ? "text-dark hover:text-light" : "text-light hover:text-dark"}`}>
            { icon }
            {showSidebar && <span className="ml-2 leading-5">{name}</span>}
        </div>
    )
}

export default SidebarItem;