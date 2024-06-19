import { useContext } from "react";
import { useTheme } from "@/shared/lib/hooks";
import { SidebarContext } from "@/shared/lib/context";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { Theme } from "@/shared/const";
import { ISidebarItem } from "@/shared/types";

interface SidebarProps {
    items: ISidebarItem[]
}

export const Sidebar = ({ items }: SidebarProps) => {
    const { showSidebar } = useContext(SidebarContext);
    const { theme } = useTheme();
 
    return (
        <aside 
            className={`
                fixed left-0 top-[53px] min-h-screen z-10 text-lg pt-0 sm:pt-5 pr-2 lg:w-1/5 
                ${theme == Theme.LIGHT ? "bg-light" : "bg-dark"} min-h-[92vh] 
                ${showSidebar ? "w-full sm:w-1/5" : "w-14 lg:w-20 pr-0"}
            `}
        >
            {items.map(item => 
                <SidebarItem key={item.name} name={item.name} icon={item.icon} link={item.link}/>
            )}
        </aside>
    )
}

export default Sidebar;