import { useContext } from "react";
import { useTheme } from "@/shared/lib/hooks";
import { SidebarContext } from "@/shared/lib/context";
import SidebarItem from "../SidebarItem/SidebarItem";
import { Theme } from "@/shared/const";
import { ISidebarItem } from "@/shared/types";

interface SidebarProps {
    items: ISidebarItem[]
}

const Sidebar = ({ items }: SidebarProps) => {
    const { showSidebar } = useContext(SidebarContext);
    const { theme } = useTheme();
 
    return (
        <aside className={`fixed left-0 top-14 z-10 text-lg pt-0 sm:pt-5 pr-2 lg:w-1/5 ${theme == Theme.LIGHT ? "bg-light" : "bg-dark"} border-r border-blue min-h-[92vh] ${showSidebar ? "w-4/5 sm:w-1/3" : "w-12 sm:w-14 lg:w-20 pr-0"}`}>
            {items.map(item => 
                <SidebarItem key={item.name} name={item.name} icon={item.icon} link={item.link}/>
            )}
        </aside>
    )
}

export default Sidebar;